import React from 'react';
import { ChevronDown } from 'lucide-react';
import { DropdownMenu } from './DropdownMenu';
import { ToolItem } from './ToolItem';
import { tools } from './tools/toolsConfig';

export function ToolsDropdown() {
  return (
    <div className="relative">
      <DropdownMenu
        trigger={
          <button className="flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">
            Tools
            <ChevronDown className="h-4 w-4" />
          </button>
        }
      >
        <div className="w-72 py-2 max-h-[calc(100vh-120px)] overflow-y-auto">
          {tools.map((tool, index) => (
            <ToolItem
              key={index}
              icon={<tool.icon className="h-5 w-5" />}
              label={tool.label}
              description={tool.description}
              comingSoon={tool.comingSoon}
            />
          ))}
        </div>
      </DropdownMenu>
    </div>
  );
}