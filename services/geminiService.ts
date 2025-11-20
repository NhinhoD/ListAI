import { GoogleGenAI } from "@google/genai";
import { MOCK_TOOLS } from '../constants';

const API_KEY = process.env.API_KEY || ''; 

export const getSmartRecommendation = async (userQuery: string): Promise<string> => {
  if (!API_KEY) {
    return "Vui lòng cấu hình API Key để sử dụng tính năng này.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    // Prepare context about available tools
    const toolsContext = MOCK_TOOLS.map(t => `- ${t.name} (ID: ${t.id}): ${t.description}. Strengths: ${t.strengths.join(', ')}`).join('\n');

    const prompt = `
      Bạn là một chuyên gia tư vấn công cụ AI. Người dùng đang tìm kiếm giải pháp cho vấn đề sau: "${userQuery}".
      
      Dưới đây là danh sách các công cụ AI có sẵn trong cơ sở dữ liệu của chúng tôi:
      ${toolsContext}

      Hãy phân tích nhu cầu của người dùng và đề xuất 1 đến 3 công cụ phù hợp nhất từ danh sách trên. 
      Nếu không có công cụ nào trong danh sách phù hợp, hãy đề xuất một công cụ nổi tiếng khác bên ngoài danh sách.
      
      Trả lời ngắn gọn, súc tích, tập trung vào lý do tại sao công cụ đó phù hợp. Định dạng câu trả lời bằng Markdown.
      Sử dụng giọng văn thân thiện, chuyên nghiệp bằng Tiếng Việt.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Không thể tạo đề xuất lúc này.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Xin lỗi, hệ thống tư vấn đang gặp sự cố. Vui lòng thử lại sau.";
  }
};