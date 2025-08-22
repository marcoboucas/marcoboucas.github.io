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
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-foreground">My Projects</h2>
            <p className="text-center text-muted-foreground">No projects available at the moment.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-foreground">My Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project) => (
              <div key={project.id} className="group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
                      onClick={() => window.location.href = `/projects/${project.id}`}>
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
                        <Badge className="bg-background/90 backdrop-blur text-foreground border border-border shadow-sm">{project.company.name}</Badge>
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

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags?.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs px-2 py-0.5">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {project.links && project.links.length > 0 && (
                      <div className="flex gap-2 pt-2">
                        {project.links.slice(0, 2).map((link, index) => (
                          <Button 
                            key={index} 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 bg-transparent z-10 relative"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(link.url, '_blank');
                            }}
                          >
                            {link.text.includes("Github") ? (
                              <Github className="h-4 w-4 mr-2" />
                            ) : (
                              <ExternalLink className="h-4 w-4 mr-2" />
                            )}
                            {link.text}
                          </Button>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}