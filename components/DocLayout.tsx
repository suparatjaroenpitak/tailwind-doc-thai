import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { BookmarkButton } from "@/components/BookmarkButton";
import { docs, type DocPage } from "@/lib/docs";

type DocLayoutProps = {
  doc: DocPage;
  children: React.ReactNode;
};

export function DocLayout({ doc, children }: DocLayoutProps) {
  const currentIndex = docs.findIndex((page) => page.slug === doc.slug);
  const previousDoc = currentIndex > 0 ? docs[currentIndex - 1] : undefined;
  const nextDoc = currentIndex >= 0 && currentIndex < docs.length - 1 ? docs[currentIndex + 1] : undefined;

  return (
    <main className="mx-auto flex max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:px-8">
      <Sidebar activeSlug={doc.slug} />

      <article className="min-w-0 flex-1">
        <div className="mb-5 lg:hidden">
          <Sidebar activeSlug={doc.slug} compact />
        </div>

        <div className="sticky top-16 z-30 -mx-4 mb-4 flex items-start justify-between gap-3 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 sm:-mx-6 sm:px-6 md:static md:mx-0 md:mb-8 md:gap-5 md:bg-transparent md:px-0 md:py-0 md:pb-8 md:backdrop-blur-none md:flex-row md:items-start">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <Link href="/docs" className="font-semibold text-slate-500 hover:text-sky-600 dark:text-slate-400">
                Docs
              </Link>
              <span className="text-slate-300 dark:text-slate-700">/</span>
              <span className="rounded-md bg-sky-50 px-2 py-1 font-semibold text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">
                {doc.category}
              </span>
            </div>
            <h1 className="mt-2 text-2xl font-bold tracking-normal text-slate-950 dark:text-white md:mt-3 md:text-4xl">
              {doc.title}
            </h1>
            <p className="mt-4 hidden max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300 md:block">
              {doc.description}
            </p>
          </div>
          <BookmarkButton slug={doc.slug} />
        </div>

        <p className="mb-8 text-base leading-7 text-slate-700 dark:text-slate-300 md:hidden">
          {doc.description}
        </p>

        <section className="mb-8 grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/40 sm:grid-cols-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">หมวด</p>
            <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{doc.category}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">ชื่ออังกฤษ</p>
            <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{doc.titleEn}</p>
          </div>
          <Link
            href="/search"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
          >
            <BookOpen className="h-4 w-4" />
            ค้นหาหัวข้ออื่น
          </Link>
        </section>

        <div id="doc-content" className="doc-prose max-w-3xl scroll-mt-36 md:scroll-mt-24">
          {children}
        </div>

        <nav className="mt-14 grid gap-4 border-t border-slate-200 pt-8 dark:border-slate-800 md:grid-cols-2">
          {previousDoc ? (
            <Link
              href={`/docs/${previousDoc.slug}`}
              className="rounded-lg border border-slate-200 p-4 transition hover:border-sky-300 hover:bg-sky-50/60 dark:border-slate-800 dark:hover:border-sky-600 dark:hover:bg-sky-400/5"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                <ArrowLeft className="h-4 w-4" />
                ก่อนหน้า
              </span>
              <span className="mt-2 block font-semibold text-slate-950 dark:text-white">{previousDoc.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextDoc && (
            <Link
              href={`/docs/${nextDoc.slug}`}
              className="rounded-lg border border-slate-200 p-4 text-right transition hover:border-sky-300 hover:bg-sky-50/60 dark:border-slate-800 dark:hover:border-sky-600 dark:hover:bg-sky-400/5"
            >
              <span className="inline-flex items-center justify-end gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                ถัดไป
                <ArrowRight className="h-4 w-4" />
              </span>
              <span className="mt-2 block font-semibold text-slate-950 dark:text-white">{nextDoc.title}</span>
            </Link>
          )}
        </nav>
      </article>

      <aside className="hidden w-56 shrink-0 xl:block">
        <div className="sticky top-20">
          <h2 className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            ในหน้านี้
          </h2>
          <div className="mt-3 space-y-2">
            {doc.headings.map((heading) => (
              <a
                key={heading}
                href={`#${heading.toLowerCase().replaceAll(" ", "-")}`}
                className="block text-sm leading-6 text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300"
              >
                {heading}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </main>
  );
}
