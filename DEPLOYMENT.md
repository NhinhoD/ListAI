# Hướng dẫn Triển khai (Deployment Guide)

Tài liệu này hướng dẫn cách thiết lập môi trường phát triển và triển khai ứng dụng **AI Directory Hub** lên môi trường production (Vercel, Netlify, hoặc hosting bất kỳ).

Do mã nguồn sử dụng **TypeScript (.tsx)** và **React**, bạn cần một công cụ đóng gói (bundler) để chuyển đổi mã nguồn thành file mà trình duyệt có thể hiểu được. Chúng tôi khuyến nghị sử dụng **Vite**.

---

## 1. Chuẩn bị môi trường (Local Setup)

Trước khi deploy, bạn cần chuyển đổi các file rời rạc hiện tại thành một dự án Node.js tiêu chuẩn.

### Bước 1: Khởi tạo dự án Vite
Mở terminal và chạy lệnh sau:

```bash
npm create vite@latest ai-directory -- --template react-ts
cd ai-directory
npm install
```

### Bước 2: Cài đặt các thư viện phụ thuộc
Cài đặt các thư viện được sử dụng trong code (dựa trên `importmap` trong file cũ):

```bash
npm install lucide-react react-markdown @google/genai
npm install -D tailwindcss postcss autoprefixer
```

### Bước 3: Cấu hình Tailwind CSS
Khởi tạo file cấu hình Tailwind:

```bash
npx tailwindcss init -p
```

Mở file `tailwind.config.js` và cập nhật phần `content` và `theme` (copy từ `index.html` cũ):

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Cần cài thêm: npm install -D @tailwindcss/typography
  ],
}
```

Thêm vào file `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Bước 4: Di chuyển file mã nguồn
1. Xóa các file mẫu trong thư mục `src/` của dự án Vite vừa tạo (trừ `vite-env.d.ts`).
2. Copy toàn bộ các file `.tsx` và `.ts` (`App.tsx`, `constants.ts`, `types.ts`, thư mục `components/`, `services/`) vào thư mục `src/`.
3. Cập nhật file `src/main.tsx` (hoặc `src/index.tsx`) để render `App`.

### Bước 5: Xử lý biến môi trường (API Key)
Vite sử dụng `import.meta.env` thay vì `process.env`. Bạn có 2 cách xử lý:

**Cách 1 (Khuyên dùng):** Cập nhật file `vite.config.ts` để hỗ trợ `process.env` (giúp không phải sửa code cũ):

```typescript
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})
```

**Cách 2:** Đổi `process.env.API_KEY` trong code thành `import.meta.env.VITE_API_KEY` và đặt tên biến trong file `.env` là `VITE_API_KEY`.

---

## 2. Chạy thử (Local Development)

Tạo file `.env` ở thư mục gốc (cùng cấp với `package.json`) và điền API Key của bạn:

```env
API_KEY=AIzaSy...
```

Chạy ứng dụng:
```bash
npm run dev
```

---

## 3. Triển khai lên Vercel (Khuyên dùng)

Vercel là nền tảng tối ưu nhất cho React/Vite.

1. Đẩy code của bạn lên **GitHub/GitLab/Bitbucket**.
2. Đăng nhập vào [Vercel](https://vercel.com) và chọn **"Add New Project"**.
3. Chọn repository bạn vừa đẩy lên.
4. Tại phần **Environment Variables**:
   - Key: `API_KEY` (hoặc `VITE_API_KEY` nếu bạn dùng cách 2 ở trên).
   - Value: Dán key Google Gemini API của bạn vào.
5. Nhấn **Deploy**.

Vercel sẽ tự động nhận diện Vite và thực hiện lệnh build (`npm run build`).

---

## 4. Triển khai lên Netlify

1. Đẩy code lên GitHub.
2. Đăng nhập [Netlify](https://netlify.com) -> **"New site from Git"**.
3. Chọn repo.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Vào **Site Settings > Environment variables** và thêm `API_KEY`.
7. Nhấn **Deploy site**.

---

## Lưu ý quan trọng

- **Bảo mật API Key:** API Key hiện tại đang được sử dụng ở phía Client (Frontend). Điều này có nghĩa là người dùng rành công nghệ có thể tìm thấy Key của bạn trong tab Network.
- **Giải pháp Production:** Để bảo mật tuyệt đối, bạn nên chuyển logic gọi API (`services/geminiService.ts`) về phía **Server (Backend)** hoặc sử dụng **Vercel Edge Functions / Next.js API Routes** để làm trung gian gọi đến Google Gemini.
