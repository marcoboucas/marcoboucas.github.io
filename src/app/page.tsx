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
      <section className="hero-gradient relative py-20 lg:py-32 overflow-hidden">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Hero Content */}
            <div className="flex-1 text-white animate-slide-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                {portfolioData.title}
              </h1>
              <h2 className="text-xl lg:text-2xl text-blue-100 mb-8 font-light">
                {portfolioData.subtitle}
              </h2>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-blue-600 bg-white rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
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
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200"
                >
                  LinkedIn
                </Link>
                
                <Link
                  href="https://github.com/marcoboucas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200"
                >
                  GitHub
                </Link>
                
                <Link
                  href="#certifications"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200"
                >
                  Certifications
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-shrink-0 animate-float">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                <Image
                  src="/assets/images/personal.jpg"
                  alt="Marco Boucas"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-3/4 h-3/4 bg-blue-300 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
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
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="section-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Portfolio
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
      <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
        <div className="section-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
