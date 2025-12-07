# 🤖 Quick Reference Guide for AI Agents

## 🎯 Purpose
This guide provides rapid context loading for AI agents to begin autonomous development of the Markdown Editor application.

---

## ⚡ Ultra-Quick Start (30 seconds)

### Your Mission
Build a desktop markdown editor (Zettlr-inspired) in **35 increments of 15 minutes each**.

### Current Status
```json
{
  "phase": "phase0",
  "nextIncrement": "0.1",
  "action": "Initialize Electron + React + TypeScript app",
  "estimatedCompletion": "525 minutes (8.75 hours)"
}
```

### Start Command
```bash
# Read increment plan
cat incremental-development/README.md

# Check your model selection
cat .agentic/models/model-selection.json

# Begin INCREMENT 0.1
# Create: Electron app with Vite + TypeScript + React
```

---

## 📊 Project Overview

| Aspect | Details |
|--------|---------|
| **Type** | Desktop Application (Electron) |
| **Tech Stack** | Electron 28+ + React 18 + TypeScript 5 + Vite 5 |
| **Editor** | Monaco Editor (VSCode engine) |
| **UI** | Tailwind CSS + Headless UI |
| **Storage** | Local file system (no database) |
| **Auth** | None (local-only application) |
| **Layout** | 3-pane: File Explorer, Editor, TOC/Preview |

---

## 🎯 Development Strategy

### The 15-Minute Rule
- Each increment = 15 minutes of focused development
- Each increment = 1 runnable deliverable
- Each increment = unit + integration + manual tests
- **Never** leave the app in a broken state

### Quality Gates (Every Increment)
✅ **Tests**: Coverage > 80%, Pass Rate = 100%  
✅ **Build**: No compilation errors  
✅ **Launch**: App starts in < 2 seconds  
✅ **Memory**: < 200MB idle  
✅ **Errors**: Zero console errors  

---

## 🤖 AI Model Selection

### Auto-Selected Models

| Phase | Model | Reason | Cost |
|-------|-------|--------|------|
| **Phase 0: Bootstrap** | claude-sonnet-4 | Critical foundation | $0.60-1.20 |
| **Phase 1: File Explorer** | claude-sonnet-4 | Complex file system | $0.90-1.80 |
| **Phase 2: Editor** | claude-sonnet-4 | Monaco integration | $0.90-1.80 |
| **Phase 3: Preview/TOC** | gpt-4-turbo | UI-heavy, fast iteration | $1.00-2.00 |
| **Phase 4: File Ops** | claude-sonnet-4 | Critical operations | $0.90-1.80 |
| **Phase 5: Search** | claude-3.5-sonnet | Straightforward, cost-optimized | $0.20-0.60 |
| **Phase 6: Polish** | gpt-4o | Performance optimization | $1.00-1.80 |

**Total Estimated Cost**: $5.50-10.00 for complete application

### Selection Rules
```javascript
if (phase === 'bootstrap') use 'claude-sonnet-4'
if (incrementType === 'complex-integration') use 'claude-sonnet-4'
if (incrementType === 'ui-styling') use 'gpt-4-turbo'
if (incrementType === 'testing') use 'claude-3.5-sonnet'
if (incrementType === 'optimization') use 'gpt-4o'
```

---

## 📁 Critical Files (Read These First)

### 1. Increment Plan (START HERE)
```bash
incremental-development/README.md
```
- 35 increments, fully specified
- Each with: goal, tasks, deliverables, tests
- Sequential execution order

### 2. Model Selection
```bash
.agentic/models/model-selection.json
```
- Auto-selection rules by phase/type
- Cost estimates per increment
- Quality metrics per model

### 3. Execution Workflow
```bash
.agentic/execution/auto-executor.json
```
- 7-step execution cycle
- Error handling and retries
- Quality gates and verification

### 4. Progress Tracking
```bash
agent-metadata/progress/increment-tracker.json
```
- Current increment status
- Time tracking
- Efficiency metrics

### 5. Master Guide
```bash
AI-AGENT-GUIDE.md
```
- Complete development workflow
- Testing requirements
- Best practices

---

## 🔄 Execution Workflow

```
┌─────────────────────────────────────┐
│  1. Load Context (30s)              │
│     - Read increment plan           │
│     - Check progress tracker        │
│     - Load workspace map            │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  2. Select Model (10s)              │
│     - Determine increment type      │
│     - Apply auto-selection rules    │
│     - Log decision                  │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  3. Execute Increment (15min)       │
│     - Write production code         │
│     - Create unit tests             │
│     - Create integration tests      │
│     - Run all tests                 │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  4. Verify Quality (2min)           │
│     - Check coverage > 80%          │
│     - Verify 100% pass rate         │
│     - Build successfully            │
│     - Launch app (< 2s)             │
│     - Memory check (< 200MB)        │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  5. Commit Changes (10s)            │
│     - Stage all files               │
│     - Generate commit message       │
│     - Tag with increment ID         │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  6. Update Metadata (20s)           │
│     - Mark increment complete       │
│     - Update project status         │
│     - Log decisions                 │
│     - Record metrics                │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  7. Next Increment                  │
│     - Load next increment           │
│     - Repeat cycle                  │
└─────────────────────────────────────┘
```

**Cycle Time**: ~18 minutes (15 dev + 3 overhead)  
**Total Time**: ~10.5 hours for 35 increments

---

## 📦 Increment Structure

### Every Increment Delivers:

**1. Code**
- Production-ready implementation
- TypeScript with full type safety
- ESLint compliant
- Well-documented

**2. Tests**
- Unit tests for functions/components
- Integration tests for features
- Manual test instructions
- Coverage > 80%

**3. Metadata**
- Updated increment-tracker.json
- Updated feature-registry.json
- Decision log entries
- Test results recorded

**4. Runnable App**
- Must launch successfully
- Must show visible progress
- No console errors
- Performance within targets

---

## 🎯 Phase Breakdown

| Phase | Increments | Duration | Focus |
|-------|-----------|----------|-------|
| **0: Bootstrap** | 4 | 60 min | Electron + React + 3-pane layout |
| **1: File Explorer** | 6 | 90 min | Folder tree, file selection, watching |
| **2: Editor** | 6 | 90 min | Monaco integration, syntax, auto-save |
| **3: Preview/TOC** | 5 | 75 min | HTML preview, TOC generation, sync |
| **4: File Ops** | 6 | 90 min | Create, rename, delete, move files |
| **5: Search** | 4 | 60 min | Full-text search with FlexSearch |
| **6: Polish** | 4 | 60 min | Performance, shortcuts, error handling |

**Total**: 35 increments, 525 minutes (8.75 hours)

---

## 🧪 Testing Requirements

### Unit Tests (Every Increment)
```typescript
// Example
describe('FileReader', () => {
  it('reads markdown files', async () => {
    const content = await readFile('test.md');
    expect(content).toContain('# Header');
  });
});
```

### Integration Tests (Every Increment)
```typescript
// Example
describe('File Selection Flow', () => {
  it('loads content when file clicked', async () => {
    // Click file in explorer
    // Verify editor shows content
    // Verify TOC updates
  });
});
```

### Manual Tests (Every Increment)
```
1. Launch app (npm start)
2. Perform action (e.g., "Click Open Folder")
3. Verify behavior (e.g., "File list appears")
4. Check console (0 errors)
```

---

## 📊 Metadata Tracking

### Files to Update Per Increment

**1. increment-tracker.json**
```json
{
  "incrementId": "0.1",
  "status": "completed",
  "startTime": "2025-12-07T10:00:00Z",
  "endTime": "2025-12-07T10:15:00Z",
  "actualDuration": "15 minutes",
  "modelUsed": "claude-sonnet-4"
}
```

**2. feature-registry.json**
```json
{
  "featureId": "electron-setup",
  "status": "completed",
  "increment": "0.1",
  "testsPassing": true,
  "coverage": "85%"
}
```

**3. decision-log.json**
```json
{
  "decision": "Use Vite for build tool",
  "rationale": "Faster HMR than webpack",
  "increment": "0.1",
  "impact": ["build-speed", "dev-experience"]
}
```

**4. test-registry.json**
```json
{
  "testSuite": "electron-setup",
  "increment": "0.1",
  "unitTests": 3,
  "integrationTests": 1,
  "coverage": "85%",
  "passRate": "100%"
}
```

**5. project-status.json**
```json
{
  "completedIncrements": 1,
  "totalIncrements": 35,
  "completionPercentage": "2.86%",
  "estimatedRemaining": "510 minutes"
}
```

---

## 🚨 Error Handling

### If Tests Fail
1. Analyze failure reason
2. Fix code
3. Re-run tests
4. Max 3 attempts
5. If still failing: Escalate to claude-sonnet-4

### If Build Fails
1. Check TypeScript errors
2. Fix type issues
3. Rebuild
4. Max 3 attempts

### If App Won't Launch
1. Check dependencies
2. Verify electron config
3. Check for runtime errors
4. Max 3 attempts

### If All Retries Fail
1. Log incident in decision-log.json
2. Update increment status to "blocked"
3. Notify human
4. Pause execution

---

## 💡 Pro Tips

### DO
✅ Read increment specification carefully  
✅ Write tests BEFORE marking complete  
✅ Verify app launches after every change  
✅ Update metadata immediately  
✅ Commit after each increment  
✅ Keep increments focused and small  
✅ Follow TypeScript best practices  

### DON'T
❌ Skip tests ("I'll add them later")  
❌ Leave app in broken state  
❌ Forget to update metadata  
❌ Batch multiple increments  
❌ Deviate from increment spec  
❌ Use `any` type in TypeScript  
❌ Ignore performance targets  

---

## 🎓 Success Criteria

### Per Increment
- [ ] Deliverable implemented
- [ ] Unit tests written and passing
- [ ] Integration tests written and passing
- [ ] Coverage > 80%
- [ ] App launches successfully
- [ ] Manual test passes
- [ ] Metadata updated
- [ ] Changes committed

### Overall Project
- [ ] All 35 increments completed
- [ ] All tests passing (100%)
- [ ] Overall coverage > 80%
- [ ] App starts < 2 seconds
- [ ] Memory usage < 200MB
- [ ] Zero console errors
- [ ] All requirements met

---

## 🚀 Ready to Start?

### Step 1: Initialize
```bash
# Load context
cat .agentic/index/workspace-map.json
cat agent-metadata/progress/increment-tracker.json
```

### Step 2: Read Increment
```bash
# Read INCREMENT 0.1 specification
cat incremental-development/README.md
# Find: Phase 0, INCREMENT 0.1
```

### Step 3: Select Model
```bash
# Auto-select based on phase
# Phase 0 = claude-sonnet-4
```

### Step 4: Execute
```bash
# Initialize Electron project
npm init electron-app@latest markdown-editor -- --template=vite-typescript

# Then implement according to increment spec
```

### Step 5: Verify & Commit
```bash
# Run tests
npm test

# Launch app
npm start

# Commit
git commit -m "INCREMENT 0.1: Project initialization - Electron + React + TypeScript"
```

---

## 📚 Reference Files

| What You Need | Where to Find It |
|---------------|------------------|
| **Increment specifications** | `incremental-development/README.md` |
| **Model selection rules** | `.agentic/models/model-selection.json` |
| **Execution workflow** | `.agentic/execution/auto-executor.json` |
| **Current progress** | `agent-metadata/progress/increment-tracker.json` |
| **Requirements** | `requirements.md` |
| **Tech analysis** | `technical-analysis.md` |
| **Complete workflow** | `AI-AGENT-GUIDE.md` |
| **Workspace structure** | `.agentic/index/workspace-map.json` |

---

## 🎯 Your First Action

```bash
# Open and read this file
cat incremental-development/README.md

# Find INCREMENT 0.1 (Phase 0: Bootstrap)
# Duration: 15 minutes
# Goal: Create launchable Electron + React + TypeScript app
# Deliverable: Desktop app showing "Hello World"

# Then execute!
```

---

**Document Version**: 1.0  
**Last Updated**: 2025-12-07  
**Status**: Ready for Autonomous Execution

**Remember**: You are building a complete, production-ready markdown editor. Every increment matters. Every test matters. Quality is non-negotiable. You can do this! 🚀
