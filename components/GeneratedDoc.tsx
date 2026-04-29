import { CodeBlock } from "@/components/CodeBlock";
import type { DocPage } from "@/lib/docs";

type GeneratedDocProps = {
  doc: DocPage;
};

function defaultExample(doc: DocPage) {
  if (doc.example) return doc.example;

  const utility = doc.utility ?? "rounded-lg border border-slate-200 p-6";

  return `<section class="${utility} rounded-lg border border-slate-200 p-6">
  <p class="text-sm font-semibold text-sky-600">${doc.title}</p>
  <h2 class="mt-2 text-2xl font-bold text-slate-950">ตัวอย่างการใช้งาน</h2>
  <p class="mt-4 text-slate-600">
    ปรับ class นี้เพื่อควบคุม ${doc.titleEn} ได้โดยไม่ต้องเขียน CSS แยก
  </p>
</section>`;
}

function defaultCssExample(doc: DocPage) {
  if (doc.cssExample) return doc.cssExample;

  const property = doc.cssProperty ?? "property";
  const value = doc.cssValue ?? "value";

  return `.example {
  ${property}: ${value};
}`;
}

function defaultLineByLine(doc: DocPage) {
  if (doc.lineByLine) return doc.lineByLine;

  return [
    `\`${doc.utility ?? doc.titleEn}\` คือ utility หลักที่ใช้ควบคุม ${doc.titleEn}`,
    "`rounded-lg border border-slate-200 p-6` ใช้จัดกรอบและระยะห่างเพื่อให้ตัวอย่างอ่านง่าย",
    "`text-sky-600` ใช้เน้น label ให้เห็นว่าเป็นหัวข้อสำคัญ",
    "เมื่อใช้จริง ให้เลือก utility เฉพาะที่ต้องการ ไม่จำเป็นต้องใส่ทุก class เหมือนตัวอย่าง"
  ];
}

function defaultUseCase(doc: DocPage) {
  if (doc.useCase) return doc.useCase;

  return `${doc.title} มักใช้ตอนสร้าง UI จริง เช่น dashboard, card, form, navigation หรือหน้า content ที่ต้องการควบคุม ${doc.titleEn} ให้ชัดเจนโดยไม่ต้องเปิดไฟล์ CSS เพิ่ม`;
}

export function GeneratedDoc({ doc }: GeneratedDocProps) {
  const example = defaultExample(doc);
  const cssExample = defaultCssExample(doc);
  const lineByLine = defaultLineByLine(doc);

  return (
    <>
      <h2 id="หลักการ" className="mt-12 scroll-m-20 text-2xl font-semibold tracking-normal text-slate-950 dark:text-white">
        หลักการ
      </h2>
      <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
        {doc.guide ??
          `${doc.title} เป็น utility group ของ Tailwind CSS ที่ช่วยควบคุม ${doc.titleEn} จาก class โดยตรง วิธีนี้เหมาะกับงาน frontend ที่ต้องปรับ UI บ่อย เพราะอ่าน markup แล้วเห็น style สำคัญได้ทันที`}
      </p>
      <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
        ถ้าคุณคุ้นกับ CSS ปกติ ให้มอง utility เป็น shorthand ที่มี design token ของ Tailwind อยู่ข้างใน เช่น scale ระยะห่าง สี และ breakpoint ที่ทั้งทีมใช้ร่วมกัน
      </p>

      <h2 id="ตัวอย่างโค้ด" className="mt-12 scroll-m-20 text-2xl font-semibold tracking-normal text-slate-950 dark:text-white">
        ตัวอย่างโค้ด
      </h2>
      <CodeBlock>
        <code className="language-html">{example}</code>
      </CodeBlock>

      <h2 id="อธิบายทีละบรรทัด" className="mt-12 scroll-m-20 text-2xl font-semibold tracking-normal text-slate-950 dark:text-white">
        อธิบายทีละบรรทัด
      </h2>
      <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700 dark:text-slate-300">
        {lineByLine.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ol>

      <h2 id="use-case-จริง" className="mt-12 scroll-m-20 text-2xl font-semibold tracking-normal text-slate-950 dark:text-white">
        Use case จริง
      </h2>
      <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">{defaultUseCase(doc)}</p>

      <h2 id="เทียบกับ-css-ปกติ" className="mt-12 scroll-m-20 text-2xl font-semibold tracking-normal text-slate-950 dark:text-white">
        เทียบกับ CSS ปกติ
      </h2>
      <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
        ถ้าเขียน CSS เอง เราต้องตั้งชื่อ class และดูแล property แยกอีกไฟล์:
      </p>
      <CodeBlock>
        <code className="language-css">{cssExample}</code>
      </CodeBlock>
      <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
        ส่วน Tailwind วาง class ไว้ที่ element เลย ทำให้แก้ layout, spacing หรือ state เฉพาะจุดได้เร็ว แต่ถ้า pattern นี้ซ้ำหลายที่ ควรแยกเป็น React component เพื่อให้ codebase อ่านง่าย
      </p>
    </>
  );
}
