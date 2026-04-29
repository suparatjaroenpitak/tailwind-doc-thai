import Link from "next/link";
import { BookOpen, Code2, Component, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";

const links = [
  { href: "/docs", label: "Docs", icon: BookOpen },
  { href: "/components", label: "Examples", icon: Component },
  { href: "/playground", label: "Playground", icon: Code2 },
  { href: "/search", label: "Search", icon: Search }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/85">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="TailwindCSS ภาษาไทย">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-sky-500 text-sm font-black text-white">
            TW
          </span>
          <span className="hidden text-base font-bold tracking-normal text-slate-950 dark:text-white sm:inline">
            TailwindCSS ภาษาไทย
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
