from .climate_state import ClimateState


class StateManager:
    """
    Manages the current climate state.
    """

    def __init__(self):
        self.current_state = None

    def update_state(self, state: ClimateState):
        """
        Update the current climate state.
        """
        self.current_state = state

    def get_current_state(self):
        """
        Return the latest climate state.
        """
        return self.current_state

    def clear_state(self):
        """
        Remove the current climate state.
        """
        self.current_state = None