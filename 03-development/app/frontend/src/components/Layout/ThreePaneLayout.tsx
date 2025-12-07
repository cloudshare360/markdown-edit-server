import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

interface ThreePaneLayoutProps {
  leftPane: React.ReactNode;
  centerPane: React.ReactNode;
  rightPane: React.ReactNode;
}

export default function ThreePaneLayout({ leftPane, centerPane, rightPane }: ThreePaneLayoutProps) {
  return (
    <div className="h-screen w-screen flex bg-editor-bg">
      <PanelGroup direction="horizontal">
        <Panel defaultSize={20} minSize={10} maxSize={40}>
          <div className="h-full w-full bg-sidebar-bg text-gray-100 overflow-hidden border-r border-gray-700">
            {leftPane}
          </div>
        </Panel>
        
        <PanelResizeHandle className="w-1 bg-gray-700 hover:bg-accent transition-colors cursor-col-resize" />
        
        <Panel defaultSize={50} minSize={30}>
          <div className="h-full w-full bg-editor-bg text-gray-100 overflow-hidden">
            {centerPane}
          </div>
        </Panel>
        
        <PanelResizeHandle className="w-1 bg-gray-700 hover:bg-accent transition-colors cursor-col-resize" />
        
        <Panel defaultSize={30} minSize={15} maxSize={50}>
          <div className="h-full w-full bg-sidebar-bg text-gray-100 overflow-hidden border-l border-gray-700">
            {rightPane}
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
}
