import { notFound } from 'next/navigation';
import { getAllProjectSlugs, getProjectBySlug, getAllProjects } from '@/lib/markdown';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ id: slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = await getProjectBySlug(id);

  if (!project) {
    return { title: 'Projet introuvable — Marco Boucas' };
  }

  return {
    title: `${project.title} — Marco Boucas`,
    description: project.excerpt,
    keywords: project.tags.join(', '),
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const [project, allProjects] = await Promise.all([
    getProjectBySlug(id),
    getAllProjects(),
  ]);

  if (!project) {
    notFound();
  }

  const relatedProjects = allProjects
    .filter((p) => p.slug !== id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[hsl(40_33%_98%)]">
      {/* Navigation */}
      <header className="border-b border-[hsl(36_18%_86%)] bg-[hsl(40_33%_98%)] sticky top-0 z-50">
        <div className="section-container py-5 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold text-[hsl(20_14%_12%)] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Marco Boucas
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-[hsl(20_10%_48%)] hover:text-[hsl(20_14%_12%)] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Link>
        </div>
      </header>

      <main className="section-container py-16">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-xs text-[hsl(20_10%_48%)] mb-10 flex items-center gap-2">
            <Link href="/" className="hover:text-[hsl(25_60%_35%)] transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-[hsl(25_60%_35%)]">{project.title}</span>
          </nav>

          {/* Company tag */}
          {project.company && (
            <p className="text-xs text-[hsl(25_60%_35%)] font-medium uppercase tracking-widest mb-4">
              {project.company_url ? (
                <a
                  href={project.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {project.company}
                </a>
              ) : (
                project.company
              )}
            </p>
          )}

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl font-bold text-[hsl(20_14%_12%)] leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {project.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-[hsl(38_22%_93%)] text-[hsl(20_10%_38%)] rounded border border-[hsl(36_18%_86%)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hero image */}
          <div className="relative aspect-video rounded-lg overflow-hidden bg-[hsl(38_22%_94%)] mb-12 border border-[hsl(36_18%_86%)]">
            <Image
              src={`/images/projects/${project.image}`}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Markdown content */}
          <article
            className="prose-editorial"
            dangerouslySetInnerHTML={{ __html: project.contentHtml }}
          />

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[hsl(36_18%_86%)]">
              <h2
                className="text-sm font-semibold uppercase tracking-widest text-[hsl(20_10%_48%)] mb-4"
              >
                Liens
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-[hsl(36_18%_86%)] rounded text-sm text-[hsl(20_14%_12%)] hover:border-[hsl(25_60%_35%)] hover:text-[hsl(25_60%_35%)] transition-colors bg-white"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="border-t border-[hsl(36_18%_86%)] bg-[hsl(38_22%_95%)] py-16">
          <div className="section-container">
            <h2
              className="text-2xl font-bold text-[hsl(20_14%_12%)] mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Autres projets
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((related) => (
                <Link
                  key={related.slug}
                  href={`/projects/${related.slug}`}
                  className="group block bg-white border border-[hsl(36_18%_86%)] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video relative overflow-hidden bg-[hsl(38_22%_94%)]">
                    <Image
                      src={`/images/projects/${related.image}`}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-[hsl(25_60%_35%)] font-medium mb-1">{related.company}</p>
                    <h3
                      className="font-semibold text-[hsl(20_14%_12%)] group-hover:text-[hsl(25_60%_35%)] transition-colors text-sm leading-snug"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-[hsl(36_18%_86%)] py-8">
        <div className="section-container text-center">
          <p className="text-xs text-[hsl(20_10%_60%)]">
            © {new Date().getFullYear()} Marco Boucas
          </p>
        </div>
      </footer>
    </div>
  );
}
