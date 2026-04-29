"use client";

import { Check, Copy } from "lucide-react";
import { isValidElement, useMemo, useState } from "react";

type CodeBlockProps = {
  children?: React.ReactNode;
};

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (isValidElement<{ children?: React.ReactNode }>(node)) return extractText(node.props.children);
  return "";
}

export function CodeBlock({ children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const code = useMemo(() => extractText(children).trim(), [children]);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="group relative mt-6 overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
      <button
        type="button"
        onClick={copyCode}
        className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-300 opacity-100 transition hover:bg-white/10 hover:text-white md:opacity-0 md:group-hover:opacity-100"
        aria-label="คัดลอกโค้ด"
        title="คัดลอกโค้ด"
      >
        {copied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
      </button>
      <pre className="overflow-x-auto p-5 pr-14 text-sm leading-7 text-slate-100">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  );
}
