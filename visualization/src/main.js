import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { createEarthGrid } from "./grid.js";
import { addCountryBoundaries } from "./countries.js";
import { setupInteraction } from "./interaction.js";
import { addErnakulamBoundary } from "./ernakulam.js";
import { addTerrain } from "./terrain.js";
import { addRoads } from "./roads.js";
import { addWaterways } from "./waterways.js";
import {
    addHospitals,
    addRailwayStations,
    addAirports
} from "./landmarks.js";
import { runWhatIfSimulation } from "./climate.js";

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

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    window.devicePixelRatio
);

renderer.outputColorSpace =
    THREE.SRGBColorSpace;

renderer.toneMapping =
    THREE.ACESFilmicToneMapping;

renderer.toneMappingExposure = 1.15;

renderer.shadowMap.enabled = true;

renderer.shadowMap.type =
    THREE.PCFSoftShadowMap;

document.body.appendChild(
    renderer.domElement
);

// ======================
// Texture Loader
// ======================

const loader =
    new THREE.TextureLoader();

// Earth
const earthDay =
    loader.load("./assets/earth_day.jpg");

const earthNight =
    loader.load("./assets/earth_night.jpg");

const earthNormal =
    loader.load("./assets/earth_normal.jpg");

const earthSpecular =
    loader.load("./assets/earth_specular.jpg");

// Clouds
const cloudTexture =
    loader.load("./assets/earth_clouds.jpg");

// Sun
const sunTexture =
    loader.load("./assets/sun.jpg");

// Moon
const moonTexture =
    loader.load("./assets/moon.jpg");

// Stars
const stars =
    loader.load("./assets/starsmilky.jpg");

scene.background = stars;

// ======================
// Star Field
// ======================

const starGeometry =
    new THREE.BufferGeometry();

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
    new THREE.Float32BufferAttribute(
        starVertices,
        3
    )
);

const starMaterial =
    new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.06,
        sizeAttenuation: true
    });

const starField =
    new THREE.Points(
        starGeometry,
        starMaterial
    );

scene.add(starField);

// ======================
// Earth
// ======================

const earth =
    new THREE.Mesh(
        new THREE.SphereGeometry(
            1,
            64,
            64
        ),

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
// Country Boundaries
// ======================

addCountryBoundaries(earth);

// ======================
// Permanent Ernakulam Boundary
// ======================

addErnakulamBoundary(
    earth,
    "./data/district.geojson"
);
let terrainMesh = null;

addTerrain(
    scene,
    "./data/terrain.json"
).then((terrain) => {

    terrainMesh = terrain;

    if (terrainMesh) {
        terrainMesh.visible = false;
    }

});

addRoads(
    earth,
    "./data/roads.geojson"
);
addWaterways(
    earth,
    "./data/waterways.geojson"
);
addHospitals(
    earth,
    "./data/hospitals.geojson"
);

addRailwayStations(
    earth,
    "./data/railway_stations.geojson"
);

addAirports(
    earth,
    "./data/airports.geojson"
);

// ======================
// Earth Grid
// ======================

const earthGrid =
    createEarthGrid();

scene.add(earthGrid);

// ======================
// Interaction
// ======================

setupInteraction(
    camera,
    renderer,
    earth
);

// ======================
// Night Lights
// ======================

const nightLights =
    new THREE.Mesh(

        new THREE.SphereGeometry(
            1.002,
            64,
            64
        ),

        new THREE.MeshBasicMaterial({
            map: earthNight,
            transparent: true,
            blending:
                THREE.AdditiveBlending,
            opacity: 0.95,
            depthWrite: false
        })
    );

scene.add(nightLights);

// ======================
// Cloud Layer
// ======================

const clouds =
    new THREE.Mesh(

        new THREE.SphereGeometry(
            1.015,
            64,
            64
        ),

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

const atmosphere =
    new THREE.Mesh(

        new THREE.SphereGeometry(
            1.08,
            64,
            64
        ),

        new THREE.MeshBasicMaterial({
            color: 0x66ccff,
            transparent: true,
            opacity: 0.05,
            side: THREE.BackSide
        })
    );

scene.add(atmosphere);

// ======================
// Sun
// ======================

const sunMesh =
    new THREE.Mesh(

        new THREE.SphereGeometry(
            0.6,
            64,
            64
        ),

        new THREE.MeshBasicMaterial({
            map: sunTexture,
            color: 0xffffff
        })
    );

scene.add(sunMesh);

// ======================
// Moon
// ======================

const moon =
    new THREE.Mesh(

        new THREE.SphereGeometry(
            0.27,
            64,
            64
        ),

        new THREE.MeshPhongMaterial({
            map: moonTexture
        })
    );

scene.add(moon);

// ======================
// Lighting
// ======================

const sun =
    new THREE.DirectionalLight(
        0xffffff,
        3.2
    );

sun.position.set(
    5,
    3,
    5
);

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

const controls =
    new OrbitControls(
        camera,
        renderer.domElement
    );

controls.enableDamping = true;
controls.dampingFactor = 0.05;

controls.enablePan = false;

// Zoom
controls.minDistance = 1.15;
controls.maxDistance = 5;

// Rotation
controls.rotateSpeed = 0.8;

// Zoom speed
controls.zoomSpeed = 0.8;

// No automatic rotation
controls.autoRotate = false;
// ==========================================
// Globe → Ernakulam Digital Twin
// ==========================================

window.addEventListener(
    "ernakulam-selected",
    () => {

        console.log(
            "Opening Ernakulam 3D Digital Twin..."
        );

        // Hide the global globe layers
        earth.visible = false;
        earthGrid.visible = false;
        nightLights.visible = false;
        clouds.visible = false;
        atmosphere.visible = false;

        // Show Ernakulam terrain
        if (terrainMesh) {
            terrainMesh.visible = true;
        }

        // Position camera for terrain view
        camera.position.set(
            0,
            2.2,
            2.4
        );

        controls.target.set(
            0,
            0.2,
            0
        );

        controls.update();

        console.log(
            "Ernakulam 3D Digital Twin activated."
        );

    }
);

// ======================
// Ernakulam Initial Focus
// ======================

// Ernakulam approximate center
const ernakulamLatitude = 10.0;
const ernakulamLongitude = 76.3;

const lat =
    THREE.MathUtils.degToRad(
        ernakulamLatitude
    );

const lon =
    THREE.MathUtils.degToRad(
        ernakulamLongitude
    );

// IMPORTANT:
// This coordinate system matches
// the GeoJSON boundary system.

// X = longitude
const ernakulamX =
    Math.cos(lat) *
    Math.cos(lon);

// Y = latitude
const ernakulamY =
    Math.sin(lat);

// Z = longitude
const ernakulamZ =
    -Math.cos(lat) *
    Math.sin(lon);

// Camera distance
// ============================================
// Ernakulam 3D Terrain Camera
// ============================================

// Position camera above the district terrain
camera.position.set(
    0,
    2.2,
    2.4
);

// Look toward the center of the terrain
controls.target.set(
    0,
    0.2,
    0
);



controls.update();

// ======================
// Animation
// ======================

let sunAngle = 0;
let moonAngle = 0;

function animate() {

    requestAnimationFrame(
        animate
    );

    // ==========================
    // Earth does NOT automatically
    // rotate.
    //
    // User rotates using
    // OrbitControls.
    // ==========================

    // ==========================
    // Keep grid aligned
    // ==========================

    earthGrid.rotation.copy(
        earth.rotation
    );

    // ==========================
    // Keep night lights aligned
    // ==========================

    nightLights.rotation.copy(
        earth.rotation
    );

    // ==========================
    // Stars
    // ==========================

    starField.rotation.y +=
        0.00002;

    // ==========================
    // Clouds
    // ==========================

    clouds.rotation.y +=
        0.0009;

    // ==========================
    // Atmosphere
    // ==========================

    atmosphere.rotation.copy(
        earth.rotation
    );

    // ==========================
    // Sun
    // ==========================

    sunMesh.rotation.y +=
        0.002;

    sunAngle +=
        0.0005;

    sun.position.x =
        Math.cos(sunAngle) * 6;

    sun.position.z =
        Math.sin(sunAngle) * 6;

    sun.position.y = 3;

    sunMesh.position.copy(
        sun.position
    );

    // ==========================
    // Moon
    // ==========================

    moonAngle +=
        0.003;

    moon.position.x =
        Math.cos(moonAngle) * 2.3;

    moon.position.z =
        Math.sin(moonAngle) * 2.3;

    moon.position.y = 0.25;

    moon.rotation.y +=
        0.001;

    // ==========================
    // Controls
    // ==========================

    controls.update();

    // ==========================
    // Render
    // ==========================

    renderer.render(
        scene,
        camera
    );
}

// ======================
// Start
// ======================

animate();

// ======================
// Resize
// ======================

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);
// ============================================================
// WHAT-IF SIMULATION
// ============================================================

const runWhatIfButton = document.getElementById("run-what-if");
const whatIfResult = document.getElementById("what-if-result");

if (runWhatIfButton) {

    runWhatIfButton.addEventListener("click", async () => {

        // Read scenario values from the UI
        const temperatureChange =
            Number(document.getElementById("temperature-change").value) || 0;

        const rainfallChange =
            Number(document.getElementById("rainfall-change").value) || 0;

        const pressureChange =
            Number(document.getElementById("pressure-change").value) || 0;

        const lstChange =
            Number(document.getElementById("lst-change").value) || 0;

        const ndviChange =
            Number(document.getElementById("ndvi-change").value) || 0;


        // Show loading message
        whatIfResult.innerHTML = "Running AI simulation...";


        // Send scenario to FastAPI
        const result = await runWhatIfSimulation({

            temperature_change_c: temperatureChange,

            rainfall_change_percent: rainfallChange,

            pressure_change_hpa: pressureChange,

            lst_change_c: lstChange,

            ndvi_change_percent: ndviChange

        });


        // Handle API failure
        if (!result) {

            whatIfResult.innerHTML =
                "❌ Simulation failed. Please check that the API is running.";

            return;
        }


        // Display results
        whatIfResult.innerHTML = `
            <div class="simulation-result">

                <div class="result-title">
                    📊 Simulation Result
                </div>

                <div class="result-date">
                    Date: ${result.date}
                </div>

                <div class="result-section">
                    <strong>Baseline</strong>

                    <div>
                        Temperature:
                        ${result.baseline.temperature_celsius.toFixed(2)} °C
                    </div>

                    <div>
                        Rainfall:
                        ${result.baseline.rainfall_mm.toFixed(2)} mm
                    </div>

                    <div>
                        Pressure:
                        ${result.baseline.pressure_hpa.toFixed(2)} hPa
                    </div>

                    <div>
                        LST:
                        ${result.baseline.lst_celsius.toFixed(2)} °C
                    </div>

                    <div>
                        NDVI:
                        ${result.baseline.ndvi.toFixed(3)}
                    </div>
                </div>


                <div class="result-section">
                    <strong>Scenario</strong>

                    <div>
                        Temperature:
                        ${result.scenario.temperature_celsius.toFixed(2)} °C
                    </div>

                    <div>
                        Rainfall:
                        ${result.scenario.rainfall_mm.toFixed(2)} mm
                    </div>

                    <div>
                        Pressure:
                        ${result.scenario.pressure_hpa.toFixed(2)} hPa
                    </div>

                    <div>
                        LST:
                        ${result.scenario.lst_celsius.toFixed(2)} °C
                    </div>

                    <div>
                        NDVI:
                        ${result.scenario.ndvi.toFixed(3)}
                    </div>
                </div>


                <div class="result-section">
                    <strong>AI Predicted Impact</strong>

                    <div>
                        Temperature:
                        ${result.impact.temperature_celsius.toFixed(2)} °C
                    </div>

                    <div>
                        Rainfall:
                        ${result.impact.rainfall_mm.toFixed(2)} mm
                    </div>

                    <div>
                        Pressure:
                        ${result.impact.pressure_hpa.toFixed(2)} hPa
                    </div>

                    <div>
                        LST:
                        ${result.impact.lst_celsius.toFixed(2)} °C
                    </div>

                    <div>
                        NDVI:
                        ${result.impact.ndvi.toFixed(3)}
                    </div>
                </div>

            </div>
        `;
    });
}