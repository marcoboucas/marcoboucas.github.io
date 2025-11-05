"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Mail, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-foreground">Contact</h2>

          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Restons en contact</h3>
                <p className="text-muted-foreground mb-8 text-center">
                  N&apos;hésitez pas à me contacter pour discuter de projets, d&apos;opportunités, ou simplement pour échanger des idées sur l&apos;intelligence artificielle.
                </p>
              </div>

              <div className="space-y-4 flex flex-row justify-center gap-3">
                <div className="flex items-center gap-4 justify-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:marco.boucas@hotmail.fr" className="text-muted-foreground hover:text-primary transition-colors">
                      marco.boucas@hotmail.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 justify-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Localisation</p>
                    <p className="text-muted-foreground">Paris, France</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4 text-center">Me suivre</h4>
                <div className="flex gap-4 justify-center">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/marcoboucas" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/boucasmarco/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}