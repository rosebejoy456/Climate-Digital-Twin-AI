import * as THREE from "three";

function latLonToVector3(latitude, longitude, radius = 1.035) {
    const lat = THREE.MathUtils.degToRad(latitude);
    const lon = THREE.MathUtils.degToRad(longitude);

    return new THREE.Vector3(
        radius * Math.cos(lat) * Math.cos(lon),
        radius * Math.sin(lat),
        -radius * Math.cos(lat) * Math.sin(lon)
    );
}


// Create a small 3D marker
function createMarker(color, size = 0.012) {

    const geometry =
        new THREE.SphereGeometry(
            size,
            12,
            12
        );

    const material =
        new THREE.MeshBasicMaterial({
            color: color,
            depthTest: false
        });

    const marker =
        new THREE.Mesh(
            geometry,
            material
        );

    marker.renderOrder = 30;

    return marker;
}


// Add a label above a marker
function createLabel(text) {

    const canvas =
        document.createElement("canvas");

    const context =
        canvas.getContext("2d");

    canvas.width = 512;
    canvas.height = 128;

    context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    context.font =
        "bold 36px Arial";

    context.fillStyle =
        "white";

    context.textAlign =
        "center";

    context.textBaseline =
        "middle";

    context.fillText(
        text,
        canvas.width / 2,
        canvas.height / 2
    );

    const texture =
        new THREE.CanvasTexture(canvas);

    texture.needsUpdate = true;

    const material =
        new THREE.SpriteMaterial({
            map: texture,
            transparent: true,
            depthTest: false
        });

    const sprite =
        new THREE.Sprite(material);

    sprite.scale.set(
        0.12,
        0.03,
        1
    );

    sprite.renderOrder = 31;

    return sprite;
}


// Load a GeoJSON file
async function loadGeoJSON(path) {

    const response =
        await fetch(path);

    if (!response.ok) {

        throw new Error(
            `Failed to load ${path}: ${response.status}`
        );
    }

    return await response.json();
}


// Add hospitals
export async function addHospitals(
    parent,
    geojsonPath
) {

    try {

        const geojson =
            await loadGeoJSON(geojsonPath);

        const group =
            new THREE.Group();

        group.name =
            "Hospitals";

        let count = 0;

        for (
            const feature
            of geojson.features
        ) {

            const coordinates =
                feature.geometry?.coordinates;

            if (
                !coordinates ||
                feature.geometry.type !== "Point"
            ) {
                continue;
            }

            const longitude =
                coordinates[0];

            const latitude =
                coordinates[1];

            const marker =
                createMarker(
                    0xff3333,
                    0.014
                );

            marker.position.copy(
                latLonToVector3(
                    latitude,
                    longitude
                )
            );

            const name =
                feature.properties?.name ||
                "Hospital";

            marker.userData = {
                type: "hospital",
                name: name,
                latitude: latitude,
                longitude: longitude
            };

            group.add(marker);

            count++;
        }

        parent.add(group);

        console.log(
            `Hospitals loaded: ${count}`
        );

        return group;

    } catch (error) {

        console.error(
            "Failed to load hospitals:",
            error
        );

        return null;
    }
}


// Add railway stations
export async function addRailwayStations(
    parent,
    geojsonPath
) {

    try {

        const geojson =
            await loadGeoJSON(geojsonPath);

        const group =
            new THREE.Group();

        group.name =
            "Railway Stations";

        let count = 0;

        for (
            const feature
            of geojson.features
        ) {

            const coordinates =
                feature.geometry?.coordinates;

            if (
                !coordinates ||
                feature.geometry.type !== "Point"
            ) {
                continue;
            }

            const longitude =
                coordinates[0];

            const latitude =
                coordinates[1];

            const marker =
                createMarker(
                    0xffff00,
                    0.018
                );

            marker.position.copy(
                latLonToVector3(
                    latitude,
                    longitude
                )
            );

            const name =
                feature.properties?.name ||
                "Railway Station";

            marker.userData = {
                type: "railway_station",
                name: name,
                latitude: latitude,
                longitude: longitude
            };

            group.add(marker);

            count++;
        }

        parent.add(group);

        console.log(
            `Railway stations loaded: ${count}`
        );

        return group;

    } catch (error) {

        console.error(
            "Failed to load railway stations:",
            error
        );

        return null;
    }
}


// Add airports
export async function addAirports(
    parent,
    geojsonPath
) {

    try {

        const geojson =
            await loadGeoJSON(geojsonPath);

        const group =
            new THREE.Group();

        group.name =
            "Airports";

        let count = 0;

        for (
            const feature
            of geojson.features
        ) {

            let coordinates = null;

            if (
                feature.geometry?.type ===
                "Point"
            ) {

                coordinates =
                    feature.geometry.coordinates;
            }

            else if (
                feature.geometry?.type ===
                "Polygon"
            ) {

                const polygon =
                    feature.geometry.coordinates[0];

                if (polygon.length > 0) {

                    let lon = 0;
                    let lat = 0;

                    for (
                        const point
                        of polygon
                    ) {

                        lon += point[0];
                        lat += point[1];
                    }

                    lon /= polygon.length;
                    lat /= polygon.length;

                    coordinates = [
                        lon,
                        lat
                    ];
                }
            }

            if (!coordinates) {
                continue;
            }

            const longitude =
                coordinates[0];

            const latitude =
                coordinates[1];

            const marker =
                createMarker(
                    0x00ff66,
                    0.025
                );

            marker.position.copy(
                latLonToVector3(
                    latitude,
                    longitude
                )
            );

            const name =
                feature.properties?.name ||
                "Airport";

            marker.userData = {
                type: "airport",
                name: name,
                latitude: latitude,
                longitude: longitude
            };

            group.add(marker);

            count++;
        }

        parent.add(group);

        console.log(
            `Airports loaded: ${count}`
        );

        return group;

    } catch (error) {

        console.error(
            "Failed to load airports:",
            error
        );

        return null;
    }
}