from datetime import datetime

from engine.climate_state import ClimateState
from engine.prediction_manager import PredictionManager


manager = PredictionManager()

today = ClimateState(
    timestamp=datetime.now(),
    rainfall=40,
    max_temp=31,
    min_temp=24,
    lst=33,
    sst=29
)

prediction = manager.predict_next_day(today)

print()

print("Today's Climate")
print(today)

print()

print("Tomorrow Prediction")
print(prediction)