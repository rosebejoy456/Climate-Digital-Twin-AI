import * as THREE from "three";

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

export function setupInteraction(camera, renderer, earth) {

    renderer.domElement.addEventListener("click", (event) => {

        // Convert mouse position to normalized device coordinates
        mouse.x =
            (event.clientX / window.innerWidth) * 2 - 1;

        mouse.y =
            -(event.clientY / window.innerHeight) * 2 + 1;

        // Create ray from camera through mouse position
        raycaster.setFromCamera(mouse, camera);

        // Check intersection with Earth
        const intersections =
            raycaster.intersectObject(earth);

        if (intersections.length > 0) {

            const point = intersections[0].point;

            console.log("Earth clicked!");
            console.log("3D position:", point);

        }

    });

}