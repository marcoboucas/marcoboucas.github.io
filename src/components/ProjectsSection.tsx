import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Project } from "@/types/portfolio"
import { getContrastColor } from "@/lib/utils"
import Image from "next/image"

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (!projects || !Array.isArray(projects)) {
    return (
      <section id="projects" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
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
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-foreground">Mes Projets</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project) => (
              <div key={project.id} className="group">
                <Card className="h-full border-0 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden cursor-pointer bg-card/80 backdrop-blur-sm hover:bg-card/90"
                      onClick={() => window.location.href = `/projects/${project.id}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
                    <Image
                      src={`/images/projects/${project.miniature}`}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={() => {
                        // This won't work with Image component, we'll handle fallback differently
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {project.company?.name && (
                      <div className="absolute top-4 left-4">
                        <Badge 
                          className="backdrop-blur-md border-0 shadow-lg font-medium"
                          style={{
                            backgroundColor: project.backgroundColor 
                              ? getContrastColor(project.backgroundColor) === "white" 
                                ? "rgba(255, 255, 255, 0.95)" 
                                : "rgba(0, 0, 0, 0.85)"
                              : "rgba(255, 255, 255, 0.95)",
                            color: project.backgroundColor 
                              ? getContrastColor(project.backgroundColor) === "white" 
                                ? "black" 
                                : "white"
                              : "black"
                          }}
                        >
                          {project.company.name}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader className="pb-3 pt-6">
                    <CardTitle className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">{project.name}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4 pb-6">
                    {project.short_description && (
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.short_description}</p>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.tags?.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-2.5 py-1 border-0 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags && project.tags.length > 4 && (
                        <Badge variant="secondary" className="text-xs px-2.5 py-1 border-0 bg-muted text-muted-foreground">
                          +{project.tags.length - 4}
                        </Badge>
                      )}
                    </div>

                    {project.links && project.links.length > 0 && (
                      <div className="flex gap-2 pt-2">
                        {project.links.slice(0, 2).map((link, index) => (
                          <Button 
                            key={index} 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 border-0 bg-primary/5 hover:bg-primary/10 text-primary hover:text-primary z-10 relative cursor-pointer transition-all duration-300 hover:shadow-md"
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