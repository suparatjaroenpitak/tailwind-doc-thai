import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components และ Examples",
  description: "ตัวอย่าง component ที่สร้างด้วย Tailwind CSS พร้อมแนวคิดการนำไปใช้จริง"
};

const examples = [
  {
    title: "Pricing Card",
    body: "เหมาะกับหน้า SaaS หรือ landing page ที่ต้องการ card ราคาอ่านง่าย",
    preview: (
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <p className="text-sm font-semibold text-sky-600 dark:text-sky-300">Starter</p>
        <p className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">ฟรี</p>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">สำหรับทดลองโปรเจกต์เล็ก</p>
        <button className="mt-5 w-full rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white">
          เริ่มใช้งาน
        </button>
      </div>
    )
  },
  {
    title: "Dashboard Stat",
    body: "ใช้ grid และ spacing scale เพื่อให้ตัวเลขสำคัญสแกนง่าย",
    preview: (
      <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
        <p className="text-sm text-slate-500 dark:text-slate-400">ผู้ใช้งานวันนี้</p>
        <p className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">18,420</p>
        <p className="mt-2 text-sm font-semibold text-emerald-600 dark:text-emerald-300">+12.8%</p>
      </div>
    )
  },
  {
    title: "Alert",
    body: "ใช้สี background, border และ text เพื่อบอกสถานะโดยไม่ต้องเขียน CSS แยก",
    preview: (
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-900 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-100">
        <p className="font-semibold">ตรวจสอบ config</p>
        <p className="mt-1 text-sm leading-6">อย่าลืมเพิ่ม path ของไฟล์ component ใน content source</p>
      </div>
    )
  }
];

export default function ComponentsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-sky-600 dark:text-sky-300">Components / Examples</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-950 dark:text-white">ตัวอย่าง UI ที่ประกอบจาก utility class</h1>
        <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
          Tailwind ไม่ได้บังคับ component สำเร็จรูปแบบ Bootstrap แต่ให้ building blocks เล็ก ๆ
          เพื่อให้ทีมออกแบบ component ได้ตรงกับ product มากกว่า
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {examples.map((example) => (
          <article key={example.title} className="rounded-lg border border-slate-200 p-5 dark:border-slate-800">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">{example.title}</h2>
            <p className="mt-2 min-h-14 leading-7 text-slate-700 dark:text-slate-300">{example.body}</p>
            <div className="mt-5">{example.preview}</div>
          </article>
        ))}
      </div>
    </main>
  );
}
