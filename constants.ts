import { AITool, PricingModel } from './types';

export const STRENGTHS_LIST = [
  "Chatbot & Trợ lý",
  "Viết lách & Content",
  "Lập trình (Coding)",
  "Tạo ảnh (Image Gen)",
  "Tạo video",
  "Âm thanh & Giọng nói",
  "Thiết kế & UI/UX",
  "Phân tích dữ liệu",
  "Marketing & SEO",
  "3D Modeling"
];

export const MOCK_TOOLS: AITool[] = [
  {
    id: 'gemini',
    name: 'Google Gemini',
    description: 'Hệ sinh thái AI đa phương thức toàn diện nhất, tích hợp sâu vào Android và Google Workspace.',
    website: 'https://gemini.google.com/',
    logo: 'https://picsum.photos/seed/gemini/64/64',
    strengths: ["Chatbot & Trợ lý", "Viết lách & Content", "Lập trình (Coding)", "Phân tích dữ liệu"],
    pricing: PricingModel.Freemium,
    featured: true,
    versions: ["Gemini 2.0 Flash", "Gemini 2.5 Pro", "Gemini 3.0 Ultra"],
    userCount: "250M+",
    modelPower: 99,
    features: ["Agentic Capabilities", "Deep Research Mode", "Android OS Integration"],
    launchYear: 2023,
    articleContent: `
### Cập nhật tháng 11/2025: Kỷ nguyên của Gemini 3.0
Vào tháng 10/2025, Google chính thức ra mắt **Gemini 3.0 Ultra**, đánh dấu bước nhảy vọt về khả năng "Agentic" (Tác nhân tự hành). Không còn chỉ là một chatbot hỏi-đáp, Gemini giờ đây hoạt động như một hệ điều hành thông minh thực thụ trên các thiết bị Android 16.

### Điểm nổi bật của bản cập nhật
1. **Khả năng tự thực thi tác vụ:** Gemini 3.0 có thể tự động đặt vé máy bay, lên lịch trình chi tiết và đồng bộ hóa với Google Maps/Calendar mà không cần người dùng xác nhận từng bước.
2. **Cửa sổ ngữ cảnh vô hạn (Infinite Context):** Với kỹ thuật nén bộ nhớ mới, Gemini Pro hiện có thể nhớ lại toàn bộ lịch sử làm việc của bạn trong 2 năm qua, giúp việc tra cứu dự án cũ trở nên tức thời.
3. **Deep Research:** Tính năng nghiên cứu sâu cho phép Gemini tự động duyệt hàng nghìn trang web, đọc các báo cáo PDF khoa học và tổng hợp thành một bài luận văn hoàn chỉnh chỉ trong 5 phút.

### Đánh giá chuyên môn
Các chuyên gia tại *TechCrunch* nhận định: "Gemini đang dần xóa nhòa ranh giới giữa trợ lý ảo và nhân viên thực thụ. Khả năng đa phương thức (nhìn, nghe, nói) của nó hiện đã vượt qua độ chính xác của con người trong các bài kiểm tra y khoa."
    `
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT (OpenAI)',
    description: 'Biểu tượng của cách mạng AI, dẫn đầu về khả năng suy luận logic và sáng tạo nội dung.',
    website: 'https://chat.openai.com/',
    logo: 'https://picsum.photos/seed/gpt/64/64',
    strengths: ["Chatbot & Trợ lý", "Viết lách & Content", "Lập trình (Coding)"],
    pricing: PricingModel.Freemium,
    featured: true,
    versions: ["GPT-4o", "GPT-5 (Preview)", "o2-reasoning"],
    userCount: "300M+",
    modelPower: 98,
    features: ["Voice Mode thời gian thực", "Lập luận chuỗi (Chain of Thought)", "Sora Integration"],
    launchYear: 2022,
    articleContent: `
### Tiêu điểm tháng 11/2025: GPT-5 và Sora tích hợp
OpenAI tiếp tục giữ vững vị thế dẫn đầu với bản cập nhật lớn vào cuối năm 2025. Sự kết hợp giữa khả năng suy luận siêu phàm của **GPT-5** và khả năng tạo video của **Sora** ngay trong khung chat đã tạo nên cơn sốt mới.

### Những cải tiến đáng chú ý
- **Mô hình o2-reasoning:** Phiên bản nâng cấp của o1 (Strawberry) năm ngoái, nay có khả năng giải quyết các bài toán toán học cấp cao và lập trình hệ thống phức tạp với tỷ lệ lỗi gần như bằng 0.
- **Full Voice Interaction:** Chế độ giọng nói mới loại bỏ hoàn toàn độ trễ, cho phép ngắt lời, cười đùa và thể hiện cảm xúc phức tạp y hệt một cuộc trò chuyện giữa hai người bạn.
- **Sora trong Chat:** Người dùng hiện có thể yêu cầu: "Tạo một video minh họa cho câu chuyện tôi vừa viết", và ChatGPT sẽ render video HD 1080p ngay lập tức.

### Tác động thị trường
Việc tích hợp sâu Sora vào ChatGPT đã khiến nhiều công cụ tạo video nhỏ lẻ phá sản. Các nhà giáo dục cũng đang sử dụng GPT-5 như một gia sư riêng 1 kèm 1 cho học sinh nhờ khả năng kiên nhẫn và giải thích đa chiều.
    `
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Ông vua của nghệ thuật AI, tạo ra những bức ảnh siêu thực và giàu tính nghệ thuật.',
    website: 'https://www.midjourney.com/',
    logo: 'https://picsum.photos/seed/mid/64/64',
    strengths: ["Tạo ảnh (Image Gen)", "Thiết kế & UI/UX", "3D Modeling"],
    pricing: PricingModel.Paid,
    versions: ["v6", "v7", "Model 3D Alpha"],
    userCount: "25M+",
    modelPower: 96,
    features: ["Tạo vật thể 3D", "Text-to-Texture", "Kiểm soát ánh sáng Studio"],
    launchYear: 2022,
    articleContent: `
### Midjourney v7: Không chỉ là ảnh 2D (Review 11/2025)
Tháng 11/2025 đánh dấu sự kiện Midjourney chính thức lấn sân sang mảng 3D. Phiên bản **v7** không chỉ tạo ra những bức ảnh đẹp đến nghẹt thở mà còn xuất ra được file \`.obj\` và \`.fbx\` để dùng trực tiếp trong Blender hoặc Unreal Engine.

### Tính năng mới trong v7
1. **Neural Texture:** Khả năng tạo vân bề mặt (texture) siêu chi tiết. Bạn có thể zoom vào thớ vải của một chiếc áo trong ảnh và thấy rõ từng sợi chỉ.
2. **Character Consistency (Nhất quán nhân vật):** Vấn đề đau đầu nhất của AI Art đã được giải quyết triệt để. Bạn có thể tạo một nhân vật truyện tranh và giữ nguyên khuôn mặt, trang phục của họ qua 100 bức ảnh ở các tư thế khác nhau.
3. **Web Editor chính thức:** Discord không còn là rào cản. Giao diện web mới của Midjourney mượt mà, hỗ trợ kéo thả và chỉnh sửa layer như Photoshop.

### Cộng đồng nói gì?
"Midjourney v7 đã chính thức giết chết kho ảnh stock," một Art Director tại New York chia sẻ. Sự tự do trong sáng tạo mà v7 mang lại giúp các nghệ sĩ concept tiết kiệm 80% thời gian phác thảo.
    `
  },
  {
    id: 'claude',
    name: 'Claude (Anthropic)',
    description: 'Trợ lý AI an toàn nhất, chuyên gia xử lý văn bản dài và lập trình.',
    website: 'https://claude.ai/',
    logo: 'https://picsum.photos/seed/claude/64/64',
    strengths: ["Chatbot & Trợ lý", "Viết lách & Content", "Lập trình (Coding)"],
    pricing: PricingModel.Freemium,
    versions: ["Claude 3.5 Opus", "Claude 4 Sonnet", "Claude 4 Haiku"],
    userCount: "40M+",
    modelPower: 97,
    features: ["Context 500K token", "Project Knowledge Base", "Artifacts 2.0"],
    launchYear: 2023,
    articleContent: `
### Claude 4: Sự trỗi dậy của "AI có đạo đức" (11/2025)
Trong khi các đối thủ chạy đua về tính năng hào nhoáng, Anthropic vẫn kiên định với triết lý "Helpful, Harmless, and Honest" (Hữu ích, Vô hại và Trung thực). **Claude 4** ra mắt tháng 9/2025 và nhanh chóng trở thành tiêu chuẩn vàng cho khối doanh nghiệp (Enterprise).

### Tại sao Doanh nghiệp chọn Claude 4?
- **Artifacts 2.0:** Tính năng hiển thị code/giao diện tách biệt nay đã hỗ trợ chạy full-stack app. Bạn có thể yêu cầu Claude viết một ứng dụng React, kết nối database giả lập và chạy thử ngay trên trình duyệt.
- **Độ chính xác tuyệt đối:** Trong các bài kiểm tra về pháp lý và tài chính, Claude 4 đạt điểm số cao hơn 15% so với GPT-5 nhờ khả năng giảm thiểu ảo giác (hallucination) xuống mức thấp kỷ lục.
- **Projects:** Tính năng Projects cho phép upload toàn bộ wiki nội bộ công ty. Claude 4 đóng vai trò như một nhân viên thâm niên 10 năm, nắm rõ mọi quy trình và tài liệu.

### Lời khuyên sử dụng
Nếu bạn là lập trình viên hoặc nhà văn cần xử lý các bản thảo tiểu thuyết dài hàng nghìn trang, Claude 4 vẫn là lựa chọn số 1 nhờ bộ nhớ đệm (context caching) thông minh và chi phí hợp lý.
    `
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'Đối tác lập trình AI không thể thiếu, giờ đây có thể tự sửa lỗi toàn bộ dự án.',
    website: 'https://github.com/features/copilot',
    logo: 'https://picsum.photos/seed/copilot/64/64',
    strengths: ["Lập trình (Coding)"],
    pricing: PricingModel.Paid,
    versions: ["Copilot X", "Copilot Workspace 2.0"],
    userCount: "15M+",
    modelPower: 94,
    features: ["Tự động fix bug repo", "Voice Coding", "Natural Language to App"],
    launchYear: 2021,
    articleContent: `
### Copilot Workspace 2.0: Lập trình bằng ngôn ngữ tự nhiên
Tháng 11/2025, GitHub Copilot không còn chỉ là công cụ gợi ý dòng code (autocomplete). Với bản cập nhật **Workspace 2.0**, nó đã trở thành một kỹ sư phần mềm tự động.

### Quy trình làm việc mới
1. **Mô tả Issue:** Bạn chỉ cần tạo một issue trên GitHub: "Thêm tính năng Dark Mode cho toàn bộ trang web và sửa lỗi hiển thị trên Mobile".
2. **Copilot Plan:** AI sẽ tự động quét toàn bộ kho mã nguồn, lập kế hoạch chi tiết xem cần sửa file nào, thêm CSS biến nào.
3. **Thực thi:** Sau khi bạn duyệt kế hoạch, Copilot tự động viết code, chạy test và tạo Pull Request. Con người chỉ đóng vai trò Reviewer.

### Tác động đến ngành IT
Sự ra đời của Copilot Workspace 2.0 đang thay đổi cách tuyển dụng. Các công ty giờ đây ưu tiên kỹ năng "AI Orchestration" (Điều phối AI) và kiến trúc hệ thống hơn là khả năng viết code thủ công (syntax coding).
    `
  },
  {
    id: 'runway',
    name: 'Runway Gen-3',
    description: 'Studio phim Hollywood ngay trên trình duyệt của bạn.',
    website: 'https://runwayml.com/',
    logo: 'https://picsum.photos/seed/runway/64/64',
    strengths: ["Tạo video", "Thiết kế & UI/UX", "Marketing & SEO"],
    pricing: PricingModel.Freemium,
    versions: ["Gen-3 Alpha", "Gen-3 Turbo", "Gen-4 Preview"],
    userCount: "8M+",
    modelPower: 93,
    features: ["Director Mode", "Lip Sync v2", "Vật lý thực tế (Physics Engine)"],
    launchYear: 2019,
    articleContent: `
### Runway Gen-4 Preview: Vật lý học trong Video AI
Cuộc đua Video AI nóng hơn bao giờ hết vào cuối năm 2025. Runway vừa hé lộ **Gen-4**, tập trung giải quyết điểm yếu lớn nhất của video AI: Vật lý.

### Đột phá công nghệ
- **Real-world Physics:** Nước chảy, tóc bay trong gió, hay va chạm xe cộ trong Gen-4 tuân theo các quy luật vật lý thực tế. Không còn cảnh nhân vật đi xuyên tường hay ngón tay bị biến dạng khi cầm nắm đồ vật.
- **Kiểm soát Camera (Director Mode):** Bạn có thể chỉnh tiêu cự, khẩu độ, và đường đi của camera (dolly zoom, tracking shot) chính xác như đang dùng phần mềm 3D chuyên nghiệp.
- **Thời lượng:** Runway hiện cho phép tạo video liên tục dài tới 5 phút mà vẫn giữ được tính nhất quán của bối cảnh.

### Ứng dụng
Các agency quảng cáo đang chuyển dịch mạnh mẽ sang dùng Runway. Thay vì thuê đoàn làm phim tốn kém để quay TVC quảng cáo nước hoa, họ có thể tạo ra những thước phim lung linh chỉ trong một buổi chiều với chi phí bằng 1/10.
    `
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'Phù thủy âm thanh AI, xóa nhòa ranh giới ngôn ngữ toàn cầu.',
    website: 'https://elevenlabs.io/',
    logo: 'https://picsum.photos/seed/11labs/64/64',
    strengths: ["Âm thanh & Giọng nói"],
    pricing: PricingModel.Freemium,
    versions: ["Turbo v3", "Dubbing Studio Pro"],
    userCount: "12M+",
    modelPower: 95,
    features: ["Dịch video thời gian thực", "Điều khiển cảm xúc giọng nói", "Soundscapes"],
    launchYear: 2022,
    articleContent: `
### ElevenLabs 2025: Kỷ nguyên của lồng tiếng thời gian thực
Tháng 11/2025, ElevenLabs công bố tính năng **Universal Dubbing Live**. Đây là công nghệ cho phép dịch và lồng tiếng video livestream ngay lập tức với độ trễ dưới 200ms.

### Chi tiết tính năng
- **Live Translation:** Một Youtuber người Mỹ có thể livestream nói tiếng Anh, nhưng khán giả tại Việt Nam sẽ nghe thấy giọng của chính Youtuber đó nói tiếng Việt trôi chảy, khớp cả khẩu hình miệng (nhờ tích hợp AI Lipsync).
- **Emotion Control v3:** Người dùng có thể chỉ đạo giọng đọc AI: "Hãy đọc đoạn này với giọng nghẹn ngào, sắp khóc" hoặc "Đọc với giọng hào hứng của bình luận viên bóng đá". Kết quả chân thực đến mức các hãng sản xuất game Indie đang dùng nó thay thế hoàn toàn diễn viên lồng tiếng.

### Tương lai của Podcast
ElevenLabs cũng ra mắt công cụ tạo Podcast tự động. Bạn chỉ cần đưa một bài báo, chọn 2 nhân vật (ví dụ: một chuyên gia và một người dẫn chương trình), AI sẽ tự tạo ra một cuộc đối thoại tranh luận sôi nổi dài 30 phút về chủ đề đó.
    `
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: 'Nền tảng sáng tạo mở, tự do và không bị kiểm duyệt cho cộng đồng.',
    website: 'https://stability.ai/',
    logo: 'https://picsum.photos/seed/sd/64/64',
    strengths: ["Tạo ảnh (Image Gen)", "3D Modeling"],
    pricing: PricingModel.OpenSource,
    versions: ["SD 3.5 Medium", "SD 3.5 Large", "SD XL Turbo"],
    userCount: "Unknown",
    modelPower: 92,
    features: ["Chạy Local trên GPU 8GB", "Hệ sinh thái LoRA khổng lồ", "ControlNet v2"],
    launchYear: 2022,
    articleContent: `
### Stable Diffusion 3.5: Sức mạnh Studio tại nhà
Vào cuối năm 2025, Stability AI (sau khi tái cấu trúc) đã tung ra bản **SD 3.5**. Điểm mạnh nhất của phiên bản này là sự tối ưu hóa phần cứng.

### Tại sao cộng đồng vẫn yêu thích SD?
1. **Chạy Offline:** Trong khi Midjourney hay DALL-E yêu cầu internet và trả phí thuê bao, SD 3.5 có thể chạy mượt mà trên các card đồ họa RTX 50-series tầm trung, đảm bảo tính riêng tư tuyệt đối cho dữ liệu.
2. **Hệ sinh thái Civitai:** Thư viện LoRA (các mô hình tinh chỉnh nhỏ) trên Civitai đã đạt con số 500.000. Bạn muốn vẽ phong cách anime thập niên 90? Có model. Muốn vẽ kiến trúc Cyberpunk Việt Nam? Có model.
3. **Không kiểm duyệt (Uncensored):** Đối với các nghệ sĩ cần vẽ giải phẫu học hoặc các chủ đề nhạy cảm phục vụ nghệ thuật/y học, Stable Diffusion vẫn là lựa chọn duy nhất không bị giới hạn bởi các bộ lọc đạo đức khắt khe của Big Tech.

### ControlNet v2
Công cụ kiểm soát bố cục ControlNet đã được nâng cấp, cho phép người dùng phác thảo tay một hình nộm que và AI sẽ vẽ chính xác tư thế đó với ánh sáng và chất liệu hoàn hảo.
    `
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'Bộ não thứ hai của bạn, tự động tổ chức cuộc sống và công việc.',
    website: 'https://www.notion.so/product/ai',
    logo: 'https://picsum.photos/seed/notion/64/64',
    strengths: ["Viết lách & Content", "Phân tích dữ liệu", "Marketing & SEO"],
    pricing: PricingModel.Paid,
    versions: ["Notion AI 2.0", "Data Connectors"],
    userCount: "50M+",
    modelPower: 88,
    features: ["Tự động hóa Database", "Calendar thông minh", "Viết Email theo phong cách cá nhân"],
    launchYear: 2023,
    articleContent: `
### Notion AI 2025: Không chỉ là ghi chú, đó là Quản lý dự án tự động
Notion đã chuyển mình mạnh mẽ trong năm 2025. AI trong Notion không còn chỉ giúp tóm tắt hay viết lại văn bản, nó giờ đây là một **Project Manager** (Quản lý dự án) ảo.

### Tính năng "Auto-Organize"
Khi bạn ném một đống ghi chú hỗn độn, biên bản cuộc họp lộn xộn vào Notion, AI sẽ tự động:
- Phân loại chúng vào đúng thư mục.
- Trích xuất các "Action Items" (Việc cần làm) và tạo task trong Database.
- Gán người chịu trách nhiệm và đặt deadline dựa trên ngữ cảnh cuộc họp.

### Kết nối dữ liệu (Data Connectors)
Notion AI hiện có thể "đọc" dữ liệu từ Slack, Google Drive và Jira. Bạn có thể hỏi Notion: "Tuần trước team Marketing đã thảo luận gì về chiến dịch Giáng sinh trên Slack?" và nhận được câu trả lời tổng hợp ngay trong trang Notion mà không cần mở ứng dụng khác.

### Tổng kết
Với những cập nhật này, Notion đang dần thay thế vai trò của nhiều công cụ rời rạc khác, trở thành "hệ điều hành công việc" (Work OS) thực thụ cho các Startup và doanh nghiệp vừa và nhỏ.
    `
  }
];