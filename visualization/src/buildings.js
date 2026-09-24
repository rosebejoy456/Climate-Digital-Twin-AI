import * as THREE from "three";


// ============================================================
// Building appearance
// ============================================================

const BUILDING_COLOR = 0x444444;

// ============================================================
// Convert latitude / longitude to terrain X / Z
// ============================================================

function latLonToTerrainPosition(
    latitude,
    longitude,
    terrain
) {
    const {
        minLatitude,
        maxLatitude,
        minLongitude,
        maxLongitude,
        width,
        depth
    } = terrain;


    const x =
        (
            (longitude - minLongitude) /
            (maxLongitude - minLongitude) -
            0.5
        ) * width;


    const z =
        (
            (latitude - minLatitude) /
            (maxLatitude - minLatitude) -
            0.5
        ) * depth;


    return {
        x,
        z
    };
}


// ============================================================
// Get terrain elevation
// ============================================================

function getTerrainElevation(
    latitude,
    longitude,
    terrain
) {
    const {
        rows,
        cols,
        elevations,
        minLatitude,
        maxLatitude,
        minLongitude,
        maxLongitude,
        minElevation,
        heightScale
    } = terrain;


    const col =
        Math.round(
            (
                (longitude - minLongitude) /
                (maxLongitude - minLongitude)
            ) *
            (cols - 1)
        );


    const row =
        Math.round(
            (
                (latitude - minLatitude) /
                (maxLatitude - minLatitude)
            ) *
            (rows - 1)
        );


    const safeCol =
        Math.max(
            0,
            Math.min(
                cols - 1,
                col
            )
        );


    const safeRow =
        Math.max(
            0,
            Math.min(
                rows - 1,
                row
            )
        );


    const elevation =
        Number(
            elevations[safeRow][safeCol]
        );


    if (!Number.isFinite(elevation)) {
        return 0;
    }


    return (
        elevation - minElevation
    ) * heightScale;
}


// ============================================================
// Create one building
// ============================================================

function createBuilding(
    ring,
    group,
    terrain
) {
    if (!ring || ring.length < 3) {
        return;
    }


    const shape =
        new THREE.Shape();


    // --------------------------------------------------------
    // Keep the building at its real geographic position.
    // Do NOT subtract the building center.
    // --------------------------------------------------------

    ring.forEach(
        ([lon, lat], index) => {

            const position =
                latLonToTerrainPosition(
                    lat,
                    lon,
                    terrain
                );


            const shapeX =
                position.x;


            const shapeY =
                -position.z;


            if (index === 0) {

                shape.moveTo(
                    shapeX,
                    shapeY
                );

            } else {

                shape.lineTo(
                    shapeX,
                    shapeY
                );
            }
        }
    );


    shape.closePath();


    // ========================================================
    // Building height
    // ========================================================

    /*
     * Reduced from 0.012.
     *
     * This keeps buildings visible without making them
     * look like giant towers compared with the terrain.
     */

    const buildingHeight = 0.0025;

    const geometry =
        new THREE.ExtrudeGeometry(
            shape,
            {
                depth: buildingHeight,
                bevelEnabled: false
            }
        );


    // Extrusion becomes vertical Y.
    geometry.rotateX(
        -Math.PI / 2
    );


    // ========================================================
    // Find building center
    // ========================================================

    let centerLon = 0;
    let centerLat = 0;


    for (
        const [lon, lat]
        of ring
    ) {

        centerLon += lon;
        centerLat += lat;
    }


    centerLon /=
        ring.length;


    centerLat /=
        ring.length;


    // ========================================================
    // Place building on terrain
    // ========================================================

    const terrainY =
        getTerrainElevation(
            centerLat,
            centerLon,
            terrain
        );


    // ========================================================
    // Building material
    // ========================================================

    const material =
        new THREE.MeshStandardMaterial({

            color:
                BUILDING_COLOR,

            roughness:
                0.85,

            metalness:
                0.0,

            emissive:
                0x000000,

            emissiveIntensity:
                0
        });


    // ========================================================
    // Building mesh
    // ========================================================

    const building =
        new THREE.Mesh(
            geometry,
            material
        );


    /*
     * X and Z are already contained in the geometry.
     *
     * Only Y needs to be changed according to terrain
     * elevation.
     */

    building.position.set(
        0,
        terrainY,
        0
    );


    building.castShadow =
        true;


    building.receiveShadow =
        true;


    group.add(
        building
    );
}


// ============================================================
// Load OSM buildings
// ============================================================

export async function addBuildings(
    parent,
    terrain,
    url =
        "./data/ernakulam_buildings.geojson"
) {

    try {

        if (!terrain) {

            throw new Error(
                "Terrain mesh is required before loading buildings."
            );
        }


        // ----------------------------------------------------
        // Load GeoJSON
        // ----------------------------------------------------

        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                `Could not load buildings GeoJSON: ${response.status}`
            );
        }


        const geojson =
            await response.json();


        // ----------------------------------------------------
        // Create building group
        // ----------------------------------------------------

        const group =
            new THREE.Group();


        group.name =
            "ErnakulamBuildings";


        // ----------------------------------------------------
        // Get terrain metadata
        // ----------------------------------------------------

        const terrainInfo =
            terrain.userData.terrain;


        if (!terrainInfo) {

            throw new Error(
                "Terrain geographic metadata is missing."
            );
        }


        // ----------------------------------------------------
        // Process OSM buildings
        // ----------------------------------------------------

        for (
            const feature
            of geojson.features || []
        ) {

            const geometry =
                feature.geometry;


            if (!geometry) {
                continue;
            }


            // -----------------------------------------------
            // Polygon
            // -----------------------------------------------

            if (
                geometry.type ===
                "Polygon"
            ) {

                createBuilding(
                    geometry.coordinates[0],
                    group,
                    terrainInfo
                );
            }


            // -----------------------------------------------
            // MultiPolygon
            // -----------------------------------------------

            if (
                geometry.type ===
                "MultiPolygon"
            ) {

                for (
                    const polygon
                    of geometry.coordinates
                ) {

                    createBuilding(
                        polygon[0],
                        group,
                        terrainInfo
                    );
                }
            }
        }


        // ----------------------------------------------------
        // Add group to scene
        // ----------------------------------------------------

        parent.add(
            group
        );


        // Hidden until terrain view is activated.
        group.visible =
            false;


        console.log(
            `Loaded ${group.children.length} OSM buildings.`
        );


        return group;

    } catch (error) {

        console.error(
            "Failed to load Ernakulam buildings:",
            error
        );


        return null;
    }
}