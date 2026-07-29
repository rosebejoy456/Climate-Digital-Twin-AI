# Digital Twin Architecture

## Overview

The Digital Twin is a virtual representation of Ernakulam's climate. It continuously updates using observed data and AI predictions.

---

## Components

### 1. Data Layer
Receives processed climate data from Member 1.

### 2. AI Layer
Receives rainfall and temperature predictions from Member 2.

### 3. Digital Twin Engine
Maintains the current climate state and generates simulated future states.

### 4. API Layer
Exposes climate states and simulations to external applications.

### 5. Dashboard
Displays observations, predictions, and simulations.

---

## Workflow

Observed Data
      │
      ▼
Climate State
      │
      ▼
Prediction Manager
      │
      ▼
Scenario Engine
      │
      ▼
Future Climate State
      │
      ▼
REST API
      │
      ▼
Dashboard