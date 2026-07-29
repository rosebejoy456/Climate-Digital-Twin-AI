# Climate State Design

## Overview

A climate state represents a snapshot of Ernakulam's climate at a specific point in time. It serves as the core data structure of the Digital Twin.

Each climate state contains observed climate variables, AI-generated predictions, metadata, and geospatial information.

---

## Climate Variables

| Variable | Description | Unit |
|----------|-------------|------|
| Rainfall | Daily accumulated rainfall | mm/day |
| Maximum Temperature | Daily maximum temperature | °C |
| Minimum Temperature | Daily minimum temperature | °C |
| Land Surface Temperature (LST) | Surface temperature from INSAT | °C |
| Sea Surface Temperature (SST) | Sea surface temperature from INSAT | °C |

---

## Spatial Information

Each climate state stores:

- Latitude
- Longitude
- Grid Resolution
- Coordinate Reference System (WGS84)

---

## Temporal Information

Each climate state stores:

- Observation Date
- Observation Time
- Prediction Timestamp (if available)

---

## Climate State Structure

Each state can be represented as:

Time
↓
Latitude × Longitude
↓
Climate Variables

For every grid cell, the Digital Twin stores:

- Rainfall
- Maximum Temperature
- Minimum Temperature
- LST
- SST

---

## Data Source

Observed Data:

- IMD Rainfall
- IMD Maximum Temperature
- IMD Minimum Temperature
- INSAT LST
- INSAT SST

Predicted Data:

- AI Rainfall Forecast
- AI Temperature Forecast

---

## Purpose

The climate state is used by:

- State Manager
- Simulation Engine
- Prediction Manager
- Dashboard