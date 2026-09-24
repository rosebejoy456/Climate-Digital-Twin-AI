import * as THREE from "three";

function project(longitude, latitude, terrain) {
    const data = terrain.userData.terrain;
    const x =
        ((longitude - data.minLongitude) /
            (data.maxLongitude - data.minLongitude) -
            0.5) *
        data.width;
    const z =
        ((latitude - data.minLatitude) /
            (data.maxLatitude - data.minLatitude) -
            0.5) *
        data.depth;

    const row = THREE.MathUtils.clamp(
        Math.round(
            ((latitude - data.minLatitude) /
                (data.maxLatitude - data.minLatitude)) *
                (data.rows - 1)
        ),
        0,
        data.rows - 1
    );
    const col = THREE.MathUtils.clamp(
        Math.round(
            ((longitude - data.minLongitude) /
                (data.maxLongitude - data.minLongitude)) *
                (data.cols - 1)
        ),
        0,
        data.cols - 1
    );
    const elevation = data.elevations[row][col];
    const y = (elevation - data.minElevation) * data.heightScale;

    return new THREE.Vector3(x, y, z);
}

function withinTerrain(coordinate, terrain) {
    const [longitude, latitude] = coordinate;
    const data = terrain.userData.terrain;

    return (
        longitude >= data.minLongitude &&
        longitude <= data.maxLongitude &&
        latitude >= data.minLatitude &&
        latitude <= data.maxLatitude
    );
}

function createLine(coordinates, terrain, material, lift) {
    const points = coordinates
        .filter((coordinate) => withinTerrain(coordinate, terrain))
        .map(([longitude, latitude]) => {
            const point = project(longitude, latitude, terrain);
            point.y += lift;
            return point;
        });

    return points.length > 1
        ? new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material)
        : null;
}

async function fetchGeoJson(path) {
    const response = await fetch(path);

    if (!response.ok) {
        throw new Error(`Could not load ${path}: ${response.status}`);
    }

    return response.json();
}

function addLineFeatures(group, geojson, terrain, color, lift) {
    const material = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity: 0.88,
        depthTest: false,
        depthWrite: false
    });

    for (const feature of geojson.features) {
        const geometry = feature.geometry;
        if (!geometry) continue;

        const lines =
            geometry.type === "LineString"
                ? [geometry.coordinates]
                : geometry.type === "MultiLineString"
                    ? geometry.coordinates
                    : [];

        for (const coordinates of lines) {
            const line = createLine(coordinates, terrain, material, lift);
            if (line) group.add(line);
        }
    }
}

function featureCoordinate(feature) {
    if (feature.geometry?.type === "Point") {
        return feature.geometry.coordinates;
    }

    if (feature.geometry?.type === "Polygon") {
        const ring = feature.geometry.coordinates[0];
        return ring.reduce(
            ([longitude, latitude], point) =>
                [longitude + point[0] / ring.length, latitude + point[1] / ring.length],
            [0, 0]
        );
    }

    return null;
}

function addFacilityMarkers(group, geojson, terrain, color, type) {
    const markerGeometry = new THREE.BoxGeometry(0.035, 1, 0.035);
    const markerMaterial = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.25
    });

    for (const feature of geojson.features) {
        const coordinate = featureCoordinate(feature);
        if (!coordinate || !withinTerrain(coordinate, terrain)) continue;

        // These are lightweight 3D facility proxies, not surveyed building
        // footprints. Their locations still come from the source GeoJSON.
        const height =
            type === "Airport" ? 0.055 :
            type === "Hospital" ? 0.09 : 0.065;
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        const position = project(coordinate[0], coordinate[1], terrain);
        marker.scale.y = height;
        marker.position.set(position.x, position.y + height / 2, position.z);
        marker.userData = {
            type,
            name: feature.properties?.name || type
        };
        group.add(marker);
    }
}

// A local, topographic infrastructure layer. It deliberately uses the same
// GeoJSON sources as the globe but reprojects them to the terrain's flat map.
export async function addTerrainInfrastructure(parent, terrain) {
    const group = new THREE.Group();
    group.name = "Ernakulam Terrain Infrastructure";
    group.visible = false;

    try {
        const [roads, waterways, hospitals, stations, airports, colleges] = await Promise.all([
            fetchGeoJson("./data/roads.geojson"),
            fetchGeoJson("./data/waterways.geojson"),
            fetchGeoJson("./data/hospitals.geojson"),
            fetchGeoJson("./data/railway_stations.geojson"),
            fetchGeoJson("./data/airports.geojson"),
            fetchGeoJson("./data/colleges.geojson")
        ]);

        addLineFeatures(group, roads, terrain, 0xffc857, 0.014);
        addLineFeatures(group, waterways, terrain, 0x35b9ff, 0.02);
        addFacilityMarkers(group, hospitals, terrain, 0xff4e6a, "Hospital");
        addFacilityMarkers(group, stations, terrain, 0xffe564, "Railway station");
        addFacilityMarkers(group, airports, terrain, 0x5dffad, "Airport");
        addFacilityMarkers(group, colleges, terrain, 0xa78bfa, "College");
        parent.add(group);
    } catch (error) {
        console.error("Failed to load terrain infrastructure:", error);
    }

    return group;
}
