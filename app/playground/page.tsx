import type { Metadata } from "next";
import { LivePreview } from "@/components/LivePreview";

export const metadata: Metadata = {
  title: "Playground",
  description: "ทดลองเขียน Tailwind CSS และดู live preview สำหรับนักพัฒนาไทย"
};

export default function PlaygroundPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold text-sky-600 dark:text-sky-300">Playground</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-950 dark:text-white">ทดลอง Tailwind แบบเห็นผลทันที</h1>
        <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
          พื้นที่นี้ช่วยให้ลอง class เช่น bg-sky-500, p-6, rounded-xl, shadow-lg ได้รวดเร็ว
          เหมาะสำหรับฝึกอ่าน utility class และทดลอง layout ก่อนนำไปใช้จริง
        </p>
      </div>
      <LivePreview />
    </main>
  );
}
