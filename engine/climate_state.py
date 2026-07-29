from dataclasses import dataclass
from datetime import datetime


@dataclass
class ClimateState:
    """
    Represents a single climate snapshot.
    """

    timestamp: datetime

    rainfall: float          # mm/day
    max_temp: float          # °C
    min_temp: float          # °C
    lst: float               # Land Surface Temperature
    sst: float               # Sea Surface Temperature