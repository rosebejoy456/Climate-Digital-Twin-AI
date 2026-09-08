import * as THREE from "three";

function latLonToVector3(latitude, longitude, radius = 1.025) {
    const lat = THREE.MathUtils.degToRad(latitude);
    const lon = THREE.MathUtils.degToRad(longitude);

    return new THREE.Vector3(
        radius * Math.cos(lat) * Math.cos(lon),
        radius * Math.sin(lat),
        -radius * Math.cos(lat) * Math.sin(lon)
    );
}


// Get road appearance based on OpenStreetMap highway type
function getRoadStyle(highwayType) {

    switch (highwayType) {

        case "motorway":
            return {
                color: 0xff3333,
                opacity: 1.0
            };

        case "trunk":
            return {
                color: 0xff8800,
                opacity: 1.0
            };

        case "primary":
            return {
                color: 0xffff00,
                opacity: 1.0
            };

        case "secondary":
            return {
                color: 0x00ffff,
                opacity: 0.95
            };

        default:
            return {
                color: 0xffffff,
                opacity: 0.85
            };
    }
}


function createRoadLine(coordinates, highwayType) {

    const points = [];

    for (const coordinate of coordinates) {

        const longitude = coordinate[0];
        const latitude = coordinate[1];

        points.push(
            latLonToVector3(
                latitude,
                longitude
            )
        );
    }

    if (points.length < 2) {
        return null;
    }

    const geometry =
        new THREE.BufferGeometry().setFromPoints(points);


    const style =
        getRoadStyle(highwayType);


    const material =
        new THREE.LineBasicMaterial({

            color: style.color,

            transparent: true,

            opacity: style.opacity,

            depthTest: false,

            depthWrite: false
        });


    const road =
        new THREE.Line(
            geometry,
            material
        );


    // Make roads render above the Earth
    road.renderOrder = 20;


    return road;
}


export async function addRoads(parent, geojsonPath) {

    try {

        const response =
            await fetch(geojsonPath);


        if (!response.ok) {

            throw new Error(
                `Failed to load roads: ${response.status}`
            );
        }


        const geojson =
            await response.json();


        const roadGroup =
            new THREE.Group();


        roadGroup.name =
            "Ernakulam Roads";


        let roadCount = 0;


        for (const feature of geojson.features) {

            if (!feature.geometry) {
                continue;
            }


            const geometry =
                feature.geometry;


            // OpenStreetMap highway classification
            const highwayType =
                feature.properties?.highway || "other";


            if (geometry.type === "LineString") {

                const road =
                    createRoadLine(
                        geometry.coordinates,
                        highwayType
                    );


                if (road) {

                    roadGroup.add(road);

                    roadCount++;
                }
            }


            else if (
                geometry.type === "MultiLineString"
            ) {

                for (
                    const lineCoordinates
                    of geometry.coordinates
                ) {

                    const road =
                        createRoadLine(
                            lineCoordinates,
                            highwayType
                        );


                    if (road) {

                        roadGroup.add(road);

                        roadCount++;
                    }
                }
            }
        }


        parent.add(roadGroup);


        console.log(
            `Road network loaded successfully. Road segments: ${roadCount}`
        );


        return roadGroup;


    } catch (error) {

        console.error(
            "Failed to load road network:",
            error
        );

        return null;
    }
}