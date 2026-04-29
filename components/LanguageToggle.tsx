"use client";

import { Languages } from "lucide-react";
import { useEffect, useState } from "react";

export function LanguageToggle() {
  const [language, setLanguage] = useState<"TH" | "EN">("TH");

  useEffect(() => {
    const saved = window.localStorage.getItem("tw-th-language");
    if (saved === "EN" || saved === "TH") {
      setLanguage(saved);
    }
  }, []);

  function toggleLanguage() {
    const next = language === "TH" ? "EN" : "TH";
    window.localStorage.setItem("tw-th-language", next);
    setLanguage(next);
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 px-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-300"
      aria-label="สลับภาษา"
      title="สลับภาษา TH / EN"
    >
      <Languages className="h-4 w-4" />
      {language}
    </button>
  );
}
