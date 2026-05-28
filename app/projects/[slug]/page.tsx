import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "../../components/CaseStudyDetail";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { caseStudies, getCaseStudy } from "../../data/caseStudies";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Project not found" };

  return {
    title: `${study.title} | Sai Krishna Veerabathini`,
    description: study.subtitle,
    openGraph: {
      title: study.title,
      description: study.subtitle,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <CaseStudyDetail study={study} />
      <SiteFooter />
    </main>
  );
}
