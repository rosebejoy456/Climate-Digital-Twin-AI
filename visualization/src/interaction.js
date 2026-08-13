import * as THREE from "three";

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

export function setupInteraction(camera, renderer, earth) {

    renderer.domElement.addEventListener("click", (event) => {

        const rect = renderer.domElement.getBoundingClientRect();

        mouse.x =
            ((event.clientX - rect.left) / rect.width) * 2 - 1;

        mouse.y =
            -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(earth);

        if (intersects.length > 0) {

            const point = intersects[0].point;

            // Convert 3D position to latitude / longitude
            const radius = earth.geometry.parameters.radius;

            const latitude =
                THREE.MathUtils.radToDeg(
                    Math.asin(point.y / radius)
                );

            const longitude =
                THREE.MathUtils.radToDeg(
                    Math.atan2(point.z, point.x)
                );

            console.log("Earth clicked!");
            console.log("3D position:", point);
            console.log("Latitude:", latitude.toFixed(2) + "°");
            console.log("Longitude:", longitude.toFixed(2) + "°");
            document.getElementById("lat").textContent =
                latitude.toFixed(2) + "°";

            document.getElementById("lon").textContent =
                longitude.toFixed(2) + "°";
        }

    });

}