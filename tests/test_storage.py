from datetime import datetime

from engine.climate_state import ClimateState
from engine.storage import Storage


storage = Storage()

state = ClimateState(
    timestamp=datetime.now(),
    rainfall=42.5,
    max_temp=32,
    min_temp=25,
    lst=34,
    sst=29
)

filename = storage.save_state(state)

print("Saved:", filename)

loaded = storage.load_state(filename)

print("Loaded:", loaded)