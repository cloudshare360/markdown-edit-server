# 06-Project Management

## Purpose
This folder contains all project management, tracking, and agentic development system files.

## Structure

```
06-project-management/
├── tracking/                    # Progress tracking
│   └── agent-metadata/         # Moved from root
│       ├── conversations/      # User-agent interactions
│       ├── features/           # Feature registry
│       ├── mcp/               # Agent context & decisions
│       ├── progress/          # Project & increment tracking
│       └── testing/           # Test registry
├── agentic-system/            # AI agent development system
│   └── .agentic/              # Moved from root
│       ├── execution/         # Auto-executor configuration
│       ├── models/            # Model selection & recommendations
│       ├── index/             # Workspace indexing
│       └── WORKSPACE-SUMMARY.md
├── increments/                # Development increments
│   └── incremental-development/ # Moved from root
│       └── README.md          # 35 x 15-min increment plan
├── AI-AGENT-GUIDE.md          # Master guide for AI agents
├── START-HERE.md              # Quick start for agents
└── README.md                  # This file
```

## Key Files

### For AI Agents
1. **START-HERE.md** - 2-minute onboarding
2. **AI-AGENT-GUIDE.md** - Complete workflow guide
3. **agentic-system/.agentic/index/quick-reference.md** - 5-min quick start
4. **increments/incremental-development/README.md** - 35-increment plan

### Tracking Files
- **tracking/agent-metadata/progress/project-status.json** - Overall progress
- **tracking/agent-metadata/progress/increment-tracker.json** - Per-increment tracking
- **tracking/agent-metadata/features/feature-registry.json** - Feature catalog
- **tracking/agent-metadata/testing/test-registry.json** - Test results
- **tracking/agent-metadata/mcp/decision-log.json** - Technical decisions

### Model Selection
- **agentic-system/.agentic/models/model-selection.json** - Auto-selection rules
- **agentic-system/.agentic/models/README.md** - Model recommendations

## Quick Access
```bash
# Check current progress
cat tracking/agent-metadata/progress/project-status.json

# Find next increment
cat tracking/agent-metadata/progress/increment-tracker.json

# Read increment plan
cat increments/incremental-development/README.md

# Get started
cat START-HERE.md
```

## Status
✅ Fully configured and ready for autonomous development — updated 2025-12-07 after INC-0.1 (scaffold + SDLC reorg)
