
import React from 'react';
import { 
  Search, 
  Target, 
  Globe, 
  Code, 
  GraduationCap, 
  Cpu, 
  Award, 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin, 
  Share2,
  CheckCircle2,
  BarChart3,
  PenTool,
  MessageSquare,
  Users
} from 'lucide-react';
import { Service, ExperienceItem, Skill, Achievement } from './types';

export const SERVICES: Service[] = [
  {
    id: 'seo',
    title: 'SEO Services',
    description: 'Specialized Local & Website SEO strategies to improve search rankings, drive organic traffic, and increase visibility.',
    icon: <Search className="w-8 h-8 text-blue-500" />
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads Lead Generation',
    description: 'Data-driven Facebook and Instagram ad campaigns focused on high-quality lead generation and conversion optimization.',
    icon: <Target className="w-8 h-8 text-indigo-500" />
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    description: 'Strategic PPC management using Google Search, Display, and Video ads to capture intent-based traffic.',
    icon: <Globe className="w-8 h-8 text-cyan-500" />
  },
  {
    id: 'web-dev',
    title: 'Website Development (WordPress)',
    description: 'Custom, responsive, and SEO-friendly WordPress websites tailored for business growth and seamless user experience.',
    icon: <Code className="w-8 h-8 text-purple-500" />
  },
  {
    id: 'training',
    title: 'Digital Marketing Training & Mentorship',
    description: 'Skill-based, job-focused mentorship for students and professionals looking to build high-impact digital careers.',
    icon: <GraduationCap className="w-8 h-8 text-emerald-500" />
  },
  {
    id: 'ai-marketing',
    title: 'AI-powered Content & Marketing Solutions',
    description: 'Leveraging cutting-edge Generative AI tools to automate content creation and optimize marketing workflows.',
    icon: <Cpu className="w-8 h-8 text-rose-500" />
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'MedhiQ',
    role: 'Digital Marketing Trainer',
    period: '2025 – Present',
    isCurrent: true,
    description: [
      'SEO & Meta Ads Trainer',
      'Successfully trained 400+ students in just 1 year',
      'Delivering practical, industry-focused training modules'
    ]
  },
  {
    company: 'Hardik Hospitality',
    role: 'Freelance SEO & SMM',
    period: '2025 – Present',
    isCurrent: true,
    description: [
      'Leading SEO and Social Media Marketing strategies',
      'Scaling digital presence for hospitality brands',
      'Managing high-budget Meta Ad campaigns'
    ]
  },
  {
    company: 'Asistaa Intellitech',
    role: 'Digital Marketing Executive',
    period: '2025',
    description: [
      'Executed performance marketing campaigns',
      'Optimized agency-wide SEO processes',
      'Collaborated on multi-channel marketing strategies'
    ]
  },
  {
    company: 'Kasper Infotech',
    role: 'SEO Executive',
    period: '2024',
    description: [
      'Managed on-page and off-page SEO optimization',
      'Conducted keyword research and competitor analysis',
      'Improved search rankings for diverse industry clients'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'SEO', level: 100, category: 'Technical' },
  { name: 'Meta Ads', level: 95, category: 'Technical' },
  { name: 'Google Ads', level: 90, category: 'Technical' },
  { name: 'WordPress Development', level: 92, category: 'Technical' },
  { name: 'Content Writing', level: 88, category: 'Technical' },
  { name: 'Social Media Management', level: 94, category: 'Technical' },
  { name: 'Graphics Designing', level: 85, category: 'Technical' },
  { name: 'Generative AI for Marketing', level: 98, category: 'Technical' },
  { name: 'Teaching & Communication', level: 100, category: 'Soft Skills' }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: 'Google Certified Educator', issuer: 'Google', year: '2024' },
  { title: 'Winner – SEMrush Marketing Trivia 2025', issuer: 'SEMrush', year: '2025' },
  { title: 'HubSpot Certified Content Marketer', issuer: 'HubSpot Academy', year: '2024' }
];

export const CONTACT_INFO = {
  phone: '+91 8388936500',
  email: 'rajajha31111@gmail.com',
  location: 'Siliguri, West Bengal',
  whatsapp: 'https://wa.me/918388936500',
  facebook: 'https://www.facebook.com/share/17iHpVyuKx/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/hey_rjha_here?igsh=MXZjc3dhNGxlZ2Q3cw%3D%3D&utm_source=qr',
  linkedin: 'https://www.linkedin.com/in/raja-jha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  // Using the thumbnail API for high-reliability embedding
  profileImage: 'https://drive.google.com/thumbnail?id=1Ah-wPULCJTC2HhetDuc1yT8rVc9JcI5m&sz=w1000'
};
