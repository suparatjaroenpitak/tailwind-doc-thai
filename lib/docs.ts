import type { ComponentType } from "react";
import ColorsDoc from "@/content/docs/colors.mdx";
import DarkModeDoc from "@/content/docs/dark-mode.mdx";
import FlexDoc from "@/content/docs/flex.mdx";
import GridDoc from "@/content/docs/grid.mdx";
import InstallationDoc from "@/content/docs/installation.mdx";
import ResponsiveDoc from "@/content/docs/responsive-design.mdx";
import SpacingDoc from "@/content/docs/spacing.mdx";
import UtilityFirstDoc from "@/content/docs/utility-first.mdx";

export type DocPage = {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  category: string;
  keywords: string[];
  headings: string[];
  component?: ComponentType;
  utility?: string;
  cssProperty?: string;
  cssValue?: string;
  guide?: string;
  example?: string;
  cssExample?: string;
  lineByLine?: string[];
  useCase?: string;
};

type Topic = Omit<DocPage, "category" | "description" | "keywords" | "headings"> & {
  description?: string;
  keywords?: string[];
  headings?: string[];
};

const generatedHeadings = ["หลักการ", "ตัวอย่างโค้ด", "อธิบายทีละบรรทัด", "Use case จริง", "เทียบกับ CSS ปกติ"];

const manualDocs: DocPage[] = [
  {
    slug: "installation",
    title: "ติดตั้ง Tailwind CSS",
    titleEn: "Installation",
    description: "เริ่มโปรเจกต์ Tailwind CSS ด้วย Next.js และเข้าใจโครงสร้างไฟล์ที่จำเป็น",
    category: "Getting Started",
    keywords: ["install", "setup", "next.js", "เริ่มต้น"],
    component: InstallationDoc,
    headings: ["Tailwind ทำงานอย่างไร", "ติดตั้งใน Next.js", "อธิบายไฟล์สำคัญ"]
  },
  {
    slug: "utility-first",
    title: "แนวคิด Utility-first",
    titleEn: "Utility-First",
    description: "เข้าใจเหตุผลที่ Tailwind ใช้ class เล็ก ๆ แทน component class แบบ Bootstrap",
    category: "Core Concepts",
    keywords: ["utility first", "bootstrap", "css", "concept"],
    component: UtilityFirstDoc,
    headings: ["Utility-first คืออะไร", "ต่างจาก Bootstrap อย่างไร", "ใช้จริงเมื่อไหร่"]
  },
  {
    slug: "responsive-design",
    title: "Responsive Design",
    titleEn: "Responsive Design",
    description: "ใช้ breakpoint เช่น sm, md, lg เพื่อออกแบบหน้าจอหลายขนาด",
    category: "Core Concepts",
    keywords: ["responsive", "breakpoint", "mobile first"],
    component: ResponsiveDoc,
    headings: ["Mobile-first", "ตัวอย่าง responsive card", "เทียบกับ CSS ปกติ"]
  },
  {
    slug: "dark-mode",
    title: "Dark Mode",
    titleEn: "Dark Mode",
    description: "สลับธีมมืดด้วย dark: variant และออกแบบสีให้อ่านง่าย",
    category: "Core Concepts",
    keywords: ["dark mode", "theme", "สี"],
    component: DarkModeDoc,
    headings: ["หลักการ", "ตัวอย่าง", "ข้อควรระวัง"]
  },
  {
    slug: "flex",
    title: "Flexbox",
    titleEn: "Flexbox",
    description: "จัดวางองค์ประกอบในแนวแกนหลักและแกนรองด้วย flex, gap, justify และ items",
    category: "Flexbox & Grid",
    keywords: ["flex", "flexbox", "layout", "justify", "items"],
    component: FlexDoc,
    headings: ["Flex คืออะไร", "ตัวอย่างโค้ด", "อธิบายทีละบรรทัด", "Use case จริง", "เทียบกับ CSS ปกติ"]
  },
  {
    slug: "grid",
    title: "Grid",
    titleEn: "Grid",
    description: "สร้าง layout แบบแถวและคอลัมน์ด้วย grid, grid-cols และ gap",
    category: "Flexbox & Grid",
    keywords: ["grid", "layout", "columns", "dashboard"],
    component: GridDoc,
    headings: ["Grid เหมาะกับอะไร", "ตัวอย่างโค้ด", "อธิบายทีละบรรทัด", "Use case จริง", "เทียบกับ CSS ปกติ"]
  },
  {
    slug: "spacing",
    title: "Spacing",
    titleEn: "Spacing",
    description: "ควบคุม padding, margin, gap และ space ด้วย scale ของ Tailwind",
    category: "Spacing",
    keywords: ["spacing", "padding", "margin", "gap"],
    component: SpacingDoc,
    headings: ["Spacing scale", "ตัวอย่างโค้ด", "อธิบายทีละบรรทัด", "Use case จริง", "เทียบกับ CSS ปกติ"]
  },
  {
    slug: "colors",
    title: "Colors",
    titleEn: "Colors",
    description: "ใช้ระบบสีของ Tailwind เช่น bg-sky-500, text-slate-700 และ ring",
    category: "Core Concepts",
    keywords: ["colors", "color", "background", "text color", "สี"],
    component: ColorsDoc,
    headings: ["ระบบสี", "ตัวอย่างโค้ด", "อธิบายทีละบรรทัด", "Use case จริง", "เทียบกับ CSS ปกติ"]
  }
];

const topicGroups: Array<{ category: string; pages: Topic[] }> = [
  {
    category: "Getting Started",
    pages: [
      { slug: "installation", title: "Installation", titleEn: "Installation" },
      {
        slug: "using-vite",
        title: "ใช้ Tailwind กับ Vite",
        titleEn: "Using Vite",
        guide: "Vite เหมาะกับโปรเจกต์ frontend ที่ต้องการ dev server เร็วและ build เบา เมื่อติดตั้ง Tailwind แล้วให้ import ไฟล์ CSS หลักใน entry ของแอป เช่น main.tsx",
        example: "npm create vite@latest my-app\ncd my-app\nnpm install tailwindcss @tailwindcss/vite",
        useCase: "ใช้กับ React, Vue, Svelte หรือเว็บ static ที่ไม่ต้องใช้ full-stack framework"
      },
      {
        slug: "using-postcss",
        title: "ใช้ Tailwind ผ่าน PostCSS",
        titleEn: "Using PostCSS",
        guide: "PostCSS เป็นทางเลือกกลางที่ใช้ได้กับหลาย bundler โดย Tailwind ทำงานเป็น plugin เพื่อแปลง @import และ utility class เป็น CSS ที่ browser ใช้ได้",
        example: "export default {\n  plugins: {\n    '@tailwindcss/postcss': {}\n  }\n};",
        useCase: "เหมาะกับโปรเจกต์ที่มี pipeline CSS อยู่แล้ว เช่น Next.js, Laravel Mix หรือระบบ build ภายในทีม"
      },
      {
        slug: "cli",
        title: "ใช้งานผ่าน CLI",
        titleEn: "CLI",
        guide: "CLI ใช้สร้างไฟล์ CSS จาก source โดยตรง เหมาะกับเว็บ HTML ธรรมดาหรือโปรเจกต์ที่ไม่อยากเพิ่ม bundler",
        example: "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch",
        useCase: "เหมาะกับ landing page, prototype หรือเอกสาร static ที่ต้องการ Tailwind แต่ไม่ต้องการ framework"
      },
      {
        slug: "framework-guides",
        title: "คู่มือ Framework เช่น Next.js และ Laravel",
        titleEn: "Framework guides",
        guide: "แต่ละ framework มีจุดเสียบ Tailwind ต่างกัน บางตัวใช้ PostCSS บางตัวใช้ plugin เฉพาะ สิ่งสำคัญคือ import CSS หลักและให้ Tailwind มองเห็นไฟล์ template ทั้งหมด",
        example: "/* app/globals.css */\n@import \"tailwindcss\";",
        useCase: "ใช้เป็น checklist ตอนเริ่มโปรเจกต์ Next.js, Laravel, Vite, Remix หรือ Astro"
      },
      {
        slug: "editor-setup",
        title: "ตั้งค่า Editor",
        titleEn: "Editor setup",
        guide: "การติดตั้ง extension ช่วย autocomplete class, preview สี และแจ้งเตือน class ที่พิมพ์ผิด ทำให้เขียน Tailwind ได้เร็วและผิดน้อยลง",
        example: "VS Code: Tailwind CSS IntelliSense\nตั้งค่า format on save\nเปิด autocomplete ในไฟล์ .tsx, .jsx, .html, .mdx",
        useCase: "เหมาะกับทีมที่ต้องการมาตรฐานเดียวกันและลดเวลาตรวจ typo ใน class ยาว ๆ"
      },
      {
        slug: "using-with-preprocessors",
        title: "ใช้ร่วมกับ Preprocessors",
        titleEn: "Using with Preprocessors",
        guide: "Tailwind v4 ลดความจำเป็นในการใช้ Sass/Less สำหรับงาน utility แต่ยังใช้ร่วมกันได้เมื่อโปรเจกต์มี code CSS เดิม",
        example: "@import \"tailwindcss\";\n\n.card-title {\n  @apply text-lg font-semibold;\n}",
        useCase: "เหมาะกับการ migrate จาก codebase Sass เดิม โดยค่อย ๆ ย้าย component ใหม่มาใช้ utility class"
      },
      {
        slug: "browser-support",
        title: "Browser Support",
        titleEn: "Browser Support",
        guide: "Tailwind สร้าง CSS มาตรฐานที่ browser รุ่นใหม่รองรับดี แต่ utility บางตัวขึ้นกับ feature ของ CSS เช่น modern color, container หรือ backdrop-filter",
        example: "<div class=\"backdrop-blur-md supports-[backdrop-filter]:bg-white/70\">รองรับตาม browser</div>",
        useCase: "ใช้ตรวจความเสี่ยงก่อนนำ effect ใหม่ ๆ ไปใช้กับ product ที่ต้องรองรับ browser ภายในองค์กร"
      },
      {
        slug: "upgrade-guide",
        title: "คู่มืออัปเกรด",
        titleEn: "Upgrade Guide",
        guide: "การอัปเกรด Tailwind ควรอ่าน breaking changes, ตรวจ config, plugin และ class ที่เปลี่ยนพฤติกรรม จากนั้น build เพื่อตรวจ visual regression",
        example: "npm install tailwindcss@latest @tailwindcss/postcss@latest\nnpm run build",
        useCase: "เหมาะกับทีมที่มี design system และต้องการอัปเกรดอย่างเป็นขั้นตอนโดยไม่กระทบ UI เดิม"
      }
    ]
  },
  {
    category: "Core Concepts",
    pages: [
      { slug: "utility-first", title: "Utility-First", titleEn: "Utility-First" },
      { slug: "responsive-design", title: "Responsive Design", titleEn: "Responsive Design" },
      {
        slug: "states",
        title: "Hover, Focus และ States อื่น ๆ",
        titleEn: "Hover, Focus, and Other States",
        utility: "hover:bg-sky-600 focus:ring-4 disabled:opacity-50",
        cssProperty: ":hover / :focus",
        cssValue: "state styles",
        guide: "State variant คือ prefix ที่บอกว่า utility จะทำงานเมื่อ element อยู่ในสถานะใด เช่น hover, focus, active, disabled หรือ checked"
      },
      { slug: "dark-mode", title: "Dark Mode", titleEn: "Dark Mode" },
      {
        slug: "reusing-styles",
        title: "ใช้ Style ซ้ำอย่างเป็นระบบ",
        titleEn: "Reusing Styles",
        utility: "rounded-md bg-sky-500 px-4 py-2 text-white",
        cssProperty: "component extraction",
        cssValue: "Button component",
        guide: "Tailwind แนะนำให้เริ่มจาก utility ก่อน เมื่อ pattern ซ้ำหลายจุดจึงแยกเป็น component เช่น Button, Card หรือ Badge แทนการสร้าง class ใหม่เร็วเกินไป"
      },
      {
        slug: "adding-custom-styles",
        title: "เพิ่ม Style ของเราเอง",
        titleEn: "Adding Custom Styles",
        utility: "class custom-card + utilities",
        cssProperty: "@layer",
        cssValue: "custom CSS",
        guide: "เมื่อต้องใช้ CSS ที่ utility ไม่มีหรือเป็น pattern เฉพาะโปรเจกต์ สามารถเพิ่ม custom style ใน layer ที่เหมาะสมเพื่อให้ทำงานร่วมกับ Tailwind ได้"
      },
      {
        slug: "functions-directives",
        title: "Functions และ Directives",
        titleEn: "Functions & Directives",
        utility: "@import @apply @theme",
        cssProperty: "Tailwind directives",
        cssValue: "build-time CSS",
        guide: "Directives เป็นคำสั่งพิเศษในไฟล์ CSS ที่ Tailwind อ่านตอน build เช่น import Tailwind, สร้าง theme token หรือรวม utility ด้วย @apply"
      },
      {
        slug: "theme-configuration",
        title: "ตั้งค่า Theme",
        titleEn: "Theme Configuration",
        utility: "@theme { --color-brand: #0ea5e9; }",
        cssProperty: "CSS variables",
        cssValue: "design tokens",
        guide: "Theme คือชุด token ของระบบออกแบบ เช่น สี, spacing, font และ breakpoint การตั้งค่า theme ทำให้ทั้งทีมใช้ค่ากลางเดียวกัน"
      },
      {
        slug: "theme-variables",
        title: "Theme Variables",
        titleEn: "Theme variables",
        utility: "--color-brand-500",
        cssProperty: "custom property",
        cssValue: "#0ea5e9",
        guide: "Theme variables คือ custom properties ที่ Tailwind ใช้สร้าง utility ทำให้ design token อยู่ใน CSS และนำไปใช้ซ้ำได้ทั้งใน utility และ custom CSS"
      },
      {
        slug: "extending-theme",
        title: "ขยาย Theme",
        titleEn: "Extending theme",
        utility: "@theme { --spacing-18: 4.5rem; }",
        cssProperty: "theme extension",
        cssValue: "new token",
        guide: "การขยาย theme คือเพิ่ม token ใหม่โดยไม่ลบค่ามาตรฐาน เหมาะกับโปรเจกต์ที่ต้องการขนาดหรือสีเฉพาะ brand"
      },
      {
        slug: "overriding-theme",
        title: "Override Theme",
        titleEn: "Overriding theme",
        utility: "@theme { --color-sky-500: #0284c7; }",
        cssProperty: "theme override",
        cssValue: "replace token",
        guide: "การ override theme คือเปลี่ยน token เดิมให้ตรงกับ design system ของทีม ต้องทำอย่างระวังเพราะจะกระทบ utility หลายจุดพร้อมกัน"
      },
      {
        slug: "plugins",
        title: "Plugins",
        titleEn: "Plugins",
        utility: "@plugin \"@tailwindcss/forms\"",
        cssProperty: "plugin",
        cssValue: "extra utilities",
        guide: "Plugin เพิ่ม utility, variant หรือ base style ให้ Tailwind เหมาะกับเรื่องที่ใช้ซ้ำบ่อย เช่น typography, forms หรือ custom design system"
      },
      {
        slug: "presets",
        title: "Presets",
        titleEn: "Presets",
        utility: "shared theme preset",
        cssProperty: "configuration reuse",
        cssValue: "team standard",
        guide: "Preset คือชุด config หรือ token ที่แชร์ระหว่างหลายโปรเจกต์ ช่วยให้ UI ของ product ในองค์กรหน้าตาสอดคล้องกัน"
      },
      { slug: "colors", title: "Colors", titleEn: "Colors" }
    ]
  },
  {
    category: "Layout",
    pages: [
      { slug: "aspect-ratio", title: "Aspect Ratio", titleEn: "Aspect Ratio", utility: "aspect-video", cssProperty: "aspect-ratio", cssValue: "16 / 9" },
      { slug: "container", title: "Container", titleEn: "Container", utility: "container mx-auto px-4", cssProperty: "max-width", cssValue: "responsive container" },
      { slug: "columns", title: "Columns", titleEn: "Columns", utility: "columns-3 gap-6", cssProperty: "columns", cssValue: "3" },
      { slug: "break-after", title: "Break After", titleEn: "Break After", utility: "break-after-page", cssProperty: "break-after", cssValue: "page" },
      { slug: "break-before", title: "Break Before", titleEn: "Break Before", utility: "break-before-page", cssProperty: "break-before", cssValue: "page" },
      { slug: "break-inside", title: "Break Inside", titleEn: "Break Inside", utility: "break-inside-avoid", cssProperty: "break-inside", cssValue: "avoid" },
      { slug: "box-decoration-break", title: "Box Decoration Break", titleEn: "Box Decoration Break", utility: "box-decoration-clone", cssProperty: "box-decoration-break", cssValue: "clone" },
      { slug: "box-sizing", title: "Box Sizing", titleEn: "Box Sizing", utility: "box-border", cssProperty: "box-sizing", cssValue: "border-box" },
      { slug: "display", title: "Display", titleEn: "Display", utility: "block hidden inline-flex", cssProperty: "display", cssValue: "block" },
      { slug: "floats", title: "Floats", titleEn: "Floats", utility: "float-right", cssProperty: "float", cssValue: "right" },
      { slug: "clear", title: "Clear", titleEn: "Clear", utility: "clear-both", cssProperty: "clear", cssValue: "both" },
      { slug: "isolation", title: "Isolation", titleEn: "Isolation", utility: "isolate", cssProperty: "isolation", cssValue: "isolate" },
      { slug: "object-fit", title: "Object Fit", titleEn: "Object Fit", utility: "object-cover", cssProperty: "object-fit", cssValue: "cover" },
      { slug: "object-position", title: "Object Position", titleEn: "Object Position", utility: "object-center", cssProperty: "object-position", cssValue: "center" },
      { slug: "overflow", title: "Overflow", titleEn: "Overflow", utility: "overflow-hidden", cssProperty: "overflow", cssValue: "hidden" },
      { slug: "overscroll-behavior", title: "Overscroll Behavior", titleEn: "Overscroll Behavior", utility: "overscroll-contain", cssProperty: "overscroll-behavior", cssValue: "contain" },
      { slug: "position", title: "Position", titleEn: "Position", utility: "relative absolute fixed sticky", cssProperty: "position", cssValue: "relative" },
      { slug: "inset", title: "Top / Right / Bottom / Left (Inset)", titleEn: "Inset", utility: "top-4 right-4 bottom-4 left-4 inset-0", cssProperty: "inset", cssValue: "0" },
      { slug: "visibility", title: "Visibility", titleEn: "Visibility", utility: "visible invisible collapse", cssProperty: "visibility", cssValue: "hidden" },
      { slug: "z-index", title: "Z-Index", titleEn: "Z-Index", utility: "z-10 z-50", cssProperty: "z-index", cssValue: "50" }
    ]
  },
  {
    category: "Flexbox & Grid",
    pages: [
      { slug: "flex", title: "Flexbox", titleEn: "Flexbox" },
      { slug: "flex-basis", title: "Flex Basis", titleEn: "Flex Basis", utility: "basis-1/3", cssProperty: "flex-basis", cssValue: "33.333333%" },
      { slug: "flex-direction", title: "Flex Direction", titleEn: "Flex Direction", utility: "flex flex-col md:flex-row", cssProperty: "flex-direction", cssValue: "column" },
      { slug: "flex-wrap", title: "Flex Wrap", titleEn: "Flex Wrap", utility: "flex flex-wrap", cssProperty: "flex-wrap", cssValue: "wrap" },
      { slug: "flex-utility", title: "Flex", titleEn: "Flex", utility: "flex-1", cssProperty: "flex", cssValue: "1 1 0%" },
      { slug: "flex-grow", title: "Grow", titleEn: "Grow", utility: "grow", cssProperty: "flex-grow", cssValue: "1" },
      { slug: "flex-shrink", title: "Shrink", titleEn: "Shrink", utility: "shrink-0", cssProperty: "flex-shrink", cssValue: "0" },
      { slug: "order", title: "Order", titleEn: "Order", utility: "order-first md:order-last", cssProperty: "order", cssValue: "-9999" },
      { slug: "grid", title: "Grid", titleEn: "Grid" },
      { slug: "grid-template-columns", title: "Grid Template Columns", titleEn: "Grid Template Columns", utility: "grid grid-cols-3", cssProperty: "grid-template-columns", cssValue: "repeat(3, minmax(0, 1fr))" },
      { slug: "grid-template-rows", title: "Grid Template Rows", titleEn: "Grid Template Rows", utility: "grid grid-rows-3", cssProperty: "grid-template-rows", cssValue: "repeat(3, minmax(0, 1fr))" },
      { slug: "grid-column", title: "Grid Column", titleEn: "Grid Column", utility: "col-span-2 col-start-1", cssProperty: "grid-column", cssValue: "span 2 / span 2" },
      { slug: "grid-row", title: "Grid Row", titleEn: "Grid Row", utility: "row-span-2 row-start-1", cssProperty: "grid-row", cssValue: "span 2 / span 2" },
      { slug: "grid-auto-flow", title: "Grid Auto Flow", titleEn: "Grid Auto Flow", utility: "grid-flow-col", cssProperty: "grid-auto-flow", cssValue: "column" },
      { slug: "grid-auto-columns", title: "Auto Columns", titleEn: "Grid Auto Columns", utility: "auto-cols-fr", cssProperty: "grid-auto-columns", cssValue: "minmax(0, 1fr)" },
      { slug: "grid-auto-rows", title: "Auto Rows", titleEn: "Grid Auto Rows", utility: "auto-rows-min", cssProperty: "grid-auto-rows", cssValue: "min-content" },
      { slug: "gap", title: "Gap", titleEn: "Gap", utility: "gap-4 gap-x-6 gap-y-2", cssProperty: "gap", cssValue: "1rem" },
      { slug: "justify-content", title: "Justify Content", titleEn: "Justify Content", utility: "justify-between", cssProperty: "justify-content", cssValue: "space-between" },
      { slug: "align-items", title: "Align Items", titleEn: "Align Items", utility: "items-center", cssProperty: "align-items", cssValue: "center" },
      { slug: "place-items", title: "Place Items", titleEn: "Place Items", utility: "place-items-center", cssProperty: "place-items", cssValue: "center" },
      { slug: "align-content", title: "Align Content", titleEn: "Align Content", utility: "content-center", cssProperty: "align-content", cssValue: "center" },
      { slug: "justify-self", title: "Justify Self", titleEn: "Justify Self", utility: "justify-self-end", cssProperty: "justify-self", cssValue: "end" },
      { slug: "align-self", title: "Align Self", titleEn: "Align Self", utility: "self-start", cssProperty: "align-self", cssValue: "flex-start" }
    ]
  },
  {
    category: "Spacing",
    pages: [
      { slug: "spacing", title: "Spacing", titleEn: "Spacing" },
      { slug: "padding", title: "Padding", titleEn: "Padding", utility: "p-6 px-4 py-2", cssProperty: "padding", cssValue: "1.5rem" },
      { slug: "margin", title: "Margin", titleEn: "Margin", utility: "m-4 mt-6 mx-auto", cssProperty: "margin", cssValue: "1rem" },
      { slug: "space-between", title: "Space Between", titleEn: "Space Between", utility: "space-y-4 md:space-x-4", cssProperty: "margin between children", cssValue: "1rem" }
    ]
  },
  {
    category: "Sizing",
    pages: [
      { slug: "width", title: "Width", titleEn: "Width", utility: "w-full md:w-1/2", cssProperty: "width", cssValue: "100%" },
      { slug: "min-width", title: "Min Width", titleEn: "Min Width", utility: "min-w-0 min-w-64", cssProperty: "min-width", cssValue: "16rem" },
      { slug: "max-width", title: "Max Width", titleEn: "Max Width", utility: "max-w-3xl", cssProperty: "max-width", cssValue: "48rem" },
      { slug: "height", title: "Height", titleEn: "Height", utility: "h-12 h-screen", cssProperty: "height", cssValue: "3rem" },
      { slug: "min-height", title: "Min Height", titleEn: "Min Height", utility: "min-h-screen", cssProperty: "min-height", cssValue: "100vh" },
      { slug: "max-height", title: "Max Height", titleEn: "Max Height", utility: "max-h-96 overflow-auto", cssProperty: "max-height", cssValue: "24rem" }
    ]
  },
  {
    category: "Typography",
    pages: [
      { slug: "font-family", title: "Font Family", titleEn: "Font Family", utility: "font-sans font-mono", cssProperty: "font-family", cssValue: "ui-sans-serif" },
      { slug: "font-size", title: "Font Size", titleEn: "Font Size", utility: "text-sm text-2xl", cssProperty: "font-size", cssValue: "1.5rem" },
      { slug: "font-smoothing", title: "Font Smoothing", titleEn: "Font Smoothing", utility: "antialiased", cssProperty: "-webkit-font-smoothing", cssValue: "antialiased" },
      { slug: "font-style", title: "Font Style", titleEn: "Font Style", utility: "italic not-italic", cssProperty: "font-style", cssValue: "italic" },
      { slug: "font-weight", title: "Font Weight", titleEn: "Font Weight", utility: "font-medium font-bold", cssProperty: "font-weight", cssValue: "700" },
      { slug: "font-variant-numeric", title: "Font Variant Numeric", titleEn: "Font Variant Numeric", utility: "tabular-nums", cssProperty: "font-variant-numeric", cssValue: "tabular-nums" },
      { slug: "letter-spacing", title: "Letter Spacing", titleEn: "Letter Spacing", utility: "tracking-wide", cssProperty: "letter-spacing", cssValue: "0.025em" },
      { slug: "line-clamp", title: "Line Clamp", titleEn: "Line Clamp", utility: "line-clamp-3", cssProperty: "line-clamp", cssValue: "3 lines" },
      { slug: "line-height", title: "Line Height", titleEn: "Line Height", utility: "leading-7", cssProperty: "line-height", cssValue: "1.75rem" },
      { slug: "list-style-type", title: "List Style Type", titleEn: "List Style Type", utility: "list-disc list-decimal", cssProperty: "list-style-type", cssValue: "disc" },
      { slug: "list-style-position", title: "List Style Position", titleEn: "List Style Position", utility: "list-inside", cssProperty: "list-style-position", cssValue: "inside" },
      { slug: "text-align", title: "Text Align", titleEn: "Text Align", utility: "text-center md:text-left", cssProperty: "text-align", cssValue: "center" },
      { slug: "text-color", title: "Text Color", titleEn: "Text Color", utility: "text-slate-700", cssProperty: "color", cssValue: "#334155" },
      { slug: "text-decoration", title: "Text Decoration", titleEn: "Text Decoration", utility: "underline decoration-sky-500", cssProperty: "text-decoration", cssValue: "underline" },
      { slug: "text-transform", title: "Text Transform", titleEn: "Text Transform", utility: "uppercase capitalize", cssProperty: "text-transform", cssValue: "uppercase" },
      { slug: "text-overflow", title: "Text Overflow", titleEn: "Text Overflow", utility: "truncate", cssProperty: "text-overflow", cssValue: "ellipsis" },
      { slug: "text-wrap", title: "Text Wrap", titleEn: "Text Wrap", utility: "text-balance text-pretty", cssProperty: "text-wrap", cssValue: "balance" },
      { slug: "text-indent", title: "Text Indent", titleEn: "Text Indent", utility: "indent-8", cssProperty: "text-indent", cssValue: "2rem" },
      { slug: "vertical-align", title: "Vertical Align", titleEn: "Vertical Align", utility: "align-middle", cssProperty: "vertical-align", cssValue: "middle" },
      { slug: "whitespace", title: "Whitespace", titleEn: "Whitespace", utility: "whitespace-nowrap", cssProperty: "white-space", cssValue: "nowrap" },
      { slug: "word-break", title: "Word Break / Wrap", titleEn: "Word Break / Wrap", utility: "break-words break-all", cssProperty: "overflow-wrap", cssValue: "break-word" }
    ]
  },
  {
    category: "Backgrounds",
    pages: [
      { slug: "background-attachment", title: "Background Attachment", titleEn: "Background Attachment", utility: "bg-fixed", cssProperty: "background-attachment", cssValue: "fixed" },
      { slug: "background-clip", title: "Background Clip", titleEn: "Background Clip", utility: "bg-clip-text", cssProperty: "background-clip", cssValue: "text" },
      { slug: "background-color", title: "Background Color", titleEn: "Background Color", utility: "bg-sky-500", cssProperty: "background-color", cssValue: "#0ea5e9" },
      { slug: "background-image", title: "Background Image", titleEn: "Background Image", utility: "bg-linear-to-r from-sky-500 to-emerald-400", cssProperty: "background-image", cssValue: "linear-gradient(...)" },
      { slug: "background-origin", title: "Background Origin", titleEn: "Background Origin", utility: "bg-origin-border", cssProperty: "background-origin", cssValue: "border-box" },
      { slug: "background-position", title: "Background Position", titleEn: "Background Position", utility: "bg-center", cssProperty: "background-position", cssValue: "center" },
      { slug: "background-repeat", title: "Background Repeat", titleEn: "Background Repeat", utility: "bg-no-repeat", cssProperty: "background-repeat", cssValue: "no-repeat" },
      { slug: "background-size", title: "Background Size", titleEn: "Background Size", utility: "bg-cover", cssProperty: "background-size", cssValue: "cover" }
    ]
  },
  {
    category: "Borders",
    pages: [
      { slug: "border-radius", title: "Border Radius", titleEn: "Border Radius", utility: "rounded-lg", cssProperty: "border-radius", cssValue: "0.5rem" },
      { slug: "border-width", title: "Border Width", titleEn: "Border Width", utility: "border border-2", cssProperty: "border-width", cssValue: "1px" },
      { slug: "border-color", title: "Border Color", titleEn: "Border Color", utility: "border-slate-200", cssProperty: "border-color", cssValue: "#e2e8f0" },
      { slug: "border-style", title: "Border Style", titleEn: "Border Style", utility: "border-dashed", cssProperty: "border-style", cssValue: "dashed" },
      { slug: "divide-width", title: "Divide Width", titleEn: "Divide Width", utility: "divide-y divide-slate-200", cssProperty: "border-width between children", cssValue: "1px" },
      { slug: "divide-color", title: "Divide Color", titleEn: "Divide Color", utility: "divide-slate-200", cssProperty: "border-color between children", cssValue: "#e2e8f0" },
      { slug: "divide-style", title: "Divide Style", titleEn: "Divide Style", utility: "divide-dashed", cssProperty: "border-style between children", cssValue: "dashed" },
      { slug: "outline", title: "Outline", titleEn: "Outline", utility: "outline outline-2 outline-sky-500", cssProperty: "outline", cssValue: "2px solid" },
      { slug: "ring-width", title: "Ring Width", titleEn: "Ring Width", utility: "ring-4", cssProperty: "box-shadow", cssValue: "ring shadow" },
      { slug: "ring-color", title: "Ring Color", titleEn: "Ring Color", utility: "ring-sky-200", cssProperty: "--tw-ring-color", cssValue: "#bae6fd" },
      { slug: "ring-offset", title: "Ring Offset", titleEn: "Ring Offset", utility: "ring-offset-2", cssProperty: "--tw-ring-offset-width", cssValue: "2px" }
    ]
  },
  {
    category: "Effects",
    pages: [
      { slug: "box-shadow", title: "Box Shadow", titleEn: "Box Shadow", utility: "shadow-lg", cssProperty: "box-shadow", cssValue: "0 10px 15px ..." },
      { slug: "text-shadow", title: "Text Shadow", titleEn: "Text Shadow", utility: "text-shadow-md", cssProperty: "text-shadow", cssValue: "medium shadow" },
      { slug: "opacity", title: "Opacity", titleEn: "Opacity", utility: "opacity-75", cssProperty: "opacity", cssValue: "0.75" },
      { slug: "mix-blend-mode", title: "Mix Blend Mode", titleEn: "Mix Blend Mode", utility: "mix-blend-multiply", cssProperty: "mix-blend-mode", cssValue: "multiply" },
      { slug: "background-blend-mode", title: "Background Blend Mode", titleEn: "Background Blend Mode", utility: "bg-blend-overlay", cssProperty: "background-blend-mode", cssValue: "overlay" }
    ]
  },
  {
    category: "Filters",
    pages: [
      { slug: "blur", title: "Blur", titleEn: "Blur", utility: "blur-sm", cssProperty: "filter", cssValue: "blur(8px)" },
      { slug: "brightness", title: "Brightness", titleEn: "Brightness", utility: "brightness-110", cssProperty: "filter", cssValue: "brightness(1.1)" },
      { slug: "contrast", title: "Contrast", titleEn: "Contrast", utility: "contrast-125", cssProperty: "filter", cssValue: "contrast(1.25)" },
      { slug: "drop-shadow", title: "Drop Shadow", titleEn: "Drop Shadow", utility: "drop-shadow-lg", cssProperty: "filter", cssValue: "drop-shadow(...)" },
      { slug: "grayscale", title: "Grayscale", titleEn: "Grayscale", utility: "grayscale", cssProperty: "filter", cssValue: "grayscale(100%)" },
      { slug: "hue-rotate", title: "Hue Rotate", titleEn: "Hue Rotate", utility: "hue-rotate-90", cssProperty: "filter", cssValue: "hue-rotate(90deg)" },
      { slug: "invert", title: "Invert", titleEn: "Invert", utility: "invert", cssProperty: "filter", cssValue: "invert(100%)" },
      { slug: "saturate", title: "Saturate", titleEn: "Saturate", utility: "saturate-150", cssProperty: "filter", cssValue: "saturate(1.5)" },
      { slug: "sepia", title: "Sepia", titleEn: "Sepia", utility: "sepia", cssProperty: "filter", cssValue: "sepia(100%)" },
      { slug: "backdrop-filter", title: "Backdrop Filter", titleEn: "Backdrop Filter", utility: "backdrop-blur-md backdrop-brightness-110", cssProperty: "backdrop-filter", cssValue: "blur(12px)" }
    ]
  },
  {
    category: "Tables",
    pages: [
      { slug: "border-collapse", title: "Border Collapse", titleEn: "Border Collapse", utility: "border-collapse", cssProperty: "border-collapse", cssValue: "collapse" },
      { slug: "border-spacing", title: "Border Spacing", titleEn: "Border Spacing", utility: "border-separate border-spacing-2", cssProperty: "border-spacing", cssValue: "0.5rem" },
      { slug: "table-layout", title: "Table Layout", titleEn: "Table Layout", utility: "table-fixed", cssProperty: "table-layout", cssValue: "fixed" },
      { slug: "caption-side", title: "Caption Side", titleEn: "Caption Side", utility: "caption-bottom", cssProperty: "caption-side", cssValue: "bottom" }
    ]
  },
  {
    category: "Transitions & Animation",
    pages: [
      { slug: "transition-property", title: "Transition Property", titleEn: "Transition Property", utility: "transition-colors", cssProperty: "transition-property", cssValue: "color, background-color, border-color" },
      { slug: "duration", title: "Duration", titleEn: "Duration", utility: "duration-300", cssProperty: "transition-duration", cssValue: "300ms" },
      { slug: "timing-function", title: "Timing Function", titleEn: "Timing Function", utility: "ease-in-out", cssProperty: "transition-timing-function", cssValue: "cubic-bezier(...)" },
      { slug: "delay", title: "Delay", titleEn: "Delay", utility: "delay-150", cssProperty: "transition-delay", cssValue: "150ms" },
      { slug: "animation", title: "Animation", titleEn: "Animation", utility: "animate-pulse", cssProperty: "animation", cssValue: "pulse 2s infinite" }
    ]
  },
  {
    category: "Transforms",
    pages: [
      { slug: "scale", title: "Scale", titleEn: "Scale", utility: "scale-105", cssProperty: "transform", cssValue: "scale(1.05)" },
      { slug: "rotate", title: "Rotate", titleEn: "Rotate", utility: "rotate-6", cssProperty: "transform", cssValue: "rotate(6deg)" },
      { slug: "translate", title: "Translate", titleEn: "Translate", utility: "translate-x-4 -translate-y-2", cssProperty: "transform", cssValue: "translate(...)" },
      { slug: "skew", title: "Skew", titleEn: "Skew", utility: "skew-x-6", cssProperty: "transform", cssValue: "skewX(6deg)" },
      { slug: "transform-origin", title: "Transform Origin", titleEn: "Transform Origin", utility: "origin-top-right", cssProperty: "transform-origin", cssValue: "top right" }
    ]
  },
  {
    category: "Interactivity",
    pages: [
      { slug: "accent-color", title: "Accent Color", titleEn: "Accent Color", utility: "accent-sky-500", cssProperty: "accent-color", cssValue: "#0ea5e9" },
      { slug: "appearance", title: "Appearance", titleEn: "Appearance", utility: "appearance-none", cssProperty: "appearance", cssValue: "none" },
      { slug: "cursor", title: "Cursor", titleEn: "Cursor", utility: "cursor-pointer", cssProperty: "cursor", cssValue: "pointer" },
      { slug: "caret-color", title: "Caret Color", titleEn: "Caret Color", utility: "caret-sky-500", cssProperty: "caret-color", cssValue: "#0ea5e9" },
      { slug: "pointer-events", title: "Pointer Events", titleEn: "Pointer Events", utility: "pointer-events-none", cssProperty: "pointer-events", cssValue: "none" },
      { slug: "resize", title: "Resize", titleEn: "Resize", utility: "resize-y", cssProperty: "resize", cssValue: "vertical" },
      { slug: "scroll-behavior", title: "Scroll Behavior", titleEn: "Scroll Behavior", utility: "scroll-smooth", cssProperty: "scroll-behavior", cssValue: "smooth" },
      { slug: "scroll-margin", title: "Scroll Margin", titleEn: "Scroll Margin", utility: "scroll-mt-20", cssProperty: "scroll-margin-top", cssValue: "5rem" },
      { slug: "scroll-padding", title: "Scroll Padding", titleEn: "Scroll Padding", utility: "scroll-pt-20", cssProperty: "scroll-padding-top", cssValue: "5rem" },
      { slug: "scroll-snap", title: "Scroll Snap", titleEn: "Scroll Snap", utility: "snap-x snap-mandatory", cssProperty: "scroll-snap-type", cssValue: "x mandatory" },
      { slug: "touch-action", title: "Touch Action", titleEn: "Touch Action", utility: "touch-pan-y", cssProperty: "touch-action", cssValue: "pan-y" },
      { slug: "user-select", title: "User Select", titleEn: "User Select", utility: "select-none", cssProperty: "user-select", cssValue: "none" },
      { slug: "will-change", title: "Will Change", titleEn: "Will Change", utility: "will-change-transform", cssProperty: "will-change", cssValue: "transform" }
    ]
  },
  {
    category: "SVG",
    pages: [
      { slug: "fill", title: "Fill", titleEn: "Fill", utility: "fill-sky-500", cssProperty: "fill", cssValue: "#0ea5e9" },
      { slug: "stroke", title: "Stroke", titleEn: "Stroke", utility: "stroke-slate-700", cssProperty: "stroke", cssValue: "#334155" },
      { slug: "stroke-width", title: "Stroke Width", titleEn: "Stroke Width", utility: "stroke-2", cssProperty: "stroke-width", cssValue: "2" }
    ]
  },
  {
    category: "Accessibility",
    pages: [
      {
        slug: "screen-readers",
        title: "Screen Readers",
        titleEn: "Screen Readers",
        utility: "sr-only",
        cssProperty: "accessible visibility",
        cssValue: "screen-reader only",
        guide: "Utility สำหรับ screen reader ช่วยซ่อนหรือแสดงข้อความเฉพาะเทคโนโลยีช่วยเหลือ ทำให้ UI ที่ใช้ icon ยังสื่อสารได้ครบ"
      },
      { slug: "sr-only", title: "sr-only", titleEn: "sr-only", utility: "sr-only", cssProperty: "position/clip", cssValue: "visually hidden" },
      { slug: "not-sr-only", title: "not-sr-only", titleEn: "not-sr-only", utility: "not-sr-only", cssProperty: "position/clip", cssValue: "visible again" }
    ]
  },
  {
    category: "Official Plugins",
    pages: [
      { slug: "plugin-typography", title: "Typography Plugin", titleEn: "Typography", utility: "prose prose-slate", cssProperty: "plugin utilities", cssValue: "rich text defaults" },
      { slug: "plugin-forms", title: "Forms Plugin", titleEn: "Forms", utility: "@tailwindcss/forms", cssProperty: "form reset", cssValue: "consistent controls" },
      { slug: "plugin-aspect-ratio", title: "Aspect Ratio Plugin", titleEn: "Aspect Ratio", utility: "aspect-w-16 aspect-h-9", cssProperty: "aspect ratio plugin", cssValue: "legacy support" },
      { slug: "plugin-line-clamp", title: "Line Clamp Plugin", titleEn: "Line Clamp", utility: "line-clamp-3", cssProperty: "line clamp plugin", cssValue: "truncate lines" }
    ]
  },
  {
    category: "Advanced Topics",
    pages: [
      { slug: "arbitrary-values", title: "Arbitrary Values", titleEn: "Arbitrary values ([value])", utility: "w-[37rem] bg-[#0f172a]", cssProperty: "custom value", cssValue: "37rem" },
      { slug: "variants", title: "Variants", titleEn: "Variants", utility: "hover:bg-sky-600 focus:ring-4 md:flex dark:bg-slate-950", cssProperty: "variant prefixes", cssValue: "conditional utilities" },
      { slug: "important-modifier", title: "Important Modifier !", titleEn: "Important modifier !", utility: "!mt-0", cssProperty: "!important", cssValue: "override utility" },
      { slug: "custom-utilities", title: "Custom Utilities", titleEn: "Custom utilities", utility: "@utility content-auto { content-visibility: auto; }", cssProperty: "custom utility", cssValue: "new class" },
      { slug: "layer-system", title: "Layer System", titleEn: "Layer system", utility: "@layer base, components, utilities", cssProperty: "cascade layers", cssValue: "ordered CSS" },
      { slug: "class-detection-system", title: "Class Detection System", titleEn: "Class detection system", utility: "static class names", cssProperty: "content scanning", cssValue: "generated CSS only" }
    ]
  }
];

function makeDescription(topic: Topic) {
  if (topic.description) return topic.description;
  if (topic.guide) return topic.guide;
  return `${topic.title} คือหัวข้อสำหรับควบคุม ${topic.titleEn} ด้วย utility class ของ Tailwind CSS พร้อมตัวอย่างภาษาไทยและเทียบกับ CSS ปกติ`;
}

function normalizeTopic(topic: Topic, category: string): DocPage {
  const manual = manualDocs.find((doc) => doc.slug === topic.slug);
  if (manual) return manual;

  return {
    ...topic,
    category,
    description: makeDescription(topic),
    keywords: topic.keywords ?? [topic.slug, topic.titleEn, topic.title, category, "Tailwind CSS ภาษาไทย"],
    headings: topic.headings ?? generatedHeadings
  };
}

export const docs: DocPage[] = topicGroups.flatMap((group) =>
  group.pages.map((topic) => normalizeTopic(topic, group.category))
);

export const docCategories = topicGroups.map((group) => ({
  category: group.category,
  pages: docs.filter((doc) => doc.category === group.category)
}));

export function getDocBySlug(slug: string) {
  return docs.find((doc) => doc.slug === slug);
}

export const searchRecords = docs.map(({ slug, title, titleEn, description, category, keywords }) => ({
  slug,
  title,
  titleEn,
  description,
  category,
  keywords: keywords.join(" ")
}));
