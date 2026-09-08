import * as THREE from "three";

// ==========================================
// Load district GeoJSON
// ==========================================

let districtData = null;
let districtPromise = null;

async function loadDistrictData(path) {

    if (districtData) {
        return districtData;
    }

    if (!districtPromise) {

        districtPromise = fetch(path)
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
                    "District GeoJSON loaded successfully."
                );

                return data;
            });
    }

    return await districtPromise;
}


// ==========================================
// Latitude / Longitude → 3D position
// ==========================================

function latLonToVector3(
    latitude,
    longitude,
    radius = 1.015
) {

    const lat =
        THREE.MathUtils.degToRad(latitude);

    const lon =
        THREE.MathUtils.degToRad(longitude);

    return new THREE.Vector3(

        radius *
        Math.cos(lat) *
        Math.cos(lon),

        radius *
        Math.sin(lat),

        -radius *
        Math.cos(lat) *
        Math.sin(lon)
    );
}


// ==========================================
// Convert GeoJSON ring to line positions
// ==========================================

function createLineFromRing(
    ring,
    radius = 1.015
) {

    const positions = [];

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


        const point1 =
            latLonToVector3(
                lat1,
                lon1,
                radius
            );

        const point2 =
            latLonToVector3(
                lat2,
                lon2,
                radius
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

    return positions;
}


// ==========================================
// Create SMALL Ernakulam label
// ==========================================

function createErnakulamLabel() {

    const canvas =
        document.createElement("canvas");

    canvas.width = 512;
    canvas.height = 128;

    const context =
        canvas.getContext("2d");

    context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    // Smaller text
    context.font =
        "bold 38px Arial";

    context.textAlign =
        "center";

    context.textBaseline =
        "middle";

    // Black outline
    context.strokeStyle =
        "rgba(0, 0, 0, 0.9)";

    context.lineWidth = 6;

    context.strokeText(
        "Ernakulam",
        canvas.width / 2,
        canvas.height / 2
    );

    // White text
    context.fillStyle =
        "#ffffff";

    context.fillText(
        "Ernakulam",
        canvas.width / 2,
        canvas.height / 2
    );


    const texture =
        new THREE.CanvasTexture(canvas);

    texture.colorSpace =
        THREE.SRGBColorSpace;


    const material =
        new THREE.SpriteMaterial({
            map: texture,
            transparent: true,
            depthTest: false
        });


    const sprite =
        new THREE.Sprite(material);


    sprite.name =
        "ErnakulamLabel";


    // MUCH SMALLER LABEL
    sprite.scale.set(
        0.22,
        0.055,
        1
    );


    return sprite;
}


// ==========================================
// Add permanent Ernakulam boundary
// ==========================================

export async function addErnakulamBoundary(
    earth,
    geojsonPath = "./data/district.geojson"
) {

    try {

        const data =
            await loadDistrictData(
                geojsonPath
            );


        // Find Ernakulam
        const feature =
            data.features.find(
                feature => {

                    const name =
                        feature.properties?.DISTRICT ||
                        feature.properties?.district ||
                        "";

                    return (
                        name.toLowerCase() ===
                        "ernakulam"
                    );
                }
            );


        if (!feature) {

            console.error(
                "Ernakulam district not found."
            );

            return;
        }


        const positions = [];


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

                positions.push(
                    ...createLineFromRing(
                        ring,
                        1.015
                    )
                );
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

                    positions.push(
                        ...createLineFromRing(
                            ring,
                            1.015
                        )
                    );
                }
            }
        }


        // ======================================
        // Boundary geometry
        // ======================================

        const geometry =
            new THREE.BufferGeometry();

        geometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(
                positions,
                3
            )
        );


        // ======================================
        // Cyan boundary
        // ======================================

        const material =
            new THREE.LineBasicMaterial({

                color: 0x00ffff,

                transparent: true,

                opacity: 1.0

            });


        const boundary =
            new THREE.LineSegments(
                geometry,
                material
            );


        boundary.name =
            "ErnakulamBoundary";


        // Attach to Earth
        earth.add(
            boundary
        );


        // ======================================
        // Ernakulam center
        // ======================================

        const center =
            latLonToVector3(
                9.98,
                76.31,
                1.025
            );


        // ======================================
        // Small label
        // ======================================

        const label =
            createErnakulamLabel();


        label.position.copy(
            center
        );


        earth.add(
            label
        );


        console.log(
            "Permanent Ernakulam boundary and label added."
        );

    } catch (error) {

        console.error(
            "Failed to add Ernakulam boundary:",
            error
        );
    }
}