import React, { useState } from 'react';
import { X, Sparkles, Send, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getSmartRecommendation } from '../services/geminiService';

interface SmartAdvisorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SmartAdvisor: React.FC<SmartAdvisorProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    setResponse('');
    
    const result = await getSmartRecommendation(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full border border-brand-200">
          <div className="bg-gradient-to-r from-brand-500 to-orange-600 px-4 py-4 sm:px-6 flex justify-between items-center">
            <h3 className="text-lg leading-6 font-bold text-white flex items-center gap-2" id="modal-title">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              AI Smart Advisor
            </h3>
            <button onClick={onClose} className="text-white hover:text-orange-100 transition-colors rounded-full p-1 hover:bg-white/10">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-4 py-5 sm:p-6 bg-white">
            <div className="mb-4">
              <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-2">
                Mô tả công việc hoặc nhu cầu của bạn:
              </label>
              <div className="relative">
                <textarea
                  id="query"
                  rows={3}
                  className="shadow-sm focus:ring-brand-500 focus:border-brand-500 block w-full sm:text-sm border-gray-300 rounded-xl resize-none p-3"
                  placeholder="Ví dụ: Tôi cần thiết kế logo cho quán cà phê vintage..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if(e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSearch();
                    }
                  }}
                />
                <button 
                  onClick={handleSearch}
                  disabled={loading || !query.trim()}
                  className="absolute bottom-3 right-3 bg-brand-500 hover:bg-brand-600 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
                >
                  {loading ? <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" /> : <Send className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="min-h-[150px] max-h-[300px] overflow-y-auto bg-gray-50 rounded-xl p-4 border border-gray-100">
              {!response && !loading && (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 text-sm">
                  <Bot className="h-10 w-10 mb-2 opacity-50" />
                  <p>Hãy hỏi tôi bất cứ điều gì về công cụ AI!</p>
                </div>
              )}
              
              {loading && (
                <div className="space-y-3 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              )}

              {response && (
                <div className="prose prose-sm prose-orange text-gray-700">
                  <ReactMarkdown>{response}</ReactMarkdown>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-100">
             <p className="text-xs text-gray-500 italic text-center w-full">
               Powered by Google Gemini 2.5 Flash
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};