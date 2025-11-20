import React from 'react';
import { Search, Cpu, Scale } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onOpenAdvisor: () => void;
  compareCount: number;
  onOpenCompare: () => void;
  onLogoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  searchTerm, 
  setSearchTerm, 
  onOpenAdvisor, 
  compareCount,
  onOpenCompare,
  onLogoClick
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={onLogoClick}>
            <div className="bg-brand-500 p-2 rounded-lg mr-3">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AI Directory</h1>
              <p className="text-xs text-brand-600 font-medium">Tuyển tập công cụ AI</p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 text-black placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Tìm kiếm công cụ (ví dụ: Midjourney, Chatbot...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
             {compareCount > 0 && (
               <button
                 onClick={onOpenCompare}
                 className="bg-white border-2 border-brand-500 text-brand-600 hover:bg-brand-50 px-4 py-2 rounded-full text-sm font-bold shadow-sm transition flex items-center gap-2 animate-fade-in"
               >
                 <Scale className="h-4 w-4" />
                 So sánh ({compareCount})
               </button>
             )}

             <button 
              onClick={onOpenAdvisor}
              className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transition transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>✨ AI Advisor</span>
            </button>
          </div>
        </div>
        
        {/* Mobile Search (visible only on mobile) */}
        <div className="md:hidden py-3 pb-4">
           <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-gray-50 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                placeholder="Tìm kiếm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
        </div>
      </div>
    </header>
  );
};