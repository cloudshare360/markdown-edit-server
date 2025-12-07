import { ReactNode } from 'react';

interface PaneHeaderProps {
  icon?: ReactNode;
  title: string;
  actions?: ReactNode;
}

export default function PaneHeader({ icon, title, actions }: PaneHeaderProps) {
  return (
    <div className="sticky top-0 z-10 bg-sidebar-bg border-b border-gray-700 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon && <div className="text-accent">{icon}</div>}
        <h2 className="text-sm font-semibold text-gray-200 uppercase tracking-wide">
          {title}
        </h2>
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}
