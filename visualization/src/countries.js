import * as THREE from "three";

const EARTH_RADIUS = 1.012;

/**
 * Convert longitude/latitude into a position on the Earth sphere.
 */
function latLonToVector3(latitude, longitude, radius = EARTH_RADIUS) {
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
 * Add one GeoJSON polygon ring to the boundary geometry.
 */
function addRing(ring, positions) {
    for (let i = 0; i < ring.length - 1; i++) {
        const [lon1, lat1] = ring[i];
        const [lon2, lat2] = ring[i + 1];

        // Avoid drawing an incorrect line across the entire globe
        // when a country crosses the ±180° longitude boundary.
        if (Math.abs(lon2 - lon1) > 180) {
            continue;
        }

        const point1 = latLonToVector3(lat1, lon1);
        const point2 = latLonToVector3(lat2, lon2);

        positions.push(
            point1.x, point1.y, point1.z,
            point2.x, point2.y, point2.z
        );
    }
}

/**
 * Add country boundaries to the Earth.
 */
export async function addCountryBoundaries(parent) {
    try {
        const response = await fetch("./data/countries.geojson");

        if (!response.ok) {
            throw new Error(
                `Could not load countries.geojson: ${response.status}`
            );
        }

        const geojson = await response.json();

        const positions = [];

        for (const feature of geojson.features) {
            if (!feature.geometry) {
                continue;
            }

            const geometry = feature.geometry;

            // Normal country polygon
            if (geometry.type === "Polygon") {
                for (const ring of geometry.coordinates) {
                    addRing(ring, positions);
                }
            }

            // Countries made of multiple polygons/islands
            else if (geometry.type === "MultiPolygon") {
                for (const polygon of geometry.coordinates) {
                    for (const ring of polygon) {
                        addRing(ring, positions);
                    }
                }
            }
        }

        const geometry = new THREE.BufferGeometry();

        geometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(positions, 3)
        );

        const material = new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.65
        });

        const countryLines = new THREE.LineSegments(
            geometry,
            material
        );

        countryLines.name = "CountryBoundaries";

        parent.add(countryLines);

        console.log(
            "Country boundaries loaded successfully."
        );

        return countryLines;

    } catch (error) {
        console.error(
            "Failed to load country boundaries:",
            error
        );
    }
}