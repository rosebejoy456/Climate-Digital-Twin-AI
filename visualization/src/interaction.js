import * as THREE from "three";

import {
    getCountryFeatureAt,
    clearCountryHighlight,
    highlightCountry
} from "./countries.js";

import {
    getClimateData
} from "./climate.js";

let ernakulamFeaturePromise = null;

function pointInRing(longitude, latitude, ring) {
    let inside = false;

    for (let index = 0, previous = ring.length - 1; index < ring.length; previous = index++) {
        const [currentLongitude, currentLatitude] = ring[index];
        const [previousLongitude, previousLatitude] = ring[previous];
        const crossesLatitude =
            (currentLatitude > latitude) !== (previousLatitude > latitude);

        if (
            crossesLatitude &&
            longitude <
                ((previousLongitude - currentLongitude) *
                    (latitude - currentLatitude)) /
                    (previousLatitude - currentLatitude) +
                    currentLongitude
        ) {
            inside = !inside;
        }
    }

    return inside;
}

function pointInGeometry(longitude, latitude, geometry) {
    const polygons =
        geometry.type === "Polygon"
            ? [geometry.coordinates]
            : geometry.type === "MultiPolygon"
                ? geometry.coordinates
                : [];

    return polygons.some((polygon) =>
        pointInRing(longitude, latitude, polygon[0]) &&
        !polygon.slice(1).some((hole) => pointInRing(longitude, latitude, hole))
    );
}

async function getErnakulamFeature() {
    if (!ernakulamFeaturePromise) {
        ernakulamFeaturePromise = fetch("./data/district.geojson")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Could not load district boundary: ${response.status}`);
                }

                return response.json();
            })
            .then((data) =>
                data.features.find(
                    (feature) =>
                        feature.properties?.DISTRICT?.toLowerCase() === "ernakulam"
                )
            );
    }

    return ernakulamFeaturePromise;
}

function isNearErnakulam(latitude, longitude) {
    // This fallback keeps the interaction usable while the detailed boundary
    // loads and provides a forgiving click target around the district.
    return (
        latitude >= 9.75 &&
        latitude <= 10.35 &&
        longitude >= 76.05 &&
        longitude <= 76.80
    );
}


export function setupInteraction(
    camera,
    renderer,
    earth
) {

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();


    renderer.domElement.addEventListener(
        "click",
        async (event) => {

            const rect =
                renderer.domElement.getBoundingClientRect();


            mouse.x =
                ((event.clientX - rect.left) /
                    rect.width) * 2 - 1;

            mouse.y =
                -((event.clientY - rect.top) /
                    rect.height) * 2 + 1;


            raycaster.setFromCamera(
                mouse,
                camera
            );


            const intersects =
                raycaster.intersectObject(
                    earth,
                    false
                );


            if (!intersects.length) {
                return;
            }


            // Get clicked point on Earth
            const point =
                intersects[0].point.clone();


            // Convert world coordinates
            // into Earth's local coordinates
            earth.worldToLocal(point);


            const radius =
                earth.geometry.parameters.radius;


            // Latitude
            const latitude =
                THREE.MathUtils.radToDeg(
                    Math.asin(
                        point.y / radius
                    )
                );


            // Longitude
            const longitude =
                THREE.MathUtils.radToDeg(
                    Math.atan2(
                        -point.z,
                        point.x
                    )
                );


            console.log(
                "Selected coordinates:",
                {
                    latitude,
                    longitude
                }
            );


            // Update coordinate display
            const latElement =
                document.getElementById("lat");

            const lonElement =
                document.getElementById("lon");


            if (latElement) {
                latElement.textContent =
                    latitude.toFixed(4) + "°";
            }


            if (lonElement) {
                lonElement.textContent =
                    longitude.toFixed(4) + "°";
            }

            // Resolve the local-terrain action before any climate API call.
            // A failed remote API must never prevent the Digital Twin view
            // from opening.
            let ernakulamFeature = null;

            try {
                ernakulamFeature = await getErnakulamFeature();
            } catch (error) {
                console.warn(
                    "Could not load district.geojson. Using coordinate fallback.",
                    error
                );
            }

            const isInsideDistrict =
            ernakulamFeature &&
            pointInGeometry(
                longitude,
                latitude,
                ernakulamFeature.geometry
    );

            if (isInsideDistrict || isNearErnakulam(latitude, longitude)) {
                window.dispatchEvent(
                    new CustomEvent("ernakulam-selected", {
                        detail: { latitude, longitude }
                    })
                );

                return;
            }


            // Find country
            const countryFeature =
                await getCountryFeatureAt(
                    latitude,
                    longitude
                );


            const country =
                countryFeature?.properties?.NAME ||
                null;


            const countryElement =
                document.getElementById("country");


            if (countryElement) {
                countryElement.textContent =
                    country || "Unknown";
            }


            // Highlight selected country
            if (countryFeature) {

                highlightCountry(
                    earth,
                    countryFeature
                );

            } else {

                clearCountryHighlight(
                    earth
                );

            }

            // Reset climate dashboard
            setClimateValue(
                "temperature",
                "-- °C"
            );

            setClimateValue(
                "rainfall",
                "-- mm"
            );

            setClimateValue(
                "pressure",
                "-- hPa"
            );

            setClimateValue(
                "lst",
                "-- °C"
            );

            setClimateValue(
                "ndvi",
                "--"
            );


            /*
             * Climate API
             *
             * The current backend contains
             * Ernakulam climate predictions.
             */

            if (!country) {
                return;
            }


            console.log(
                "Loading climate data..."
            );


            const climateData =
                await getClimateData(
                    latitude,
                    longitude,
                    country
                );


            console.log(
                "Climate data received:",
                climateData
            );


            // Update dashboard
            if (
                climateData.temperature !== null
            ) {

                setClimateValue(
                    "temperature",
                    climateData.temperature.toFixed(2) +
                    " °C"
                );

            }


            if (
                climateData.rainfall !== null
            ) {

                setClimateValue(
                    "rainfall",
                    climateData.rainfall.toFixed(2) +
                    " mm"
                );

            }


            if (
                climateData.pressure !== null
            ) {

                setClimateValue(
                    "pressure",
                    climateData.pressure.toFixed(2) +
                    " hPa"
                );

            }


            if (
                climateData.lst !== null
            ) {

                setClimateValue(
                    "lst",
                    climateData.lst.toFixed(2) +
                    " °C"
                );

            }


            if (
                climateData.ndvi !== null
            ) {

                setClimateValue(
                    "ndvi",
                    climateData.ndvi.toFixed(3)
                );

            }


            // Update status
            const statusElement =
                document.querySelector(".status");


            if (statusElement) {

                statusElement.innerHTML =
                    `<span class="status-dot"></span>
                     Climate data loaded`;

            }

        }
    );

}


/*
 * Helper function for updating
 * climate dashboard values.
 */

function setClimateValue(
    id,
    value
) {

    const element =
        document.getElementById(id);


    if (element) {
        element.textContent = value;
    }

}
