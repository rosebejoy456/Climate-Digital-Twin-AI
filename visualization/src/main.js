import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { createEarthGrid } from "./grid.js";
import { addCountryBoundaries } from "./countries.js";
import { setupInteraction } from "./interaction.js";
import { addErnakulamBoundary } from "./ernakulam.js";
import { addTerrain } from "./terrain.js";
import { addTerrainInfrastructure } from "./terrainInfrastructure.js";
import { addRoads } from "./roads.js";
import { addWaterways } from "./waterways.js";
import { createRealErnakulamMap } from "./climate-map.js";
import {
    addHospitals,
    addRailwayStations,
    addAirports
} from "./landmarks.js";
import { runWhatIfSimulation } from "./climate.js";
import { addBuildings } from "./buildings.js";

// ======================
// Scene
// ======================

const scene = new THREE.Scene();

let ernakulamBuildings = null;
let terrainMesh = null;
let terrainInfrastructure = null;
let floodOverlay = null;
let terrainViewActive = false;
let activeRiskMode = "normal";
let scenarioProgress = 1;
let latestScenarioImpact = null;
let selectedReferenceLabel = null;



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
    Math.min(window.devicePixelRatio, 1.75)
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
addTerrain(
    scene,
    "./data/terrain.json"
).then((terrain) => {

    terrainMesh = terrain;

    if (terrainMesh) {
        terrainMesh.visible = false;
        terrainMesh.userData.baseColor =
            terrainMesh.material.color.clone();

        floodOverlay = new THREE.Mesh(
            new THREE.PlaneGeometry(2.4, 1.0),
            new THREE.MeshBasicMaterial({
                color: 0x1f9fff,
                transparent: true,
                opacity: 0,
                depthWrite: false,
                side: THREE.DoubleSide
            })
        );
        floodOverlay.rotation.x = -Math.PI / 2;
        floodOverlay.position.y = 0.018;
        floodOverlay.visible = false;
        floodOverlay.name = "Flood exposure overlay";
        scene.add(floodOverlay);
        addBuildings(
            scene,
            terrainMesh
        ).then((group) => {

            ernakulamBuildings = group;

            if (ernakulamBuildings) {
                ernakulamBuildings.visible = terrainViewActive &&
                    terrainControls.querySelector('[data-layer="buildings"]').checked;
            }

            console.log(
                "Ernakulam OSM building layer ready."
            );

        });
        addTerrainInfrastructure(
            scene,
            terrainMesh
        ).then((infrastructure) => {
            terrainInfrastructure = infrastructure;
            terrainInfrastructure.visible = terrainViewActive;
            terrainControls.querySelectorAll("input[data-layer]").forEach((input) => {
                setLayerVisibility(input.dataset.layer, input.checked);
            });
        });
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

const terrainToolbar =
    document.getElementById("terrain-toolbar");

const openErnakulamTerrainButton =
    document.getElementById("open-ernakulam-terrain");

const returnToGlobeButton =
    document.getElementById("return-to-globe");

const toggleTerrainControlsButton =
    document.getElementById("toggle-terrain-controls");

const terrainControls = document.getElementById("terrain-controls");
const terrainModeLabel = document.getElementById("terrain-mode-label");
const riskModeSelect = document.getElementById("risk-mode");
const scenarioProgressInput = document.getElementById("scenario-progress");
const scenarioProgressValue = document.getElementById("scenario-progress-value");
const featureInspector = document.getElementById("feature-inspector");
const featureTitle = document.getElementById("feature-title");
const featureType = document.getElementById("feature-type");
const featureDetails = document.getElementById("feature-details");
const closeInspectorButton = document.getElementById("close-inspector");

const cameraViews = {
    overview: [[0, 1.45, 1.35], [0, 0.05, 0]],
    city: [[-0.15, 0.52, 0.48], [-0.22, 0.02, -0.12]],
    airport: [[-0.24, 0.45, 0.76], [-0.25, 0.02, 0.03]],
    hills: [[0.7, 0.65, 0.55], [0.65, 0.07, 0.08]]
};

function flyTo(viewName) {
    const view = cameraViews[viewName];
    if (!view) return;

    const startPosition = camera.position.clone();
    const startTarget = controls.target.clone();
    const endPosition = new THREE.Vector3(...view[0]);
    const endTarget = new THREE.Vector3(...view[1]);
    const startedAt = performance.now();

    function updateCamera(now) {
        const progress = Math.min((now - startedAt) / 700, 1);
        const eased = progress * (2 - progress);
        camera.position.lerpVectors(startPosition, endPosition, eased);
        controls.target.lerpVectors(startTarget, endTarget, eased);
        controls.update();
        if (progress < 1) requestAnimationFrame(updateCamera);
    }

    requestAnimationFrame(updateCamera);
}

function getRiskValues() {
    const base = { heat: 2, rainfall: 50, ndvi: -0.2 };

    if (activeRiskMode === "what-if" && latestScenarioImpact) {
        base.heat = latestScenarioImpact.temperature_celsius || 0;
        base.rainfall = latestScenarioImpact.rainfall_mm || 0;
        base.ndvi = latestScenarioImpact.ndvi || 0;
    }

    return {
        heat: base.heat * scenarioProgress,
        rainfall: base.rainfall * scenarioProgress,
        ndvi: base.ndvi * scenarioProgress
    };
}

function updateRiskVisualization() {
    if (!terrainMesh) return;

    const values = getRiskValues();
    const color = terrainMesh.userData.baseColor.clone();
    let label = "Normal infrastructure";

    if (activeRiskMode === "heat") {
        color.lerp(new THREE.Color(0xe85d3f), Math.min(Math.abs(values.heat) / 4, 1));
        label = `Heat stress · +${values.heat.toFixed(1)} °C`;
    } else if (activeRiskMode === "flood") {
        color.lerp(new THREE.Color(0x1d6fa5), Math.min(values.rainfall / 100, 0.75));
        label = `Flood exposure · +${values.rainfall.toFixed(0)} mm`;
    } else if (activeRiskMode === "vegetation") {
        color.lerp(new THREE.Color(0x8b653d), Math.min(Math.abs(values.ndvi) / 0.35, 1));
        label = `Vegetation health · ${values.ndvi.toFixed(2)} NDVI`;
    } else if (activeRiskMode === "what-if") {
        const severity = Math.max(Math.abs(values.heat) / 4, values.rainfall / 100, Math.abs(values.ndvi) / 0.35);
        color.lerp(new THREE.Color(0xa64d3c), Math.min(severity, 0.8));
        label = latestScenarioImpact
            ? `What-If impact · +${values.heat.toFixed(1)} °C, ${values.rainfall.toFixed(0)} mm`
            : "What-If impact · run a simulation first";
    }

    terrainMesh.material.color.copy(color);
    terrainModeLabel.textContent = label;

    if (floodOverlay) {
        const showFlood = activeRiskMode === "flood" || activeRiskMode === "what-if";
        floodOverlay.visible = terrainViewActive && showFlood;
        floodOverlay.material.opacity = showFlood
            ? Math.min(0.38, Math.max(0.05, values.rainfall / 300))
            : 0;
    }
}

function setLayerVisibility(name, visible) {
    if (name === "buildings" && ernakulamBuildings) {
        ernakulamBuildings.visible = visible && terrainViewActive;
        return;
    }

    const layer = terrainInfrastructure?.userData.layers?.[name];
    if (layer) layer.visible = visible;
}

function showFeatureDetails(data, worldPosition) {
    featureTitle.textContent = data.name || "Unnamed feature";
    featureType.textContent = data.type || "Infrastructure";
    const coordinates = Number.isFinite(data.latitude) && Number.isFinite(data.longitude)
        ? `Coordinates: ${data.latitude.toFixed(4)}°, ${data.longitude.toFixed(4)}°`
        : "Location data unavailable";
    const height = data.height ? `<br>Estimated height: ${(data.height / 0.00045).toFixed(0)} m` : "";
    const reference = data.reference
        ? `<br>OpenStreetMap reference: ${data.reference}`
        : "";
    featureDetails.innerHTML = `${coordinates}${height}${reference}`;
    featureInspector.hidden = false;

    if (selectedReferenceLabel) {
        scene.remove(selectedReferenceLabel);
        selectedReferenceLabel.material.map.dispose();
        selectedReferenceLabel.material.dispose();
    }

    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 128;
    const context = canvas.getContext("2d");
    context.font = "bold 42px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.strokeStyle = "rgba(0, 0, 0, 0.9)";
    context.lineWidth = 8;
    context.strokeText(data.name || "Feature", 512, 64);
    context.fillStyle = "#ffffff";
    context.fillText(data.name || "Feature", 512, 64);

    const texture = new THREE.CanvasTexture(canvas);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        depthTest: false
    }));
    sprite.position.copy(worldPosition).add(new THREE.Vector3(0, 0.08, 0));
    sprite.scale.set(0.33, 0.041, 1);
    sprite.renderOrder = 100;
    selectedReferenceLabel = sprite;
    scene.add(selectedReferenceLabel);
}

function clearSelectedReference() {
    if (!selectedReferenceLabel) return;

    scene.remove(selectedReferenceLabel);
    selectedReferenceLabel.material.map.dispose();
    selectedReferenceLabel.material.dispose();
    selectedReferenceLabel = null;
}

function showTerrainView() {
    if (!terrainMesh) {
        console.warn("Terrain is still loading. Please try the click again.");
        return;
    }

    terrainViewActive = true;

    // The globe-specific layers use spherical coordinates. Hide them before
    // presenting the local, flat terrain coordinate system.
    earth.visible = false;
    earthGrid.visible = false;
    nightLights.visible = false;
    clouds.visible = false;
    atmosphere.visible = false;
    sunMesh.visible = false;
    moon.visible = false;

    terrainMesh.visible = true;
    if (floodOverlay) {
        floodOverlay.visible = activeRiskMode === "flood" || activeRiskMode === "what-if";
    }
    if (ernakulamBuildings) {
        ernakulamBuildings.visible = true;
    }

    if (terrainInfrastructure) {
        terrainInfrastructure.visible = true;
    }

    camera.position.set(0, 1.45, 1.35);
    controls.target.set(0, 0.05, 0);
    controls.minDistance = 0.55;
    controls.maxDistance = 3;
    controls.update();

    terrainToolbar.hidden = false;
    openErnakulamTerrainButton.hidden = true;
    terrainControls.hidden = true;
    toggleTerrainControlsButton.setAttribute("aria-expanded", "false");
    updateRiskVisualization();
}

function showGlobeView() {
    terrainViewActive = false;

    earth.visible = true;
    earthGrid.visible = true;
    nightLights.visible = true;
    clouds.visible = true;
    atmosphere.visible = true;
    sunMesh.visible = true;
    moon.visible = true;

    if (terrainMesh) {
        terrainMesh.visible = false;
    }
    if (floodOverlay) {
        floodOverlay.visible = false;
    }
    if (ernakulamBuildings) {
        ernakulamBuildings.visible = false;
    }

    if (terrainInfrastructure) {
        terrainInfrastructure.visible = false;
    }

    camera.position.set(0, 0, 3);
    controls.target.set(0, 0, 0);
    controls.minDistance = 1.15;
    controls.maxDistance = 5;
    controls.update();

    terrainToolbar.hidden = true;
    openErnakulamTerrainButton.hidden = false;
    terrainControls.hidden = true;
    featureInspector.hidden = true;
    clearSelectedReference();
}

terrainControls.querySelectorAll("input[data-layer]").forEach((input) => {
    input.addEventListener("change", () => {
        setLayerVisibility(input.dataset.layer, input.checked);
    });
});

toggleTerrainControlsButton.addEventListener("click", () => {
    const isOpening = terrainControls.hidden;
    terrainControls.hidden = !isOpening;
    toggleTerrainControlsButton.setAttribute("aria-expanded", String(isOpening));
});

document.querySelectorAll("[data-camera-view]").forEach((button) => {
    button.addEventListener("click", () => flyTo(button.dataset.cameraView));
});

riskModeSelect.addEventListener("change", () => {
    activeRiskMode = riskModeSelect.value;
    updateRiskVisualization();
});

scenarioProgressInput.addEventListener("input", () => {
    scenarioProgress = Number(scenarioProgressInput.value) / 100;
    scenarioProgressValue.textContent = `${scenarioProgressInput.value}%`;
    updateRiskVisualization();
});

closeInspectorButton.addEventListener("click", () => {
    featureInspector.hidden = true;
    clearSelectedReference();
});

renderer.domElement.addEventListener("click", (event) => {
    if (!terrainViewActive) return;

    const bounds = renderer.domElement.getBoundingClientRect();
    const pointer = new THREE.Vector2(
        ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
        -((event.clientY - bounds.top) / bounds.height) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(pointer, camera);
    const selectable = [ernakulamBuildings, terrainInfrastructure].filter(Boolean);
    const hit = raycaster.intersectObjects(selectable, true)
        .find((intersection) => intersection.object.userData?.type);

    if (hit) showFeatureDetails(hit.object.userData, hit.point);
});

returnToGlobeButton.addEventListener("click", showGlobeView);
openErnakulamTerrainButton.addEventListener("click", showTerrainView);
// ==========================================
// Globe → Ernakulam Digital Twin
// ==========================================

window.addEventListener(
    "ernakulam-selected",
    () => {

        console.log(
            "Opening Ernakulam 3D Digital Twin..."
        );

        showTerrainView();

        console.log(
            "Ernakulam 3D Digital Twin activated."
        );

    }
);

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

        // Turn the numerical API response into a spatial terrain overlay.
        latestScenarioImpact = result.impact;
        activeRiskMode = "what-if";
        riskModeSelect.value = activeRiskMode;
        updateRiskVisualization();


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
    createRealErnakulamMap();

