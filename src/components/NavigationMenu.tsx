"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

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

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // A small delay to ensure that the sections are rendered before scrolling
    setTimeout(() => {
      handleHashChange();
    }, 100);


    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
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
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
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
          className="cursor-pointer bg-background/90 backdrop-blur-md rounded-full shadow-lg border-0 hover:shadow-xl transition-all duration-200"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>

        {isMobileMenuOpen && (
          <div className="absolute top-12 right-0 bg-background/95 backdrop-blur-md border border-border rounded-lg p-4 shadow-lg min-w-[200px]">
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-pointer text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}