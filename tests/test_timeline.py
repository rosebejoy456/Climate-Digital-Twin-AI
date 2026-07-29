from datetime import datetime, timedelta

from engine.climate_state import ClimateState
from engine.timeline import TimelineManager

timeline = TimelineManager()

for i in range(5):

    state = ClimateState(
        timestamp=datetime.now() + timedelta(days=i),
        rainfall=20 + i * 5,
        max_temp=30 + i,
        min_temp=24,
        lst=32,
        sst=29
    )

    timeline.add_state(state)

print("\nCurrent State")
print(timeline.get_current_state())

print("\nNext State")
print(timeline.next_state())

print("\nNext State")
print(timeline.next_state())

print("\nPrevious State")
print(timeline.previous_state())