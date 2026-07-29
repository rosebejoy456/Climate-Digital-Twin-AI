from datetime import datetime

from engine.climate_state import ClimateState
from engine.state_manager import StateManager

manager = StateManager()

state = ClimateState(
    timestamp=datetime.now(),
    rainfall=35.4,
    max_temp=31.5,
    min_temp=24.8,
    lst=33.2,
    sst=29.4
)

manager.update_state(state)

print(manager.get_current_state())