# Climate Digital Twin — Interactive Frontend Dashboard

Frontend web application for the **AI-Powered Climate Digital Twin of Ernakulam District, Kerala**.

## Tech Stack
- **Framework**: React 18 + Vite
- **Language**: JavaScript (ES Modules)
- **Styling**: Vanilla CSS with custom token design system (Dark navy foundation with subtle magenta accents)
- **Architecture**: Service/Adapter layer with mock fallbacks for safe backend integration

## Folder Structure
```
frontend/
├── package.json
├── vite.config.js
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── components/
│   │   ├── layout/       # Header, Sidebar, MainLayout
│   │   ├── cards/        # MetricCard
│   │   └── common/       # StatusBadge
│   ├── pages/            # 6 core dashboard views
│   │   ├── Overview/
│   │   ├── ClimateMap/
│   │   ├── DigitalTwin/
│   │   ├── Analytics/
│   │   ├── WhatIfSimulation/
│   │   └── Reports/
│   ├── services/         # API adapters (climate, prediction, simulation, XAI)
│   ├── mock/             # Structured mock datasets (Ernakulam baseline)
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Data formatting helpers
│   └── styles/           # CSS design system (variables, global, layout)
└── README.md
```

## Running Locally

```bash
cd frontend
npm install
npm run dev
```

The application will be accessible at `http://localhost:5173`.
