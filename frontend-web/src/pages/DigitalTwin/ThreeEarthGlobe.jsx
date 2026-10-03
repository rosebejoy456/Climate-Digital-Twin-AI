import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const EARTH_RADIUS = 1;

const VARIABLE_COLORS = {
  rainfall: '#36a8ff',
  temperature: '#ff795c',
  lst: '#ff795c',
  ndvi: '#57d68d',
  pressure: '#b88cff',
  elevation: '#60d8ff'
};

const CAMERA_PRESETS = {
  isometric: [2.45, 1.45, 2.45],
  oblique: [2.8, 1.2, 1.7],
  coastal: [2.95, 0.55, -1.25],
  nadir: [0.01, 3.35, 0.01]
};

function latLonToVector3(lat, lon, radius = EARTH_RADIUS) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lon + 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function readCoordinates(coordinates) {
  const match = String(coordinates || '').match(/([\d.]+)°\s*N,\s*([\d.]+)°\s*E/i);
  return match ? { lat: Number(match[1]), lon: Number(match[2]) } : null;
}

function disposeObject(object) {
  object.traverse((item) => {
    item.geometry?.dispose?.();
    const materials = Array.isArray(item.material) ? item.material : [item.material];
    materials.filter(Boolean).forEach((material) => material.dispose?.());
  });
}

/**
 * Three.js Earth renderer which intentionally uses the same prop contract as the
 * former canvas renderer, so the surrounding Digital Twin controls stay intact.
 */
export function ThreeEarthGlobe(props) {
  const mountRef = useRef(null);
  const propsRef = useRef(props);
  const runtimeRef = useRef(null);

  useEffect(() => {
    propsRef.current = props;
  }, [props]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.fromArray(CAMERA_PRESETS.isometric);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(mount.clientWidth, mount.clientHeight, false);
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.065;
    controls.enablePan = false;
    controls.minDistance = 1.55;
    controls.maxDistance = 5.4;
    controls.target.set(0, 0, 0);

    const textureLoader = new THREE.TextureLoader();
    const loadTexture = (path) => {
      const texture = textureLoader.load(path);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    };
    const earthTexture = loadTexture('/globe/earth_day.jpg');
    const normalTexture = textureLoader.load('/globe/earth_normal.jpg');
    const specularTexture = textureLoader.load('/globe/earth_specular.jpg');
    const cloudTexture = loadTexture('/globe/earth_clouds.jpg');
    scene.background = loadTexture('/globe/starsmilky.jpg');

    const globe = new THREE.Group();
    scene.add(globe);
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(EARTH_RADIUS, 96, 96),
      new THREE.MeshPhongMaterial({ map: earthTexture, normalMap: normalTexture, specularMap: specularTexture, shininess: 12 })
    );
    globe.add(earth);

    const clouds = new THREE.Mesh(
      new THREE.SphereGeometry(1.012, 72, 72),
      new THREE.MeshPhongMaterial({ map: cloudTexture, transparent: true, opacity: 0.24, depthWrite: false })
    );
    globe.add(clouds);

    const dataHalo = new THREE.Mesh(
      new THREE.SphereGeometry(1.018, 72, 72),
      new THREE.MeshBasicMaterial({ color: VARIABLE_COLORS.rainfall, transparent: true, opacity: 0.08, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    globe.add(dataHalo);

    const wireframe = new THREE.Mesh(
      new THREE.SphereGeometry(1.021, 34, 22),
      new THREE.MeshBasicMaterial({ color: '#75c9ff', wireframe: true, transparent: true, opacity: 0.18, depthWrite: false })
    );
    globe.add(wireframe);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.07, 72, 72),
      new THREE.MeshBasicMaterial({ color: '#36b9ff', transparent: true, opacity: 0.07, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    globe.add(atmosphere);

    scene.add(new THREE.HemisphereLight('#b9e2ff', '#07101f', 1.65));
    const sunLight = new THREE.DirectionalLight('#fff1d0', 2.4);
    sunLight.position.set(4, 2.5, 3);
    scene.add(sunLight);

    const markerGroup = new THREE.Group();
    globe.add(markerGroup);
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const markerMeshes = [];

    const addMarker = ({ key, type, lat, lon, color, scale = 1 }) => {
      const root = new THREE.Group();
      const point = latLonToVector3(lat, lon, 1.028);
      root.position.copy(point);
      root.lookAt(point.clone().multiplyScalar(2));
      root.userData = { key, type };

      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.004 * scale, 0.004 * scale, 0.08 * scale, 6),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9 })
      );
      stem.position.y = 0.04 * scale;
      root.add(stem);
      const cap = new THREE.Mesh(
        new THREE.SphereGeometry(0.022 * scale, 10, 8),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 })
      );
      cap.position.y = 0.085 * scale;
      root.add(cap);
      markerGroup.add(root);
      markerMeshes.push(root, stem, cap);
    };

    Object.values(propsRef.current.taluks || {}).forEach((taluk) => {
      if (taluk.centroid) addMarker({ key: taluk.key, type: 'taluk', ...taluk.centroid, color: '#55d9ff' });
    });
    (propsRef.current.stations || []).forEach((station) => {
      const position = readCoordinates(station.coordinates);
      if (position) addMarker({ key: station.id, type: 'station', ...position, color: '#ffc95d', scale: 0.78 });
    });

    const windGroup = new THREE.Group();
    globe.add(windGroup);
    for (let index = 0; index < 34; index += 1) {
      const latitude = -55 + (index % 6) * 21;
      const longitude = -165 + Math.floor(index / 6) * 57;
      const vector = latLonToVector3(latitude, longitude, 1.038);
      const arrow = new THREE.ArrowHelper(new THREE.Vector3(0.45, 0.06, -0.1).normalize(), vector, 0.08, 0x7ce9ff, 0.026, 0.014);
      windGroup.add(arrow);
    }

    const resize = () => {
      const { clientWidth: width, clientHeight: height } = mount;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    const onPointerUp = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(markerMeshes, true)[0];
      if (!hit) return;
      let selected = hit.object;
      while (selected && !selected.userData?.key) selected = selected.parent;
      if (selected?.userData?.key) propsRef.current.onSelectEntity?.(selected.userData.key, selected.userData.type);
    };
    renderer.domElement.addEventListener('pointerup', onPointerUp);

    runtimeRef.current = { camera, controls, wireframe, markerGroup, windGroup, dataHalo, atmosphere, globe };
    let frameId;
    let lastFpsSample = performance.now();
    let frames = 0;
    let previousPreset = '';
    const animate = (time) => {
      const current = propsRef.current;
      const runtime = runtimeRef.current;
      if (!runtime) return;
      const preset = current.cameraPreset || 'isometric';
      if (preset !== previousPreset && CAMERA_PRESETS[preset]) {
        runtime.camera.position.fromArray(CAMERA_PRESETS[preset]);
        runtime.controls.target.set(0, 0, 0);
        previousPreset = preset;
      }
      runtime.controls.autoRotate = Boolean(current.isAutoRotating);
      runtime.controls.autoRotateSpeed = 0.38;
      runtime.wireframe.visible = Boolean(current.showWireframe);
      runtime.windGroup.visible = Boolean(current.showWindVectors);
      runtime.markerGroup.children.forEach((marker) => {
        marker.visible = marker.userData.type === 'taluk' ? Boolean(current.showTalukPins) : Boolean(current.showStations);
        const selected = marker.userData.key === current.selectedEntityKey && marker.userData.type === current.selectedEntityType;
        marker.scale.setScalar(selected ? 1.45 : 1);
      });
      const color = VARIABLE_COLORS[current.activeVariable] || VARIABLE_COLORS.rainfall;
      runtime.dataHalo.material.color.set(color);
      runtime.dataHalo.material.opacity = current.isCloudObscured ? 0.025 : 0.08;
      runtime.atmosphere.scale.setScalar(1 + Math.max(0, Number(current.elevationExaggeration || 1) - 1) * 0.008);
      clouds.rotation.y += 0.00022;
      runtime.controls.update();
      renderer.render(scene, camera);
      frames += 1;
      if (time - lastFpsSample >= 1000) {
        current.onFpsUpdate?.(Math.round((frames * 1000) / (time - lastFpsSample)));
        frames = 0;
        lastFpsSample = time;
      }
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener('pointerup', onPointerUp);
      controls.dispose();
      disposeObject(scene);
      renderer.dispose();
      renderer.domElement.remove();
      runtimeRef.current = null;
    };
  }, []);

  return (
    <div ref={mountRef} style={{ position: 'absolute', inset: 0, overflow: 'hidden', cursor: 'grab' }} aria-label="Interactive 3D Earth globe">
      <div style={{ position: 'absolute', top: 14, left: 14, zIndex: 2, color: '#d7edff', fontSize: '0.7rem', letterSpacing: '0.08em', pointerEvents: 'none', textTransform: 'uppercase', textShadow: '0 1px 6px #000' }}>
        Drag to orbit · scroll to zoom · select a marker
      </div>
    </div>
  );
}
