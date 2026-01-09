
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  isCurrent?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Technical' | 'Soft Skills';
}

export interface Achievement {
  title: string;
  issuer: string;
  year: string;
}
