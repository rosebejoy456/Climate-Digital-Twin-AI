import * as THREE from "three";

import {
    getCountryFeatureAt,
    clearCountryHighlight,
    highlightCountry
} from "./countries.js";

import {
    getClimateData,
    getClimateExplanation
} from "./climate.js";


// ==========================================
// Ernakulam District Data
// ==========================================

let districtData = null;
let districtPromise = null;


// ==========================================
// Load Kerala District GeoJSON
// ==========================================

async function loadDistrictData() {

    if (districtData) {
        return districtData;
    }

    if (!districtPromise) {

        districtPromise = fetch(
            "./data/district.geojson"
        )
        .then(response => {

            if (!response.ok) {

                throw new Error(
                    `Could not load district.geojson: ${response.status}`
                );

            }

            return response.json();

        })
        .then(data => {

            districtData = data;

            console.log(
                "Kerala district boundaries loaded successfully."
            );

            return data;

        });

    }

    return await districtPromise;
}


// ==========================================
// Check whether point is inside a polygon
// ==========================================

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

        const xi = ring[i][0];
        const yi = ring[i][1];

        const xj = ring[j][0];
        const yj = ring[j][1];

        const intersects =
            ((yi > latitude) !== (yj > latitude)) &&
            (
                longitude <
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


// ==========================================
// Check Polygon including holes
// ==========================================

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


    // Outer boundary
    if (
        !pointInRing(
            longitude,
            latitude,
            polygon[0]
        )
    ) {

        return false;
    }


    // Holes
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


// ==========================================
// Check MultiPolygon
// ==========================================

function pointInGeometry(
    longitude,
    latitude,
    geometry
) {

    if (!geometry) {
        return false;
    }


    // Polygon
    if (
        geometry.type === "Polygon"
    ) {

        return pointInPolygon(
            longitude,
            latitude,
            geometry.coordinates
        );
    }


    // MultiPolygon
    if (
        geometry.type === "MultiPolygon"
    ) {

        for (
            const polygon of geometry.coordinates
        ) {

            if (
                pointInPolygon(
                    longitude,
                    latitude,
                    polygon
                )
            ) {

                return true;
            }
        }
    }


    return false;
}


// ==========================================
// Find Ernakulam District
// ==========================================

async function getErnakulamFeatureAt(
    latitude,
    longitude
) {

    try {

        const data =
            await loadDistrictData();


        for (
            const feature of data.features
        ) {

            if (!feature.geometry) {
                continue;
            }


            const districtName =
                feature.properties?.DISTRICT ||
                feature.properties?.district ||
                "";


            // Only check Ernakulam
            if (
                districtName.toLowerCase() !==
                "ernakulam"
            ) {

                continue;
            }


            if (
                pointInGeometry(
                    longitude,
                    latitude,
                    feature.geometry
                )
            ) {

                return feature;
            }
        }


        return null;

    } catch (error) {

        console.error(
            "Failed to determine Ernakulam boundary:",
            error
        );

        return null;
    }
}


// ==========================================
// Highlight Ernakulam District
// ==========================================

function clearErnakulamHighlight(
    earth
) {

    const existing =
        earth.getObjectByName(
            "ErnakulamHighlight"
        );

    if (existing) {

        earth.remove(existing);

        existing.geometry?.dispose();
        existing.material?.dispose();
    }
}


function highlightErnakulam(
    earth,
    feature
) {

    clearErnakulamHighlight(
        earth
    );


    if (
        !feature ||
        !feature.geometry
    ) {

        return;
    }


    const positions = [];


    // ======================================
    // Add polygon ring
    // ======================================

    function addRing(ring) {

        for (
            let i = 0;
            i < ring.length - 1;
            i++
        ) {

            const [
                lon1,
                lat1
            ] = ring[i];

            const [
                lon2,
                lat2
            ] = ring[i + 1];


            const radius = 1.025;


            const lat1Rad =
                THREE.MathUtils.degToRad(
                    lat1
                );

            const lon1Rad =
                THREE.MathUtils.degToRad(
                    lon1
                );

            const lat2Rad =
                THREE.MathUtils.degToRad(
                    lat2
                );

            const lon2Rad =
                THREE.MathUtils.degToRad(
                    lon2
                );


            const point1 =
                new THREE.Vector3(
                    radius *
                    Math.cos(lat1Rad) *
                    Math.cos(lon1Rad),

                    radius *
                    Math.sin(lat1Rad),

                    -radius *
                    Math.cos(lat1Rad) *
                    Math.sin(lon1Rad)
                );


            const point2 =
                new THREE.Vector3(
                    radius *
                    Math.cos(lat2Rad) *
                    Math.cos(lon2Rad),

                    radius *
                    Math.sin(lat2Rad),

                    -radius *
                    Math.cos(lat2Rad) *
                    Math.sin(lon2Rad)
                );


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


    // ======================================
    // Polygon
    // ======================================

    if (
        feature.geometry.type ===
        "Polygon"
    ) {

        for (
            const ring of
            feature.geometry.coordinates
        ) {

            addRing(ring);
        }
    }


    // ======================================
    // MultiPolygon
    // ======================================

    else if (
        feature.geometry.type ===
        "MultiPolygon"
    ) {

        for (
            const polygon of
            feature.geometry.coordinates
        ) {

            for (
                const ring of polygon
            ) {

                addRing(ring);
            }
        }
    }


    if (
        positions.length === 0
    ) {

        return;
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

            color: 0x00ffff,

            transparent: true,

            opacity: 1.0

        });


    const highlight =
        new THREE.LineSegments(
            geometry,
            material
        );


    highlight.name =
        "ErnakulamHighlight";


    earth.add(highlight);
}


// ==========================================
// Setup Globe Interaction
// ==========================================

export function setupInteraction(
    camera,
    renderer,
    earth
) {

    const raycaster =
        new THREE.Raycaster();


    const mouse =
        new THREE.Vector2();


    let pointerDownX = 0;
    let pointerDownY = 0;

    let isDragging = false;


    // ======================================
    // Pointer Down
    // ======================================

    renderer.domElement.addEventListener(
        "pointerdown",
        (event) => {

            pointerDownX =
                event.clientX;

            pointerDownY =
                event.clientY;

            isDragging = false;
        }
    );


    // ======================================
    // Pointer Move
    // ======================================

    renderer.domElement.addEventListener(
        "pointermove",
        (event) => {

            const dx =
                event.clientX -
                pointerDownX;

            const dy =
                event.clientY -
                pointerDownY;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance > 5) {

                isDragging = true;
            }
        }
    );


    // ======================================
    // Click
    // ======================================

    renderer.domElement.addEventListener(
        "click",
        async (event) => {

            // Ignore clicks caused by dragging
            if (isDragging) {
                return;
            }


            // ==================================
            // Mouse coordinates
            // ==================================

            const rect =
                renderer.domElement
                    .getBoundingClientRect();


            mouse.x =
                (
                    (event.clientX -
                        rect.left) /
                    rect.width
                ) * 2 - 1;


            mouse.y =
                -(
                    (event.clientY -
                        rect.top) /
                    rect.height
                ) * 2 + 1;


            // ==================================
            // Raycast
            // ==================================

            raycaster.setFromCamera(
                mouse,
                camera
            );


            const intersections =
                raycaster.intersectObject(
                    earth,
                    false
                );


            if (
                intersections.length === 0
            ) {

                return;
            }


            // ==================================
            // Get clicked point
            // ==================================

            const point =
                intersections[0]
                    .point
                    .clone();


            // Convert world point
            // to Earth's local coordinates

            earth.worldToLocal(
                point
            );


            const radius =
                point.length();


            // ==================================
            // Latitude
            // ==================================

            const latitude =
                THREE.MathUtils.radToDeg(
                    Math.asin(
                        point.y / radius
                    )
                );


            // ==================================
            // Longitude
            // ==================================

            const longitude =
                THREE.MathUtils.radToDeg(
                    Math.atan2(
                        -point.z,
                        point.x
                    )
                );


            console.log(
                "Clicked location:",
                {
                    latitude,
                    longitude
                }
            );


            // ==================================
            // Country
            // ==================================

            const countryFeature =
                await getCountryFeatureAt(
                    latitude,
                    longitude
                );


            const countryName =
                countryFeature?.properties?.NAME ||
                "Unknown";


            // ==================================
            // Update location panel
            // ==================================

            const latElement =
                document.getElementById(
                    "lat"
                );


            const lonElement =
                document.getElementById(
                    "lon"
                );


            const countryElement =
                document.getElementById(
                    "country"
                );


            if (latElement) {

                latElement.textContent =
                    latitude.toFixed(2) +
                    "°";
            }


            if (lonElement) {

                lonElement.textContent =
                    longitude.toFixed(2) +
                    "°";
            }


            if (countryElement) {

                countryElement.textContent =
                    countryName;
            }


            // ==================================
            // Check actual Ernakulam polygon
            // ==================================

            const ernakulamFeature =
                await getErnakulamFeatureAt(
                    latitude,
                    longitude
                );


            // ==================================
            // ERNAKULAM SELECTED
            // ==================================

            if (
                ernakulamFeature
            ) {

                console.log(
                    "Ernakulam District selected."
                );


                if (countryElement) {

                    countryElement.textContent =
                        "Ernakulam, Kerala";
                }


                // Highlight actual
                // Ernakulam boundary

                highlightErnakulam(
                    earth,
                    ernakulamFeature
                );


                // ==================================
                // Get climate predictions
                // ==================================

                const climateData =
                    await getClimateData(
                        latitude,
                        longitude,
                        "Ernakulam"
                    );
                    const explanation = await getClimateExplanation();

console.log("SHAP explanation:", explanation);


                console.log(
                    "Ernakulam climate data:",
                    climateData
                );
                window.dispatchEvent(
    new CustomEvent("ernakulam-selected")
);


                // ==================================
                // Temperature
                // ==================================

                const temperatureElement =
                    document.getElementById(
                        "temperature"
                    );


                if (temperatureElement) {

                    temperatureElement.textContent =
                        climateData.temperature !== null
                            ? `${climateData.temperature.toFixed(2)} °C`
                            : "--";
                }


                // ==================================
                // Rainfall
                // ==================================

                const rainfallElement =
                    document.getElementById(
                        "rainfall"
                    );


                if (rainfallElement) {

                    rainfallElement.textContent =
                        climateData.rainfall !== null
                            ? `${climateData.rainfall.toFixed(2)} mm`
                            : "--";
                }


                // ==================================
                // Pressure
                // ==================================

                const pressureElement =
                    document.getElementById(
                        "pressure"
                    );


                if (pressureElement) {

                    pressureElement.textContent =
                        climateData.pressure !== null
                            ? `${climateData.pressure.toFixed(2)} hPa`
                            : "--";
                }


                // ==================================
                // LST
                // ==================================

                const lstElement =
                    document.getElementById(
                        "lst"
                    );


                if (lstElement) {

                    lstElement.textContent =
                        climateData.lst !== null
                            ? `${climateData.lst.toFixed(2)} °C`
                            : "--";
                }


                // ==================================
                // NDVI
                // ==================================

                const ndviElement =
                    document.getElementById(
                        "ndvi"
                    );


                if (ndviElement) {

                    ndviElement.textContent =
                        climateData.ndvi !== null
                            ? climateData.ndvi.toFixed(3)
                            : "--";
                }

            }


            // ==================================
            // NOT ERNAKULAM
            // ==================================

            else {

                console.log(
                    "Outside Ernakulam — Digital Twin not activated."
                );


                // Remove Ernakulam highlight

                clearErnakulamHighlight(
                    earth
                );


                // Remove country highlight

                clearCountryHighlight(
                    earth
                );


                // Clear climate values

                const climateElements = [
                    "temperature",
                    "rainfall",
                    "pressure",
                    "lst",
                    "ndvi"
                ];


                climateElements.forEach(
                    (id) => {

                        const element =
                            document.getElementById(
                                id
                            );


                        if (element) {

                            element.textContent =
                                "--";
                        }
                    }
                );
            }

        }
    );
}