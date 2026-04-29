"use client";

import { Check, Copy, Eye } from "lucide-react";
import { isValidElement, useEffect, useMemo, useState } from "react";

type CodeBlockProps = {
  children?: React.ReactNode;
};

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (isValidElement<{ children?: React.ReactNode }>(node)) return extractText(node.props.children);
  return "";
}

function extractLanguage(node: React.ReactNode): string | undefined {
  if (Array.isArray(node)) {
    for (const child of node) {
      const language = extractLanguage(child);
      if (language) return language;
    }
  }

  if (isValidElement<{ children?: React.ReactNode; className?: string }>(node)) {
    const match = node.props.className?.match(/language-([\w-]+)/);
    if (match) return normalizeLanguage(match[1]);
    return extractLanguage(node.props.children);
  }

  return undefined;
}

function normalizeLanguage(language: string) {
  const aliases: Record<string, string> = {
    shell: "bash",
    sh: "bash",
    javascript: "js",
    typescript: "ts"
  };

  return aliases[language] ?? language;
}

function inferLanguage(code: string) {
  const trimmed = code.trim();

  if (/^</.test(trimmed)) return "html";
  if (/^(\.|#|@|[a-z-]+\s*\{)/i.test(trimmed) || (trimmed.includes(":") && trimmed.includes(";"))) return "css";
  if (/^(npm|npx|pnpm|yarn|git)\s/m.test(trimmed)) return "bash";
  if (/^(import|export|const|let|var|function)\s/m.test(trimmed)) return "js";

  return "text";
}

function createPreviewDocument(code: string) {
  return `<!doctype html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      margin: 0;
      background: #ffffff;
      color: #0f172a;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans Thai", Tahoma, sans-serif;
    }

    body > *:first-child {
      min-height: auto;
    }
  </style>
</head>
<body>
${code}
</body>
</html>`;
}

export function CodeBlock({ children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedHtml, setHighlightedHtml] = useState("");
  const code = useMemo(() => extractText(children).trim(), [children]);
  const language = useMemo(() => extractLanguage(children) ?? inferLanguage(code), [children, code]);
  const showPreview = language === "html" && /<\w+[\s>]/.test(code);
  const previewDocument = useMemo(() => createPreviewDocument(code), [code]);

  useEffect(() => {
    let cancelled = false;

    async function highlightCode() {
      try {
        const { codeToHtml } = await import("shiki");
        const html = await codeToHtml(code, {
          lang: language,
          themes: {
            light: "light-plus",
            dark: "dark-plus"
          },
          defaultColor: false
        });

        if (!cancelled) setHighlightedHtml(html);
      } catch {
        if (!cancelled) setHighlightedHtml("");
      }
    }

    setHighlightedHtml("");
    void highlightCode();

    return () => {
      cancelled = true;
    };
  }, [code, language]);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="group relative mt-6 overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
      <div className="relative">
        <button
          type="button"
          onClick={copyCode}
          className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-300 opacity-100 transition hover:bg-white/10 hover:text-white md:opacity-0 md:group-hover:opacity-100"
          aria-label="คัดลอกโค้ด"
          title="คัดลอกโค้ด"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
        </button>
        {highlightedHtml ? (
          <div className="code-block-highlight" dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
        ) : (
          <pre className="overflow-x-auto p-5 pr-14 text-sm leading-7 text-slate-100">
            <code className="font-mono">{code}</code>
          </pre>
        )}
      </div>

      {showPreview && (
        <div className="border-t border-slate-800 bg-slate-100 dark:bg-slate-900">
          <div className="flex h-10 items-center gap-2 border-b border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
            <Eye className="h-4 w-4 text-sky-500" />
            ผลลัพธ์
          </div>
          <iframe
            title="ตัวอย่างผลลัพธ์"
            srcDoc={previewDocument}
            className="h-64 w-full bg-white sm:h-72"
            sandbox="allow-scripts"
          />
        </div>
      )}
    </div>
  );
}
