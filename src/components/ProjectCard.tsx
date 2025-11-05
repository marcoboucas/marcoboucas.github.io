'use client';

import React from 'react';
import { Project } from '@/types/portfolio';
import { getContrastColor } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
}

export default function ProjectCard({ project, className = '', style }: ProjectCardProps) {
  return (
    <Card className={`group border-0 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden cursor-pointer bg-card/80 backdrop-blur-sm hover:bg-card/90 ${className}`} style={style}>
      {/* Project Image */}
      <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <Image
          src={`/images/projects/${project.miniature}`}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Company Badge */}
        {project.company.name && (
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
        <CardTitle className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
          {project.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 pb-6">
        {/* Description */}
        {project.short_description && (
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {project.short_description}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs px-2.5 py-1 border-0 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="secondary" className="text-xs px-2.5 py-1 border-0 bg-muted text-muted-foreground">
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.links.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                asChild
                className="border-0 bg-primary/5 hover:bg-primary/10 text-primary hover:text-primary transition-all duration-300 hover:shadow-md"
              >
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {link.text}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </CardContent>

      {/* Click to view more */}
      <Link
        href={`/projects/${project.id}`}
        className="absolute inset-0 z-0"
        aria-label={`Voir les détails de ${project.name}`}
      />
    </Card>
  );
}