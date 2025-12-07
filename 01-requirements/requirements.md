# Markdown Edit Server - Requirements Document

## Project Overview

**Project Name**: Markdown Edit Server  
**Description**: A desktop application inspired by Zettlr Windows client, providing a local file-based markdown editing environment with 3-pane interface.  
**Target**: Create a simplified desktop version of Zettlr's core functionality focusing on local file management, markdown editing, and basic navigation.

## 1. Executive Summary

The Markdown Edit Server aims to create a desktop markdown editor that mimics Zettlr's Windows client interface and workflow. The application will be a local-only tool with no authentication, using the file system as the database. The focus is on providing a clean, efficient 3-pane interface for markdown editing with essential features that support productive writing workflows.

## 2. Core Features Analysis (Desktop Application - Incremental Levels)

### Level 1: Essential Interface (MVP)

#### 2.1.1 Three-Pane Layout
- **Left Pane**: File Explorer
  - Windows Explorer-like folder navigation
  - Tree view of selected workspace folder
  - File/folder create, rename, delete operations
  - Drag and drop support for organizing files
- **Middle Pane**: Markdown Editor
  - WYSIWYG markdown editor
  - Syntax highlighting
  - Auto-save functionality (similar to VSCode)
  - Real-time word count display
- **Right Pane**: Content Navigator (Toggle)
  - Table of Contents view (based on markdown headers)
  - Live Preview mode
  - Toggle button to switch between TOC and Preview

#### 2.1.2 Workspace Management
- **Folder Selection**: User opens application and selects a folder as workspace
- **No Database**: File system IS the database
- **Local Storage**: All operations work with local files only
- **No Authentication**: Direct file access without login

#### 2.1.3 File Operations
- **Auto File Creation**: New files created with current date/timestamp
- **Smart Naming**: Option to auto-save with first line as filename (heading)
- **Auto-save**: Continuous saving like VSCode (every few seconds)
- **File Types**: Support for .md, .txt, and basic text files

### Level 2: Enhanced Editing Features

#### 2.2.1 Markdown Editor Enhancements
- **Common Markdown Support**: 
  - Headers (H1-H6)
  - Bold, italic, strikethrough
  - Lists (ordered/unordered)
  - Links and images
  - Code blocks and inline code
  - Blockquotes
  - Tables
- **Editor Features**:
  - Line numbers
  - Find and replace
  - Zoom in/out
  - Word wrap toggle
  - Multiple cursor support

#### 2.2.2 Navigation Improvements
- **Table of Contents**: Auto-generated from headers
- **Quick Navigation**: Click TOC items to jump to sections
- **File Tabs**: Multiple files open in tabs
- **Recent Files**: Quick access to recently edited files

#### 2.2.3 Search Functionality
- **Global Search**: Text search across all files in workspace
- **File Name Search**: Quick file finding by name
- **Content Search**: Search within file content
- **Search Results**: Display results with context snippets

### Level 3: Productivity Features

#### 2.3.1 Advanced File Management
- **File Templates**: Pre-defined templates for common document types
- **Batch Operations**: Select multiple files for operations
- **File Properties**: Display file info (size, created, modified)
- **Backup**: Auto-backup of files

#### 2.3.2 Editor Productivity
- **Markdown Shortcuts**: Keyboard shortcuts for formatting
- **Auto-completion**: Basic markdown syntax completion
- **Snippet Support**: Common text snippets
- **Document Stats**: Word count, character count, reading time

#### 2.3.3 Customization
- **Themes**: Light/dark theme toggle
- **Font Settings**: Font family, size adjustment
- **Layout Preferences**: Pane sizes, hide/show panels
- **Keyboard Shortcuts**: Customizable key bindings

### Level 4: Advanced Features

#### 2.4.1 Extended Markdown Support
- **Math Equations**: LaTeX math rendering
- **Diagrams**: Basic Mermaid diagram support
- **Footnotes**: Standard markdown footnotes
- **Task Lists**: Checkbox support

#### 2.4.2 Export Options
- **HTML Export**: Convert markdown to HTML
- **PDF Export**: Basic PDF generation
- **Print Support**: Print documents directly
- **Batch Export**: Export multiple files

#### 2.4.3 Advanced Search
- **Regular Expressions**: Regex search support
- **Search Filters**: Filter by file type, date range
- **Search History**: Remember previous searches
- **Replace in Files**: Global find and replace

### Level 5: Extended Functionality

#### 2.5.1 Note Linking
- **Wiki Links**: [[filename]] style linking
- **Backlinks**: Show files that link to current file
- **Link Preview**: Hover preview of linked content

#### 2.5.2 Organization Tools
- **Tags**: Hashtag support for categorization
- **Bookmarks**: Bookmark frequently used files
- **Project Organization**: Group related files

#### 2.5.3 Import/Export
- **Import**: Support for various text formats
- **Export Templates**: Custom export formatting
- **Batch Processing**: Bulk file operations

## 3. Technical Requirements (Desktop Application)

### 3.1 Recommended Technology Stack (AI-Optimized)

#### **Option A: Tauri + React (Performance-Focused)**
- **Backend**: Tauri (Rust-based, lightweight)
- **Frontend**: React 18 + TypeScript + Vite
- **Editor**: Monaco Editor (VSCode's editor engine)
- **UI Components**: Tailwind CSS + Headless UI
- **State Management**: Zustand (lightweight, simple)
- **File Operations**: Tauri's file system APIs
- **Search**: Tantivy (Rust-based full-text search)

#### **Option B: Electron + React (AI-Friendly)**
- **Backend**: Electron (Node.js-based, familiar)
- **Frontend**: React 18 + TypeScript + Vite
- **Editor**: Monaco Editor or CodeMirror 6
- **UI Components**: Tailwind CSS + Radix UI
- **State Management**: Zustand or React Context
- **File Operations**: Node.js fs module
- **Search**: FlexSearch (JavaScript full-text search)

### 3.2 AI Agent Development Considerations

#### **For Maximum AI Generation Speed:**
- **Choose Electron**: More training data, simpler for AI to understand
- **Use Vite**: Fast development server, AI-friendly setup
- **TypeScript**: Better code completion and error detection
- **Component Libraries**: Pre-built components reduce AI generation time
- **Simple State Management**: Zustand or Context API over Redux

#### **Project Structure for AI Generation:**
```
src/
├── components/           # Reusable UI components
│   ├── FileExplorer/    # Left pane
│   ├── MarkdownEditor/  # Middle pane
│   └── Navigator/       # Right pane
├── hooks/               # Custom React hooks
├── services/            # File operations, search
├── stores/              # State management
├── types/               # TypeScript definitions
└── utils/               # Helper functions
```

### 3.3 Development Tools for AI Agents

#### **Scaffolding Tools:**
- **Create-React-App** or **Vite**: Quick project setup
- **Electron Forge**: Easy Electron configuration
- **Tauri CLI**: Simple Tauri project creation

#### **AI-Friendly Libraries:**
- **@monaco-editor/react**: Easy Monaco integration
- **react-hotkeys-hook**: Keyboard shortcuts
- **react-split-pane**: Resizable panes
- **lucide-react**: Simple, consistent icons
- **cmdk**: Command palette component

### 3.4 Local Storage and File Management
- **File System API**: Direct access via Electron's fs or Tauri's API
- **File Watching**: chokidar (Electron) or Tauri's file watcher
- **Auto-save**: Debounced saving with libraries like lodash.debounce
- **Search Indexing**: FlexSearch or Tantivy for fast text search
- **Backup**: Simple file copying strategies

### 3.5 Desktop-Specific Features
- **Native Menus**: Platform-specific application menus
- **File Associations**: Register .md file associations  
- **System Integration**: Context menu integration for files
- **Window Management**: Remember window size/position
- **Keyboard Shortcuts**: Native desktop keyboard handling

### 3.6 Quick Start Commands for AI Agents

#### **Electron + React Setup:**
```bash
# Create new Electron app
npx create-electron-app my-markdown-editor --template=typescript-webpack

# Add React dependencies
npm install react react-dom @types/react @types/react-dom

# Add essential libraries
npm install @monaco-editor/react react-split-pane zustand
npm install tailwindcss @headlessui/react lucide-react
npm install chokidar flexsearch lodash.debounce
```

#### **Tauri + React Setup:**
```bash
# Create Tauri app with React
npm create tauri-app@latest my-markdown-editor
# Choose: React, TypeScript, Vite

# Add essential libraries  
npm install @monaco-editor/react react-split-pane zustand
npm install tailwindcss @headlessui/react lucide-react
```

## 4. System Architecture (Desktop Application)

### 4.1 Desktop Application Architecture
```
┌─────────────────────────────────────────────────────────┐
│                 Electron Main Process                   │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────┐ │
│  │   File System  │ │   Window Mgmt   │ │   Menus     │ │
│  └─────────────────┘ └─────────────────┘ └─────────────┘ │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│               Electron Renderer Process                 │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────┐ │
│  │   File Explorer │ │   Editor Pane   │ │  Navigator  │ │
│  │    (Left)       │ │    (Middle)     │ │   (Right)   │ │
│  └─────────────────┘ └─────────────────┘ └─────────────┘ │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────┐ │
│  │   React UI      │ │   Monaco/CM6    │ │   Search    │ │
│  └─────────────────┘ └─────────────────┘ └─────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### 4.2 File System Integration
```
User Workspace Folder
├── documents/
│   ├── 2025-12-07_143022_My-First-Note.md
│   ├── 2025-12-07_143125_Research-Ideas.md
│   └── subfolder/
│       └── 2025-12-07_143200_Meeting-Notes.md
├── assets/
│   └── images/
└── .markdownedit/
    ├── preferences.json
    ├── recent-files.json
    └── workspace-config.json
```

## 5. User Stories and Use Cases (Desktop Application)

### 5.1 Primary User Stories

#### As a Writer/Note-taker:
- I want to select a folder and immediately start writing without setup
- I want to create new files with automatic timestamps
- I want to navigate between files like in Windows Explorer
- I want auto-save so I never lose my work
- I want to see a preview of my markdown while writing

#### As a Student:
- I want to organize my notes in folders by subject
- I want to quickly search through all my notes
- I want the first line to become the filename automatically
- I want to jump to different sections using table of contents

#### As a Researcher:
- I want to link between related notes
- I want to see which files reference each other
- I want to organize notes in a hierarchical structure
- I want to export my notes for sharing

### 5.2 Detailed Use Cases

#### Use Case 1: Starting a New Writing Session
1. User opens the application
2. User selects a folder as workspace (or opens recent workspace)
3. Application displays 3-pane interface with file explorer on left
4. User creates new file - automatically named with timestamp
5. User starts writing, with auto-save enabled

#### Use Case 2: Navigating and Editing Files
1. User browses files in left explorer pane
2. User clicks on file to open in middle editor pane
3. Right pane shows table of contents based on headers
4. User edits file with markdown WYSIWYG features
5. Changes are automatically saved

#### Use Case 3: Organizing and Searching
1. User creates folders and organizes files in explorer
2. User searches for content across all files
3. Search results show in context with file names
4. User can quickly jump to relevant files

## 6. Non-Functional Requirements (Desktop Application)

### 6.1 Performance Requirements
- **Startup Time**: Application launches < 2 seconds
- **File Operations**: File open/save < 500ms for files up to 10MB
- **Search Performance**: Search results < 1 second for 1000+ files
- **Memory Usage**: Efficient memory usage for large workspaces

### 6.2 Usability Requirements
- **Learning Curve**: Familiar Windows Explorer-like interface
- **Keyboard Shortcuts**: Standard desktop application shortcuts
- **File Handling**: Drag and drop support throughout
- **Offline Operation**: Complete offline functionality

### 6.3 Reliability and Data Safety
- **Auto-save**: Prevent data loss with frequent auto-saving
- **File Watching**: Detect external file changes
- **Backup Strategy**: Local backup options
- **Crash Recovery**: Recover unsaved changes after crash

### 6.4 Platform Requirements
- **Cross-platform**: Windows, macOS, Linux support via Electron
- **File System**: Standard file system operations
- **Native Integration**: Platform-specific features where appropriate
- **Portable**: Option for portable installation

## 7. Implementation Phases (Desktop Application)

### 7.1 Level 1: Essential Interface (MVP) 
**Duration**: 4-6 weeks
**Features**:
- Electron app setup with 3-pane layout
- Basic file explorer (left pane)
- Simple markdown editor with syntax highlighting (middle pane)
- TOC/Preview toggle (right pane)
- Folder selection and basic file operations
- Auto-save functionality

### 7.2 Level 2: Enhanced Editing
**Duration**: 3-4 weeks  
**Features**:
- Complete markdown syntax support
- WYSIWYG editing features
- File tabs for multiple open files
- Search functionality across workspace
- Auto-filename from first line
- Improved file operations (create, rename, delete)

### 7.3 Level 3: Productivity Features
**Duration**: 3-4 weeks
**Features**:
- Advanced editor features (find/replace, shortcuts)
- File templates and snippets
- Theme support (light/dark)
- Customizable layout and preferences
- Recent files and workspace memory
- Basic export (HTML, PDF)

### 7.4 Level 4: Advanced Features
**Duration**: 4-6 weeks
**Features**:
- Math equation support
- Basic diagram rendering
- Wiki-style linking between notes
- Advanced search with filters
- Backup and recovery options
- Performance optimizations

### 7.5 Level 5: Extended Functionality
**Duration**: 4-6 weeks
**Features**:
- Backlinks and note connections
- Tag management system
- Advanced export options
- Plugin architecture foundation
- Cross-platform testing and optimization
- Documentation and deployment

## 8. Success Metrics (Desktop Application)

### 8.1 Technical Metrics
- Application startup time < 2 seconds
- File operations < 500ms response time
- Search results < 1 second
- Zero data loss incidents through auto-save

### 8.2 User Adoption Metrics
- Intuitive interface with minimal learning curve
- Daily active usage of core features
- Positive user feedback on ease of use
- Successful note-taking and writing workflows

### 8.3 Functionality Metrics
- Reliable auto-save functionality (99.9% success rate)
- Accurate search results across file content
- Stable file system operations
- Effective 3-pane layout usage

## 9. Risk Assessment (Desktop Application)

### 9.1 Technical Risks
- **File System Conflicts**: Multiple users editing same files - Mitigate with file locking
- **Large File Performance**: Performance with many files - Implement lazy loading
- **Cross-platform Issues**: Electron compatibility - Extensive platform testing
- **Data Loss**: File corruption or loss - Robust auto-save and backup

### 9.2 User Experience Risks
- **Complexity**: Interface becoming too complex - Focus on simplicity
- **Performance**: Slow with large workspaces - Optimize file operations
- **Reliability**: Crashes or instability - Thorough testing and error handling

## 10. Conclusion

This requirements document outlines a desktop markdown editor inspired by Zettlr's Windows client, focused on local file system operations with no authentication requirements. The 5-level incremental approach ensures that each phase delivers value while building toward a complete solution.

The application prioritizes simplicity, reliability, and familiar desktop patterns. By using the file system as the database and implementing a clean 3-pane interface, users can immediately be productive without complex setup or learning curves.

**Key Success Factors:**
- Familiar Windows Explorer-like interface
- Reliable auto-save and file operations  
- Fast search across file content
- Clean, distraction-free writing environment
- Incremental feature delivery

**Final Technology Stack (See technical-analysis.md for detailed justification):**

```
┌──────────────────────────────────────────────────────┐
│           APPROVED TECHNOLOGY STACK                   │
├──────────────────────────────────────────────────────┤
│  Framework:    Electron 28+                          │
│  Frontend:     React 18 + TypeScript 5               │
│  Build Tool:   Vite 5                                │
│  Editor:       Monaco Editor (@monaco-editor/react)  │
│  UI:           Tailwind CSS + Headless UI            │
│  State:        Zustand                               │
│  Layout:       react-resizable-panels                │
│  Search:       FlexSearch                            │
│  File Watch:   chokidar                              │
│  Icons:        lucide-react                          │
│  Markdown:     remark + rehype                       │
└──────────────────────────────────────────────────────┘
```

**Why This Stack:**
- ✅ Optimal for AI agent code generation (60% faster development)
- ✅ Mature ecosystem with extensive libraries
- ✅ Meets all performance requirements (< 2s startup, < 500ms file ops)
- ✅ Cross-platform support (Windows, macOS, Linux)
- ✅ TypeScript throughout for type safety
- ✅ Proven track record in production applications

**Development Timeline:**
- Level 1 (MVP): 2-3 weeks
- Level 2: 1-2 weeks  
- Level 3: 1-2 weeks
- Level 4: 2-3 weeks
- Level 5: 2-3 weeks
- **Total: 8-13 weeks** for complete application

**Next Steps:**
1. Begin Level 1 implementation with Electron + React + TypeScript setup
2. Refer to `technical-analysis.md` for comprehensive technology evaluation
3. Advanced features documented in `advanced-features-requirements.md`
4. Focus on core functionality before expanding to advanced capabilities

---

**Document Version**: 3.0  
**Date**: December 7, 2025  
**Status**: Final Requirements with Approved Tech Stack - Ready for Development