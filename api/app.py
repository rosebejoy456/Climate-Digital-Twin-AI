# pyrefly: ignore [missing-import]
# Create sample climate state
from fastapi import FastAPI
from datetime import datetime

from engine.climate_state import ClimateState
from engine.state_manager import StateManager

app = FastAPI(
    title="Climate Digital Twin API",
    description="Backend API for the Climate Digital Twin of Ernakulam",
    version="1.0.0"
)

# ----------------------------------------------------
# Create a sample climate state (dummy data for now)
# ----------------------------------------------------
sample_state = ClimateState(
    timestamp=datetime.now(),
    rainfall=42.5,
    max_temp=32,
    min_temp=25,
    lst=34,
    sst=29
)

# Initialize the State Manager
manager = StateManager()

# Store the sample state
manager.update_state(sample_state)


# ----------------------------------------------------
# Home Route
# ----------------------------------------------------
@app.get("/")
def home():
    return {
        "message": "Welcome to the Climate Digital Twin API!"
    }


# ----------------------------------------------------
# Current Climate State
# ----------------------------------------------------
@app.get("/state/current")
def get_current_state():

    current = manager.get_current_state()

    if current is None:
        return {
            "message": "No climate data available."
        }

    return {
        "timestamp": current.timestamp.isoformat(),
        "rainfall": current.rainfall,
        "max_temp": current.max_temp,
        "min_temp": current.min_temp,
        "lst": current.lst,
        "sst": current.sst
    }