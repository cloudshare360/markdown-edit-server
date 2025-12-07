# 🚀 Markdown Edit Server

> **A Zettlr-inspired desktop markdown editor built with Electron, React, and TypeScript following SDLC best practices.**

---

## 📁 Project Structure (SDLC-Compliant)

```
markdown-edit-server/
├── 01-requirements/              # ✅ Requirements & Specifications
│   ├── requirements.md          
│   ├── technical-analysis.md    
│   └── advanced-features-requirements.md
│
├── 02-planning/                  # 📋 Planning & Architecture
│   └── (Architecture diagrams, sprint plans)
│
├── 03-development/               # 💻 Source Code
│   ├── app/
│   │   ├── frontend/src/        # React components, hooks, services
│   │   ├── electron/            # Electron main process
│   │   └── index.html
│   └── config/                  # Build configurations
│
├── 04-testing/                   # 🧪 Test Suites
│   ├── unit/                    
│   ├── integration/            
│   └── e2e/                    
│
├── 05-deployment/                # 🚀 Deployment & Release
│   ├── scripts/               
│   └── config/                
│
├── 06-project-management/        # 📊 Project Tracking
│   ├── tracking/agent-metadata/  # Progress tracking
│   ├── agentic-system/.agentic/  # AI development system
│   ├── increments/               # 35 x 15-min increments
│   ├── AI-AGENT-GUIDE.md        
│   └── START-HERE.md            
│
└── README.md                     # This file
```

---

## ⚡ Quick Start

### For Developers

```bash
# 1. Install dependencies
npm install

# 2. Run development (Vite + Electron concurrently)
npm run dev

# 3. Build application
npm run build

# 4. Run tests
npm test
```

### For AI Agents

```bash
# 1. Quick start (2 minutes)
cat 06-project-management/START-HERE.md

# 2. Check progress
cat 06-project-management/tracking/agent-metadata/progress/project-status.json

# 3. Read next increment
cat 06-project-management/increments/incremental-development/README.md

# 4. Start development
npm run dev
```

---

## 📊 Project Overview

| Aspect | Details |
|--------|---------|
| **Type** | Desktop Application |
| **Framework** | Electron 28+ |
| **Frontend** | React 18 + TypeScript 5 |
| **Build Tool** | Vite 5 |
| **Editor** | Monaco Editor (VSCode engine) |
| **UI** | Tailwind CSS + Headless UI |
| **State** | Zustand |
| **Layout** | 3-pane: File Explorer \| Editor \| Preview/TOC |
| **Storage** | Local file system only |
| **Auth** | None (local-only) |

---

## 🎯 Development Approach

### Incremental Development (35 × 15 minutes = 525 minutes)

| Phase | Increments | Duration | Focus |
|-------|-----------|----------|-------|
| **Phase 0: Bootstrap** | 4 | 60 min | Electron + React + Layout |
| **Phase 1: File Explorer** | 6 | 90 min | Folder tree, file selection |
| **Phase 2: Editor** | 6 | 90 min | Monaco integration |
| **Phase 3: Preview/TOC** | 5 | 75 min | HTML preview + TOC |
| **Phase 4: File Ops** | 6 | 90 min | Create, rename, delete |
| **Phase 5: Search** | 4 | 60 min | Full-text search |
| **Phase 6: Polish** | 4 | 60 min | Performance + UX |

**Total**: 35 increments, 8.75 hours

---

## 🤖 AI Model Strategy

### Recommended: Claude Sonnet 4 (Primary)

**Why?**
- ✅ Superior TypeScript + React generation
- ✅ 200K token context window
- ✅ 95-98% code quality
- ✅ 85-95% test coverage
- ✅ Cost-effective: $5.50-10.00 total

### Cost Breakdown

| Phase | Model | Est. Cost |
|-------|-------|-----------|
| 0, 1, 2, 4 | Claude Sonnet 4 | $3.30-6.60 |
| 3 | GPT-4 Turbo | $1.00-2.00 |
| 5 | Claude 3.5 Sonnet | $0.20-0.60 |
| 6 | GPT-4o | $1.00-1.80 |

---

## 📚 Documentation

### By Folder
- **01-requirements/** - Requirements, specs, analysis
- **02-planning/** - Architecture, planning docs
- **03-development/** - Source code & configs
- **04-testing/** - Test suites & strategies
- **05-deployment/** - Build & release configs
- **06-project-management/** - Tracking & guides

### Key Documents
- [Main Requirements](./01-requirements/requirements.md)
- [Technical Analysis](./01-requirements/technical-analysis.md)
- [Increment Plan](./06-project-management/increments/incremental-development/README.md)
- [AI Agent Guide](./06-project-management/AI-AGENT-GUIDE.md)
- [Development Guide](./03-development/README.md)
- [Testing Strategy](./04-testing/README.md)

---

## ✅ Quality Standards

### Per Increment
- ✅ Production-ready code (TypeScript, ESLint)
- ✅ Unit tests (coverage > 80%)
- ✅ Integration tests
- ✅ App remains runnable
- ✅ Changes committed
- ✅ Metadata updated

### Performance Targets
- ⚡ Startup < 2 seconds
- 💾 Memory < 200MB idle
- 🐛 Zero console errors
- ✅ 100% test pass rate

---

## 🔧 Development Commands

```bash
# Development
npm run dev              # Run Vite + Electron concurrently
npm run dev:vite         # Run Vite dev server only
npm run dev:electron     # Run Electron only

# Building
npm run build            # Build React + compile Electron
npm run build:electron   # Package with Electron Builder

# Testing
npm test                 # Run all tests
npm run test:unit        # Unit tests
npm run test:integration # Integration tests
npm run test:e2e         # End-to-end tests
npm run test:coverage    # With coverage report

# Code Quality
npm run lint             # ESLint
npm run format           # Prettier
npm run type-check       # TypeScript checking
```

## 🔐 Git Credential Setup (per workspace)
- Local-only store: configured to use `git config --local credential.helper "store --file=.git-credentials"` (file is ignored). This is plaintext; use only if you accept the risk.
- Safer option: use Git Credential Manager (global) or a short-lived cache; avoids writing secrets to disk.
- To populate `.git-credentials` from `.env` (manual): copy `.env.example` to `.env`, set `GIT_USERNAME`/`GIT_PAT`, then run
	```powershell
	$envVars = Get-Content .env | Where-Object { $_ -match "=" } | ForEach-Object { $k,$v = $_ -split "=",2; @{ Key=$k; Value=$v } }
	$user = ($envVars | Where-Object Key -eq 'GIT_USERNAME').Value
	$pat  = ($envVars | Where-Object Key -eq 'GIT_PAT').Value
	"https://${user}:${pat}@github.com" | Out-File -Encoding ASCII -FilePath .git-credentials
	```
	(Do this only locally; `.git-credentials` stays ignored.)
- CI: use repo/org secrets (e.g., `GITHUB_TOKEN`) and never commit tokens.

---

## 📈 Current Status

### ✅ Completed
- Requirements & analysis
- 35-increment plan
- AI model selection
- SDLC workspace structure
- INCREMENT 0.1: Project initialization

### 🔄 In Progress
- INCREMENT 0.2: 3-pane layout

### 📋 Next Steps
1. Complete Phase 0 (3 more increments)
2. Phase 1: File Explorer (6 increments)
3. Continue through all 35 increments

---

## 🎓 SDLC Compliance

### Phase 1: Requirements ✅
- [x] Requirements gathered
- [x] Technical analysis
- [x] Tech stack finalized

### Phase 2: Planning ✅
- [x] 35 increments planned
- [x] Architecture designed
- [x] AI model selected

### Phase 3: Development 🔄
- [x] INCREMENT 0.1 ✅
- [ ] Increments 0.2-6.4

### Phase 4: Testing 🔄
- [ ] Unit + Integration per increment
- [ ] E2E tests
- [ ] Performance testing

### Phase 5: Deployment 📋
- [ ] Build pipeline
- [ ] Installers
- [ ] Release process

### Phase 6: Maintenance 📋
- [ ] Bug fixes
- [ ] Optimization
- [ ] Enhancements

---

## 👥 Project Team

### Development
- AI Agent (Claude Sonnet 4)
- Human oversight

### Roles
- Requirements: Complete
- Architecture: Complete
- Development: Incremental (35 tasks)
- Testing: Per increment
- Deployment: Phase 6

---

## 📄 License

ISC

---

## 🏆 Project Metadata

- **Start Date**: December 7, 2025
- **Approach**: Incremental AI-assisted development
- **Model**: Claude Sonnet 4 (primary)
- **Timeline**: ~10.5 hours estimated
- **Cost**: $5.50-10.00 estimated
- **Status**: Phase 0 - Bootstrap

---

**Built following SDLC best practices with AI-assisted development** 🤖
