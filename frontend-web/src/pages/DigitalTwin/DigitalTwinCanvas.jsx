import React, { useRef, useEffect, useCallback } from 'react';

/**
 * DIGITAL TWIN 3D CANVAS ENGINE
 * 
 * High-performance, zero-dependency 3D mathematical projection engine
 * rendering a representative 3D terrain visualization and district-level
 * climate scalar field for Ernakulam District, Kerala.
 * 
 * SCIENTIFIC DISCLOSURE:
 * - The terrain surface is a representative 3D terrain visualization based on
 *   a mathematical geomorphic model of Ernakulam's physical relief (coastal backwaters
 *   to Western Ghats foothills).
 * - Climate variables represent verified district-level reference measurements
 *   (IMD 0.25° gridded rainfall, MODIS LST, MODIS NDVI, ERA5 pressure).
 * - Per-taluk local micro-measurements are NOT fabricated; the 3D surface illustrates
 *   conceptual topography with uniform district baseline telemetry.
 */

// Geographic domain bounding box for Ernakulam District
const GEO_BOUNDS = {
  minLon: 76.15,
  maxLon: 76.75,
  minLat: 9.78,
  maxLat: 10.30
};

// Geomorphic elevation generator for representative Ernakulam terrain relief
// Models coastal plains in the west (0-5m), midland alluvium (10-40m), and eastern foothills (150-350m)
function getTerrainElevation(normX, normY) {
  // normX: 0 (West / Arabian Sea) to 1 (East / Western Ghats Foothills)
  // normY: 0 (South) to 1 (North)
  
  // Coastline & Backwater baseline on west (normX < 0.12)
  if (normX < 0.12) {
    return Math.sin(normY * Math.PI * 4) * 0.8 + 1.2; // 0 - 3m
  }
  
  // Midland undulating plains (normX: 0.12 to 0.65)
  const midlandBase = (normX - 0.12) / 0.53;
  const undulating = Math.sin(normX * 9.0) * Math.cos(normY * 8.0) * 8.0;
  const riverValley = Math.sin(normY * Math.PI * 3 + normX * 2) * 5.0;
  
  if (normX <= 0.65) {
    return Math.max(2, 4 + midlandBase * 35 + undulating + riverValley);
  }
  
  // Eastern High Range Foothills (normX: 0.65 to 1.0)
  const foothillBase = (normX - 0.65) / 0.35;
  const ruggedPeaks = (Math.sin(normX * 14.0) * 22.0) + (Math.cos(normY * 16.0) * 28.0) + (Math.sin((normX + normY) * 10) * 18);
  return 40 + (foothillBase * foothillBase * 240) + ruggedPeaks;
}

export function DigitalTwinCanvas({
  activeVariable = 'rainfall',
  metricValue = 42.5,
  isCloudObscured = false,
  selectedEntityKey = 'Kochi',
  selectedEntityType = 'taluk',
  onSelectEntity,
  taluks = {},
  stations = [],
  showWireframe = true,
  showStations = true,
  showTalukPins = true,
  showWindVectors = true,
  elevationExaggeration = 2.0,
  cameraPreset = 'isometric',
  resetTrigger = 0,
  isAutoRotating = true,
  onFpsUpdate
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Camera state (Spherical angles in radians & distance)
  const cameraRef = useRef({
    yaw: 0.65,        // Horizontal orbit angle
    pitch: 0.52,      // Vertical inclination angle
    distance: 480,    // Camera distance
    targetX: 0,       // Pan target X
    targetY: 0,       // Pan target Y
    targetZ: 0        // Pan target Z
  });

  // Target camera state for smooth transitions
  const targetCameraRef = useRef({
    yaw: 0.65,
    pitch: 0.52,
    distance: 480,
    targetX: 0,
    targetY: 0
  });

  // Interaction dragging states
  const isDraggingRef = useRef(false);
  const isPanningRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const hoverEntityRef = useRef(null);

  // Particles for atmospheric wind streamlines
  const particlesRef = useRef([]);

  // Initialize wind particles
  useEffect(() => {
    const count = 45;
    const pts = [];
    for (let i = 0; i < count; i++) {
      pts.push({
        x: (Math.random() - 0.5) * 320,
        y: (Math.random() - 0.5) * 260,
        z: Math.random() * 40 + 20,
        speed: 0.7 + Math.random() * 0.9,
        life: Math.random() * 100,
        maxLife: 80 + Math.random() * 60,
        tail: []
      });
    }
    particlesRef.current = pts;
  }, []);

  // Set camera presets & reset triggers
  useEffect(() => {
    switch (cameraPreset) {
      case 'isometric':
        targetCameraRef.current = { yaw: 0.65, pitch: 0.52, distance: 480, targetX: 0, targetY: 0 };
        break;
      case 'oblique':
        targetCameraRef.current = { yaw: 0.25, pitch: 0.32, distance: 440, targetX: 10, targetY: -20 };
        break;
      case 'coastal':
        targetCameraRef.current = { yaw: -1.35, pitch: 0.22, distance: 460, targetX: -30, targetY: 0 };
        break;
      case 'nadir':
        targetCameraRef.current = { yaw: 0, pitch: 1.48, distance: 510, targetX: 0, targetY: 0 };
        break;
      default:
        break;
    }
  }, [cameraPreset, resetTrigger]);

  // Center camera on selected entity if requested
  const focusEntity = useCallback((entityKey, type) => {
    let lat = null;
    let lon = null;
    if (type === 'station') {
      const st = stations.find((s) => s.id === entityKey);
      if (st) {
        const parts = st.coordinates.split(',');
        lat = parseFloat(parts[0]);
        lon = parseFloat(parts[1]);
      }
    } else {
      const taluk = taluks[entityKey];
      if (taluk && taluk.centroid) {
        lat = taluk.centroid.lat;
        lon = taluk.centroid.lon;
      }
    }

    if (lat !== null && lon !== null) {
      const normX = (lon - GEO_BOUNDS.minLon) / (GEO_BOUNDS.maxLon - GEO_BOUNDS.minLon);
      const normY = (lat - GEO_BOUNDS.minLat) / (GEO_BOUNDS.maxLat - GEO_BOUNDS.minLat);
      const worldX = (normX - 0.5) * 280;
      const worldY = (normY - 0.5) * 220;

      targetCameraRef.current.targetX = -worldX * 0.4;
      targetCameraRef.current.targetY = -worldY * 0.4;
      targetCameraRef.current.distance = Math.max(340, targetCameraRef.current.distance - 40);
    }
  }, [taluks, stations]);

  // Trigger entity focus when selection changes
  useEffect(() => {
    if (selectedEntityKey) {
      focusEntity(selectedEntityKey, selectedEntityType);
    }
  }, [selectedEntityKey, selectedEntityType, focusEntity]);

  // Main 3D Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsTimer = performance.now();

    // 3D Terrain Grid Resolution
    const gridCols = 24;
    const gridRows = 20;
    const terrainWidth = 320;
    const terrainHeight = 250;

    // Precalculate mesh vertices in model coordinates
    const gridVertices = [];
    for (let r = 0; r <= gridRows; r++) {
      const normY = r / gridRows;
      const y = (normY - 0.5) * terrainHeight;
      for (let c = 0; c <= gridCols; c++) {
        const normX = c / gridCols;
        const x = (normX - 0.5) * terrainWidth;
        const rawElevation = getTerrainElevation(normX, normY);
        gridVertices.push({
          c,
          r,
          normX,
          normY,
          modelX: x,
          modelY: y,
          rawElev: rawElevation
        });
      }
    }

    // Color mapper for variables:
    // Scientific Integrity Note: Displays verified district-level reference measurement
    // uniformly across the representative terrain, modulated only by subtle lighting relief
    // so 3D terrain contours remain legible without implying measured micro-scale spatial variation.
    const getScalarColor = (normX, normY, rawElev) => {
      // Subtle relief lighting modulation (0.9 to 1.1) to reveal 3D terrain shape
      const reliefShade = 0.92 + (rawElev / 350) * 0.16;

      if (isCloudObscured && (activeVariable === 'lst' || activeVariable === 'ndvi')) {
        // Cloud-obscured neutral slate / attenuated pattern
        const stripe = (Math.floor(normX * 25 + normY * 25) % 2 === 0);
        return stripe ? 'rgba(51, 65, 85, 0.45)' : 'rgba(30, 41, 59, 0.55)';
      }

      switch (activeVariable) {
        case 'rainfall': {
          // Precipitation: Surface hue reflects authentic district-level IMD rainfall measurement
          const val = metricValue !== null && metricValue !== undefined ? metricValue : 0;
          if (val < 5) return `rgba(${Math.round(14 * reliefShade)}, ${Math.round(56 * reliefShade)}, ${Math.round(96 * reliefShade)}, 0.65)`;
          if (val < 25) return `rgba(${Math.round(2 * reliefShade)}, ${Math.round(132 * reliefShade)}, ${Math.round(199 * reliefShade)}, 0.75)`;
          if (val < 60) return `rgba(${Math.round(6 * reliefShade)}, ${Math.round(182 * reliefShade)}, ${Math.round(212 * reliefShade)}, 0.85)`;
          return `rgba(${Math.round(56 * reliefShade)}, ${Math.round(189 * reliefShade)}, ${Math.round(248 * reliefShade)}, 0.95)`;
        }
        case 'lst': {
          // Land Surface Temperature: Surface hue reflects authentic district-level MODIS LST measurement
          const val = metricValue !== null && metricValue !== undefined ? metricValue : 30;
          if (val < 26) return `rgba(${Math.round(49 * reliefShade)}, ${Math.round(27 * reliefShade)}, ${Math.round(94 * reliefShade)}, 0.7)`;
          if (val < 29) return `rgba(${Math.round(92 * reliefShade)}, ${Math.round(29 * reliefShade)}, ${Math.round(46 * reliefShade)}, 0.75)`;
          if (val < 33) return `rgba(${Math.round(180 * reliefShade)}, ${Math.round(83 * reliefShade)}, ${Math.round(9 * reliefShade)}, 0.85)`;
          return `rgba(${Math.round(244 * reliefShade)}, ${Math.round(63 * reliefShade)}, ${Math.round(94 * reliefShade)}, 0.9)`;
        }
        case 'ndvi': {
          // Vegetation: Surface hue reflects authentic district-level MODIS NDVI measurement
          const val = metricValue !== null && metricValue !== undefined ? metricValue : 0.65;
          if (val < 0.4) return `rgba(${Math.round(45 * reliefShade)}, ${Math.round(36 * reliefShade)}, ${Math.round(22 * reliefShade)}, 0.65)`;
          if (val < 0.65) return `rgba(${Math.round(29 * reliefShade)}, ${Math.round(59 * reliefShade)}, ${Math.round(35 * reliefShade)}, 0.75)`;
          if (val < 0.75) return `rgba(${Math.round(22 * reliefShade)}, ${Math.round(101 * reliefShade)}, ${Math.round(52 * reliefShade)}, 0.85)`;
          return `rgba(${Math.round(5 * reliefShade)}, ${Math.round(150 * reliefShade)}, ${Math.round(105 * reliefShade)}, 0.95)`;
        }
        case 'pressure': {
          // Atmospheric Pressure: Surface hue reflects authentic district-level ERA5 pressure measurement
          const val = metricValue !== null && metricValue !== undefined ? metricValue : 1008;
          if (val < 1000) return `rgba(${Math.round(56 * reliefShade)}, ${Math.round(189 * reliefShade)}, ${Math.round(248 * reliefShade)}, 0.85)`;
          if (val < 1006) return `rgba(${Math.round(99 * reliefShade)}, ${Math.round(102 * reliefShade)}, ${Math.round(241 * reliefShade)}, 0.75)`;
          return `rgba(${Math.round(76 * reliefShade)}, ${Math.round(29 * reliefShade)}, ${Math.round(149 * reliefShade)}, 0.7)`;
        }
        case 'elevation':
        default: {
          // Representative hypsometric terrain elevation tints
          if (rawElev < 6) return 'rgba(6, 182, 212, 0.6)';
          if (rawElev < 25) return 'rgba(30, 64, 175, 0.65)';
          if (rawElev < 80) return 'rgba(16, 185, 129, 0.7)';
          if (rawElev < 180) return 'rgba(202, 138, 4, 0.75)';
          return 'rgba(225, 29, 72, 0.85)';
        }
      }
    };

    const render = (currentTime) => {
      const dt = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Calculate Framerate
      frameCount++;
      if (currentTime - fpsTimer >= 1000) {
        if (onFpsUpdate) onFpsUpdate(frameCount);
        frameCount = 0;
        fpsTimer = currentTime;
      }

      // Smooth camera interpolation towards targets
      const cam = cameraRef.current;
      const tCam = targetCameraRef.current;

      // Auto-rotation when not actively dragging
      if (isAutoRotating && !isDraggingRef.current && !isPanningRef.current) {
        tCam.yaw += dt * 0.12;
      }

      cam.yaw += (tCam.yaw - cam.yaw) * 0.08;
      cam.pitch += (tCam.pitch - cam.pitch) * 0.08;
      cam.distance += (tCam.distance - cam.distance) * 0.08;
      cam.targetX += (tCam.targetX - cam.targetX) * 0.08;
      cam.targetY += (tCam.targetY - cam.targetY) * 0.08;

      // Resize & DPI handling
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }
      ctx.resetTransform();
      ctx.scale(dpr, dpr);

      // Clear Canvas with deep space / command center gradient
      const bgGrad = ctx.createRadialGradient(width * 0.5, height * 0.45, 40, width * 0.5, height * 0.5, width * 0.7);
      bgGrad.addColorStop(0, '#0a1329');
      bgGrad.addColorStop(0.5, '#060a16');
      bgGrad.addColorStop(1, '#020409');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 3D Projection Matrix setup
      const cosYaw = Math.cos(cam.yaw);
      const sinYaw = Math.sin(cam.yaw);
      const cosPitch = Math.cos(cam.pitch);
      const sinPitch = Math.sin(cam.pitch);

      const fov = 480;
      const originX = width * 0.5 + cam.targetX;
      const originY = height * 0.52 + cam.targetY;

      // 3D to 2D projection function
      const project = (x, y, z) => {
        // Yaw rotation (around Z-up / Y-horizontal)
        const x1 = x * cosYaw - y * sinYaw;
        const y1 = x * sinYaw + y * cosYaw;
        const z1 = z;

        // Pitch rotation (tilt up/down)
        const y2 = y1 * cosPitch - z1 * sinPitch;
        const z2 = y1 * sinPitch + z1 * cosPitch;
        const x2 = x1;

        // Camera distance translation
        const depth = z2 + cam.distance;
        if (depth <= 10) return null; // Behind camera clipping

        const scale = fov / depth;
        return {
          screenX: originX + x2 * scale,
          screenY: originY - y2 * scale,
          scale,
          depth
        };
      };

      // 1. Render Subtle 3D Coordinate Grid & Floor Bounds
      ctx.save();
      const floorZ = -15;
      const bHalfW = terrainWidth * 0.54;
      const bHalfH = terrainHeight * 0.54;
      const p1 = project(-bHalfW, -bHalfH, floorZ);
      const p2 = project(bHalfW, -bHalfH, floorZ);
      const p3 = project(bHalfW, bHalfH, floorZ);
      const p4 = project(-bHalfW, bHalfH, floorZ);

      if (p1 && p2 && p3 && p4) {
        ctx.beginPath();
        ctx.moveTo(p1.screenX, p1.screenY);
        ctx.lineTo(p2.screenX, p2.screenY);
        ctx.lineTo(p3.screenX, p3.screenY);
        ctx.lineTo(p4.screenX, p4.screenY);
        ctx.closePath();
        ctx.fillStyle = 'rgba(6, 182, 212, 0.025)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      }
      ctx.restore();

      // 2. Project all mesh vertices into screen space
      const projectedMesh = gridVertices.map((v) => {
        // Vertical exaggeration applied to elevation
        const z = (v.rawElev * 0.28 * elevationExaggeration);
        const pt = project(v.modelX, v.modelY, z);
        return {
          ...v,
          proj: pt,
          z
        };
      });

      // 3. Render Mesh Quads / Surface Tiles (Depth sorted painter's algorithm)
      const quads = [];
      for (let r = 0; r < gridRows; r++) {
        for (let c = 0; c < gridCols; c++) {
          const idxTL = r * (gridCols + 1) + c;
          const idxTR = idxTL + 1;
          const idxBL = (r + 1) * (gridCols + 1) + c;
          const idxBR = idxBL + 1;

          const vTL = projectedMesh[idxTL];
          const vTR = projectedMesh[idxTR];
          const vBR = projectedMesh[idxBR];
          const vBL = projectedMesh[idxBL];

          if (vTL.proj && vTR.proj && vBR.proj && vBL.proj) {
            const avgDepth = (vTL.proj.depth + vTR.proj.depth + vBR.proj.depth + vBL.proj.depth) * 0.25;
            const avgNormX = (vTL.normX + vTR.normX) * 0.5;
            const avgNormY = (vTL.normY + vBL.normY) * 0.5;
            const avgElev = (vTL.rawElev + vTR.rawElev + vBR.rawElev + vBL.rawElev) * 0.25;

            quads.push({
              tl: vTL.proj,
              tr: vTR.proj,
              br: vBR.proj,
              bl: vBL.proj,
              depth: avgDepth,
              fillColor: getScalarColor(avgNormX, avgNormY, avgElev)
            });
          }
        }
      }

      // Sort quads back-to-front
      quads.sort((a, b) => b.depth - a.depth);

      // Draw surface quads
      quads.forEach((q) => {
        ctx.beginPath();
        ctx.moveTo(q.tl.screenX, q.tl.screenY);
        ctx.lineTo(q.tr.screenX, q.tr.screenY);
        ctx.lineTo(q.br.screenX, q.br.screenY);
        ctx.lineTo(q.bl.screenX, q.bl.screenY);
        ctx.closePath();
        ctx.fillStyle = q.fillColor;
        ctx.fill();

        if (showWireframe) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      });

      // 4. Subtle Contour Iso-lines across Elevation Gradients
      if (showWireframe) {
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.25)';
        ctx.lineWidth = 0.8;
        for (let r = 0; r <= gridRows; r += 4) {
          ctx.beginPath();
          let started = false;
          for (let c = 0; c <= gridCols; c++) {
            const v = projectedMesh[r * (gridCols + 1) + c];
            if (v.proj) {
              if (!started) {
                ctx.moveTo(v.proj.screenX, v.proj.screenY);
                started = true;
              } else {
                ctx.lineTo(v.proj.screenX, v.proj.screenY);
              }
            }
          }
          if (started) ctx.stroke();
        }
      }

      // 5. Atmospheric Circulation Vector Streamlines (Wind particles)
      if (showWindVectors) {
        ctx.save();
        const particles = particlesRef.current;
        particles.forEach((p) => {
          // Wind blowing from Arabian Sea (West, negative X) towards Inland Foothills (East, positive X)
          p.x += p.speed * 1.2;
          p.y += Math.sin(p.x * 0.03) * 0.4;
          p.life++;

          // Reset particle if out of terrain bounds or lifetime expired
          if (p.x > terrainWidth * 0.52 || p.life > p.maxLife) {
            p.x = -terrainWidth * 0.52;
            p.y = (Math.random() - 0.5) * terrainHeight;
            p.life = 0;
            p.tail = [];
          }

          const normX = Math.min(1, Math.max(0, (p.x + terrainWidth * 0.5) / terrainWidth));
          const normY = Math.min(1, Math.max(0, (p.y + terrainHeight * 0.5) / terrainHeight));
          const terrainElev = getTerrainElevation(normX, normY) * 0.28 * elevationExaggeration;
          const currentZ = terrainElev + p.z;

          const pt = project(p.x, p.y, currentZ);
          if (pt) {
            p.tail.push(pt);
            if (p.tail.length > 5) p.tail.shift();

            if (p.tail.length > 1) {
              ctx.beginPath();
              ctx.moveTo(p.tail[0].screenX, p.tail[0].screenY);
              for (let i = 1; i < p.tail.length; i++) {
                ctx.lineTo(p.tail[i].screenX, p.tail[i].screenY);
              }
              const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.45;
              ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
              ctx.lineWidth = Math.max(0.8, pt.scale * 1.2);
              ctx.stroke();
            }
          }
        });
        ctx.restore();
      }

      // 6. Project & Render Spatial Interactive Entities (Taluks & AWS Stations)
      const entitiesToDraw = [];

      // A) Taluks
      if (showTalukPins && taluks) {
        Object.entries(taluks).forEach(([key, taluk]) => {
          if (!taluk.centroid) return;
          const normX = (taluk.centroid.lon - GEO_BOUNDS.minLon) / (GEO_BOUNDS.maxLon - GEO_BOUNDS.minLon);
          const normY = (taluk.centroid.lat - GEO_BOUNDS.minLat) / (GEO_BOUNDS.maxLat - GEO_BOUNDS.minLat);
          const worldX = (normX - 0.5) * terrainWidth;
          const worldY = (normY - 0.5) * terrainHeight;
          const groundElev = getTerrainElevation(normX, normY) * 0.28 * elevationExaggeration;
          const pinHeight = 22; // Height of elevation beacon

          const basePt = project(worldX, worldY, groundElev);
          const topPt = project(worldX, worldY, groundElev + pinHeight);

          if (basePt && topPt) {
            entitiesToDraw.push({
              key,
              type: 'taluk',
              name: taluk.shortName || key,
              fullName: taluk.name,
              coordinates: taluk.coordinates,
              depth: topPt.depth,
              basePt,
              topPt,
              isSelected: selectedEntityKey === key && selectedEntityType === 'taluk',
              isHovered: hoverEntityRef.current?.key === key
            });
          }
        });
      }

      // B) Weather Stations
      if (showStations && stations) {
        stations.forEach((st) => {
          const parts = st.coordinates.split(',');
          const lat = parseFloat(parts[0]);
          const lon = parseFloat(parts[1]);
          if (isNaN(lat) || isNaN(lon)) return;

          const normX = (lon - GEO_BOUNDS.minLon) / (GEO_BOUNDS.maxLon - GEO_BOUNDS.minLon);
          const normY = (lat - GEO_BOUNDS.minLat) / (GEO_BOUNDS.maxLat - GEO_BOUNDS.minLat);
          const worldX = (normX - 0.5) * terrainWidth;
          const worldY = (normY - 0.5) * terrainHeight;
          const groundElev = getTerrainElevation(normX, normY) * 0.28 * elevationExaggeration;
          const pinHeight = 16;

          const basePt = project(worldX, worldY, groundElev);
          const topPt = project(worldX, worldY, groundElev + pinHeight);

          if (basePt && topPt) {
            entitiesToDraw.push({
              key: st.id,
              type: 'station',
              name: st.name.replace('AWS ', ''),
              fullName: st.name,
              coordinates: st.coordinates,
              depth: topPt.depth,
              basePt,
              topPt,
              isSelected: selectedEntityKey === st.id && selectedEntityType === 'station',
              isHovered: hoverEntityRef.current?.key === st.id
            });
          }
        });
      }

      // Sort entities back-to-front
      entitiesToDraw.sort((a, b) => b.depth - a.depth);

      // Draw Entities
      entitiesToDraw.forEach((e) => {
        const isTaluk = e.type === 'taluk';
        const primaryColor = isTaluk
          ? (e.isSelected ? '#38bdf8' : '#06b6d4')
          : (e.isSelected ? '#fb7185' : '#f43f5e');

        // Ground anchor halo ring
        ctx.beginPath();
        ctx.ellipse(e.basePt.screenX, e.basePt.screenY, 7 * e.basePt.scale, 3.5 * e.basePt.scale, 0, 0, Math.PI * 2);
        ctx.fillStyle = e.isSelected ? 'rgba(6, 182, 212, 0.4)' : 'rgba(255, 255, 255, 0.15)';
        ctx.fill();
        ctx.strokeStyle = primaryColor;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Vertical Guide Line (Elevation Tether)
        ctx.beginPath();
        ctx.moveTo(e.basePt.screenX, e.basePt.screenY);
        ctx.lineTo(e.topPt.screenX, e.topPt.screenY);
        ctx.strokeStyle = e.isSelected ? primaryColor : 'rgba(255, 255, 255, 0.45)';
        ctx.lineWidth = e.isSelected ? 1.8 : 1.0;
        ctx.stroke();

        // Beacon Top Pin Node
        const pinRadius = (e.isSelected ? 6.5 : (e.isHovered ? 5.5 : 4.2)) * e.topPt.scale;
        ctx.beginPath();
        ctx.arc(e.topPt.screenX, e.topPt.screenY, pinRadius, 0, Math.PI * 2);
        ctx.fillStyle = primaryColor;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Pulsing selection ring for active target
        if (e.isSelected) {
          const pulseR = pinRadius + Math.sin(currentTime * 0.006) * 4 + 4;
          ctx.beginPath();
          ctx.arc(e.topPt.screenX, e.topPt.screenY, pulseR, 0, Math.PI * 2);
          ctx.strokeStyle = primaryColor;
          ctx.lineWidth = 1.5;
          ctx.setLineDash([3, 3]);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // HUD Label Tag
        const tagX = e.topPt.screenX + 9;
        const tagY = e.topPt.screenY - 7;
        const text = e.name;
        ctx.font = `${e.isSelected ? 'bold ' : ''}${Math.round(10.5 * Math.min(1.2, Math.max(0.85, e.topPt.scale)))}px 'Plus Jakarta Sans', sans-serif`;
        const textMetrics = ctx.measureText(text);
        const tagW = textMetrics.width + 10;
        const tagH = 16;

        ctx.fillStyle = e.isSelected
          ? 'rgba(12, 20, 39, 0.95)'
          : (e.isHovered ? 'rgba(17, 28, 53, 0.9)' : 'rgba(8, 13, 26, 0.8)');
        ctx.strokeStyle = e.isSelected ? primaryColor : 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(tagX, tagY - tagH * 0.75, tagW, tagH, 3);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = e.isSelected ? '#f8fafc' : '#cbd5e1';
        ctx.fillText(text, tagX + 5, tagY + 3);
      });

      // 7. On-Screen 3D Orientation Compass Gizmo (Top Left)
      ctx.save();
      const compassX = 54;
      const compassY = 54;
      const compassLen = 24;

      // Project North (Y-axis positive in model space)
      const northProj = {
        x: compassX + (-sinYaw * compassLen),
        y: compassY - (cosYaw * cosPitch * compassLen)
      };
      // Project East (X-axis positive in model space)
      const eastProj = {
        x: compassX + (cosYaw * compassLen),
        y: compassY - (sinYaw * cosPitch * compassLen)
      };

      // Outer ring
      ctx.beginPath();
      ctx.arc(compassX, compassY, 32, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(12, 20, 39, 0.6)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // North Needle (Cyan)
      ctx.beginPath();
      ctx.moveTo(compassX, compassY);
      ctx.lineTo(northProj.x, northProj.y);
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 2.2;
      ctx.stroke();
      ctx.fillStyle = '#06b6d4';
      ctx.font = 'bold 9px monospace';
      ctx.fillText('N', northProj.x - 3, northProj.y - 4);

      // East Needle (Dim)
      ctx.beginPath();
      ctx.moveTo(compassX, compassY);
      ctx.lineTo(eastProj.x, eastProj.y);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 1.4;
      ctx.stroke();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.fillText('E', eastProj.x + 3, eastProj.y + 3);
      ctx.restore();

      // Save projected entities for hit-testing
      canvas._projectedEntities = entitiesToDraw;

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    activeVariable,
    metricValue,
    isCloudObscured,
    selectedEntityKey,
    selectedEntityType,
    taluks,
    stations,
    showWireframe,
    showStations,
    showTalukPins,
    showWindVectors,
    elevationExaggeration,
    isAutoRotating,
    onFpsUpdate
  ]);

  // Mouse / Touch Interaction Handlers
  const handleMouseDown = (e) => {
    if (e.button === 2 || e.shiftKey) {
      isPanningRef.current = true;
    } else {
      isDraggingRef.current = true;
    }
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };

    if (isDraggingRef.current) {
      targetCameraRef.current.yaw += dx * 0.0075;
      targetCameraRef.current.pitch = Math.max(0.1, Math.min(1.5, targetCameraRef.current.pitch + dy * 0.0075));
    } else if (isPanningRef.current) {
      targetCameraRef.current.targetX += dx * 0.8;
      targetCameraRef.current.targetY += dy * 0.8;
    } else {
      // Hit testing for hover feedback
      const canvas = canvasRef.current;
      if (!canvas || !canvas._projectedEntities) return;
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let found = null;
      for (const ent of canvas._projectedEntities) {
        const dist = Math.hypot(mouseX - ent.topPt.screenX, mouseY - ent.topPt.screenY);
        if (dist < 14) {
          found = ent;
          break;
        }
      }
      hoverEntityRef.current = found;
      canvas.style.cursor = found ? 'pointer' : (isDraggingRef.current ? 'grabbing' : 'grab');
    }
  };

  const handleMouseUp = (e) => {
    // If not a drag, check if user clicked on a node
    if (isDraggingRef.current && Math.abs(e.movementX || 0) < 3 && Math.abs(e.movementY || 0) < 3) {
      const canvas = canvasRef.current;
      if (canvas && canvas._projectedEntities) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        for (const ent of canvas._projectedEntities) {
          const dist = Math.hypot(mouseX - ent.topPt.screenX, mouseY - ent.topPt.screenY);
          if (dist < 16) {
            if (onSelectEntity) {
              onSelectEntity(ent.key, ent.type);
            }
            break;
          }
        }
      }
    }
    isDraggingRef.current = false;
    isPanningRef.current = false;
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomDelta = e.deltaY * 0.45;
    targetCameraRef.current.distance = Math.max(220, Math.min(850, targetCameraRef.current.distance + zoomDelta));
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent right-click menu to allow panning
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        userSelect: 'none'
      }}
    >
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
        onContextMenu={handleContextMenu}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          cursor: 'grab'
        }}
      />
    </div>
  );
}
