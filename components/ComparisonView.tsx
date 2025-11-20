import React from 'react';
import { ArrowLeft, Trophy, X, Check, Minus } from 'lucide-react';
import { AITool } from '../types';

interface ComparisonViewProps {
  tools: AITool[];
  onBack: () => void;
  onRemove: (id: string) => void;
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({ tools, onBack, onRemove }) => {
  
  const getScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-600';
    if (score >= 90) return 'text-blue-600';
    if (score >= 80) return 'text-yellow-600';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-brand-600 transition-colors font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Quay lại danh sách
          </button>
          <h1 className="text-2xl font-bold text-gray-900">So sánh công cụ AI</h1>
        </div>

        {tools.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
            <p className="text-gray-500">Chưa có công cụ nào được chọn để so sánh.</p>
          </div>
        ) : (
          <div className="overflow-x-auto pb-6">
            <div className="min-w-[800px] bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-6 w-48 text-sm font-semibold text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10">
                      Tiêu chí
                    </th>
                    {tools.map(tool => (
                      <th key={tool.id} className="p-6 min-w-[250px] relative">
                        <button 
                          onClick={() => onRemove(tool.id)}
                          className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors"
                          title="Xóa khỏi so sánh"
                        >
                          <X className="h-4 w-4" />
                        </button>
                        <div className="flex flex-col items-center text-center">
                          <img src={tool.logo} alt={tool.name} className="w-16 h-16 rounded-xl mb-3 shadow-sm" />
                          <h3 className="text-lg font-bold text-gray-900">{tool.name}</h3>
                          <span className="text-xs text-gray-500 mt-1">{tool.pricing}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {/* Model Power Score */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-medium text-gray-900 bg-white sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-yellow-500" />
                        Điểm sức mạnh
                      </div>
                    </td>
                    {tools.map(tool => (
                      <td key={tool.id} className="p-6 text-center bg-white">
                        <div className="flex flex-col items-center justify-center">
                          <span className={`text-3xl font-black ${getScoreColor(tool.modelPower)}`}>
                            {tool.modelPower}
                          </span>
                          <div className="w-24 h-2 bg-gray-100 rounded-full mt-2 overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                tool.modelPower >= 95 ? 'bg-green-500' : 
                                tool.modelPower >= 90 ? 'bg-blue-500' : 'bg-yellow-500'
                              }`} 
                              style={{ width: `${tool.modelPower}%` }}
                            />
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Users */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-medium text-gray-900 bg-white sticky left-0 z-10">Người dùng</td>
                    {tools.map(tool => (
                      <td key={tool.id} className="p-6 text-center text-gray-700 font-semibold bg-white">
                        {tool.userCount}
                      </td>
                    ))}
                  </tr>

                   {/* Launch Year */}
                   <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-medium text-gray-900 bg-white sticky left-0 z-10">Năm ra mắt</td>
                    {tools.map(tool => (
                      <td key={tool.id} className="p-6 text-center text-gray-600 bg-white">
                        {tool.launchYear}
                      </td>
                    ))}
                  </tr>

                  {/* Strengths */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-medium text-gray-900 bg-white sticky left-0 z-10 align-top">Điểm mạnh</td>
                    {tools.map(tool => (
                      <td key={tool.id} className="p-6 align-top bg-white">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {tool.strengths.map(s => (
                            <span key={s} className="px-2 py-1 bg-brand-50 text-brand-700 text-xs rounded font-medium border border-brand-100">
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Features */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-medium text-gray-900 bg-white sticky left-0 z-10 align-top">Tính năng nổi bật</td>
                    {tools.map(tool => (
                      <td key={tool.id} className="p-6 align-top bg-white">
                        <ul className="space-y-2 text-sm text-gray-600 text-left inline-block">
                           {tool.features.map((f, i) => (
                             <li key={i} className="flex items-start gap-2">
                               <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                               <span>{f}</span>
                             </li>
                           ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};