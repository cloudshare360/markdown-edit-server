# Agent Metadata System

## Overview

This directory contains all metadata and tracking information for AI agent development of the Markdown Edit Server. The system tracks features, conversations, requirements, progress, and maintains agent context.

## Directory Structure

```
agent-metadata/
├── README.md                           # This file
├── features/                           # Feature tracking
│   ├── feature-registry.json          # All features catalog
│   ├── completed/                     # Completed features
│   ├── in-progress/                   # Currently developing
│   └── planned/                       # Future features
├── conversations/                      # User-Agent interactions
│   ├── conversation-log.json          # All conversations index
│   └── sessions/                      # Individual session transcripts
├── requirements/                       # Requirement tracking
│   ├── user-stories.json              # User requirements
│   ├── technical-specs.json           # Technical requirements
│   └── changes-log.json               # Requirement changes
├── progress/                          # Project progress tracking
│   ├── project-status.json            # Overall project status
│   ├── increment-tracker.json         # 15-min increment tracking
│   └── metrics.json                   # Development metrics
├── mcp/                               # Model Context Protocol data
│   ├── agent-context.json             # Current agent context
│   ├── knowledge-base.json            # Accumulated knowledge
│   └── decision-log.json              # Technical decisions
└── testing/                           # Test tracking
    ├── test-registry.json             # All tests catalog
    ├── test-results/                  # Test execution results
    └── coverage/                      # Coverage reports
```

## File Descriptions

### Features Directory

#### `feature-registry.json`
Complete catalog of all features in the application.

```json
{
  "features": [
    {
      "id": "F001",
      "name": "Three-Pane Layout",
      "description": "Resizable 3-column layout for app",
      "status": "completed|in-progress|planned",
      "priority": "critical|high|medium|low",
      "increment": "0.2",
      "dependencies": [],
      "assignedAgent": "agent-001",
      "estimatedTime": "15min",
      "actualTime": "12min",
      "testCoverage": 95,
      "dateCreated": "2025-12-07T10:00:00Z",
      "dateCompleted": "2025-12-07T10:15:00Z"
    }
  ]
}
```

### Conversations Directory

#### `conversation-log.json`
Index of all user-agent conversations.

```json
{
  "conversations": [
    {
      "sessionId": "sess-001",
      "startTime": "2025-12-07T10:00:00Z",
      "endTime": "2025-12-07T11:30:00Z",
      "topic": "Project initialization and tech stack discussion",
      "keyDecisions": [
        "Chose Electron over Tauri",
        "Selected React + TypeScript",
        "Decided on 15-minute increments"
      ],
      "featuresDiscussed": ["F001", "F002", "F003"],
      "requirementsChanged": ["REQ-001"],
      "transcriptFile": "sessions/sess-001.md"
    }
  ]
}
```

### Requirements Directory

#### `user-stories.json`
All user requirements and stories.

```json
{
  "userStories": [
    {
      "id": "US001",
      "title": "As a user, I want to select a workspace folder",
      "description": "User should be able to browse and select a folder",
      "acceptanceCriteria": [
        "Dialog opens when clicking 'Open Folder'",
        "Selected folder path is displayed",
        "Files in folder are loaded"
      ],
      "priority": "critical",
      "status": "completed",
      "relatedFeatures": ["F006"],
      "testCases": ["TC001", "TC002"]
    }
  ]
}
```

#### `technical-specs.json`
Technical requirements and specifications.

```json
{
  "specifications": [
    {
      "id": "SPEC001",
      "category": "performance",
      "requirement": "Application startup time",
      "target": "< 2 seconds",
      "actual": "1.8 seconds",
      "status": "met",
      "measuredAt": "2025-12-07T15:00:00Z"
    }
  ]
}
```

### Progress Directory

#### `project-status.json`
Overall project status and health.

```json
{
  "project": {
    "name": "Markdown Edit Server",
    "version": "0.1.0",
    "startDate": "2025-12-07",
    "targetReleaseDate": "2026-01-15",
    "currentPhase": "Phase 2: Basic Editor",
    "overallProgress": 45,
    "health": "green|yellow|red",
    "blockers": []
  },
  "phases": [
    {
      "phase": "Phase 0: Bootstrap",
      "status": "completed",
      "progress": 100,
      "completedIncrements": 4,
      "totalIncrements": 4,
      "timeSpent": "60min",
      "estimatedTime": "60min"
    }
  ]
}
```

#### `increment-tracker.json`
Tracking of each 15-minute increment.

```json
{
  "increments": [
    {
      "id": "INC-0.1",
      "phase": "Phase 0: Bootstrap",
      "name": "Project Initialization",
      "status": "completed",
      "startTime": "2025-12-07T10:00:00Z",
      "endTime": "2025-12-07T10:15:00Z",
      "actualDuration": "15min",
      "agent": "agent-001",
      "deliverables": [
        "Launchable Electron app",
        "Basic React setup"
      ],
      "testsAdded": 0,
      "testsPassed": 0,
      "commits": ["abc123", "def456"],
      "issues": [],
      "notes": "Smooth initialization, no blockers"
    }
  ]
}
```

### MCP (Model Context Protocol) Directory

#### `agent-context.json`
Current agent working context.

```json
{
  "currentSession": "sess-005",
  "activeIncrement": "INC-2.3",
  "workingDirectory": "/src/components/MarkdownEditor",
  "openFiles": [
    "src/components/MarkdownEditor/Editor.tsx",
    "src/components/MarkdownEditor/Editor.test.tsx"
  ],
  "recentDecisions": [
    {
      "timestamp": "2025-12-07T14:30:00Z",
      "decision": "Use Monaco Editor instead of CodeMirror",
      "rationale": "Better VSCode integration, more features"
    }
  ],
  "contextVariables": {
    "currentFeature": "F015",
    "testingMode": "unit",
    "workspaceFolder": "C:/Users/Dev/notes"
  }
}
```

#### `knowledge-base.json`
Accumulated knowledge and patterns.

```json
{
  "patterns": [
    {
      "id": "PAT001",
      "name": "File Operation Pattern",
      "category": "architecture",
      "description": "Standard pattern for all file system operations",
      "code": "src/services/fileSystem.ts",
      "usedIn": ["F006", "F007", "F008"],
      "createdDate": "2025-12-07"
    }
  ],
  "learnings": [
    {
      "id": "LEARN001",
      "topic": "Monaco Editor Performance",
      "insight": "Virtual scrolling needed for files > 10k lines",
      "appliedIn": ["INC-2.1"],
      "date": "2025-12-07"
    }
  ]
}
```

#### `decision-log.json`
Record of all technical decisions.

```json
{
  "decisions": [
    {
      "id": "DEC001",
      "date": "2025-12-07",
      "category": "architecture",
      "title": "Choose Electron over Tauri",
      "context": "Need to select desktop framework",
      "options": [
        {
          "name": "Electron",
          "pros": ["Mature ecosystem", "AI-friendly", "Fast development"],
          "cons": ["Large bundle size", "Higher memory"]
        },
        {
          "name": "Tauri",
          "pros": ["Small bundle", "Fast startup"],
          "cons": ["Less AI training data", "Rust complexity"]
        }
      ],
      "decision": "Electron",
      "rationale": "60% faster development for AI agents, meets performance requirements",
      "stakeholders": ["User", "AI Agent"],
      "status": "approved",
      "impactedFeatures": ["ALL"]
    }
  ]
}
```

### Testing Directory

#### `test-registry.json`
Catalog of all tests in the system.

```json
{
  "tests": [
    {
      "id": "TEST001",
      "type": "unit",
      "feature": "F001",
      "file": "src/components/Layout/ThreePaneLayout.test.tsx",
      "description": "ThreePaneLayout renders 3 children",
      "status": "passing",
      "lastRun": "2025-12-07T16:00:00Z",
      "duration": "45ms",
      "coverage": {
        "statements": 100,
        "branches": 95,
        "functions": 100,
        "lines": 100
      }
    }
  ]
}
```

## Usage Guidelines

### For AI Agents

1. **Start of Each Increment**:
   - Read `agent-context.json` to understand current state
   - Check `increment-tracker.json` for next task
   - Review related features in `feature-registry.json`

2. **During Development**:
   - Update `agent-context.json` with current work
   - Log decisions in `decision-log.json`
   - Track progress in `increment-tracker.json`

3. **End of Increment**:
   - Update feature status in `feature-registry.json`
   - Record tests in `test-registry.json`
   - Save conversation in `conversations/`
   - Update project progress in `project-status.json`

### For Humans

1. **Check Progress**: Review `project-status.json`
2. **Review Decisions**: Check `decision-log.json`
3. **See Conversations**: Read `conversation-log.json`
4. **Track Features**: Monitor `feature-registry.json`

## Automation Scripts

See `scripts/` directory for automation:
- `update-progress.js` - Auto-update progress metrics
- `generate-report.js` - Generate status reports
- `sync-metadata.js` - Sync metadata between files

---

**Document Version**: 1.0  
**Date**: December 7, 2025  
**Status**: Agent Metadata System Documentation