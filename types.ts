export enum PricingModel {
  Free = "Miễn phí",
  Freemium = "Dùng thử / Trả phí",
  Paid = "Trả phí",
  OpenSource = "Mã nguồn mở"
}

export interface AITool {
  id: string;
  name: string;
  description: string;
  website: string;
  logo: string;
  strengths: string[]; // e.g., "Chatbot", "Coding", "Image"
  pricing: PricingModel;
  featured?: boolean;
  
  // New fields for Detail and Compare
  versions: string[];
  userCount: string; // e.g. "100M+", "1M+"
  modelPower: number; // 0-100 score
  features: string[];
  launchYear: number;
  
  // Article Content
  articleContent: string;
}

export interface FilterState {
  search: string;
  strengths: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export type ViewState = 'list' | 'detail' | 'compare';