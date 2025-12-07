# 15-Minute Incremental Development Plan

## Overview

This document breaks down the Markdown Edit Server development into **15-minute executable increments** that deliver visible, testable results. Each increment is designed for AI agent execution with clear deliverables and testing requirements.

## Principles

1. **Visible Progress**: Each 15-minute increment shows UI/behavior changes
2. **Testable**: Each increment includes unit and integration tests
3. **Runnable**: Application can be launched after each increment
4. **Incremental**: Builds on previous increments
5. **Focused**: Single feature or component per increment

---

## Phase 0: Project Bootstrap (4 increments = 60 minutes)

### INCREMENT 0.1 - Project Initialization (15 min)
**Goal**: Create working Electron + React application that launches

**Tasks**:
- Initialize Electron app with Vite + TypeScript
- Setup React with TypeScript
- Configure basic window (800x600)
- Add "Hello World" screen

**Deliverable**: Launchable desktop app showing "Hello World"

**Testing**:
- Unit: None (bootstrap)
- Integration: App launches successfully
- Manual: Window appears with text

**Files Created**:
```
package.json
tsconfig.json
vite.config.ts
src/main.ts (Electron main)
src/renderer.tsx (React entry)
src/App.tsx
```

---

### INCREMENT 0.2 - Basic Layout Structure (15 min)
**Goal**: Show 3-pane layout (empty panes)

**Tasks**:
- Install react-resizable-panels
- Create 3-column layout component
- Add placeholder text in each pane
- Make panes resizable

**Deliverable**: App with 3 resizable empty panes

**Testing**:
- Unit: Layout component renders 3 children
- Integration: Panes can be resized
- Manual: Drag dividers to resize

**Files Created**:
```
src/components/Layout/ThreePaneLayout.tsx
src/components/Layout/ThreePaneLayout.test.tsx
```

---

### INCREMENT 0.3 - Basic Styling (15 min)
**Goal**: Add Tailwind CSS and basic theme

**Tasks**:
- Install and configure Tailwind CSS
- Add dark theme support
- Style the 3-pane layout
- Add basic color scheme

**Deliverable**: Styled 3-pane layout with dark theme

**Testing**:
- Unit: Theme provider works
- Integration: Styles applied correctly
- Manual: App looks professional

**Files Created**:
```
tailwind.config.js
src/index.css
src/components/ThemeProvider.tsx
```

---

### INCREMENT 0.4 - Navigation Structure (15 min)
**Goal**: Add pane headers with labels

**Tasks**:
- Create header components for each pane
- Add labels: "Files", "Editor", "Navigator"
- Add icons using lucide-react
- Make headers sticky

**Deliverable**: 3-pane layout with labeled headers

**Testing**:
- Unit: Header components render correctly
- Integration: Headers remain visible during scroll
- Manual: Can see clear pane labels

**Files Created**:
```
src/components/PaneHeader.tsx
src/components/PaneHeader.test.tsx
```

---

## Phase 1: File Explorer (6 increments = 90 minutes)

### INCREMENT 1.1 - Folder Selection Dialog (15 min)
**Goal**: User can select workspace folder

**Tasks**:
- Add Electron dialog API integration
- Create "Open Folder" button
- Display selected folder path
- Store path in state

**Deliverable**: Button to select folder, path displayed

**Testing**:
- Unit: Dialog function is called
- Integration: Selected path updates UI
- Manual: Click button, select folder, see path

**Files Created**:
```
src/services/fileSystem.ts
src/stores/workspaceStore.ts
src/components/FileExplorer/FolderSelector.tsx
```

---

### INCREMENT 1.2 - Read Folder Contents (15 min)
**Goal**: Display files/folders in selected directory

**Tasks**:
- Read directory contents using fs
- Filter for .md and .txt files
- Display as simple list
- Show file names only

**Deliverable**: List of files in selected folder

**Testing**:
- Unit: File reading function works
- Integration: Files display when folder selected
- Manual: See list of markdown files

**Files Created**:
```
src/services/fileReader.ts
src/services/fileReader.test.ts
src/components/FileExplorer/FileList.tsx
```

---

### INCREMENT 1.3 - Tree View Structure (15 min)
**Goal**: Show hierarchical folder/file tree

**Tasks**:
- Install tree view library or build simple one
- Convert flat list to tree structure
- Show folders and files with indentation
- Add folder/file icons

**Deliverable**: Tree view of workspace

**Testing**:
- Unit: Tree structure builder works
- Integration: Nested folders display correctly
- Manual: See folder hierarchy

**Files Created**:
```
src/components/FileExplorer/TreeView.tsx
src/utils/treeBuilder.ts
src/utils/treeBuilder.test.ts
```

---

### INCREMENT 1.4 - Expand/Collapse Folders (15 min)
**Goal**: Folders can be expanded and collapsed

**Tasks**:
- Add expand/collapse state management
- Click folder to toggle
- Show chevron icon (▶/▼)
- Remember expanded state

**Deliverable**: Interactive folder tree

**Testing**:
- Unit: Toggle state changes correctly
- Integration: Clicking folder expands/collapses
- Manual: Click folders, see contents

**Files Created**:
```
src/components/FileExplorer/TreeNode.tsx
src/hooks/useTreeState.ts
src/hooks/useTreeState.test.ts
```

---

### INCREMENT 1.5 - File Selection (15 min)
**Goal**: Click file to select it (highlighted)

**Tasks**:
- Add selection state
- Highlight selected file
- Show file path in header
- Emit selection event

**Deliverable**: Clickable files with visual feedback

**Testing**:
- Unit: Selection state updates
- Integration: Only one file selected at a time
- Manual: Click files, see highlighting

**Files Created**:
```
src/stores/fileSelectionStore.ts
src/components/FileExplorer/FileItem.tsx
```

---

### INCREMENT 1.6 - File Watching (15 min)
**Goal**: Detect external file changes

**Tasks**:
- Install chokidar
- Watch workspace folder for changes
- Auto-refresh tree on changes
- Show notification on external change

**Deliverable**: Tree updates when files added externally

**Testing**:
- Unit: Watcher initialization works
- Integration: Tree refreshes on file add/delete
- Manual: Create file externally, see it appear

**Files Created**:
```
src/services/fileWatcher.ts
src/services/fileWatcher.test.ts
```

---

## Phase 2: Basic Editor (6 increments = 90 minutes)

### INCREMENT 2.1 - Monaco Editor Integration (15 min)
**Goal**: Show Monaco editor in middle pane

**Tasks**:
- Install @monaco-editor/react
- Create editor component
- Configure for markdown
- Show "Select a file" message

**Deliverable**: Empty Monaco editor displayed

**Testing**:
- Unit: Editor component renders
- Integration: Editor initializes correctly
- Manual: See code editor in middle pane

**Files Created**:
```
src/components/MarkdownEditor/Editor.tsx
src/components/MarkdownEditor/Editor.test.tsx
```

---

### INCREMENT 2.2 - Load File Content (15 min)
**Goal**: Clicking file loads content in editor

**Tasks**:
- Read file content using fs
- Load content into Monaco
- Show loading state
- Handle errors gracefully

**Deliverable**: File content displays in editor

**Testing**:
- Unit: File read function works
- Integration: Content loads when file selected
- Manual: Click file, see content

**Files Created**:
```
src/services/fileLoader.ts
src/services/fileLoader.test.ts
src/hooks/useFileContent.ts
```

---

### INCREMENT 2.3 - Basic Editing (15 min)
**Goal**: User can type and edit file content

**Tasks**:
- Enable editor editing
- Track content changes
- Show modified indicator (*)
- Update state on change

**Deliverable**: Editable text in Monaco

**Testing**:
- Unit: Change handler called on edit
- Integration: Content state updates
- Manual: Type in editor, see changes

**Files Created**:
```
src/stores/editorStore.ts
src/components/MarkdownEditor/EditorWrapper.tsx
```

---

### INCREMENT 2.4 - Manual Save (15 min)
**Goal**: Save button writes changes to file

**Tasks**:
- Add "Save" button (Ctrl+S)
- Write content to file using fs
- Show save confirmation
- Remove modified indicator

**Deliverable**: Save button that persists changes

**Testing**:
- Unit: Save function writes file
- Integration: Saved content persists
- Manual: Edit file, click save, reopen

**Files Created**:
```
src/services/fileSaver.ts
src/services/fileSaver.test.ts
src/components/MarkdownEditor/SaveButton.tsx
```

---

### INCREMENT 2.5 - Auto-save (15 min)
**Goal**: Changes save automatically every 3 seconds

**Tasks**:
- Add debounced save function
- Save 3 seconds after last change
- Show "Saving..." indicator
- Show "All changes saved" message

**Deliverable**: Auto-saving editor

**Testing**:
- Unit: Debounce function works
- Integration: File saves after 3 seconds idle
- Manual: Type, wait, verify saved

**Files Created**:
```
src/hooks/useAutoSave.ts
src/hooks/useAutoSave.test.ts
src/components/MarkdownEditor/AutoSaveIndicator.tsx
```

---

### INCREMENT 2.6 - Word Count (15 min)
**Goal**: Display word and character count

**Tasks**:
- Calculate word count from content
- Calculate character count
- Show in editor footer
- Update in real-time

**Deliverable**: Live word/character counter

**Testing**:
- Unit: Count functions work correctly
- Integration: Counts update on typing
- Manual: Type, see counts change

**Files Created**:
```
src/utils/textStats.ts
src/utils/textStats.test.ts
src/components/MarkdownEditor/StatsBar.tsx
```

---

## Phase 3: Preview & TOC (5 increments = 75 minutes)

### INCREMENT 3.1 - Markdown Parser (15 min)
**Goal**: Convert markdown to HTML

**Tasks**:
- Install remark + rehype
- Create markdown parser
- Convert markdown to HTML
- Handle basic syntax (headers, bold, italic)

**Deliverable**: Working markdown parser

**Testing**:
- Unit: Parser converts markdown correctly
- Integration: All markdown syntax renders
- Manual: N/A (library function)

**Files Created**:
```
src/services/markdownParser.ts
src/services/markdownParser.test.ts
```

---

### INCREMENT 3.2 - Preview Pane (15 min)
**Goal**: Show HTML preview in right pane

**Tasks**:
- Create preview component
- Render parsed HTML
- Style preview area
- Sync scroll with editor

**Deliverable**: Live markdown preview

**Testing**:
- Unit: Preview component renders HTML
- Integration: Preview updates on edit
- Manual: Type markdown, see formatted output

**Files Created**:
```
src/components/Navigator/Preview.tsx
src/components/Navigator/Preview.test.tsx
```

---

### INCREMENT 3.3 - TOC Generator (15 min)
**Goal**: Extract headers for table of contents

**Tasks**:
- Parse markdown for headers (H1-H6)
- Build TOC tree structure
- Show header hierarchy
- Display in right pane

**Deliverable**: Table of contents list

**Testing**:
- Unit: TOC extraction works
- Integration: TOC updates when headers change
- Manual: Add headers, see TOC

**Files Created**:
```
src/services/tocGenerator.ts
src/services/tocGenerator.test.ts
src/components/Navigator/TableOfContents.tsx
```

---

### INCREMENT 3.4 - TOC Navigation (15 min)
**Goal**: Click TOC item to jump to header

**Tasks**:
- Add click handlers to TOC items
- Scroll editor to header position
- Highlight active section
- Smooth scroll animation

**Deliverable**: Clickable TOC

**Testing**:
- Unit: Click handler updates cursor position
- Integration: Editor scrolls to correct line
- Manual: Click TOC, editor jumps

**Files Created**:
```
src/hooks/useTOCNavigation.ts
src/hooks/useTOCNavigation.test.ts
```

---

### INCREMENT 3.5 - Preview/TOC Toggle (15 min)
**Goal**: Toggle between preview and TOC

**Tasks**:
- Add toggle button in right pane header
- Switch between Preview and TOC views
- Remember user preference
- Add keyboard shortcut (Ctrl+P)

**Deliverable**: Switchable right pane

**Testing**:
- Unit: Toggle state changes
- Integration: Views switch correctly
- Manual: Click toggle, see view change

**Files Created**:
```
src/components/Navigator/NavigatorToggle.tsx
src/stores/navigatorStore.ts
```

---

## Phase 4: File Operations (6 increments = 90 minutes)

### INCREMENT 4.1 - New File (15 min)
**Goal**: Create new markdown file

**Tasks**:
- Add "New File" button
- Generate filename with timestamp
- Create empty file
- Open in editor

**Deliverable**: New file creation

**Testing**:
- Unit: Filename generation works
- Integration: File appears in tree
- Manual: Click button, new file created

**Files Created**:
```
src/services/fileCreator.ts
src/services/fileCreator.test.ts
src/components/FileExplorer/NewFileButton.tsx
```

---

### INCREMENT 4.2 - Auto-naming from Heading (15 min)
**Goal**: Rename file based on first H1

**Tasks**:
- Extract first H1 from content
- Slugify header text
- Auto-rename file on save
- Show rename confirmation

**Deliverable**: Smart file naming

**Testing**:
- Unit: Header extraction works
- Integration: File renamed on save
- Manual: Add H1, save, see new filename

**Files Created**:
```
src/utils/autoNaming.ts
src/utils/autoNaming.test.ts
src/hooks/useAutoNaming.ts
```

---

### INCREMENT 4.3 - Delete File (15 min)
**Goal**: Delete selected file

**Tasks**:
- Add delete button/menu item
- Show confirmation dialog
- Delete file using fs
- Remove from tree

**Deliverable**: File deletion

**Testing**:
- Unit: Delete function works
- Integration: File removed from tree
- Manual: Delete file, confirm removed

**Files Created**:
```
src/services/fileDeleter.ts
src/components/FileExplorer/DeleteButton.tsx
src/components/ConfirmDialog.tsx
```

---

### INCREMENT 4.4 - Rename File (15 min)
**Goal**: Rename file manually

**Tasks**:
- Add rename context menu
- Show inline input field
- Validate new name
- Rename file using fs

**Deliverable**: File renaming

**Testing**:
- Unit: Rename validation works
- Integration: File renamed in tree
- Manual: Right-click, rename file

**Files Created**:
```
src/services/fileRenamer.ts
src/components/FileExplorer/RenameInput.tsx
```

---

### INCREMENT 4.5 - New Folder (15 min)
**Goal**: Create new folder

**Tasks**:
- Add "New Folder" button
- Show name input dialog
- Create folder using fs
- Show in tree

**Deliverable**: Folder creation

**Testing**:
- Unit: Folder creation works
- Integration: Folder appears in tree
- Manual: Create folder, see it

**Files Created**:
```
src/services/folderCreator.ts
src/components/FileExplorer/NewFolderButton.tsx
```

---

### INCREMENT 4.6 - Drag & Drop (15 min)
**Goal**: Drag files to move them

**Tasks**:
- Add drag handlers to file items
- Add drop handlers to folders
- Move file to new location
- Update tree view

**Deliverable**: Drag and drop file organization

**Testing**:
- Unit: Move operation works
- Integration: File moved correctly
- Manual: Drag file to folder

**Files Created**:
```
src/hooks/useDragAndDrop.ts
src/services/fileMover.ts
```

---

## Phase 5: Search (4 increments = 60 minutes)

### INCREMENT 5.1 - Search UI (15 min)
**Goal**: Search input in file explorer

**Tasks**:
- Add search input at top
- Style search box
- Add search icon
- Add clear button

**Deliverable**: Search input field

**Testing**:
- Unit: Search input renders
- Integration: Input captures text
- Manual: Type in search box

**Files Created**:
```
src/components/FileExplorer/SearchBar.tsx
src/components/FileExplorer/SearchBar.test.tsx
```

---

### INCREMENT 5.2 - File Name Search (15 min)
**Goal**: Filter files by name

**Tasks**:
- Implement filename matching
- Filter tree view by name
- Highlight matching text
- Show result count

**Deliverable**: Filename filtering

**Testing**:
- Unit: Filter function works
- Integration: Tree filters on input
- Manual: Type name, see filtered files

**Files Created**:
```
src/utils/fileFilter.ts
src/utils/fileFilter.test.ts
src/hooks/useFileSearch.ts
```

---

### INCREMENT 5.3 - Content Search Index (15 min)
**Goal**: Index file contents for search

**Tasks**:
- Install FlexSearch
- Index all markdown files
- Update index on file changes
- Store index in memory

**Deliverable**: Search indexing

**Testing**:
- Unit: Indexing function works
- Integration: Files indexed on load
- Manual: N/A (background process)

**Files Created**:
```
src/services/searchIndexer.ts
src/services/searchIndexer.test.ts
src/hooks/useSearchIndex.ts
```

---

### INCREMENT 5.4 - Content Search Results (15 min)
**Goal**: Search file contents and show results

**Tasks**:
- Query search index
- Show results with context
- Click result to open file
- Highlight search term in editor

**Deliverable**: Full content search

**Testing**:
- Unit: Search query works
- Integration: Results display correctly
- Manual: Search text, click result

**Files Created**:
```
src/components/Search/SearchResults.tsx
src/components/Search/SearchResults.test.tsx
```

---

## Phase 6: Keyboard Shortcuts & Polish (4 increments = 60 minutes)

### INCREMENT 6.1 - Keyboard Shortcuts (15 min)
**Goal**: Add common keyboard shortcuts

**Tasks**:
- Install react-hotkeys-hook
- Add Ctrl+N (new file)
- Add Ctrl+S (save)
- Add Ctrl+F (search)
- Add Ctrl+P (toggle preview)

**Deliverable**: Working keyboard shortcuts

**Testing**:
- Unit: Shortcut handlers called
- Integration: Shortcuts trigger actions
- Manual: Press keys, see actions

**Files Created**:
```
src/hooks/useKeyboardShortcuts.ts
src/utils/shortcuts.ts
```

---

### INCREMENT 6.2 - Settings Panel (15 min)
**Goal**: Basic settings UI

**Tasks**:
- Create settings dialog
- Add theme toggle (light/dark)
- Add font size selector
- Save to localStorage

**Deliverable**: Settings panel

**Testing**:
- Unit: Settings save correctly
- Integration: Settings persist
- Manual: Change settings, reopen app

**Files Created**:
```
src/components/Settings/SettingsDialog.tsx
src/stores/settingsStore.ts
```

---

### INCREMENT 6.3 - Recent Files (15 min)
**Goal**: Quick access to recent files

**Tasks**:
- Track last 10 opened files
- Show in file explorer header
- Click to open file
- Persist to localStorage

**Deliverable**: Recent files list

**Testing**:
- Unit: Recent tracking works
- Integration: List updates on file open
- Manual: Open files, see recent list

**Files Created**:
```
src/components/FileExplorer/RecentFiles.tsx
src/hooks/useRecentFiles.ts
```

---

### INCREMENT 6.4 - Error Handling (15 min)
**Goal**: Graceful error handling

**Tasks**:
- Add error boundary component
- Show user-friendly error messages
- Log errors to console
- Add retry buttons

**Deliverable**: Error handling system

**Testing**:
- Unit: Error boundary catches errors
- Integration: Errors display correctly
- Manual: Trigger error, see message

**Files Created**:
```
src/components/ErrorBoundary.tsx
src/components/ErrorMessage.tsx
src/utils/errorLogger.ts
```

---

## Total Summary

| Phase | Increments | Duration | Cumulative |
|-------|-----------|----------|------------|
| **Phase 0: Bootstrap** | 4 | 60 min | 60 min |
| **Phase 1: File Explorer** | 6 | 90 min | 150 min |
| **Phase 2: Basic Editor** | 6 | 90 min | 240 min |
| **Phase 3: Preview & TOC** | 5 | 75 min | 315 min |
| **Phase 4: File Operations** | 6 | 90 min | 405 min |
| **Phase 5: Search** | 4 | 60 min | 465 min |
| **Phase 6: Polish** | 4 | 60 min | 525 min |
| **TOTAL** | **35** | **525 min** | **8.75 hours** |

## Key Principles for AI Agent Execution

1. **Each increment is standalone** - Can be executed independently
2. **Always runnable** - App launches after every increment
3. **Visible progress** - User sees UI/behavior changes
4. **Test-driven** - Unit + integration tests for each
5. **Documented** - Clear goals and acceptance criteria

## Testing Strategy

Each increment includes:
- **Unit Tests**: Individual function/component testing
- **Integration Tests**: Feature interaction testing
- **Manual Tests**: User-visible behavior verification

---

## Extended Backlog (Post-MVP, Notepad++ Parity)

These increments are **optional and post-MVP**. Execute only after the current scope (Phases 0-6) is complete. They follow the same 15-minute pattern and do **not** change the MVP totals above.

### Phase 7: Editing Ergonomics (Notepad++ Classics) — 4 increments (60 min)
**7.1 Column Mode & Block Selection (15 min)**
- Goal: Add block/column selection toggle with shortcut
- Deliverable: Editor supports column selection with visible caret blocks
- Tests: Unit toggle; integration verifies selection rectangles

**7.2 Line Ops: Duplicate/Move/Join/Split (15 min)**
- Goal: Duplicate line/selection; move line up/down; join/split lines
- Deliverable: Commands wired to shortcuts and command palette
- Tests: Unit for text transforms; integration for shortcut wiring

**7.3 Whitespace Hygiene (15 min)**
- Goal: Trim trailing spaces on save; tabs↔spaces toggle; configurable tab size
- Deliverable: Save pipeline hook; per-workspace setting persisted
- Tests: Unit for formatter; integration for save hook

**7.4 Case/Sort Utilities (15 min)**
- Goal: Upper/lower/title case; sort and unique lines
- Deliverable: Commands in palette; applies to selection
- Tests: Unit for transforms; integration for palette wiring

### Phase 8: Search/Replace Pro — 3 increments (45 min)
**8.1 Find/Replace with Regex & In-Selection (15 min)**
- Goal: Regex/whole-word/case options; in-selection mode; highlight all matches
- Deliverable: Find/replace panel with options and match highlights
- Tests: Unit for matcher; integration for panel interactions

**8.2 Multi-File Search Panel (15 min)**
- Goal: Search across workspace; show results list; click to open file/line
- Deliverable: Results panel with context snippets and counts
- Tests: Unit for search adapter; integration for navigation

**8.3 Bookmarks & Jump-to-Line (15 min)**
- Goal: Toggle bookmarks on lines; list bookmarks; jump-to-line dialog
- Deliverable: Bookmark gutter + palette commands + Go To Line modal
- Tests: Unit for bookmark store; integration for gutter UI

### Phase 9: Tabs, Sessions, and Recovery — 3 increments (45 min)
**9.1 Multi-Tab Document Model (15 min)**
- Goal: Tabs for open files with close/reopen; dirty indicator
- Deliverable: Tab bar with file titles and dirty state
- Tests: Unit for tab store; integration for tab switching

**9.2 Session Restore & Recent Files (15 min)**
- Goal: Persist open tabs + cursor positions; recent files menu
- Deliverable: Session load on start; recent list in explorer header
- Tests: Unit for persistence; integration for restore flow

**9.3 Crash/Unsaved Recovery (15 min)**
- Goal: Autosave unsaved buffers to recovery storage; restore on crash
- Deliverable: Recovery dialog on next launch
- Tests: Unit for recovery store; integration for launch recovery

### Phase 10: View & Status Bar — 3 increments (45 min)
**10.1 Status Bar (15 min)**
- Goal: Show line/col, EOL (CRLF/LF), encoding (UTF-8/others), language, selection length
- Deliverable: Status bar with live updates
- Tests: Unit for formatter; integration for status updates

**10.2 View Toggles (15 min)**
- Goal: Word wrap toggle; show whitespace/EOL; indent guides; caret info
- Deliverable: View menu + palette commands persisting per workspace
- Tests: Unit for settings; integration for toggle effects

**10.3 Zoom & Minimap Toggle (15 min)**
- Goal: Zoom in/out/reset; optional minimap toggle
- Deliverable: Commands + UI controls
- Tests: Unit for zoom state; integration for editor resize

### Phase 11: Tools, Macros, Clipboard — 3 increments (45 min)
**11.1 Macro Record/Playback (15 min)**
- Goal: Record simple command sequences; save as JSON; replay
- Deliverable: Macro panel + palette commands
- Tests: Unit for recorder; integration for playback

**11.2 Clipboard History (15 min)**
- Goal: Keep last N clipboard entries; picker UI
- Deliverable: Clipboard history dropdown/palette command
- Tests: Unit for history store; integration for paste selection

**11.3 Snippets & Command Palette Integration (15 min)**
- Goal: User snippets with tabstops; palette search and insert
- Deliverable: Snippet registry + insertion commands
- Tests: Unit for snippet parser; integration for insertion

### Phase 12: Diff & Export — 2 increments (30 min)
**12.1 Two-Buffer Diff (15 min)**
- Goal: Compare two open buffers side-by-side; highlight changes
- Deliverable: Diff view with gutter highlights and navigation
- Tests: Unit for diff adapter; integration for view rendering

**12.2 Print/Export (15 min)**
- Goal: Export/print with syntax highlighting (HTML/PDF); markdown export
- Deliverable: Print/export dialog using existing preview pipeline
- Tests: Unit for export formatter; integration for dialog

### Extended Backlog Summary (Not Included in MVP Totals)
| Phase | Increments | Duration | Notes |
|-------|------------|----------|-------|
| Phase 7: Editing Ergonomics | 4 | 60 min | Notepad++ line/block tools |
| Phase 8: Search/Replace Pro | 3 | 45 min | Regex, multi-file, bookmarks |
| Phase 9: Tabs & Sessions | 3 | 45 min | Tabs, session restore, recovery |
| Phase 10: View & Status | 3 | 45 min | Status bar, wrap/whitespace, zoom |
| Phase 11: Tools & Macros | 3 | 45 min | Macros, clipboard history, snippets |
| Phase 12: Diff & Export | 2 | 30 min | Diff, print/export |
| **TOTAL (Post-MVP)** | **18** | **270 min** | **4.5 hours** |

---

**Document Version**: 1.0  
**Date**: December 7, 2025  
**Status**: 15-Minute Incremental Development Plan