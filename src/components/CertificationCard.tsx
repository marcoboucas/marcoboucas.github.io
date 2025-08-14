'use client';

import React from 'react';
import { Certification } from '@/types/portfolio';
import Image from 'next/image';
import Link from 'next/link';

interface CertificationCardProps {
  certification: Certification;
  className?: string;
  style?: React.CSSProperties;
}

export default function CertificationCard({ certification, className = '', style }: CertificationCardProps) {
  return (
    <Link
      href={certification.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block ${className}`}
      style={style}
    >
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg hover-lift transition-all duration-500 transform p-4 border border-gray-200/50 dark:border-gray-700/50 hover-glow">
        <div className="flex items-center space-x-4">
          {/* Certification Logo */}
          <div className="flex-shrink-0">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
              <Image
                src={`/images/certifications/${certification.miniature}`}
                alt={certification.organisation}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 line-clamp-2">
              {certification.name}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {certification.organisation}
            </p>
          </div>

          {/* External Link Icon */}
          <div className="flex-shrink-0">
            <svg 
              className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}