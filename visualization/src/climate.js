/**
 * Climate API manager
 *
 * Connects the Three.js frontend to the FastAPI
 * Ernakulam climate prediction backend.
 */

const API_BASE_URL =
    "https://hunting-decal-pulmonary.ngrok-free.dev";


/**
 * Get current climate predictions
 */
export async function getClimateData(
    latitude,
    longitude,
    country
) {

    console.log(
        "Requesting climate data:",
        {
            latitude,
            longitude,
            country
        }
    );

    try {

        const response = await fetch(
            `${API_BASE_URL}/prediction/multiple`,
            {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            }
        );


        if (!response.ok) {

            throw new Error(
                `Climate API error: ${response.status}`
            );

        }


        const data =
            await response.json();


        console.log(
            "Climate API response:",
            data
        );


        const predictions =
            data.predictions || {};


        return {

            date:
                data.date ?? null,

            model:
                data.model ?? null,

            rainfall:
                predictions.rainfall_mm ?? null,

            temperature:
                predictions.temperature_celsius ?? null,

            pressure:
                predictions.pressure_hpa ?? null,

            lst:
                predictions.lst_celsius ?? null,

            ndvi:
                predictions.ndvi ?? null

        };

    }
    catch (error) {

        console.error(
            "Failed to fetch climate data:",
            error
        );


        return {

            date: null,
            model: null,

            rainfall: null,
            temperature: null,
            pressure: null,
            lst: null,
            ndvi: null

        };

    }

}


/**
 * Run What-If climate simulation
 *
 * This keeps compatibility with main.js
 * and connects the frontend to the FastAPI
 * simulation endpoint.
 */
export async function runWhatIfSimulation(
    scenario
) {

    console.log(
        "Running What-If simulation:",
        scenario
    );


    try {

        const response = await fetch(
            `${API_BASE_URL}/simulation/what-if`,
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json",

                    "Accept":
                        "application/json"
                },

                body: JSON.stringify(
                    scenario
                )
            }
        );


        if (!response.ok) {

            throw new Error(
                `What-If API error: ${response.status}`
            );

        }


        const data =
            await response.json();


        console.log(
            "What-If API response:",
            data
        );


        return data;

    }
    catch (error) {

        console.error(
            "Failed to run What-If simulation:",
            error
        );


        return null;

    }

}