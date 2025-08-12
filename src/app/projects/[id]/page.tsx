import { notFound } from 'next/navigation';
import { portfolioData } from '@/data/portfolio';
import { Project } from '@/types/portfolio';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  return portfolioData.portfolio.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = portfolioData.portfolio.find((p) => p.id === id);
  
  if (!project) {
    return {
      title: 'Project Not Found - Marco Boucas',
    };
  }

  return {
    title: `${project.name} - Marco Boucas Portfolio`,
    description: project.short_description || `${project.name} project by Marco Boucas`,
    keywords: project.tags.join(', '),
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project: Project | undefined = portfolioData.portfolio.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="section-container py-4">
          <Link
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Project Image */}
            <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden mb-8 shadow-lg">
              <Image
                src={`/images/projects/${project.miniature}`}
                alt={project.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              {/* Company Badge */}
              {project.company.name && (
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                  {project.company.url ? (
                    <Link 
                      href={project.company.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {project.company.name}
                    </Link>
                  ) : (
                    project.company.name
                  )}
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {project.name}
              </h1>

              {/* Company Description */}
              {project.company.description && (
                <p className="text-lg text-gray-600 dark:text-gray-300 italic">
                  {project.company.description}
                </p>
              )}

              {/* Description */}
              {project.short_description && (
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.short_description}
                  </p>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.links && project.links.length > 0 && (
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary-600 border border-transparent rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                    >
                      {link.text}
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Other Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.portfolio
                .filter((p) => p.id !== project.id)
                .slice(0, 4)
                .map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.id}`}
                    className="group block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="relative h-32 w-full">
                      <Image
                        src={`/images/projects/${relatedProject.miniature}`}
                        alt={relatedProject.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 448px"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {relatedProject.name}
                      </h3>
                      {relatedProject.company.name && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {relatedProject.company.name}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}