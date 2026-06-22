export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  keyContributions: string[];
  results: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface SocialMediaItem {
  id: string;
  type: 'instagram' | 'linkedin' | 'carousel' | 'campaign-showcase' | 'video';
  title: string;
  subtitle: string;
  image: string;
  frameStyle: 'phone' | 'laptop' | 'large-showcase';
  aspectRatio: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: string;
  metrics: string[];
  tag: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  relation: 'Mentor' | 'Client' | 'Manager' | 'Collaborator';
}
