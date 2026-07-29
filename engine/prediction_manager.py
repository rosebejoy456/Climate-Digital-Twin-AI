import random

from dataclasses import replace

from .climate_state import ClimateState


class PredictionManager:
    """
    Generates future climate predictions.
    """

    def predict_next_day(self, state: ClimateState):

        predicted_rainfall = max(
            0,
            state.rainfall + random.uniform(-10, 10)
        )

        predicted_max_temp = state.max_temp + random.uniform(-1, 1)

        predicted_min_temp = state.min_temp + random.uniform(-1, 1)

        predicted_lst = state.lst + random.uniform(-1, 1)

        predicted_sst = state.sst + random.uniform(-0.5, 0.5)

        return replace(
            state,
            rainfall=round(predicted_rainfall, 2),
            max_temp=round(predicted_max_temp, 2),
            min_temp=round(predicted_min_temp, 2),
            lst=round(predicted_lst, 2),
            sst=round(predicted_sst, 2)
        )