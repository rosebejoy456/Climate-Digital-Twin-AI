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
const earthNight = loader.load("./assets/earth_night.jpg");
const earthNormal = loader.load("./assets/earth_normal.jpg");
const earthSpecular = loader.load("./assets/earth_specular.jpg");

// Cloud Texture
const cloudTexture = loader.load("./assets/earth_clouds.jpg");

// Sun Texture
const sunTexture = loader.load("./assets/sun.jpg");

// Moon Texture
const moonTexture = loader.load("./assets/moon.jpg");

// Background
const stars = loader.load("./assets/starsmilky.jpg");

scene.background = stars;

// ======================
// Star Field
// ======================

const starGeometry = new THREE.BufferGeometry();

const starVertices = [];

for (let i = 0; i < 12000; i++) {

    starVertices.push(
        (Math.random() - 0.5) * 250,
        (Math.random() - 0.5) * 250,
        (Math.random() - 0.5) * 250
    );

}

starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starVertices, 3)
);

const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.06,
    sizeAttenuation: true
});

const starField = new THREE.Points(
    starGeometry,
    starMaterial
);

scene.add(starField);

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
// Night Lights
// ======================

const nightLights = new THREE.Mesh(
    new THREE.SphereGeometry(1.002, 64, 64),
    new THREE.MeshBasicMaterial({
        map: earthNight,
        transparent: true,
        blending: THREE.AdditiveBlending,
        opacity: 0.95,
        depthWrite: false
    })
);

scene.add(nightLights);

// ======================
// Cloud Layer
// ======================

const clouds = new THREE.Mesh(
    new THREE.SphereGeometry(1.015, 64, 64),
    new THREE.MeshPhongMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: 0.18,
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
    new THREE.SphereGeometry(1.08, 64, 64),
    new THREE.MeshBasicMaterial({
        color: 0x66ccff,
        transparent: true,
        opacity: 0.05,
        side: THREE.BackSide
    })
);

scene.add(atmosphere);

// ======================
// Sun Mesh
// ======================

const sunMesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.6, 64, 64),
    new THREE.MeshBasicMaterial({
        map: sunTexture,
        color: 0xffffff
    })
);

scene.add(sunMesh);

// ======================
// Moon
// ======================

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(0.27, 64, 64),
    new THREE.MeshPhongMaterial({
        map: moonTexture
    })
);

scene.add(moon);


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
let moonAngle = 0;

function animate() {

    requestAnimationFrame(animate);

    // Rotate Earth
    earth.rotation.y += 0.0015;

    nightLights.rotation.copy(earth.rotation);

    starField.rotation.y += 0.00002;

    // Rotate Clouds
    clouds.rotation.y += 0.0009;

    // Atmosphere follows Earth
    atmosphere.rotation.copy(earth.rotation);

    // Rotate the Sun
    sunMesh.rotation.y += 0.002;

    // Sun Orbit
    sunAngle += 0.0005;

    sun.position.x = Math.cos(sunAngle) * 6;
    sun.position.z = Math.sin(sunAngle) * 6;
    sun.position.y = 3;

    // Keep the visible Sun with the light
    sunMesh.position.copy(sun.position);

    // Moon Orbit
    moonAngle += 0.003;

    moon.position.x = Math.cos(moonAngle) * 2.3;
    moon.position.z = Math.sin(moonAngle) * 2.3;
    moon.position.y = 0.25;
    moon.rotation.y += 0.001;

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