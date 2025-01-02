import React from 'react';
import { Link } from 'react-router-dom';

interface ToolItemProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  comingSoon?: boolean;
  path: string;
}

export function ToolItem({ icon, label, description, comingSoon, path }: ToolItemProps) {
  return (
    <Link to={path} className="block">
      <div className="px-4 py-2 hover:bg-gray-50">
        <div className="flex items-start gap-3">
          <div className="text-blue-500 mt-1">{icon}</div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-gray-900">{label}</h3>
              {comingSoon && (
                <span className="px-2 py-0.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                  Coming Soon
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}