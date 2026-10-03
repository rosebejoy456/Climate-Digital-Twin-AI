import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";


// ============================================================
// Building appearance
// ============================================================

const BUILDING_COLOR = 0x59636d;

function getBuildingStyle(properties = {}) {
    const category =
        properties.amenity === "hospital" ? "Healthcare" :
        /college|university|school/i.test(
            `${properties.amenity || ""} ${properties.building || ""} ${properties.name || ""}`
        ) ? "Education" :
        properties.building === "commercial" ? "Commercial" :
        "Building";

    return {
        category,
        color:
            category === "Healthcare" ? 0xd85b68 :
            category === "Education" ? 0x8e7dff :
            category === "Commercial" ? 0xd7a54a :
            BUILDING_COLOR
    };
}

function getBuildingHeight(properties = {}) {
    const metres = Number.parseFloat(properties.height);
    const levels = Number.parseFloat(properties["building:levels"]);

    // Terrain units are intentionally compressed for the district overview.
    if (Number.isFinite(metres)) {
        return THREE.MathUtils.clamp(metres * 0.00045, 0.0025, 0.045);
    }

    if (Number.isFinite(levels)) {
        return THREE.MathUtils.clamp(levels * 0.003, 0.0025, 0.045);
    }

    return 0.0025;
}

function createBuildingMaterial(color) {
    return new THREE.MeshStandardMaterial({
        color,
        roughness: 0.85,
        metalness: 0.0,
        emissive: 0x000000,
        emissiveIntensity: 0
    });
}

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
    terrain,
    properties = {},
    batches
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

    const buildingHeight = getBuildingHeight(properties);

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


    const style = getBuildingStyle(properties);
    const data = {
        type: style.category,
        name: properties.name || style.category,
        reference: properties["@id"] || null,
        height: buildingHeight,
        latitude: centerLat,
        longitude: centerLon
    };

    // The source contains more than 17,000 footprints. Merge most unnamed
    // buildings by category, while retaining a bounded set of named meshes for
    // click-to-inspect. This cuts the terrain view from thousands of draw calls
    // to a few hundred without discarding the real footprints.
    geometry.translate(0, terrainY, 0);

    const interactive = Boolean(properties.name) && batches.interactiveCount < 600;

    if (!interactive) {
        if (!batches.byCategory.has(style.category)) {
            batches.byCategory.set(style.category, {
                color: style.color,
                geometries: []
            });
        }

        batches.byCategory.get(style.category).geometries.push(geometry);
        return;
    }

    batches.interactiveCount++;

    const material = createBuildingMaterial(style.color);


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

    building.castShadow =
        true;


    building.receiveShadow =
        true;

    building.userData = data;


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

        const batches = {
            byCategory: new Map(),
            interactiveCount: 0
        };


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
                    terrainInfo,
                    feature.properties,
                    batches
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
                        terrainInfo,
                        feature.properties,
                        batches
                    );
                }
            }
        }

        for (const [category, batch] of batches.byCategory) {
            const geometry = mergeGeometries(batch.geometries, false);

            // The input geometries are no longer needed after the merge.
            batch.geometries.forEach((item) => item.dispose());

            if (!geometry) continue;

            const mesh = new THREE.Mesh(
                geometry,
                createBuildingMaterial(batch.color)
            );
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.userData = {
                type: category,
                name: `${category} footprint layer`
            };
            group.add(mesh);
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
            `Loaded ${group.children.length} building render batches (${batches.interactiveCount} inspectable named buildings).`
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
