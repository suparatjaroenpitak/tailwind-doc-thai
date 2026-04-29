"use client";

import Fuse from "fuse.js";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { docCategories, searchRecords } from "@/lib/docs";

const popularQueries = ["flex", "grid", "spacing", "สี", "responsive", "dark", "animation", "border"];

export function SearchClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("ทั้งหมด");
  const categories = ["ทั้งหมด", ...docCategories.map((group) => group.category)];

  const fuse = useMemo(
    () =>
      new Fuse(searchRecords, {
        keys: [
          { name: "title", weight: 0.4 },
          { name: "titleEn", weight: 0.35 },
          { name: "keywords", weight: 0.15 },
          { name: "description", weight: 0.08 },
          { name: "category", weight: 0.02 }
        ],
        threshold: 0.32,
        ignoreLocation: true,
        includeScore: true
      }),
    []
  );

  const searched = query.trim() ? fuse.search(query).map((result) => result.item) : searchRecords;
  const results = searched.filter((item) => category === "ทั้งหมด" || item.category === category);
  const groupedResults = docCategories
    .map((group) => ({
      category: group.category,
      pages: results.filter((item) => item.category === group.category)
    }))
    .filter((group) => group.pages.length > 0);

  function clearSearch() {
    setQuery("");
    setCategory("ทั้งหมด");
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
          <h2 className="text-sm font-bold text-slate-950 dark:text-white">กรองตามหมวด</h2>
          <div className="mt-3 space-y-1">
            {categories.map((item) => {
              const active = item === category;
              const count =
                item === "ทั้งหมด"
                  ? searchRecords.length
                  : searchRecords.filter((record) => record.category === item).length;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition ${
                    active
                      ? "bg-sky-50 font-semibold text-sky-700 dark:bg-sky-400/10 dark:text-sky-200"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                  }`}
                >
                  <span>{item}</span>
                  <span className="text-xs text-slate-400">{count}</span>
                </button>
              );
            })}
          </div>
        </aside>

        <section>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="ค้นหา เช่น flex, grid, สี, responsive, animation"
              className="h-14 w-full rounded-lg border border-slate-200 bg-white pl-12 pr-12 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:border-sky-500 dark:focus:ring-sky-500/10"
            />
            {(query || category !== "ทั้งหมด") && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-900 dark:hover:text-slate-200"
                aria-label="ล้างการค้นหา"
                title="ล้างการค้นหา"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">คำค้นยอดนิยม:</span>
            {popularQueries.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setQuery(item)}
                className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-sky-400/10 dark:hover:text-sky-200"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              พบ <span className="font-bold text-slate-900 dark:text-white">{results.length}</span> หัวข้อ
            </p>
            <Link href="/docs" className="text-sm font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-300">
              กลับสารบัญ
            </Link>
          </div>

          <div className="mt-5 space-y-8">
            {groupedResults.map((group) => (
              <section key={group.category}>
                <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {group.category}
                </h2>
                <div className="grid gap-3 md:grid-cols-2">
                  {group.pages.map((result) => (
                    <Link
                      key={result.slug}
                      href={`/docs/${result.slug}`}
                      className="block rounded-lg border border-slate-200 p-4 transition hover:border-sky-300 hover:bg-sky-50/50 dark:border-slate-800 dark:hover:border-sky-600 dark:hover:bg-sky-400/5"
                    >
                      <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{result.title}</h3>
                      <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{result.titleEn}</p>
                      <p className="mt-3 line-clamp-2 leading-7 text-slate-700 dark:text-slate-300">
                        {result.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {results.length === 0 && (
            <div className="mt-8 rounded-lg border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
              <h2 className="text-lg font-bold text-slate-950 dark:text-white">ไม่พบผลลัพธ์</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                ลองใช้คำกว้างขึ้น เช่น layout, font, spacing หรือเลือกหมวด “ทั้งหมด”
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
