import * as THREE from "three";

function latLonToVector3(latitude, longitude, radius = 1.027) {
    const lat = THREE.MathUtils.degToRad(latitude);
    const lon = THREE.MathUtils.degToRad(longitude);

    return new THREE.Vector3(
        radius * Math.cos(lat) * Math.cos(lon),
        radius * Math.sin(lat),
        -radius * Math.cos(lat) * Math.sin(lon)
    );
}

function createWaterLine(coordinates) {
    const points = [];

    for (const coordinate of coordinates) {
        const longitude = coordinate[0];
        const latitude = coordinate[1];

        points.push(
            latLonToVector3(latitude, longitude)
        );
    }

    if (points.length < 2) {
        return null;
    }

    const geometry =
        new THREE.BufferGeometry().setFromPoints(points);

    const material =
        new THREE.LineBasicMaterial({
            color: 0x00aaff,
            transparent: true,
            opacity: 0.9,
            depthTest: false,
            depthWrite: false
        });

    const waterLine =
        new THREE.Line(
            geometry,
            material
        );

    waterLine.renderOrder = 25;

    return waterLine;
}

export async function addWaterways(parent, geojsonPath) {
    try {
        const response =
            await fetch(geojsonPath);

        if (!response.ok) {
            throw new Error(
                `Failed to load waterways: ${response.status}`
            );
        }

        const geojson =
            await response.json();

        const waterGroup =
            new THREE.Group();

        waterGroup.name =
            "Ernakulam Waterways";

        let waterCount = 0;

        for (const feature of geojson.features) {

            if (!feature.geometry) {
                continue;
            }

            const geometry =
                feature.geometry;

            if (geometry.type === "LineString") {

                const water =
                    createWaterLine(
                        geometry.coordinates
                    );

                if (water) {
                    waterGroup.add(water);
                    waterCount++;
                }
            }

            else if (
                geometry.type === "MultiLineString"
            ) {

                for (
                    const lineCoordinates
                    of geometry.coordinates
                ) {

                    const water =
                        createWaterLine(
                            lineCoordinates
                        );

                    if (water) {
                        waterGroup.add(water);
                        waterCount++;
                    }
                }
            }
        }

        parent.add(waterGroup);

        console.log(
            `Waterway network loaded successfully. Water segments: ${waterCount}`
        );

        return waterGroup;

    } catch (error) {

        console.error(
            "Failed to load waterways:",
            error
        );

        return null;
    }
}