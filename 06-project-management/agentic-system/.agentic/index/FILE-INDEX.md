# 📋 Workspace Index - Complete File Guide

## 🎯 Purpose
This file provides a comprehensive index of all files in the workspace, their purposes, and when agents should use them.

---

## 📁 Directory Structure

```
markdown-edit-server/
├── .agentic/                          # Agentic development system
│   ├── execution/
│   │   └── auto-executor.json        # Autonomous execution workflow
│   ├── index/
│   │   ├── workspace-map.json        # Complete workspace structure (JSON)
│   │   ├── quick-reference.md        # Quick start guide for agents
│   │   └── FILE-INDEX.md             # This file - detailed file index
│   └── models/
│       ├── model-selection.json      # Auto-selection rules & recommendations
│       └── README.md                 # Model recommendation guide
│
├── agent-metadata/                    # Agent tracking & context
│   ├── conversations/
│   │   └── conversation-log.json     # User-agent interaction history
│   ├── features/
│   │   └── feature-registry.json     # Feature catalog & status
│   ├── mcp/
│   │   ├── agent-context.json        # Current working context
│   │   └── decision-log.json         # Technical decisions log
│   ├── progress/
│   │   ├── increment-tracker.json    # 15-min increment tracking
│   │   └── project-status.json       # Overall project progress
│   ├── testing/
│   │   └── test-registry.json        # Test catalog & results
│   └── README.md                     # Metadata system documentation
│
├── incremental-development/           # Development plan
│   └── README.md                     # 35 x 15-min increment plan
│
├── requirements.md                    # Main requirements document
├── technical-analysis.md              # Tech stack analysis
├── advanced-features-requirements.md  # Future features roadmap
└── AI-AGENT-GUIDE.md                 # Master agent guide
```

---

## 🔍 File Details

### 🤖 Agentic System Files (.agentic/)

#### `.agentic/execution/auto-executor.json`
**Purpose**: Autonomous execution orchestration  
**When to Use**: To understand the execution workflow  
**Read When**: 
- Starting autonomous development
- Understanding execution steps
- Implementing error handling
- Setting up monitoring

**Key Contents**:
- 7-step execution cycle
- Error handling strategies
- Quality gates and verification
- Execution modes (fullAuto, semiAuto, guided)
- Command interface

**Updates**: Rarely (only when workflow changes)

---

#### `.agentic/models/model-selection.json`
**Purpose**: AI model auto-selection rules  
**When to Use**: Before each increment to select optimal model  
**Read When**:
- Starting any increment
- Need to understand cost implications
- Selecting model for specific task type

**Key Contents**:
- Model recommendations (Claude Sonnet 4, GPT-4 Turbo, etc.)
- Auto-selection rules by phase and type
- Cost estimates per model
- Quality metrics by model
- Phase-specific recommendations

**Updates**: Rarely (only when adding new models)

---

#### `.agentic/models/README.md`
**Purpose**: Comprehensive model recommendation guide  
**When to Use**: Deep dive into model selection rationale  
**Read When**:
- Need detailed model comparison
- Understanding cost-benefit analysis
- Making override decisions
- Optimizing model selection

**Key Contents**:
- Detailed model comparison matrix
- Cost analysis and ROI
- When to use each model
- Override scenarios
- Implementation guide

**Updates**: Never (reference documentation)

---

#### `.agentic/index/workspace-map.json`
**Purpose**: Complete workspace structure (machine-readable)  
**When to Use**: Programmatic workspace navigation  
**Read When**:
- Building automation scripts
- Need structured data about workspace
- Creating navigation systems

**Key Contents**:
- Complete directory structure
- File metadata (purpose, type, priority)
- Search indices by topic and phase
- Navigation paths

**Updates**: When workspace structure changes

---

#### `.agentic/index/quick-reference.md`
**Purpose**: Rapid context loading for agents  
**When to Use**: **START HERE** - First file to read  
**Read When**:
- Starting a new development session
- Need quick context refresh
- Looking for specific information

**Key Contents**:
- Ultra-quick start guide
- Project overview
- Model selection summary
- Execution workflow diagram
- Critical file locations
- Pro tips and success criteria

**Updates**: Never (reference documentation)

---

#### `.agentic/index/FILE-INDEX.md`
**Purpose**: Detailed file guide (this file)  
**When to Use**: Understanding individual file purposes  
**Read When**:
- Need to know which file to read
- Understanding file relationships
- Learning workspace organization

**Updates**: When new files added

---

### 📊 Agent Metadata Files (agent-metadata/)

#### `agent-metadata/progress/increment-tracker.json`
**Purpose**: Track each 15-minute increment  
**When to Use**: **CRITICAL** - Update per increment  
**Read When**:
- Starting development session (find next increment)
- Checking current progress
- Calculating efficiency metrics

**Update When**:
- Starting increment (mark "in-progress")
- Completing increment (mark "completed")
- Recording actual time spent

**Key Data**:
```json
{
  "incrementId": "0.1",
  "status": "completed",
  "startTime": "2025-12-07T10:00:00Z",
  "endTime": "2025-12-07T10:15:00Z",
  "actualDuration": "15 minutes",
  "modelUsed": "claude-sonnet-4",
  "efficiency": "100%"
}
```

---

#### `agent-metadata/progress/project-status.json`
**Purpose**: Overall project progress  
**When to Use**: **CRITICAL** - Update per increment  
**Read When**:
- Checking overall progress
- Generating status reports
- Calculating completion percentage

**Update When**:
- After each increment completes
- When generating reports

**Key Data**:
```json
{
  "totalIncrements": 35,
  "completedIncrements": 0,
  "completionPercentage": "0%",
  "currentPhase": "phase0",
  "estimatedRemaining": "525 minutes"
}
```

---

#### `agent-metadata/features/feature-registry.json`
**Purpose**: Catalog all features and their status  
**When to Use**: Update when features complete  
**Read When**:
- Checking which features are done
- Understanding feature dependencies
- Generating feature reports

**Update When**:
- Feature implementation completes
- Feature status changes
- Tests pass for feature

**Key Data**:
```json
{
  "featureId": "three-pane-layout",
  "name": "Three-Pane Layout",
  "status": "not-started",
  "increment": "0.2",
  "dependencies": ["electron-setup"],
  "testsPassing": false
}
```

---

#### `agent-metadata/testing/test-registry.json`
**Purpose**: Catalog all tests and results  
**When to Use**: Update after test execution  
**Read When**:
- Checking test coverage
- Reviewing test results
- Identifying failing tests

**Update When**:
- After running tests each increment
- When adding new tests
- When tests fail

**Key Data**:
```json
{
  "testSuite": "file-explorer",
  "increment": "1.1",
  "unitTests": 5,
  "integrationTests": 2,
  "passing": 7,
  "failing": 0,
  "coverage": "87%"
}
```

---

#### `agent-metadata/mcp/agent-context.json`
**Purpose**: Current working context for agents  
**When to Use**: Maintain agent state across sessions  
**Read When**:
- Resuming development session
- Need context about current work
- Understanding recent changes

**Update When**:
- Starting/ending development session
- Major context changes
- Switching phases

**Key Data**:
```json
{
  "currentIncrement": "0.1",
  "currentPhase": "phase0",
  "currentModel": "claude-sonnet-4",
  "lastAction": "Initialized Electron app",
  "openFiles": ["src/main.ts", "package.json"],
  "recentDecisions": []
}
```

---

#### `agent-metadata/mcp/decision-log.json`
**Purpose**: Log technical decisions  
**When to Use**: Document important choices  
**Read When**:
- Understanding why something was done
- Reviewing past decisions
- Making related decisions

**Update When**:
- Making significant technical decision
- Choosing between alternatives
- Resolving architectural questions

**Key Data**:
```json
{
  "decisionId": "use-vite",
  "decision": "Use Vite instead of Webpack",
  "rationale": "Faster HMR, better DX, recommended for Electron",
  "alternatives": ["Webpack", "esbuild"],
  "impact": ["build-speed", "dev-experience"],
  "increment": "0.1",
  "timestamp": "2025-12-07T10:05:00Z"
}
```

---

#### `agent-metadata/conversations/conversation-log.json`
**Purpose**: Record user-agent interactions  
**When to Use**: Log conversations and context  
**Read When**:
- Understanding user requirements
- Reviewing conversation history
- Resuming after break

**Update When**:
- After significant user interaction
- After completing increment
- When documenting clarifications

---

#### `agent-metadata/README.md`
**Purpose**: Metadata system documentation  
**When to Use**: Understanding metadata structure  
**Read When**:
- First time using metadata system
- Need to understand JSON schemas
- Setting up new tracking

**Updates**: Never (reference documentation)

---

### 📖 Development Plan Files

#### `incremental-development/README.md`
**Purpose**: **CRITICAL** - Complete 35-increment plan  
**When to Use**: **READ THIS BEFORE EVERY INCREMENT**  
**Read When**:
- Starting any increment
- Planning next steps
- Understanding dependencies
- Checking deliverables

**Key Contents**:
- All 35 increment specifications
- Each increment includes:
  - Goal (what to achieve)
  - Tasks (how to do it)
  - Deliverable (what to produce)
  - Testing (unit, integration, manual)
  - Files to create/modify
- Organized by 7 phases
- Estimated durations

**Updates**: Never (master plan is fixed)

**How to Use**:
1. Find your current increment (e.g., INCREMENT 0.1)
2. Read goal and tasks carefully
3. Implement according to spec
4. Complete all testing requirements
5. Verify deliverable achieved
6. Move to next increment

---

### 📄 Documentation Files

#### `requirements.md`
**Purpose**: Main requirements document  
**When to Use**: Understanding project requirements  
**Read When**:
- Need to understand overall requirements
- Clarifying feature expectations
- Checking non-functional requirements

**Key Contents**:
- 3-pane layout specification
- File system as database
- No authentication requirement
- 5 levels of features (MVP to Extended)
- Tech stack approval
- Timeline (8-13 weeks)

**Updates**: Rarely (only major requirement changes)

---

#### `technical-analysis.md`
**Purpose**: Tech stack analysis and justification  
**When to Use**: Understanding technology choices  
**Read When**:
- Need to understand why Electron was chosen
- Comparing Electron vs Tauri
- Understanding performance targets
- Checking library recommendations

**Key Contents**:
- Electron vs Tauri comparison (9/10 vs 6/10)
- Performance benchmarks
- Cost-benefit analysis
- Risk assessment
- Library recommendations (Monaco, FlexSearch, etc.)

**Updates**: Never (historical analysis)

---

#### `advanced-features-requirements.md`
**Purpose**: Future features (post-MVP)  
**When to Use**: Understanding future roadmap  
**Read When**:
- Planning beyond MVP
- Understanding long-term vision
- Checking if feature is in scope

**Key Contents**:
- Academic tools (citations, publishing)
- Collaboration features
- Cloud sync
- AI-powered features
- Enterprise functionality

**Updates**: As future requirements added

**⚠️ IMPORTANT**: Do NOT implement these features now. Focus on 35 increments first.

---

#### `AI-AGENT-GUIDE.md`
**Purpose**: Master guide for AI agents  
**When to Use**: Comprehensive workflow reference  
**Read When**:
- Need detailed workflow understanding
- Understanding testing requirements
- Learning best practices
- Troubleshooting issues

**Key Contents**:
- Complete development workflow (ASCII diagram)
- Detailed testing requirements
- Quality gates
- Documentation standards
- Success criteria
- Pro tips and anti-patterns

**Updates**: Never (reference documentation)

---

## 🎯 Reading Order for New Agents

### First Session (Must Read)
1. ✅ `.agentic/index/quick-reference.md` - Start here (5 min)
2. ✅ `incremental-development/README.md` - Read INCREMENT 0.1 (3 min)
3. ✅ `.agentic/models/model-selection.json` - Select model (1 min)
4. ✅ `agent-metadata/progress/increment-tracker.json` - Check status (1 min)

**Total**: ~10 minutes, then start coding

---

### Deep Understanding (Optional)
5. ⭐ `AI-AGENT-GUIDE.md` - Complete workflow (15 min)
6. ⭐ `requirements.md` - Full requirements (10 min)
7. ⭐ `technical-analysis.md` - Tech justification (10 min)
8. ⭐ `.agentic/execution/auto-executor.json` - Automation details (5 min)

**Total**: ~40 minutes for complete context

---

### Resuming Session (Must Read)
1. ✅ `agent-metadata/mcp/agent-context.json` - Last context (1 min)
2. ✅ `agent-metadata/progress/increment-tracker.json` - Find next increment (1 min)
3. ✅ `incremental-development/README.md` - Read next increment spec (2 min)
4. ✅ `.agentic/models/model-selection.json` - Select model (1 min)

**Total**: ~5 minutes, then continue coding

---

## 📊 File Update Frequency

| File | Update Frequency | Who Updates |
|------|------------------|-------------|
| `increment-tracker.json` | **Per increment** | Agent (required) |
| `project-status.json` | **Per increment** | Agent (required) |
| `feature-registry.json` | **When feature completes** | Agent (required) |
| `test-registry.json` | **Per increment** | Agent (required) |
| `agent-context.json` | **Per session** | Agent (required) |
| `decision-log.json` | **As needed** | Agent (when decisions made) |
| `conversation-log.json` | **As needed** | Agent (after user interactions) |
| All other files | **Never** | Human only |

---

## 🔍 Quick Lookup Table

| I Need To... | Read This File |
|--------------|----------------|
| **Start development** | `quick-reference.md` |
| **Find next increment** | `increment-tracker.json` |
| **Read increment spec** | `incremental-development/README.md` |
| **Select AI model** | `model-selection.json` |
| **Check progress** | `project-status.json` |
| **Resume after break** | `agent-context.json` |
| **Understand workflow** | `AI-AGENT-GUIDE.md` |
| **Check requirements** | `requirements.md` |
| **Understand tech choices** | `technical-analysis.md` |
| **Log a decision** | `decision-log.json` |
| **Record test results** | `test-registry.json` |
| **Update feature status** | `feature-registry.json` |

---

## 🚨 Critical Files (Never Skip)

These files MUST be read/updated for proper execution:

1. ✅ `incremental-development/README.md` - Increment specifications
2. ✅ `increment-tracker.json` - Progress tracking
3. ✅ `model-selection.json` - Model selection
4. ✅ `project-status.json` - Overall status

**Skipping these = Risk of errors, duplicate work, or broken state**

---

## 📁 File Relationships

```
quick-reference.md
       ↓
incremental-development/README.md (read increment spec)
       ↓
model-selection.json (select model)
       ↓
[EXECUTE INCREMENT]
       ↓
increment-tracker.json (update status) ←──┐
       ↓                                   │
feature-registry.json (update features)   │
       ↓                                   │
test-registry.json (record tests)         │
       ↓                                   │
project-status.json (update progress)     │
       ↓                                   │
decision-log.json (log decisions)         │
       ↓                                   │
agent-context.json (save context) ────────┘
       ↓
[NEXT INCREMENT]
```

---

## 💡 Pro Tips

### DO
✅ Always read increment spec before starting  
✅ Update metadata immediately after increment  
✅ Select model using auto-selection rules  
✅ Check progress before starting session  
✅ Save context after each session  

### DON'T
❌ Skip reading increment specifications  
❌ Forget to update tracking files  
❌ Manually select model (use auto-selection)  
❌ Start coding without checking current status  
❌ Lose context between sessions  

---

**Document Version**: 1.0  
**Last Updated**: 2025-12-07  
**Total Files**: 20 (11 documentation, 9 tracking)

**Your Next Action**: Read `quick-reference.md` and start INCREMENT 0.1! 🚀
