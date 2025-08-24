"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

interface HeroSectionProps {
  title: string
  subtitle: string
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-muted relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/abstract-ai-neural-network.png')] opacity-5 bg-cover bg-center" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight">{title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              variant="outline"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg cursor-pointer"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore my projects
            </Button>
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                
                className="px-8 py-3 text-lg cursor-pointer"
              >
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-accent">
              <a href="https://github.com/marcoboucas" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-accent">
              <a href="https://www.linkedin.com/in/boucasmarco/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-accent">
              <a href="mailto:marco.boucas@hotmail.fr">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}