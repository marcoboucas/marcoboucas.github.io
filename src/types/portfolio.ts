// Portfolio data types
export interface Link {
  text: string;
  url: string;
}

export interface Company {
  name: string;
  description: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  miniature: string;
  short_description: string;
  tags: string[];
  links?: Link[];
  company: Company;
}

export interface Certification {
  id: string;
  name: string;
  miniature: string;
  organisation: string;
  url: string;
}

export interface AboutMe {
  p1: string;
  p2: string;
}

export interface PortfolioData {
  title: string;
  subtitle: string;
  aboutMe: AboutMe;
  portfolio: Project[];
  certifications: Certification[];
}