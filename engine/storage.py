import json
from pathlib import Path
from datetime import datetime

from .climate_state import ClimateState


class Storage:
    """
    Handles saving and loading climate states.
    """

    def __init__(self, data_folder="data/current"):
        self.data_folder = Path(data_folder)
        self.data_folder.mkdir(parents=True, exist_ok=True)

    def save_state(self, state: ClimateState):
        filename = self.data_folder / f"{state.timestamp.strftime('%Y%m%d_%H%M%S')}.json"

        data = {
            "timestamp": state.timestamp.isoformat(),
            "rainfall": state.rainfall,
            "max_temp": state.max_temp,
            "min_temp": state.min_temp,
            "lst": state.lst,
            "sst": state.sst
        }

        with open(filename, "w") as file:
            json.dump(data, file, indent=4)

        return filename

    def load_state(self, filename):
        with open(filename, "r") as file:
            data = json.load(file)

        return ClimateState(
            timestamp=datetime.fromisoformat(data["timestamp"]),
            rainfall=data["rainfall"],
            max_temp=data["max_temp"],
            min_temp=data["min_temp"],
            lst=data["lst"],
            sst=data["sst"]
        )