import ThemeProvider from './components/ThemeProvider';
import ThreePaneLayout from './components/Layout/ThreePaneLayout';
import PaneHeader from './components/PaneHeader';
import { FolderIcon, FileTextIcon, BookOpenIcon } from './components/Icons';

function App() {
  return (
    <ThemeProvider>
      <ThreePaneLayout
        leftPane={
          <div className="h-full flex flex-col">
            <PaneHeader icon={<FolderIcon />} title="Files" />
            <div className="flex-1 p-4">
              <p className="text-gray-400">File explorer will appear here</p>
            </div>
          </div>
        }
        centerPane={
          <div className="h-full flex flex-col">
            <PaneHeader icon={<FileTextIcon />} title="Editor" />
            <div className="flex-1 p-4">
              <p className="text-gray-400">Markdown editor will appear here</p>
            </div>
          </div>
        }
        rightPane={
          <div className="h-full flex flex-col">
            <PaneHeader icon={<BookOpenIcon />} title="Navigator" />
            <div className="flex-1 p-4">
              <p className="text-gray-400">Preview/TOC will appear here</p>
            </div>
          </div>
        }
      />
    </ThemeProvider>
  );
}

export default App;
