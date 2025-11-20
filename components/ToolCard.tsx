import React from 'react';
import { ExternalLink, Star, Scale } from 'lucide-react';
import { AITool } from '../types';

interface ToolCardProps {
  tool: AITool;
  onClick: (tool: AITool) => void;
  isSelectedForCompare: boolean;
  onToggleCompare: (id: string) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick, isSelectedForCompare, onToggleCompare }) => {
  return (
    <div 
      onClick={() => onClick(tool)}
      className={`
        bg-white rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden group relative cursor-pointer
        ${isSelectedForCompare ? 'border-brand-500 ring-2 ring-brand-200' : 'border-gray-200 hover:border-brand-200'}
      `}
    >
      
      {/* Compare Checkbox (Absolute Top Left) */}
      <div 
        onClick={(e) => { e.stopPropagation(); onToggleCompare(tool.id); }}
        className={`absolute top-3 left-3 z-20 p-1.5 rounded-full transition-all duration-200 flex items-center gap-1
           ${isSelectedForCompare ? 'bg-brand-500 text-white shadow-md' : 'bg-white/80 text-gray-400 hover:text-brand-500 hover:bg-white border border-gray-200'}
        `}
        title="Chọn để so sánh"
      >
        <Scale className="h-4 w-4" />
        {isSelectedForCompare && <span className="text-xs font-bold pr-1">Đã chọn</span>}
      </div>

      {/* Featured Badge */}
      {tool.featured && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-1 rounded-bl-lg z-10 flex items-center gap-1">
          <Star className="h-3 w-3 fill-current" /> HOT
        </div>
      )}

      <div className="p-5 flex-1">
        <div className="flex items-start justify-between mb-4 mt-4"> {/* Added mt-4 to clear checkbox */}
          <div className="flex items-center gap-3">
            <img 
              src={tool.logo} 
              alt={`${tool.name} logo`} 
              className="w-12 h-12 rounded-lg object-cover bg-gray-50 border border-gray-100"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                {tool.name}
              </h3>
              <span className={`
                inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide mt-1
                ${tool.pricing.includes('Miễn phí') ? 'bg-green-100 text-green-700' : 
                  tool.pricing.includes('Trả phí') ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}
              `}>
                {tool.pricing}
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {tool.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tool.strengths.slice(0, 3).map((strength) => (
            <span 
              key={strength} 
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium"
            >
              {strength}
            </span>
          ))}
          {tool.strengths.length > 3 && (
            <span className="bg-gray-50 text-gray-400 px-2 py-1 rounded-md text-xs font-medium">
              +{tool.strengths.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="px-5 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
        <a 
          href={tool.website} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()} // Prevent triggering card click
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 hover:bg-brand-500 hover:text-white hover:border-brand-500 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group-hover:shadow-md"
        >
          Truy cập Website <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};