import Plotly from "plotly.js-dist-min";

// ==========================================
// REAL ERNAKULAM MAP + ROADS
// ==========================================

/**
 * Render the verified Ernakulam GIS layers prepared for the visualization
 * project. The data lives in public so Vite can serve the GeoJSON unchanged.
 */
export async function createRealErnakulamMap(mapContainer) {

    if (!mapContainer) {
        console.error("Ernakulam map container not found.");
        return;
    }

    try {

        console.log("Loading Ernakulam GIS layers...");

        // ==========================================
        // LOAD DISTRICT
        // ==========================================

        const districtResponse =
            await fetch("/ernakulam-map-data/ernakulam.geojson");

        if (!districtResponse.ok) {
            throw new Error(
                `Could not load Ernakulam GeoJSON: ${districtResponse.status}`
            );
        }

        const districtGeoJSON =
            await districtResponse.json();

        console.log("Ernakulam district loaded.");

        // ==========================================
        // LOAD CLIPPED ROADS
        // ==========================================

        const roadsResponse =
            await fetch("/ernakulam-map-data/roads_ernakulam.geojson");

        if (!roadsResponse.ok) {
            throw new Error(
                `Could not load roads GeoJSON: ${roadsResponse.status}`
            );
        }

        const roadsGeoJSON =
            await roadsResponse.json();

        console.log(
            "Ernakulam roads loaded:",
            roadsGeoJSON.features.length,
            "features"
        );

        // ==========================================
// LOAD CLIPPED WATERWAYS
// ==========================================

const waterwaysResponse =
    await fetch("/ernakulam-map-data/waterways_ernakulam.geojson");

if (!waterwaysResponse.ok) {
    throw new Error(
        `Could not load waterways GeoJSON: ${waterwaysResponse.status}`
    );
}

const waterwaysGeoJSON =
    await waterwaysResponse.json();

console.log(
    "Ernakulam waterways loaded:",
    waterwaysGeoJSON.features.length,
    "features"
);

// ==========================================
// LOAD CLIPPED HOSPITALS
// ==========================================

const hospitalsResponse =
    await fetch("/ernakulam-map-data/hospitals_ernakulam.geojson");

if (!hospitalsResponse.ok) {
    throw new Error(
        `Could not load hospitals GeoJSON: ${hospitalsResponse.status}`
    );
}

const hospitalsGeoJSON =
    await hospitalsResponse.json();

console.log(
    "Ernakulam hospitals loaded:",
    hospitalsGeoJSON.features.length,
    "features"
);

// ==========================================
// LOAD CLIPPED RAILWAY STATIONS
// ==========================================

const railwayResponse =
    await fetch("/ernakulam-map-data/railway_stations_ernakulam.geojson");

if (!railwayResponse.ok) {
    throw new Error(
        `Could not load railway stations GeoJSON: ${railwayResponse.status}`
    );
}

const railwayGeoJSON =
    await railwayResponse.json();

console.log(
    "Ernakulam railway stations loaded:",
    railwayGeoJSON.features.length,
    "features"
);

// ==========================================
// LOAD CLIPPED AIRPORTS
// ==========================================

const airportsResponse =
    await fetch("/ernakulam-map-data/airports_ernakulam.geojson");

if (!airportsResponse.ok) {
    throw new Error(
        `Could not load airports GeoJSON: ${airportsResponse.status}`
    );
}

const airportsGeoJSON =
    await airportsResponse.json();

console.log(
    "Ernakulam airports loaded:",
    airportsGeoJSON.features.length,
    "features"
);

        // ==========================================
        // DISTRICT LAYER
        // ==========================================

        const districtLayer = {

            type: "choroplethmap",

            name: "District Boundary",

            geojson: districtGeoJSON,

            locations: ["Ernakulam"],

            featureidkey:
                "properties.DISTRICT",

            z: [1],

            colorscale: [
                [0, "#2f80ed"],
                [1, "#2f80ed"]
            ],

            zmin: 0,
            zmax: 1,

            marker: {

                opacity: 0.35,

                line: {
                    color: "#00ffff",
                    width: 3
                }

            },

            showscale: false,

            hovertemplate:
                "<b>Ernakulam District</b><br>" +
                "Kerala, India" +
                "<extra></extra>"
        };

        // ==========================================
        // ROAD COORDINATES
        // ==========================================

        const roadLatitudes = [];
        const roadLongitudes = [];

        for (const feature of roadsGeoJSON.features) {

            if (!feature.geometry) {
                continue;
            }

            const geometry =
                feature.geometry;

            // --------------------------------------
            // LINESTRING
            // --------------------------------------

            if (geometry.type === "LineString") {

                for (const coordinate of geometry.coordinates) {

                    const lon = coordinate[0];
                    const lat = coordinate[1];

                    roadLongitudes.push(lon);
                    roadLatitudes.push(lat);
                }

                // Break between road segments
                roadLongitudes.push(null);
                roadLatitudes.push(null);
            }

            // --------------------------------------
            // MULTILINESTRING
            // --------------------------------------

            else if (
                geometry.type === "MultiLineString"
            ) {

                for (
                    const line
                    of geometry.coordinates
                ) {

                    for (
                        const coordinate
                        of line
                    ) {

                        const lon =
                            coordinate[0];

                        const lat =
                            coordinate[1];

                        roadLongitudes.push(lon);
                        roadLatitudes.push(lat);
                    }

                    // Break between lines
                    roadLongitudes.push(null);
                    roadLatitudes.push(null);
                }
            }
        }

        console.log(
            "Road coordinate points:",
            roadLatitudes.length
        );

        // ==========================================
        // ROAD LAYER
        // ==========================================

        const roadLayer = {

            type: "scattermap",

            name: "Roads",

            mode: "lines",

            lat: roadLatitudes,

            lon: roadLongitudes,

            line: {

                color: "#333333",

                width: 1.5

            },

            opacity: 0.9,

            hovertemplate:
                "<b>Road</b><br>" +
                "Ernakulam District" +
                "<extra></extra>"
        };
        // ==========================================
// WATERWAY COORDINATES
// ==========================================

const waterLatitudes = [];
const waterLongitudes = [];

for (const feature of waterwaysGeoJSON.features) {

    if (!feature.geometry) {
        continue;
    }

    const geometry = feature.geometry;

    // --------------------------------------
    // LINESTRING
    // --------------------------------------

    if (geometry.type === "LineString") {

        for (const coordinate of geometry.coordinates) {

            waterLongitudes.push(coordinate[0]);
            waterLatitudes.push(coordinate[1]);

        }

        waterLongitudes.push(null);
        waterLatitudes.push(null);
    }

    // --------------------------------------
    // MULTILINESTRING
    // --------------------------------------

    else if (
        geometry.type === "MultiLineString"
    ) {

        for (
            const line
            of geometry.coordinates
        ) {

            for (
                const coordinate
                of line
            ) {

                waterLongitudes.push(
                    coordinate[0]
                );

                waterLatitudes.push(
                    coordinate[1]
                );

            }

            waterLongitudes.push(null);
            waterLatitudes.push(null);
        }
    }
}

// ==========================================
// WATERWAY LAYER
// ==========================================

const waterwayLayer = {

    type: "scattermap",

    name: "Waterways",

    mode: "lines",

    lat: waterLatitudes,

    lon: waterLongitudes,

    line: {

        color: "#0077ff",

        width: 2.2

    },

    opacity: 0.9,

    hovertemplate:
        "<b>Waterway</b><br>" +
        "Ernakulam District" +
        "<extra></extra>"
};

// ==========================================
// HOSPITAL COORDINATES
// ==========================================

const hospitalLatitudes = [];
const hospitalLongitudes = [];
const hospitalNames = [];

for (const feature of hospitalsGeoJSON.features) {

    if (!feature.geometry) {
        continue;
    }

    const geometry = feature.geometry;

    if (geometry.type === "Point") {

        hospitalLongitudes.push(
            geometry.coordinates[0]
        );

        hospitalLatitudes.push(
            geometry.coordinates[1]
        );

        hospitalNames.push(
            feature.properties?.name ||
            feature.properties?.NAME ||
            "Hospital"
        );
    }
}

// ==========================================
// HOSPITAL LAYER
// ==========================================

const hospitalLayer = {

    type: "scattermap",

    name: "Hospitals",

    mode: "markers",

    lat: hospitalLatitudes,

    lon: hospitalLongitudes,

    text: hospitalNames,

    marker: {

        size: 7,

        color: "#e53935",

        symbol: "circle"

    },

    hovertemplate:
        "<b>%{text}</b><br>" +
        "Hospital<br>" +
        "Ernakulam District" +
        "<extra></extra>"
};

// ==========================================
// RAILWAY STATION COORDINATES
// ==========================================

const railwayLatitudes = [];
const railwayLongitudes = [];
const railwayNames = [];

for (const feature of railwayGeoJSON.features) {

    if (!feature.geometry) {
        continue;
    }

    const geometry = feature.geometry;

    if (geometry.type === "Point") {

        railwayLongitudes.push(
            geometry.coordinates[0]
        );

        railwayLatitudes.push(
            geometry.coordinates[1]
        );

        railwayNames.push(
            feature.properties?.name ||
            feature.properties?.NAME ||
            "Railway Station"
        );
    }
}

// ==========================================
// RAILWAY STATION LAYER
// ==========================================

const railwayLayer = {

    type: "scattermap",

    name: "Railway Stations",

    mode: "markers",

    lat: railwayLatitudes,

    lon: railwayLongitudes,

    text: railwayNames,

    marker: {

        size: 11,

        color: "#8e44ad",

        symbol: "diamond"

    },

    hovertemplate:
        "<b>%{text}</b><br>" +
        "Railway Station<br>" +
        "Ernakulam District" +
        "<extra></extra>"
};

// ==========================================
// AIRPORT COORDINATES
// ==========================================

const airportLatitudes = [];
const airportLongitudes = [];
const airportNames = [];

for (const feature of airportsGeoJSON.features) {

    if (!feature.geometry) {
        continue;
    }

    const geometry = feature.geometry;

    if (geometry.type === "Point") {

        airportLongitudes.push(
            geometry.coordinates[0]
        );

        airportLatitudes.push(
            geometry.coordinates[1]
        );

        airportNames.push(
            feature.properties?.name ||
            feature.properties?.NAME ||
            "Airport"
        );
    }
}

// ==========================================
// AIRPORT LAYER
// ==========================================

// ==========================================
// AIRPORT LAYER
// ==========================================

const airportLayer = {

    type: "scattermap",

    name: "Airports",

    mode: "markers+text",

    lat: airportLatitudes,

    lon: airportLongitudes,

    text: airportNames,

    textposition: "top center",

    textfont: {
        size: 13,
        color: "#000000"
    },

    marker: {

        size: 24,

        color: "#ff9800",

        symbol: "triangle-up",

        line: {
            color: "#000000",
            width: 3
        }

    },

    hovertemplate:
        "<b>%{text}</b><br>" +
        "Airport<br>" +
        "Latitude: %{lat}<br>" +
        "Longitude: %{lon}" +
        "<extra></extra>"
};
        // ==========================================
        // ALL MAP LAYERS
        // ==========================================

   const data = [
    districtLayer,
    roadLayer,
    waterwayLayer,
    hospitalLayer,
    railwayLayer,
    airportLayer
];
        // ==========================================
        // MAP LAYOUT
        // ==========================================

        // ==========================================
// MAP LAYOUT
// ==========================================

const layout = {

    margin: {
        l: 0,
        r: 0,
        t: 0,
        b: 0
    },

    paper_bgcolor: "rgba(0,0,0,0)",

    plot_bgcolor: "rgba(0,0,0,0)",

    map: {

        style: "white-bg",

        center: {
            lat: 10.05,
            lon: 76.50
        },

        zoom: 8.5

    },

    legend: {

        x: 0.02,

        y: 0.98,

        xanchor: "left",

        yanchor: "top",

        bgcolor: "rgba(20, 25, 40, 0.90)",

        bordercolor: "#444",

        borderwidth: 1,

        font: {
            color: "#ffffff",
            size: 13
        }

    }

};
        // ==========================================
        // CONFIG
        // ==========================================

        const config = {

            responsive: true,

            displaylogo: false,

            scrollZoom: true,

            doubleClick: "reset",

            modeBarButtonsToRemove: [
                "lasso2d",
                "select2d"
            ]

        };

        // ==========================================
        // CREATE MAP
        // ==========================================

        await Plotly.newPlot(

            mapContainer,

            data,

            layout,

            config

        );

        console.log(
            "Ernakulam map + roads loaded successfully."
        );

    }
    catch (error) {

        console.error(
            "Error loading Ernakulam GIS map:",
            error
        );

    }

}


// ==========================================
// START
// ==========================================

