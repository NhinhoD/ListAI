import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ToolCard } from './components/ToolCard';
import { ToolDetail } from './components/ToolDetail';
import { ComparisonView } from './components/ComparisonView';
import { SmartAdvisor } from './components/SmartAdvisor';
import { MOCK_TOOLS } from './constants';
import { AITool, ViewState } from './types';
import { LayoutGrid } from 'lucide-react';

function App() {
  // State for Filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStrengths, setSelectedStrengths] = useState<string[]>([]);
  
  // State for Routing/Views
  const [currentView, setCurrentView] = useState<ViewState>('list');
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  
  // State for Comparison
  const [compareListIds, setCompareListIds] = useState<string[]>([]);
  
  // State for Modal
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);

  const toggleStrength = (strength: string) => {
    setSelectedStrengths(prev => 
      prev.includes(strength) 
        ? prev.filter(s => s !== strength) 
        : [...prev, strength]
    );
  };

  const handleToolClick = (tool: AITool) => {
    setSelectedTool(tool);
    setCurrentView('detail');
    window.scrollTo(0, 0);
  };

  const handleToggleCompare = (id: string) => {
    setCompareListIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      if (prev.length >= 4) {
        alert("Bạn chỉ có thể so sánh tối đa 4 công cụ cùng lúc.");
        return prev;
      }
      return [...prev, id];
    });
  };

  const handleGoHome = () => {
    setCurrentView('list');
    setSelectedTool(null);
    window.scrollTo(0,0);
  };

  const handleGoCompare = () => {
    setCurrentView('compare');
    window.scrollTo(0,0);
  };

  const filteredTools = useMemo(() => {
    return MOCK_TOOLS.filter(tool => {
      // Search filter
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category/Strength filter
      const matchesStrength = selectedStrengths.length === 0 || 
                              selectedStrengths.some(s => tool.strengths.includes(s));

      return matchesSearch && matchesStrength;
    });
  }, [searchTerm, selectedStrengths]);

  const compareTools = useMemo(() => {
    return MOCK_TOOLS.filter(t => compareListIds.includes(t.id));
  }, [compareListIds]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
        compareCount={compareListIds.length}
        onOpenCompare={handleGoCompare}
        onLogoClick={handleGoHome}
      />

      {/* Routing Logic */}
      {currentView === 'detail' && selectedTool ? (
        <ToolDetail tool={selectedTool} onBack={handleGoHome} />
      ) : currentView === 'compare' ? (
        <ComparisonView 
          tools={compareTools} 
          onBack={handleGoHome} 
          onRemove={(id) => handleToggleCompare(id)}
        />
      ) : (
        // List View (Default)
        <div className="flex flex-1 max-w-7xl w-full mx-auto">
          {/* Sidebar Desktop */}
          <div className="hidden md:block">
            <Sidebar 
              selectedStrengths={selectedStrengths} 
              toggleStrength={toggleStrength}
              totalTools={filteredTools.length}
            />
          </div>

          {/* Main Content */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-hidden animate-fade-in">
            
            {/* Breadcrumb / Title */}
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <LayoutGrid className="h-6 w-6 text-brand-500" />
                  Danh sách công cụ AI
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Khám phá {filteredTools.length} công cụ mạnh mẽ.
                </p>
              </div>
            </div>
            
            {/* Mobile Filter Chips */}
            <div className="md:hidden mb-6 overflow-x-auto pb-2 hide-scrollbar">
               <div className="flex gap-2">
                  {['Tất cả', ...new Set(MOCK_TOOLS.flatMap(t => t.strengths))].slice(0, 6).map((tag, idx) => (
                    <button
                      key={idx}
                      onClick={() => idx === 0 ? setSelectedStrengths([]) : toggleStrength(tag)}
                      className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium border transition-colors
                        ${(idx === 0 && selectedStrengths.length === 0) || selectedStrengths.includes(tag)
                          ? 'bg-brand-500 text-white border-brand-500' 
                          : 'bg-white text-gray-600 border-gray-200'
                        }
                      `}
                    >
                      {tag}
                    </button>
                  ))}
               </div>
            </div>

            {/* Grid */}
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map(tool => (
                  <ToolCard 
                    key={tool.id} 
                    tool={tool} 
                    onClick={handleToolClick}
                    isSelectedForCompare={compareListIds.includes(tool.id)}
                    onToggleCompare={handleToggleCompare}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <LayoutGrid className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Không tìm thấy công cụ nào</h3>
                <p className="text-gray-500 mt-2">Thử thay đổi từ khóa hoặc bộ lọc của bạn.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setSelectedStrengths([]);}}
                  className="mt-4 text-brand-600 hover:text-brand-700 font-medium text-sm"
                >
                  Xóa bộ lọc
                </button>
              </div>
            )}
          </main>
        </div>
      )}

      <SmartAdvisor isOpen={isAdvisorOpen} onClose={() => setIsAdvisorOpen(false)} />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 AI Directory Hub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="text-gray-400 hover:text-brand-500 text-sm">Privacy Policy</a>
             <a href="#" className="text-gray-400 hover:text-brand-500 text-sm">Terms of Service</a>
             <a href="#" className="text-gray-400 hover:text-brand-500 text-sm">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;