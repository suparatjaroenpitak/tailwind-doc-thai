import type { MDXComponents } from "mdx/types";
import { isValidElement } from "react";
import { CodeBlock } from "@/components/CodeBlock";

function toText(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toText).join("");
  if (isValidElement<{ children?: React.ReactNode }>(node)) return toText(node.props.children);
  return "";
}

function toId(children: React.ReactNode) {
  return toText(children).trim().toLowerCase().replaceAll(" ", "-");
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2
        id={toId(children)}
        className="mt-12 scroll-m-20 text-2xl font-semibold tracking-normal text-slate-950 dark:text-white"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={toId(children)}
        className="mt-8 scroll-m-20 text-xl font-semibold tracking-normal text-slate-900 dark:text-slate-100"
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700 dark:text-slate-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700 dark:text-slate-300">
        {children}
      </ol>
    ),
    code: ({ children, className }) => (
      <code
        className={
          className ??
          "rounded-md bg-sky-50 px-1.5 py-0.5 text-sm font-medium text-sky-700 dark:bg-sky-400/10 dark:text-sky-200"
        }
      >
        {children}
      </code>
    ),
    pre: (props) => <CodeBlock {...props} />,
    table: ({ children }) => (
      <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
        <table className="w-full min-w-[680px] text-left text-sm">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border-b border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border-b border-slate-100 px-4 py-3 text-slate-700 dark:border-slate-800 dark:text-slate-300">
        {children}
      </td>
    ),
    ...components
  };
}
