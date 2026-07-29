from typing import List

from .climate_state import ClimateState


class TimelineManager:
    """
    Stores and manages climate states over time.
    """

    def __init__(self):
        self.states: List[ClimateState] = []
        self.current_index = -1

    def add_state(self, state: ClimateState):
        """Add a new climate state to the timeline."""
        self.states.append(state)

        if self.current_index == -1:
            self.current_index = 0

    def get_current_state(self):
        """Return the currently selected climate state."""
        if not self.states:
            return None

        return self.states[self.current_index]

    def next_state(self):
        """Move to the next state."""
        if self.current_index < len(self.states) - 1:
            self.current_index += 1

        return self.get_current_state()

    def previous_state(self):
        """Move to the previous state."""
        if self.current_index > 0:
            self.current_index -= 1

        return self.get_current_state()

    def get_all_states(self):
        """Return all stored climate states."""
        return self.states