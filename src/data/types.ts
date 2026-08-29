export interface SiteData {
  name: string;
  tagline: string;
  description: string;
  email: string;
  social: {
    github: string;
    instagram: string;
  };
  links: {
    portfolio: string;
    doublelink: string;
    dobre: string;
  };
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
  footer: {
    copyright: string;
    madeBy: string;
  };
}

export interface ProjectLink {
  web?: string;
  github?: string;
  download?: string;
  documentation?: string;
  video?: string;
  demo?: string;
}

export interface ProjectData {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  status: string;
  statusColor: 'success' | 'warning' | 'info' | 'development';
  technologies: string[];
  image?: string;
  links: ProjectLink;
  featured: boolean;
  version?: string;
  releaseSource?: string;
}

export interface ProjectsFile {
  projects: ProjectData[];
}