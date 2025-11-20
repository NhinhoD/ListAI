import React from 'react';
import { ArrowLeft, ExternalLink, Star, Users, Zap, Calendar, Layers, CheckCircle2, FileText, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { AITool } from '../types';

interface ToolDetailProps {
  tool: AITool;
  onBack: () => void;
}

export const ToolDetail: React.FC<ToolDetailProps> = ({ tool, onBack }) => {
  return (
    <div className="min-h-screen bg-white animate-fade-in">
      {/* Detail Header */}
      <div className="bg-brand-50 border-b border-brand-100 pb-8 pt-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center text-brand-700 hover:text-brand-900 mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Quay lại danh sách
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <img 
              src={tool.logo} 
              alt={tool.name} 
              className="w-24 h-24 rounded-2xl shadow-lg border-4 border-white bg-white object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
                {tool.featured && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1 border border-yellow-200">
                    <Star className="h-3 w-3 fill-yellow-500" /> HOT
                  </span>
                )}
              </div>
              <p className="text-lg text-gray-600 mb-4 max-w-2xl">{tool.description}</p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2 bg-brand-600 text-white rounded-full hover:bg-brand-700 transition-colors shadow-md font-medium"
                >
                  Truy cập Website <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <span className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium shadow-sm">
                  {tool.pricing}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Info Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column: Stats */}
          <div className="col-span-1 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Tổng quan</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Người dùng ước tính</p>
                    <p className="font-bold text-gray-900">{tool.userCount}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Sức mạnh mô hình</p>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500" 
                          style={{ width: `${tool.modelPower}%` }}
                        ></div>
                      </div>
                      <span className="font-bold text-gray-900">{tool.modelPower}/100</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Năm phát hành</p>
                    <p className="font-bold text-gray-900">{tool.launchYear}</p>
                  </div>
                </div>
              </div>
            </div>

             <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Điểm mạnh</h3>
                <div className="flex flex-wrap gap-2">
                  {tool.strengths.map(s => (
                    <span key={s} className="bg-brand-50 text-brand-700 px-3 py-1 rounded-md text-sm font-medium border border-brand-100">
                      {s}
                    </span>
                  ))}
                </div>
             </div>
          </div>

          {/* Right Column: Details & Article */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            
            {/* Use Cases */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-brand-500" />
                Công dụng & Tính năng
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tool.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                    <div className="mt-1 bg-white rounded-full p-1 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Versions */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Layers className="h-6 w-6 text-brand-500" />
                Các phiên bản mô hình
              </h2>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                {tool.versions.map((ver, idx) => (
                  <div key={idx} className={`p-4 flex items-center ${idx !== tool.versions.length -1 ? 'border-b border-gray-100' : ''}`}>
                     <span className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-sm font-bold mr-4">
                       v{idx + 1}
                     </span>
                     <span className="text-gray-800 font-medium">{ver}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Article Content */}
            {tool.articleContent && (
               <div className="mt-8 bg-gradient-to-b from-white to-brand-50/30 rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                 <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <FileText className="h-6 w-6 text-brand-600" />
                        Thông tin chuyên sâu
                      </h2>
                      <span className="flex items-center gap-1 text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        <Clock className="h-3 w-3" /> Cập nhật T11/2025
                      </span>
                    </div>
                   
                    <div className="prose prose-orange prose-headings:font-bold prose-a:text-brand-600 hover:prose-a:text-brand-700 max-w-none text-gray-700 leading-relaxed">
                      <ReactMarkdown>{tool.articleContent}</ReactMarkdown>
                    </div>
                 </div>
               </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};