import React from 'react';
import { Filter, Check } from 'lucide-react';
import { STRENGTHS_LIST } from '../constants';

interface SidebarProps {
  selectedStrengths: string[];
  toggleStrength: (strength: string) => void;
  totalTools: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ selectedStrengths, toggleStrength, totalTools }) => {
  return (
    <div className="w-full md:w-64 flex-shrink-0 md:border-r md:border-gray-200 md:min-h-screen bg-white p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <Filter className="h-5 w-5 text-brand-500" />
          Bộ lọc
        </h2>
        <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
          {totalTools} công cụ
        </span>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
            Theo Điểm Mạnh
          </h3>
          <div className="space-y-2">
            {STRENGTHS_LIST.map((strength) => {
              const isSelected = selectedStrengths.includes(strength);
              return (
                <div 
                  key={strength} 
                  onClick={() => toggleStrength(strength)}
                  className={`
                    group flex items-center justify-between p-2 rounded-lg cursor-pointer text-sm transition-all duration-200
                    ${isSelected ? 'bg-brand-50 text-brand-700 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                  `}
                >
                  <span className="flex-1">{strength}</span>
                  {isSelected && <Check className="h-4 w-4 text-brand-600" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-orange-50 rounded-xl border border-orange-100">
        <p className="text-sm text-orange-800 font-medium mb-1">Bạn cần giúp đỡ?</p>
        <p className="text-xs text-orange-600 mb-3">Sử dụng tính năng AI Advisor để tìm công cụ phù hợp nhất.</p>
      </div>
    </div>
  );
};