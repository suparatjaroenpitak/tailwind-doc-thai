import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Search, Sparkles } from "lucide-react";
import { docs } from "@/lib/docs";

const featured = docs.filter((doc) => ["utility-first", "flex", "grid", "spacing", "colors"].includes(doc.slug));

export default function HomePage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-md bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">
              <Sparkles className="h-4 w-4" />
              Tailwind CSS v4 สำหรับนักพัฒนาไทย
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-normal text-slate-950 dark:text-white md:text-6xl">
              TailwindCSS ภาษาไทย
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-700 dark:text-slate-300">
              เว็บเอกสารภาษาไทยที่อธิบาย Tailwind แบบ Utility-first ด้วยภาษาที่อ่านง่าย
              มีตัวอย่างโค้ด คำอธิบายทีละบรรทัด เปรียบเทียบกับ CSS ปกติ และ playground ให้ลองทันที
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/docs/installation"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-sky-500 px-5 text-sm font-bold text-white transition hover:bg-sky-600"
              >
                เริ่มอ่าน Docs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/playground"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-slate-200 px-5 text-sm font-bold text-slate-700 transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-800 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
              >
                <Code2 className="h-4 w-4" />
                ทดลองเขียนโค้ด
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="rounded-md bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-100">
              <span className="text-slate-500">&lt;button</span>
              <br />
              <span className="text-slate-500">{"  "}class=</span>
              <span className="text-emerald-300">
                "rounded-md bg-sky-500 px-4 py-2 font-semibold text-white hover:bg-sky-600"
              </span>
              <br />
              <span className="text-slate-500">&gt;</span>
              <br />
              {"  "}บันทึกงาน
              <br />
              <span className="text-slate-500">&lt;/button&gt;</span>
            </div>
            <div className="mt-4 rounded-md bg-white p-5 shadow-sm dark:bg-slate-950">
              <button className="rounded-md bg-sky-500 px-4 py-2 font-semibold text-white transition hover:bg-sky-600">
                บันทึกงาน
              </button>
              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
                Tailwind ทำให้ style อยู่ใกล้ markup จึงเห็นหน้าตาของ UI ได้จาก class ทันที
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Docs ภาษาไทย",
              text: "โครงสร้างเหมือน docs จริง แบ่งหมวดตาม Getting started, Core concepts, Layout และ Utilities"
            },
            {
              icon: Code2,
              title: "ตัวอย่างพร้อมอธิบาย",
              text: "ทุกหน้าตัวอย่างหลักมี code, line-by-line, use case และเทียบกับ CSS ปกติ"
            },
            {
              icon: Search,
              title: "ค้นหาเร็ว",
              text: "ใช้ Fuse.js ค้นหาด้วยคำไทยหรืออังกฤษ เช่น flex, spacing, สี, responsive"
            }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-lg border border-slate-200 p-5 dark:border-slate-800">
                <Icon className="h-5 w-5 text-sky-500" />
                <h2 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h2>
                <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-sky-600 dark:text-sky-300">เริ่มจากหัวข้อสำคัญ</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">หน้า Docs ตัวอย่าง</h2>
          </div>
          <Link href="/search" className="text-sm font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-300">
            ค้นหาทั้งหมด
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((doc) => (
            <Link
              key={doc.slug}
              href={`/docs/${doc.slug}`}
              className="rounded-lg border border-slate-200 p-5 transition hover:border-sky-300 hover:bg-sky-50/60 dark:border-slate-800 dark:hover:border-sky-600 dark:hover:bg-sky-400/5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {doc.category}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">{doc.title}</h3>
              <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">{doc.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
