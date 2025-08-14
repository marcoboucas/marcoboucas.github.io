'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import ProjectCard from '@/components/ProjectCard';
import CertificationCard from '@/components/CertificationCard';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient relative py-20 lg:py-32 overflow-hidden animate-gradient">
        <div className="section-container relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Hero Content */}
            <div className="flex-1 text-white animate-slide-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in">
                {portfolioData.title}
              </h1>
              <h2 className="text-xl lg:text-2xl text-blue-100 mb-8 font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {portfolioData.subtitle}
              </h2>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium text-blue-600 bg-white/95 backdrop-blur-sm rounded-xl hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover-lift glow-blue"
                >
                  Download Resume
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </Link>
                
                <Link
                  href="https://www.linkedin.com/in/boucasmarco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-white border-2 border-white/60 backdrop-blur-sm rounded-xl hover:bg-white/95 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-300 glass-effect hover-lift"
                >
                  LinkedIn
                </Link>
                
                <Link
                  href="https://github.com/marcoboucas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-white border-2 border-white/60 backdrop-blur-sm rounded-xl hover:bg-white/95 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-300 glass-effect hover-lift"
                >
                  GitHub
                </Link>
                
                <Link
                  href="#certifications"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-white border-2 border-white/60 backdrop-blur-sm rounded-xl hover:bg-white/95 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-300 glass-effect hover-lift"
                >
                  Certifications
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-shrink-0 animate-float">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-white/30 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 glow-blue">
                <Image
                  src="/images/personal.jpg"
                  alt="Marco Boucas"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-400/20 rounded-full animate-float-slow blur-3xl" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-3/4 h-3/4 bg-blue-300/20 rounded-full animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-200/20 rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-950/30 relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 animate-slide-up">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <div 
                className="animate-slide-up"
                dangerouslySetInnerHTML={{ __html: portfolioData.aboutMe.p1 }}
              />
              <div 
                className="animate-slide-up"
                style={{ animationDelay: '0.2s' }}
                dangerouslySetInnerHTML={{ __html: portfolioData.aboutMe.p2 }}
              />
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-10 right-10 w-40 h-40 bg-blue-200/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-300/40 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 relative overflow-hidden section-bg">
        <div className="section-container relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
              Portfolio
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Explore my projects spanning AI, machine learning, web development, and data science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.portfolio.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gradient-to-br from-white to-blue-50/40 dark:from-gray-900 dark:to-blue-950/30 relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
              Certifications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Professional certifications and achievements in AI, machine learning, and software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {portfolioData.certifications.map((certification, index) => (
              <CertificationCard
                key={certification.id}
                certification={certification}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 dark:bg-black text-white">
        <div className="section-container">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Marco Boucas. Built with Next.js and Tailwind CSS.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <Link
                href="https://www.linkedin.com/in/boucasmarco/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/marcoboucas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
