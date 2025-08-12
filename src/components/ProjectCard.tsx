'use client';

import React from 'react';
import { Project } from '@/types/portfolio';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
}

export default function ProjectCard({ project, className = '', style }: ProjectCardProps) {
  return (
    <div className={`group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${className}`} style={style}>
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={`/assets/images/projects/${project.miniature}`}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Company Badge */}
        {project.company.name && (
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
            {project.company.name}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
          {project.name}
        </h3>

        {/* Description */}
        {project.short_description && (
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
            {project.short_description}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary-600 bg-primary-50 border border-primary-200 rounded-lg hover:bg-primary-100 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200 dark:bg-primary-900 dark:text-primary-300 dark:border-primary-800 dark:hover:bg-primary-800"
              >
                {link.text}
                <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Click to view more */}
      <Link
        href={`/projects/${project.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View details for ${project.name}`}
      />
    </div>
  );
}