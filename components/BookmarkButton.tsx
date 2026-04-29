"use client";

import { Bookmark, BookmarkCheck } from "lucide-react";
import { useEffect, useState } from "react";

type BookmarkButtonProps = {
  slug: string;
};

export function BookmarkButton({ slug }: BookmarkButtonProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(window.localStorage.getItem("tw-th-bookmarks") ?? "[]") as string[];
    setSaved(bookmarks.includes(slug));
  }, [slug]);

  function toggleBookmark() {
    const bookmarks = JSON.parse(window.localStorage.getItem("tw-th-bookmarks") ?? "[]") as string[];
    const next = bookmarks.includes(slug)
      ? bookmarks.filter((item) => item !== slug)
      : [...bookmarks, slug];

    window.localStorage.setItem("tw-th-bookmarks", JSON.stringify(next));
    setSaved(next.includes(slug));
  }

  return (
    <button
      type="button"
      onClick={toggleBookmark}
      className="inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 px-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-300"
    >
      {saved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
      {saved ? "บันทึกแล้ว" : "Bookmark"}
    </button>
  );
}
