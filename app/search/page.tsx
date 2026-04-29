import type { Metadata } from "next";
import { SearchClient } from "@/components/SearchClient";

export const metadata: Metadata = {
  title: "ค้นหา Docs",
  description: "ค้นหาเอกสาร Tailwind CSS ภาษาไทยด้วย Fuse.js"
};

export default function SearchPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-sky-600 dark:text-sky-300">Search</p>
          <h1 className="mt-2 text-4xl font-bold text-slate-950 dark:text-white">ค้นหาเอกสาร TailwindCSS ภาษาไทย</h1>
          <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
            พิมพ์คำไทยหรืออังกฤษเพื่อหา concept, utility หรือหน้าตัวอย่างที่ต้องการ
          </p>
        </div>
      </section>
      <SearchClient />
    </main>
  );
}
