"use client";

import { RefreshCw } from "lucide-react";
import { useMemo, useState } from "react";

const initialCode = `<section class="min-h-screen bg-slate-950 p-8 text-white">
  <div class="mx-auto max-w-md rounded-xl bg-white p-6 text-slate-900 shadow-xl">
    <p class="text-sm font-semibold text-sky-600">TailwindCSS ภาษาไทย</p>
    <h1 class="mt-2 text-3xl font-bold">ลองแก้ class ได้ทันที</h1>
    <p class="mt-4 text-slate-600">เปลี่ยน bg, text, p, rounded หรือ shadow แล้วกด Refresh preview</p>
  </div>
</section>`;

export function LivePreview() {
  const [code, setCode] = useState(initialCode);
  const [version, setVersion] = useState(0);

  const srcDoc = useMemo(
    () => `<!doctype html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>${code}</body>
</html>`,
    [code, version]
  );

  return (
    <div className="grid min-h-[620px] gap-4 lg:grid-cols-2">
      <section className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
        <div className="flex h-12 items-center justify-between border-b border-slate-200 px-4 dark:border-slate-800">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Code</h2>
          <button
            type="button"
            onClick={() => setVersion((current) => current + 1)}
            className="inline-flex h-8 items-center gap-2 rounded-md bg-sky-500 px-3 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            <RefreshCw className="h-4 w-4" />
            Preview
          </button>
        </div>
        <textarea
          value={code}
          onChange={(event) => setCode(event.target.value)}
          spellCheck={false}
          className="h-[560px] w-full resize-none bg-slate-950 p-4 font-mono text-sm leading-7 text-slate-100 outline-none"
        />
      </section>
      <section className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
        <div className="flex h-12 items-center border-b border-slate-200 px-4 dark:border-slate-800">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Live preview</h2>
        </div>
        <iframe
          key={version}
          title="Tailwind live preview"
          srcDoc={srcDoc}
          className="h-[560px] w-full bg-white"
          sandbox="allow-scripts"
        />
      </section>
    </div>
  );
}
