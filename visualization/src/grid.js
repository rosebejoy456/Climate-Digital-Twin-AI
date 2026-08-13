import * as THREE from "three";

export function createEarthGrid() {

    const gridGroup = new THREE.Group();

    const radius = 1.025;

    // =========================
    // Normal grid
    // =========================

    const normalMaterial = new THREE.LineBasicMaterial({
        color: 0x66ccff,
        transparent: true,
        opacity: 0.18
    });

    // =========================
    // Important geographic lines
    // =========================

    const importantMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.65
    });

    // =========================
    // Create latitude line
    // =========================

    function createLatitude(lat, material) {

        const points = [];

        const latitude =
            THREE.MathUtils.degToRad(lat);

        const y =
            Math.sin(latitude) * radius;

        const circleRadius =
            Math.cos(latitude) * radius;

        for (let i = 0; i <= 128; i++) {

            const longitude =
                (i / 128) * Math.PI * 2;

            const x =
                Math.cos(longitude) *
                circleRadius;

            const z =
                Math.sin(longitude) *
                circleRadius;

            points.push(
                new THREE.Vector3(x, y, z)
            );
        }

        const geometry =
            new THREE.BufferGeometry()
                .setFromPoints(points);

        const line =
            new THREE.Line(
                geometry,
                material
            );

        gridGroup.add(line);
    }

    // =========================
    // Latitude grid
    // =========================

    for (let lat = -80; lat <= 80; lat += 20) {

        createLatitude(
            lat,
            normalMaterial
        );
    }

    // Important latitude lines

    createLatitude(0, importantMaterial);

    createLatitude(23.5, importantMaterial);
    createLatitude(-23.5, importantMaterial);

    createLatitude(66.5, importantMaterial);
    createLatitude(-66.5, importantMaterial);

    // =========================
    // Create longitude line
    // =========================

    function createLongitude(lon, material) {

        const points = [];

        const longitude =
            THREE.MathUtils.degToRad(lon);

        for (let i = 0; i <= 128; i++) {

            const latitude =
                (i / 128) * Math.PI -
                Math.PI / 2;

            const x =
                Math.cos(latitude) *
                Math.cos(longitude) *
                radius;

            const y =
                Math.sin(latitude) *
                radius;

            const z =
                Math.cos(latitude) *
                Math.sin(longitude) *
                radius;

            points.push(
                new THREE.Vector3(x, y, z)
            );
        }

        const geometry =
            new THREE.BufferGeometry()
                .setFromPoints(points);

        const line =
            new THREE.Line(
                geometry,
                material
            );

        gridGroup.add(line);
    }

    // =========================
    // Longitude grid
    // =========================

    for (let lon = 0; lon < 360; lon += 20) {

        createLongitude(
            lon,
            normalMaterial
        );
    }

    // Prime Meridian

    createLongitude(
        0,
        importantMaterial
    );

    return gridGroup;
}