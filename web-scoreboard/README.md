# Color Memory Scoreboard

React + Vite + Tailwind CSS (ธีม Pixel Art / 8-bit) ดึงคะแนนจาก Google Sheets ผ่าน Apps Script

## วิธีใช้

1. สร้าง Google Sheets ชื่อชีต `Scores` (A = Name, B = Score, แถวแรกเป็น header)
2. เปิด Extensions > Apps Script วางโค้ดจาก `apps-script/Code.gs`
3. Deploy > New deployment > Web app
   - Execute as: Me
   - Who has access: Anyone
4. คัดลอก URL ที่ลงท้ายด้วย `/exec` ไปใส่ใน `src/hooks/useScores.js` (ตัวแปร `API_URL`)
5. รันโปรเจกต์

```bash
npm install
npm run dev
```

Build สำหรับ deploy: `npm run build`

## หมายเหตุ

- Press Start 2P ไม่มีตัวอักษรไทย ชื่อภาษาไทยจะ fallback เป็น Noto Sans Thai
- ห้ามใส่ custom headers ใน `fetch` เพราะจะทำให้เกิด CORS preflight ซึ่ง Apps Script ไม่รองรับ
- ถ้าแก้โค้ด Apps Script ต้อง Deploy เป็น New version ใหม่ URL เดิมถึงจะใช้โค้ดล่าสุด
