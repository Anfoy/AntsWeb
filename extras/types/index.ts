import { Icon } from "@tabler/icons-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Class {
  id: string;
  name: string;
  code: string;
  institution: string;
  semester: string;
  description: string;
  topics: string[];
  grade?: string;
  credits: number;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
} 

export type MobileLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export type Feature = {
  icon: Icon;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
}

export type HoverIconType = {
  variant: 'subtle' | 'filled' | 'light' | 'default' | 'filled';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  href: string;
  color: string;
  target: string;
}
