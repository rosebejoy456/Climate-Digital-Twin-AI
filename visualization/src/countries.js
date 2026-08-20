import * as THREE from "three";

const EARTH_RADIUS = 1.012;

let countriesData = null;
let countriesPromise = null;


/**
 * Convert longitude/latitude into a position
 * on the Earth sphere.
 */
function latLonToVector3(
    latitude,
    longitude,
    radius = EARTH_RADIUS
) {

    const lat = THREE.MathUtils.degToRad(latitude);
    const lon = THREE.MathUtils.degToRad(longitude);

    const cosLat = Math.cos(lat);

    return new THREE.Vector3(
        radius * cosLat * Math.cos(lon),
        radius * Math.sin(lat),
        -radius * cosLat * Math.sin(lon)
    );
}


/**
 * Normalize longitude to the range [-180, 180].
 */
function normalizeLongitude(longitude) {

    while (longitude > 180) {
        longitude -= 360;
    }

    while (longitude < -180) {
        longitude += 360;
    }

    return longitude;
}


/**
 * Add one GeoJSON polygon ring
 * to the boundary geometry.
 */
function addRing(ring, positions) {

    for (let i = 0; i < ring.length - 1; i++) {

        const [lon1, lat1] = ring[i];
        const [lon2, lat2] = ring[i + 1];

        // Avoid drawing incorrect lines across
        // the entire globe at the ±180° boundary.
        if (Math.abs(lon2 - lon1) > 180) {
            continue;
        }

        const point1 =
            latLonToVector3(lat1, lon1);

        const point2 =
            latLonToVector3(lat2, lon2);

        positions.push(
            point1.x,
            point1.y,
            point1.z,

            point2.x,
            point2.y,
            point2.z
        );
    }
}


/**
 * Add country boundaries to the Earth.
 */
export async function addCountryBoundaries(parent) {

    try {

        const response =
            await fetch("./data/countries.geojson");

        if (!response.ok) {

            throw new Error(
                `Could not load countries.geojson: ${response.status}`
            );
        }

        const geojson =
            await response.json();

        const positions = [];


        for (const feature of geojson.features) {

            if (!feature.geometry) {
                continue;
            }

            const geometry =
                feature.geometry;


            // -----------------------------
            // Polygon
            // -----------------------------

            if (geometry.type === "Polygon") {

                for (
                    const ring of geometry.coordinates
                ) {

                    addRing(
                        ring,
                        positions
                    );
                }
            }


            // -----------------------------
            // MultiPolygon
            // -----------------------------

            else if (
                geometry.type === "MultiPolygon"
            ) {

                for (
                    const polygon of geometry.coordinates
                ) {

                    for (
                        const ring of polygon
                    ) {

                        addRing(
                            ring,
                            positions
                        );
                    }
                }
            }
        }


        const geometry =
            new THREE.BufferGeometry();

        geometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(
                positions,
                3
            )
        );


        const material =
            new THREE.LineBasicMaterial({

                color: 0xffffff,

                transparent: true,

                opacity: 0.65
            });


        const countryLines =
            new THREE.LineSegments(
                geometry,
                material
            );


        countryLines.name =
            "CountryBoundaries";


        parent.add(countryLines);


        console.log(
            "Country boundaries loaded successfully."
        );


        return countryLines;

    }

    catch (error) {

        console.error(
            "Failed to load country boundaries:",
            error
        );
    }
}


/**
 * Check whether a point is inside
 * a GeoJSON polygon ring.
 *
 * Longitude is adjusted relative to
 * the clicked longitude so countries near
 * ±180° are handled more reliably.
 */
function pointInRing(
    longitude,
    latitude,
    ring
) {

    let inside = false;


    for (
        let i = 0, j = ring.length - 1;
        i < ring.length;
        j = i++
    ) {

        let xi =
            normalizeLongitude(
                ring[i][0] - longitude
            );

        let yi =
            ring[i][1];


        let xj =
            normalizeLongitude(
                ring[j][0] - longitude
            );

        let yj =
            ring[j][1];


        const intersects =
            ((yi > latitude) !== (yj > latitude)) &&
            (
                0 <
                (xj - xi) *
                (latitude - yi) /
                (yj - yi) +
                xi
            );


        if (intersects) {

            inside = !inside;
        }
    }


    return inside;
}


/**
 * Check whether a point is inside
 * a GeoJSON polygon.
 */
function pointInPolygon(
    longitude,
    latitude,
    polygon
) {

    if (
        !polygon ||
        polygon.length === 0
    ) {

        return false;
    }


    // First ring = outer boundary
    if (
        !pointInRing(
            longitude,
            latitude,
            polygon[0]
        )
    ) {

        return false;
    }


    // Remaining rings = holes
    for (
        let i = 1;
        i < polygon.length;
        i++
    ) {

        if (
            pointInRing(
                longitude,
                latitude,
                polygon[i]
            )
        ) {

            return false;
        }
    }


    return true;
}


/**
 * Calculate approximate distance
 * from a point to a polygon ring.
 *
 * Used only when the click is very close
 * to a country boundary.
 */
function distanceToRing(
    longitude,
    latitude,
    ring
) {

    let minimumDistance =
        Infinity;


    for (
        let i = 0;
        i < ring.length - 1;
        i++
    ) {

        const x1 =
            normalizeLongitude(
                ring[i][0] - longitude
            );

        const y1 =
            ring[i][1] - latitude;


        const x2 =
            normalizeLongitude(
                ring[i + 1][0] - longitude
            );

        const y2 =
            ring[i + 1][1] - latitude;


        const dx = x2 - x1;
        const dy = y2 - y1;


        const lengthSquared =
            dx * dx + dy * dy;


        let t = 0;


        if (lengthSquared > 0) {

            t =
                -(x1 * dx + y1 * dy) /
                lengthSquared;

            t =
                Math.max(
                    0,
                    Math.min(1, t)
                );
        }


        const closestX =
            x1 + t * dx;

        const closestY =
            y1 + t * dy;


        const distance =
            Math.sqrt(
                closestX * closestX +
                closestY * closestY
            );


        minimumDistance =
            Math.min(
                minimumDistance,
                distance
            );
    }


    return minimumDistance;
}


/**
 * Find the country containing
 * a latitude/longitude point.
 */
/**
 * Find the exact GeoJSON country feature
 * containing a latitude/longitude point.
 *
 * Returns the actual feature instead of only
 * returning the country name.
 */
export async function getCountryFeatureAt(
    latitude,
    longitude
) {

    try {

        // --------------------------------
        // Load GeoJSON once
        // --------------------------------

        if (!countriesData) {

            if (!countriesPromise) {

                countriesPromise =
                    fetch("./data/countries.geojson")
                        .then(response => {

                            if (!response.ok) {

                                throw new Error(
                                    `Could not load countries.geojson: ${response.status}`
                                );

                            }

                            return response.json();

                        })
                        .then(data => {

                            countriesData = data;

                            return data;

                        });

            }

            await countriesPromise;
        }


        // Keep longitude inside -180° to +180°
        longitude =
            normalizeLongitude(longitude);


        // ========================================
        // PASS 1
        // Exact polygon detection
        // ========================================

        for (
            const feature of countriesData.features
        ) {

            if (!feature.geometry) {
                continue;
            }


            const geometry =
                feature.geometry;


            // -----------------------------
            // Polygon
            // -----------------------------

            if (
                geometry.type === "Polygon"
            ) {

                if (
                    pointInPolygon(
                        longitude,
                        latitude,
                        geometry.coordinates
                    )
                ) {

                    return feature;
                }
            }


            // -----------------------------
            // MultiPolygon
            // -----------------------------

            else if (
                geometry.type === "MultiPolygon"
            ) {

                for (
                    const polygon of
                    geometry.coordinates
                ) {

                    if (
                        pointInPolygon(
                            longitude,
                            latitude,
                            polygon
                        )
                    ) {

                        return feature;
                    }
                }
            }
        }


        // ========================================
        // PASS 2
        // Small border tolerance
        // ========================================

        let closestFeature = null;

        let closestDistance =
            Infinity;


        const BORDER_TOLERANCE = 0.30;


        for (
            const feature of countriesData.features
        ) {

            if (!feature.geometry) {
                continue;
            }


            const geometry =
                feature.geometry;


            // -----------------------------
            // Polygon
            // -----------------------------

            if (
                geometry.type === "Polygon"
            ) {

                for (
                    const ring of
                    geometry.coordinates
                ) {

                    const distance =
                        distanceToRing(
                            longitude,
                            latitude,
                            ring
                        );


                    if (
                        distance <
                        closestDistance &&

                        distance <=
                        BORDER_TOLERANCE
                    ) {

                        closestDistance =
                            distance;

                        closestFeature =
                            feature;
                    }
                }
            }


            // -----------------------------
            // MultiPolygon
            // -----------------------------

            else if (
                geometry.type === "MultiPolygon"
            ) {

                for (
                    const polygon of
                    geometry.coordinates
                ) {

                    for (
                        const ring of polygon
                    ) {

                        const distance =
                            distanceToRing(
                                longitude,
                                latitude,
                                ring
                            );


                        if (
                            distance <
                            closestDistance &&

                            distance <=
                            BORDER_TOLERANCE
                        ) {

                            closestDistance =
                                distance;

                            closestFeature =
                                feature;
                        }
                    }
                }
            }
        }


        // Return the exact closest feature
        // when the click is close enough.
        return closestFeature;

    }

    catch (error) {

        console.error(
            "Failed to determine country feature:",
            error
        );

        return null;
    }
}


/**
 * Backwards-compatible country name lookup.
 *
 * Other parts of the application can still call
 * getCountryAt() while the new system uses
 * getCountryFeatureAt().
 */
export async function getCountryAt(
    latitude,
    longitude
) {

    const feature =
        await getCountryFeatureAt(
            latitude,
            longitude
        );


    if (!feature) {
        return null;
    }


    return (
        feature.properties?.NAME ||
        "Unknown country"
    );
}
export function clearCountryHighlight(parent) {

    const existing =
        parent.getObjectByName("SelectedCountry");

    if (existing) {
        parent.remove(existing);
    }
}
export async function highlightCountry(parent, countryFeature) {

    try {

        // Remove the previous highlight first
        clearCountryHighlight(parent);

        // Make sure we actually received a GeoJSON feature
        if (
            !countryFeature ||
            countryFeature.type !== "Feature" ||
            !countryFeature.geometry
        ) {

            console.log(
                "Could not create highlight for:",
                countryFeature
            );

            return null;
        }

        const positions = [];

        const geometry =
            countryFeature.geometry;


        // ========================================
        // Polygon
        // ========================================

        if (geometry.type === "Polygon") {

            for (const ring of geometry.coordinates) {

                addRing(
                    ring,
                    positions
                );

            }
        }


        // ========================================
        // MultiPolygon
        // ========================================

        else if (geometry.type === "MultiPolygon") {

            for (const polygon of geometry.coordinates) {

                for (const ring of polygon) {

                    addRing(
                        ring,
                        positions
                    );

                }

            }
        }


        // ========================================
        // Unsupported geometry
        // ========================================

        else {

            console.log(
                "Unsupported country geometry:",
                geometry.type
            );

            return null;
        }


        // ========================================
        // Make sure geometry was created
        // ========================================

        if (positions.length === 0) {

            console.log(
                "Could not create highlight for:",
                countryFeature
            );

            return null;
        }


        // ========================================
        // Highlight geometry
        // ========================================

        const highlightGeometry =
            new THREE.BufferGeometry();

        highlightGeometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(
                positions,
                3
            )
        );


        // ========================================
        // Highlight material
        // ========================================

        const material =
            new THREE.LineBasicMaterial({

                color: 0x00ffff,

                transparent: true,

                opacity: 1.0

            });


        // ========================================
        // Create highlight
        // ========================================

        const countryHighlight =
            new THREE.LineSegments(
                highlightGeometry,
                material
            );


        countryHighlight.name =
            "SelectedCountry";


        // Put highlight slightly above Earth
        countryHighlight.scale.setScalar(
            1.001
        );


        parent.add(
            countryHighlight
        );


        const countryName =
            countryFeature.properties?.NAME ||
            "Unknown country";


        console.log(
            "Highlighted country:",
            countryName
        );


        return countryHighlight;


    } catch (error) {

        console.error(
            "Failed to highlight country:",
            error
        );

        return null;
    }
}