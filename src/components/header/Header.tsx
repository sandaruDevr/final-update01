import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { ToolsDropdown } from './ToolsDropdown';
import { ProButton } from './ProButton';
import { Logo } from '../logo/Logo';

interface HeaderProps {
  onBackClick?: () => void;
}

export function Header({ onBackClick }: HeaderProps) {
  const navigate = useNavigate();
  
  const handleUpgradeClick = () => {
    navigate('/pricing');
  };

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {onBackClick && (
              <button 
                onClick={onBackClick}
                className="mr-4 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
            )}
            <Logo />
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/blog"
              className="flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              Blog
            </Link>
            <ToolsDropdown />
            {!window.location.pathname.includes('/pricing') && 
             !window.location.pathname.includes('/payment') && (
              <ProButton onClick={handleUpgradeClick} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}