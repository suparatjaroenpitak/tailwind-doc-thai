"use client";

import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { docCategories } from "@/lib/docs";

type SidebarProps = {
  activeSlug?: string;
  compact?: boolean;
};

const readingPath = ["installation", "utility-first", "responsive-design", "states", "dark-mode", "flex", "grid", "spacing", "colors"];

export function Sidebar({ activeSlug, compact = false }: SidebarProps) {
  const activeCategory = docCategories.find((group) => group.pages.some((page) => page.slug === activeSlug))?.category;
  const [query, setQuery] = useState("");
  const [openCategories, setOpenCategories] = useState<string[]>(() =>
    activeCategory ? [activeCategory] : ["Getting Started", "Core Concepts"]
  );

  const normalizedQuery = query.trim().toLowerCase();
  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return docCategories;

    return docCategories
      .map((group) => ({
        ...group,
        pages: group.pages.filter((page) =>
          [page.title, page.titleEn, page.description, page.category, page.keywords.join(" ")]
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery)
        )
      }))
      .filter((group) => group.pages.length > 0);
  }, [normalizedQuery]);

  useEffect(() => {
    if (!activeCategory) return;
    setOpenCategories((current) => (current.includes(activeCategory) ? current : [...current, activeCategory]));
  }, [activeCategory]);

  function toggleCategory(category: string) {
    setOpenCategories((current) =>
      current.includes(category) ? current.filter((item) => item !== category) : [...current, category]
    );
  }

  function getDocHref(slug: string) {
    return compact ? `/docs/${slug}#doc-content` : `/docs/${slug}`;
  }

  return (
    <aside
      className={
        compact
          ? "rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950"
          : "hidden w-80 shrink-0 border-r border-slate-200 pr-6 dark:border-slate-800 lg:block"
      }
    >
      <div className={compact ? "" : "sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pb-10"}>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ค้นหาในสารบัญ"
            className="h-10 w-full rounded-md border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:border-sky-500 dark:focus:ring-sky-500/10"
          />
        </div>

        {!query && (
          <section className="mt-5 rounded-lg bg-sky-50 p-3 dark:bg-sky-400/10">
            <h2 className="text-xs font-bold uppercase tracking-wide text-sky-700 dark:text-sky-200">
              เส้นทางแนะนำ
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {readingPath.map((slug, index) => {
                const page = docCategories.flatMap((group) => group.pages).find((item) => item.slug === slug);
                if (!page) return null;

                return (
                  <Link
                    key={slug}
                    href={getDocHref(slug)}
                    className={`rounded-md px-2 py-1 text-xs font-semibold ${
                      page.slug === activeSlug
                        ? "bg-sky-500 text-white"
                        : "bg-white text-sky-700 hover:bg-sky-100 dark:bg-slate-950 dark:text-sky-200 dark:hover:bg-slate-900"
                    }`}
                  >
                    {index + 1}. {page.title}
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <nav className="mt-5 space-y-2">
          {filteredCategories.map((group) => {
            const isOpen = normalizedQuery || openCategories.includes(group.category);
            return (
              <section key={group.category} className="rounded-lg border border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => toggleCategory(group.category)}
                  className="flex w-full items-center justify-between gap-3 px-3 py-2 text-left"
                >
                  <span>
                    <span className="block text-sm font-bold text-slate-900 dark:text-white">{group.category}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{group.pages.length} หัวข้อ</span>
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="max-h-96 space-y-1 overflow-y-auto border-t border-slate-100 p-2 dark:border-slate-800">
                    {group.pages.map((page) => {
                      const active = page.slug === activeSlug;
                      return (
                        <Link
                          key={page.slug}
                          href={getDocHref(page.slug)}
                          className={`block rounded-md px-3 py-2 text-sm transition ${
                            active
                              ? "bg-sky-50 font-semibold text-sky-700 dark:bg-sky-400/10 dark:text-sky-200"
                              : "text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
                          }`}
                        >
                          <span className="block">{page.title}</span>
                          <span className="mt-0.5 block truncate text-xs text-slate-400">{page.titleEn}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })}
        </nav>

        {filteredCategories.length === 0 && (
          <p className="mt-4 rounded-lg border border-dashed border-slate-300 p-4 text-sm leading-6 text-slate-500 dark:border-slate-700 dark:text-slate-400">
            ไม่พบหัวข้อที่ตรงกับคำค้น ลองพิมพ์คำกว้างขึ้น เช่น layout, สี, spacing หรือ flex
          </p>
        )}
      </div>
    </aside>
  );
}
