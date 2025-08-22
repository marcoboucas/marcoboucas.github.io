"use client"

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { NavigationMenu } from '@/components/NavigationMenu';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavigationMenu />
      
      <HeroSection 
        title={portfolioData.title}
        subtitle={portfolioData.subtitle}
      />
      
      <AboutSection 
        aboutMe={portfolioData.aboutMe}
      />
      
      <ProjectsSection 
        projects={portfolioData.portfolio}
      />
      
      <CertificationsSection 
        certifications={portfolioData.certifications}
      />
      
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Marco Boucas. Built with Next.js, Tailwind CSS and shadcn/ui.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
