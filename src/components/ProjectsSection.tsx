import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Project } from "@/types/portfolio"
import Image from "next/image"

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (!projects || !Array.isArray(projects)) {
    return (
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-foreground">Mes Projets</h2>
            <p className="text-center text-muted-foreground">Aucun projet disponible pour le moment.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-foreground">Mes Projets</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <Image
                    src={`/images/projects/${project.miniature}`}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => {
                      // This won't work with Image component, we'll handle fallback differently
                    }}
                  />
                  {project.company?.name && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">{project.company.name}</Badge>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-foreground leading-tight">{project.name}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {project.short_description && (
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.short_description}</p>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tags?.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags && project.tags.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 4}
                      </Badge>
                    )}
                  </div>

                  {project.links && project.links.length > 0 && (
                    <div className="flex gap-2 pt-2">
                      {project.links.slice(0, 2).map((link, index) => (
                        <Button key={index} variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.text.includes("Github") ? (
                              <Github className="h-4 w-4 mr-2" />
                            ) : (
                              <ExternalLink className="h-4 w-4 mr-2" />
                            )}
                            {link.text}
                          </a>
                        </Button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 py-3">
              Voir tous les projets
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}