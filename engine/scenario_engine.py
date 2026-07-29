from dataclasses import replace

from .climate_state import ClimateState


class ScenarioEngine:
    """
    Simulates different climate scenarios.
    """

    def increase_temperature(self, state: ClimateState, increase: float):
        """
        Increase max and min temperature.
        """

        return replace(
            state,
            max_temp=state.max_temp + increase,
            min_temp=state.min_temp + increase,
            lst=state.lst + increase
        )

    def increase_rainfall(self, state: ClimateState, percent: float):
        """
        Increase rainfall by percentage.
        """

        return replace(
            state,
            rainfall=state.rainfall * (1 + percent / 100)
        )

    def decrease_rainfall(self, state: ClimateState, percent: float):
        """
        Reduce rainfall.
        """

        return replace(
            state,
            rainfall=state.rainfall * (1 - percent / 100)
        )