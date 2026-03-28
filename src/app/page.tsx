import { getAllProjects, getAboutData } from '@/lib/markdown';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default async function Home() {
  const [aboutData, projects] = await Promise.all([
    getAboutData(),
    getAllProjects(),
  ]);

  const featuredProjects = projects.filter((p) => p.featured);
  const recentProjects = projects.slice(0, 6);

  return (
    <div className="min-h-screen bg-[hsl(40_33%_98%)]">
      {/* Navigation */}
      <header className="border-b border-[hsl(36_18%_86%)] bg-[hsl(40_33%_98%)] sticky top-0 z-50">
        <div className="section-container py-5 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-[hsl(20_14%_12%)] tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Marco Boucas
          </Link>
          <nav className="flex items-center gap-8">
            <a href="#projects" className="text-sm text-[hsl(20_10%_48%)] hover:text-[hsl(20_14%_12%)] transition-colors">
              Projets
            </a>
            <a href="#about" className="text-sm text-[hsl(20_10%_48%)] hover:text-[hsl(20_14%_12%)] transition-colors">
              À propos
            </a>
            <a
              href="mailto:marco.boucas@hotmail.fr"
              className="text-sm px-4 py-1.5 border border-[hsl(25_60%_35%)] text-[hsl(25_60%_35%)] rounded hover:bg-[hsl(25_60%_35%)] hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="section-container pt-24 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-[hsl(25_60%_35%)] mb-6 font-medium">
            {aboutData.subtitle}
          </p>
          <h1
            className="text-6xl md:text-7xl font-bold text-[hsl(20_14%_12%)] leading-none mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {aboutData.title}
          </h1>
          <div
            className="text-lg text-[hsl(20_10%_38%)] max-w-2xl leading-relaxed prose-editorial"
            dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }}
          />
          <div className="flex items-center gap-5 mt-10">
            <a
              href={aboutData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[hsl(20_10%_48%)] hover:text-[hsl(20_14%_12%)] transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <span className="text-[hsl(36_18%_86%)]">·</span>
            <a
              href={aboutData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[hsl(20_10%_48%)] hover:text-[hsl(20_14%_12%)] transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <span className="text-[hsl(36_18%_86%)]">·</span>
            <a
              href={`mailto:${aboutData.email}`}
              className="flex items-center gap-2 text-sm text-[hsl(20_10%_48%)] hover:text-[hsl(20_14%_12%)] transition-colors"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-container">
        <hr className="border-[hsl(36_18%_86%)]" />
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section id="projects" className="section-container py-20">
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="text-3xl font-bold text-[hsl(20_14%_12%)]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Projets récents
            </h2>
            <a
              href="#all-projects"
              className="text-sm text-[hsl(25_60%_35%)] hover:underline flex items-center gap-1"
            >
              Tous les projets <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <article className="bg-white border border-[hsl(36_18%_86%)] rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-video relative overflow-hidden bg-[hsl(38_22%_94%)]">
                    <Image
                      src={`/images/projects/${project.image}`}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-[hsl(25_60%_35%)] font-medium uppercase tracking-wide mb-2">
                      {project.company}
                    </p>
                    <h3
                      className="text-lg font-semibold text-[hsl(20_14%_12%)] leading-snug mb-2 group-hover:text-[hsl(25_60%_35%)] transition-colors"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-[hsl(20_10%_48%)] line-clamp-2 leading-relaxed">
                      {project.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-[hsl(38_22%_93%)] text-[hsl(20_10%_38%)] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs px-2 py-0.5 bg-[hsl(38_22%_93%)] text-[hsl(20_10%_48%)] rounded">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* All Projects */}
      <section id="all-projects" className="bg-[hsl(38_22%_95%)] py-20">
        <div className="section-container">
          <h2
            className="text-3xl font-bold text-[hsl(20_14%_12%)] mb-12"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Tous les projets
          </h2>
          <div className="space-y-0 divide-y divide-[hsl(36_18%_86%)]">
            {recentProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group flex items-center gap-6 py-5 hover:bg-[hsl(38_22%_93%)] -mx-4 px-4 rounded transition-colors"
              >
                <div className="w-16 h-16 relative rounded overflow-hidden flex-shrink-0 bg-[hsl(38_22%_94%)]">
                  <Image
                    src={`/images/projects/${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[hsl(25_60%_35%)] font-medium mb-0.5">
                    {project.company}
                  </p>
                  <h3
                    className="font-semibold text-[hsl(20_14%_12%)] group-hover:text-[hsl(25_60%_35%)] transition-colors truncate"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-[hsl(20_10%_48%)] line-clamp-1 mt-0.5">
                    {project.excerpt}
                  </p>
                </div>
                <div className="flex-wrap gap-1.5 hidden md:flex">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-white border border-[hsl(36_18%_86%)] text-[hsl(20_10%_48%)] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowRight className="h-4 w-4 text-[hsl(20_10%_60%)] group-hover:text-[hsl(25_60%_35%)] flex-shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
          {projects.length > 6 && (
            <div className="mt-8 text-center">
              <p className="text-sm text-[hsl(20_10%_48%)]">
                {projects.length - 6} projets supplémentaires disponibles
              </p>
            </div>
          )}
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-container py-20">
        <div className="max-w-2xl">
          <h2
            className="text-3xl font-bold text-[hsl(20_14%_12%)] mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            À propos
          </h2>
          <div
            className="prose-editorial text-[hsl(20_10%_38%)]"
            dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(36_18%_86%)] py-10">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-lg font-semibold text-[hsl(20_14%_12%)]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Marco Boucas
          </p>
          <div className="flex items-center gap-6">
            <a
              href={aboutData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(20_10%_48%)] hover:text-[hsl(20_14%_12%)] transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={aboutData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(20_10%_48%)] hover:text-[hsl(20_14%_12%)] transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${aboutData.email}`}
              className="text-[hsl(20_10%_48%)] hover:text-[hsl(20_14%_12%)] transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-[hsl(20_10%_60%)]">
            © {new Date().getFullYear()} Marco Boucas
          </p>
        </div>
      </footer>
    </div>
  );
}
