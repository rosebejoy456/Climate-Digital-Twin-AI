// ==========================================
// Climate Digital Twin API
// ==========================================

const API_BASE_URL =
    "http://127.0.0.1:8000";


// ==========================================
// Get Ernakulam Digital Twin State
// ==========================================

export async function getClimateData(
    latitude,
    longitude,
    country
) {

    console.log(
        "Requesting Digital Twin state:",
        {
            latitude,
            longitude,
            country
        }
    );


    try {

        const response =
            await fetch(
                `${API_BASE_URL}/prediction/multiple`
            );


        if (!response.ok) {

            throw new Error(
                `API request failed: ${response.status}`
            );
        }


        const data =
            await response.json();


        console.log(
            "Digital Twin state received:",
            data
        );


        return {

            temperature:
                data.predictions
                    ?.temperature_celsius
                ?? null,

            rainfall:
                data.predictions
                    ?.rainfall_mm
                ?? null,

            pressure:
                data.predictions
                    ?.pressure_hpa
                ?? null,

            lst:
                data.predictions
                    ?.lst_celsius
                ?? null,

            ndvi:
                data.predictions
                    ?.ndvi
                ?? null,

            date:
                data.date
                ?? null,

            modelsLoaded:
                data.models_loaded
                ?? 0
        };


    } catch (error) {

        console.error(
            "Digital Twin API error:",
            error
        );


        return {

            temperature: null,

            rainfall: null,

            pressure: null,

            lst: null,

            ndvi: null,

            date: null,

            modelsLoaded: 0
        };
    }
}
export async function getClimateExplanation() {
    console.log("Requesting AI explanation...");

    try {
        const response = await fetch(
            `${API_BASE_URL}/prediction/multiple/explain`
        );

        if (!response.ok) {
            throw new Error(
                `SHAP API request failed: ${response.status}`
            );
        }

        const data = await response.json();

        console.log("AI explanation received:", data);

        return data;

    } catch (error) {
        console.error(
            "Failed to fetch AI explanation:",
            error
        );

        return null;
    }
}
export async function runWhatIfSimulation(scenario) {
    console.log("Running What-If simulation:", scenario);

    try {
        const response = await fetch(
            `${API_BASE_URL}/simulation/what-if`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    rainfall_change_percent:
                        scenario.rainfall_change_percent ?? 0,

                    temperature_change_c:
                        scenario.temperature_change_c ?? 0,

                    pressure_change_hpa:
                        scenario.pressure_change_hpa ?? 0,

                    lst_change_c:
                        scenario.lst_change_c ?? 0,

                    ndvi_change_percent:
                        scenario.ndvi_change_percent ?? 0,

                    rainfall_mm: 0,
                    temperature_celsius: 0,
                    pressure_hpa: 0,
                    lst_celsius: 0,
                    ndvi: 0
                })
            }
        );

        if (!response.ok) {
            throw new Error(
                `What-If API request failed: ${response.status}`
            );
        }

        const data = await response.json();

        console.log("What-If simulation received:", data);

        return data;

    } catch (error) {
        console.error(
            "What-If simulation error:",
            error
        );

        return null;
    }
}