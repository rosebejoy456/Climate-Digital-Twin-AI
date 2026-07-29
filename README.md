# 🌍 AI-Powered Climate Digital Twin for Ernakulam

## Overview

The AI-Powered Climate Digital Twin is a virtual representation of Ernakulam's climate system. It combines historical observations, real-time climate data, AI-generated forecasts, and scenario simulations to help visualize and analyze climate conditions.

This module is responsible for maintaining the Digital Twin by storing climate states, integrating AI predictions, running climate simulations, and exposing REST APIs for visualization through the dashboard.

---

## Objectives

- Represent the current climate of Ernakulam digitally.
- Store historical and predicted climate states.
- Integrate AI rainfall and temperature predictions.
- Simulate climate scenarios such as heatwaves, droughts, and heavy rainfall.
- Provide APIs for dashboard visualization.

---

## Features

- Climate State Management
- AI Prediction Integration
- Scenario Simulation
- Timeline Playback
- REST API
- NetCDF Data Storage
- Versioned Climate States

---

## Technology Stack

| Component | Technology |
|------------|------------|
| Language | Python |
| API | FastAPI |
| Climate Data | xarray |
| Storage | NetCDF |
| Numerical Computing | NumPy |
| Visualization Support | GeoPandas |
| Version Control | Git |

---

## Project Structure

```
DigitalTwin/
│
├── api/
├── configs/
├── data/
├── docs/
├── engine/
├── tests/
├── utils/
│
├── README.md
├── requirements.txt
└── .gitignore
```

---

## System Workflow

```
IMD + INSAT
      │
      ▼
Data Pipeline
(Member 1)
      │
      ▼
Unified Dataset
      │
      ▼
AI Prediction
(Member 2)
      │
      ▼
Digital Twin Engine
(Member 3)
      │
      ▼
Dashboard
(Member 4)
```

---

## Digital Twin Components

- Climate State Manager
- Prediction Manager
- Scenario Engine
- Timeline Manager
- Storage Manager
- FastAPI Server

---

## Current Status

- [x] Project Structure
- [ ] Climate State Manager
- [ ] Storage Manager
- [ ] Scenario Engine
- [ ] AI Integration
- [ ] REST API
- [ ] Dashboard Integration

---

## Team

Member 1 – Data Engineering

Member 2 – AI/ML

Member 3 – Digital Twin

Member 4 – Dashboard & Visualization

---

## License

Educational Project
