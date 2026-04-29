import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Search } from "lucide-react";
import { docCategories } from "@/lib/docs";

export const metadata: Metadata = {
  title: "สารบัญ Docs",
  description: "สารบัญ TailwindCSS ภาษาไทย แบ่งหมวดชัดเจน พร้อมเส้นทางเริ่มอ่านสำหรับมือใหม่"
};

const recommendedPath = [
  "installation",
  "utility-first",
  "responsive-design",
  "states",
  "dark-mode",
  "flex",
  "grid",
  "spacing",
  "colors"
];

export default function DocsIndexPage() {
  const allPages = docCategories.flatMap((group) => group.pages);
  const recommendedPages = recommendedPath
    .map((slug) => allPages.find((page) => page.slug === slug))
    .filter(Boolean);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-8 border-b border-slate-200 pb-10 dark:border-slate-800 lg:grid-cols-[1fr_360px]">
        <div>
          <p className="text-sm font-semibold text-sky-600 dark:text-sky-300">Docs Overview</p>
          <h1 className="mt-2 text-4xl font-bold tracking-normal text-slate-950 dark:text-white">
            อ่าน TailwindCSS ภาษาไทยแบบเป็นลำดับ
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            เอกสารชุดนี้มีหลายหัวข้อ จึงแบ่งเป็นหมวดและเส้นทางแนะนำให้เริ่มจากพื้นฐานก่อน
            แล้วค่อยไปยัง layout, spacing, typography และหัวข้อขั้นสูง
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/docs/installation"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-sky-500 px-5 text-sm font-bold text-white transition hover:bg-sky-600"
            >
              เริ่มบทแรก
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/search"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-slate-200 px-5 text-sm font-bold text-slate-700 transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-800 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
            >
              <Search className="h-4 w-4" />
              ค้นหาหัวข้อ
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/40">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-sky-500" />
            <h2 className="font-bold text-slate-950 dark:text-white">เส้นทางแนะนำ</h2>
          </div>
          <div className="mt-4 space-y-2">
            {recommendedPages.map((page, index) =>
              page ? (
                <Link
                  key={page.slug}
                  href={`/docs/${page.slug}`}
                  className="flex items-center gap-3 rounded-md bg-white p-3 text-sm transition hover:bg-sky-50 dark:bg-slate-950 dark:hover:bg-slate-900"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sky-50 text-xs font-bold text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block font-semibold text-slate-900 dark:text-white">{page.title}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{page.category}</span>
                  </span>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mb-6 flex items-center gap-2">
          <Layers className="h-5 w-5 text-sky-500" />
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">หมวดทั้งหมด</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {docCategories.map((group) => (
            <article key={group.category} className="rounded-lg border border-slate-200 p-5 dark:border-slate-800">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">{group.category}</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{group.pages.length} หัวข้อ</p>
                </div>
                <Link
                  href={`/docs/${group.pages[0].slug}`}
                  className="rounded-md border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-sky-500"
                >
                  อ่าน
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.pages.slice(0, 6).map((page) => (
                  <Link
                    key={page.slug}
                    href={`/docs/${page.slug}`}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-sky-400/10 dark:hover:text-sky-200"
                  >
                    {page.title}
                  </Link>
                ))}
                {group.pages.length > 6 && (
                  <span className="rounded-md px-2.5 py-1 text-xs font-semibold text-slate-400">
                    +{group.pages.length - 6}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
