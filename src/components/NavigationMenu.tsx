"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function NavigationMenu() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const menuItems = [
    { id: "hero", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "certifications", label: "Certifications" },
    { id: "projects", label: "Projets" },
    { id: "contact", label: "Contact" },
  ]

  if (!isVisible) return null

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-background/80 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-background/80 backdrop-blur-md border-border"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>

        {isMobileMenuOpen && (
          <div className="absolute top-12 right-0 bg-background/95 backdrop-blur-md border border-border rounded-lg p-4 shadow-lg min-w-[200px]">
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}