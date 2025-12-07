# 03-Development

## Purpose
This folder contains all application source code, configurations, and development assets.

## Structure

```
03-development/
├── app/                    # Application code
│   ├── frontend/          # React frontend code
│   │   └── src/           # React components, hooks, services
│   ├── electron/          # Electron main process
│   └── index.html         # HTML entry point
├── config/                # Configuration files
│   ├── tsconfig.json      # TypeScript config
│   ├── tsconfig.node.json # Node TypeScript config
│   └── vite.config.ts     # Vite build config
└── README.md              # This file
```

## Technology Stack
- **Framework**: Electron 28+
- **Frontend**: React 18 + TypeScript 5
- **Build Tool**: Vite 5
- **Editor**: Monaco Editor (to be added)
- **UI**: Tailwind CSS (to be added)
- **State**: Zustand (to be added)

## Development Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build application
npm run build

# Run tests
npm test
```

## Code Organization
- **frontend/src/components/** - React components
- **frontend/src/hooks/** - Custom React hooks
- **frontend/src/services/** - Business logic and services
- **frontend/src/stores/** - State management (Zustand)
- **frontend/src/types/** - TypeScript type definitions
- **frontend/src/utils/** - Utility functions
- **electron/** - Electron main and preload scripts

## Status
✅ Phase 0 Bootstrap - In Progress
- INCREMENT 0.1: Project initialization ✅
- INCREMENT 0.2: 3-pane layout (pending)
- INCREMENT 0.3: Tailwind CSS (pending)
- INCREMENT 0.4: Pane headers (pending)
