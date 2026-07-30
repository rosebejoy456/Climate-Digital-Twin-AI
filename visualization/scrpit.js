import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// ======================
// Scene
// ======================

const scene = new THREE.Scene();

// ======================
// Camera
// ======================

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 0, 3);

// ======================
// Renderer
// ======================

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

// ======================
// Texture Loader
// ======================

const loader = new THREE.TextureLoader();

// Earth Textures
const earthDay = loader.load("./assets/earth_day.jpg");
const earthNormal = loader.load("./assets/earth_normal.jpg");
const earthSpecular = loader.load("./assets/earth_specular.jpg");

// Cloud Texture
const cloudTexture = loader.load("./assets/earth_clouds.jpg");

// Background
const stars = loader.load("./assets/starsmilky.jpg");
scene.background = stars;

// ======================
// Earth
// ======================

const earth = new THREE.Mesh(
    new THREE.SphereGeometry(1, 64, 64),
    new THREE.MeshPhongMaterial({
        map: earthDay,
        normalMap: earthNormal,
        specularMap: earthSpecular,
        shininess: 35
    })
);

earth.castShadow = true;
earth.receiveShadow = true;

scene.add(earth);

// ======================
// Cloud Layer
// ======================

const clouds = new THREE.Mesh(
    new THREE.SphereGeometry(1.015, 64, 64),
    new THREE.MeshPhongMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: 0.25,
        depthWrite: false
    })
);

clouds.castShadow = true;
clouds.receiveShadow = true;

scene.add(clouds);

// ======================
// Atmosphere
// ======================

const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.06, 64, 64),
    new THREE.MeshBasicMaterial({
        color: 0x4da6ff,
        transparent: true,
        opacity: 0.05,
        side: THREE.BackSide
    })
);

scene.add(atmosphere);

// ======================
// Lighting
// ======================

const sun = new THREE.DirectionalLight(0xffffff, 3.2);
sun.position.set(5, 3, 5);
sun.castShadow = true;

scene.add(sun);

scene.add(
    new THREE.AmbientLight(
        0xffffff,
        0.2
    )
);

scene.add(
    new THREE.HemisphereLight(
        0xffffff,
        0x223344,
        0.7
    )
);

// ======================
// Orbit Controls
// ======================

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
controls.dampingFactor = 0.05;

controls.enablePan = false;

controls.minDistance = 2;
controls.maxDistance = 5;

controls.rotateSpeed = 0.6;

controls.autoRotate = true;
controls.autoRotateSpeed = 0.3;

// ======================
// Animation
// ======================

let sunAngle = 0;

function animate() {

    requestAnimationFrame(animate);

    // Earth rotation
    earth.rotation.y += 0.0015;

    // Clouds rotate slower
    clouds.rotation.y += 0.0009;

    // Atmosphere follows Earth
    atmosphere.rotation.y = earth.rotation.y;

    // Sun orbit
    sunAngle += 0.0005;

    sun.position.x = Math.cos(sunAngle) * 5;
    sun.position.z = Math.sin(sunAngle) * 5;
    sun.position.y = 3;

    controls.update();

    renderer.render(scene, camera);

}

animate();

// ======================
// Resize
// ======================

window.addEventListener("resize", () => {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

});