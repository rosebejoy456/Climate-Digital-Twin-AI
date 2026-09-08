import * as THREE from "three";

export async function addTerrain(parent, terrainPath) {
    try {
        const response = await fetch(terrainPath);

        if (!response.ok) {
            throw new Error(
                `Failed to load terrain: ${response.status}`
            );
        }

        const terrainData = await response.json();

        const rows = terrainData.rows;
        const cols = terrainData.cols;

        const elevations = terrainData.elevations;

        const minElevation = terrainData.elevation_min;
        const maxElevation = terrainData.elevation_max;

        // ------------------------------------------------
        // Terrain size
        // ------------------------------------------------

        const width = 2.4;
        const depth = 1.0;

        // Vertical exaggeration.
        // This makes Ernakulam's elevation differences
        // visible at district scale.
        const heightScale = 0.00015;


        // ------------------------------------------------
        // Create geometry
        // ------------------------------------------------

        const geometry = new THREE.BufferGeometry();

        const vertices = [];
        const indices = [];


        // ------------------------------------------------
        // Create terrain vertices
        // ------------------------------------------------

        for (let row = 0; row < rows; row++) {

            const z =
                (row / (rows - 1) - 0.5) *
                depth;

            for (let col = 0; col < cols; col++) {

                const x =
                    (col / (cols - 1) - 0.5) *
                    width;

                let elevation =
                    elevations[row][col];

                if (!Number.isFinite(elevation)) {
                    elevation = minElevation;
                }


                // Convert elevation into terrain height.
                const y =
                    (elevation - minElevation) *
                    heightScale;


                vertices.push(
                    x,
                    y,
                    z
                );
            }
        }


        // ------------------------------------------------
        // Create triangles
        // ------------------------------------------------

        for (let row = 0; row < rows - 1; row++) {

            for (let col = 0; col < cols - 1; col++) {

                const a =
                    row * cols + col;

                const b =
                    a + 1;

                const c =
                    a + cols;

                const d =
                    c + 1;


                indices.push(
                    a,
                    c,
                    b
                );

                indices.push(
                    b,
                    c,
                    d
                );
            }
        }


        // ------------------------------------------------
        // Attach geometry
        // ------------------------------------------------

        geometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(
                vertices,
                3
            )
        );

        geometry.setIndex(indices);

        geometry.computeVertexNormals();


        // ------------------------------------------------
        // Terrain material
        // ------------------------------------------------

        const material =
            new THREE.MeshStandardMaterial({
                color: 0x4f7942,
                roughness: 0.9,
                metalness: 0.0,
                side: THREE.DoubleSide
            });


        const terrain =
            new THREE.Mesh(
                geometry,
                material
            );


        terrain.name =
            "Ernakulam 3D Terrain";


        terrain.receiveShadow = true;


        // ------------------------------------------------
        // Position terrain
        // ------------------------------------------------

        terrain.position.set(
            0,
            0,
            0
        );


        // ------------------------------------------------
        // Add terrain to parent
        // ------------------------------------------------

        parent.add(terrain);


        console.log(
            "3D terrain loaded successfully."
        );

        console.log(
            `Terrain resolution: ${cols} x ${rows}`
        );

        console.log(
            `Elevation range: ${minElevation} m - ${maxElevation} m`
        );


        return terrain;

    } catch (error) {

        console.error(
            "Failed to load 3D terrain:",
            error
        );

        return null;
    }
}