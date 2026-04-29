import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocLayout } from "@/components/DocLayout";
import { GeneratedDoc } from "@/components/GeneratedDoc";
import { docs, getDocBySlug } from "@/lib/docs";

type DocPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    keywords: ["Tailwind CSS ภาษาไทย", doc.title, doc.titleEn, ...doc.keywords]
  };
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const Content = doc.component;

  return (
    <DocLayout doc={doc}>
      {Content ? <Content /> : <GeneratedDoc doc={doc} />}
    </DocLayout>
  );
}
