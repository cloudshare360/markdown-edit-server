# 🚀 START HERE - New Agent Onboarding

## 👋 Welcome, AI Agent!

You're about to build a complete desktop markdown editor in **35 increments of 15 minutes each**.

This file gets you started in **under 2 minutes**.

---

## ⚡ 60-Second Quick Start

### 1. Your Mission
Build a **Zettlr-inspired desktop markdown editor** with:
- 3-pane layout (File Explorer | Editor | Preview/TOC)
- Electron + React + TypeScript + Monaco Editor
- Local file system only (no database, no authentication)
- 35 increments = 525 minutes = 8.75 hours

### 2. Right Now: Do This
```bash
# Read the increment plan
cat incremental-development/README.md

# Find INCREMENT 0.1 (first task)
# Goal: Create Electron + React + TypeScript app
# Duration: 15 minutes
# Deliverable: Launchable app showing "Hello World"
```

### 3. Your First Task (INCREMENT 0.1)
```bash
# Initialize Electron project with TypeScript
npm init electron-app@latest markdown-editor -- --template=vite-typescript

# Then implement:
# - Basic Electron window
# - React "Hello World"
# - Verify it launches
# - Write tests
# - Commit
```

---

## 📚 Essential Files (Read in Order)

| Priority | File | Purpose | Time |
|----------|------|---------|------|
| **🔥 CRITICAL** | `.agentic/index/quick-reference.md` | Complete quick start guide | 5 min |
| **🔥 CRITICAL** | `incremental-development/README.md` | All 35 increment specs | 3 min (just read 0.1) |
| **⚡ IMPORTANT** | `.agentic/models/model-selection.json` | Which AI model to use | 1 min |
| **⚡ IMPORTANT** | `agent-metadata/progress/increment-tracker.json` | Current progress | 1 min |
| 📖 Optional | `AI-AGENT-GUIDE.md` | Complete workflow guide | 15 min |

---

## 🤖 AI Model Auto-Selection

**For INCREMENT 0.1 (Bootstrap Phase):**
- **Use: Claude Sonnet 4**
- **Why: Critical foundation requires highest reliability**
- **Cost: ~$0.15-0.30 for this increment**

**Auto-selection will choose optimal model for each increment based on complexity.**

---

## ✅ Quality Checklist (Every Increment)

After each 15-minute increment, verify:
- [ ] Code written and working
- [ ] Unit tests written and passing
- [ ] Integration tests written and passing
- [ ] Test coverage > 80%
- [ ] App launches successfully (< 2 seconds)
- [ ] Memory usage < 200MB
- [ ] Zero console errors
- [ ] Changes committed to git
- [ ] Metadata updated (increment-tracker.json, project-status.json, etc.)

---

## 🎯 The Golden Rules

1. **Always Runnable**: App must work after every increment
2. **Visible Progress**: Each increment shows user-visible results
3. **Test Everything**: No increment is complete without tests
4. **Update Metadata**: Track progress religiously
5. **15 Minutes Max**: Stay focused, don't over-engineer

---

## 🔄 The Workflow (Every Increment)

```
1. Read increment spec (2 min)
   ↓
2. Select AI model (auto)
   ↓
3. Write code (10 min)
   ↓
4. Write tests (3 min)
   ↓
5. Run tests - verify 100% pass
   ↓
6. Launch app - verify it works
   ↓
7. Commit changes
   ↓
8. Update metadata (2 min)
   ↓
9. Next increment
```

**Total per increment: ~18 minutes (15 dev + 3 overhead)**

---

## 📊 Project Overview

| Phase | Increments | Duration | Focus |
|-------|-----------|----------|-------|
| **0: Bootstrap** | 4 | 60 min | Electron + React setup |
| **1: File Explorer** | 6 | 90 min | Folder tree navigation |
| **2: Editor** | 6 | 90 min | Monaco integration |
| **3: Preview/TOC** | 5 | 75 min | HTML preview + TOC |
| **4: File Ops** | 6 | 90 min | Create/rename/delete |
| **5: Search** | 4 | 60 min | Full-text search |
| **6: Polish** | 4 | 60 min | Performance + UX |

**Total: 35 increments, 525 minutes (8.75 hours)**

---

## 🎓 Success Criteria

### Per Increment
- ✅ Deliverable implemented
- ✅ Tests passing (100%)
- ✅ App launches
- ✅ Metadata updated
- ✅ Changes committed

### Overall Project
- ✅ All 35 increments done
- ✅ Test coverage > 80%
- ✅ App starts < 2s
- ✅ Memory < 200MB
- ✅ Zero errors

---

## 🚀 Your Next Actions (Right Now)

### Step 1: Quick Read (5 minutes)
```bash
cat .agentic/index/quick-reference.md
```

### Step 2: Read INCREMENT 0.1 (2 minutes)
```bash
cat incremental-development/README.md
# Scroll to: Phase 0, INCREMENT 0.1
```

### Step 3: Start Coding (15 minutes)
```bash
# Initialize Electron app
npm init electron-app@latest markdown-editor -- --template=vite-typescript

# Follow INCREMENT 0.1 specification
# Goal: Launchable Electron + React app with "Hello World"
```

### Step 4: Test & Commit (3 minutes)
```bash
# Run tests
npm test

# Launch app
npm start

# Commit
git add .
git commit -m "INCREMENT 0.1: Project initialization - Electron + React + TypeScript"
```

### Step 5: Update Metadata (2 minutes)
```bash
# Update these files:
# - agent-metadata/progress/increment-tracker.json
# - agent-metadata/progress/project-status.json
# - agent-metadata/features/feature-registry.json
# - agent-metadata/testing/test-registry.json
```

---

## 💡 Need Help?

| Question | Answer |
|----------|--------|
| **What should I build?** | Read `incremental-development/README.md` |
| **Which model should I use?** | Read `.agentic/models/model-selection.json` |
| **How do I test?** | Read `AI-AGENT-GUIDE.md` (testing section) |
| **What's the workflow?** | Read `.agentic/execution/auto-executor.json` |
| **Where am I?** | Check `agent-metadata/progress/increment-tracker.json` |

---

## 🎯 TL;DR - Just Tell Me What to Do

```bash
# 1. Read this (5 min)
cat .agentic/index/quick-reference.md

# 2. Read INCREMENT 0.1 (2 min)
cat incremental-development/README.md

# 3. Initialize Electron (1 min)
npm init electron-app@latest markdown-editor -- --template=vite-typescript

# 4. Code INCREMENT 0.1 (15 min)
# Create: Basic Electron window + React "Hello World"

# 5. Test & verify (2 min)
npm test && npm start

# 6. Commit (1 min)
git commit -m "INCREMENT 0.1: Project initialization"

# 7. Update metadata (2 min)
# Edit: increment-tracker.json, project-status.json

# 8. Next increment
# Repeat for INCREMENT 0.2
```

---

## 🎉 You're Ready!

**Current Status**: Phase 0, INCREMENT 0.1  
**Next Action**: Initialize Electron + React app  
**Time Needed**: 15 minutes  
**Model**: Claude Sonnet 4  

**Go build something amazing! 🚀**

---

**Document Version**: 1.0  
**Last Updated**: 2025-12-07  
**Status**: Ready for Immediate Execution

**Your First Command**:
```bash
cat .agentic/index/quick-reference.md
```
