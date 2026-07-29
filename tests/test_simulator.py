from datetime import datetime

from engine.climate_state import ClimateState
from engine.scenario_engine import ScenarioEngine


engine = ScenarioEngine()

state = ClimateState(
    timestamp=datetime.now(),
    rainfall=50,
    max_temp=30,
    min_temp=24,
    lst=32,
    sst=29
)

print("Original")
print(state)

print()

heatwave = engine.increase_temperature(state, 2)

print("Heatwave (+2°C)")
print(heatwave)

print()

flood = engine.increase_rainfall(state, 20)

print("Heavy Rain (+20%)")
print(flood)

print()

drought = engine.decrease_rainfall(state, 40)

print("Drought (-40%)")
print(drought)