import { Experience } from '@/extras/types';
import { Icon, IconBrain, IconRocket } from '@tabler/icons-react';

export const experiences: (Experience & { 
  icon: Icon ;
  accentColor: string;
  achievements: string[];
  skills: string[];
  type: 'internship' | 'fulltime' | 'freelance' ;
})[] = [
  {
    id: '3rdspace',
    company: '3rd Space Social',
    position: 'Software Engineer Intern',
    duration: 'June 2025 - Present',
    description: [
      'Building social features and infrastructure for the 3rd Space platform',
      'Collaborating with other developers to build the platform',
      'Implementing responsive design and ensuring optimal user experience'
    ],
    technologies: ['React/React Native', 'TypeScript', 'Bun', 'Hono', 'SST', 'Drizzle', 'Neon', 'AWS'],
    icon: IconRocket,
    accentColor: '#6366f1', // Indigo
    achievements: [
      ' Built the full-stack friends system using the SST framework, Hono, PostgreSQL, React, and Typescript, supporting 1000+ users',
      'Developed and deployed a scalable chat application leveraging Stream Chat, handling thousands of concurrent connections and monthly users'
    ],
    skills: ['Frontend Development', 'Backend Integration', 'API Design', 'Serverless Deployment'],
    type: 'internship'
  },
  {
    id: 'graylyn',
    company: 'Graylyn Consulting LLC',
    position: 'Software Engineer Intern',
    duration: 'June 2024 - October 2024',
    description: [
      'Developed statistical programs to analyze NBA play-by-play data',
      'Developed intuitive customer interface to alter/filter analysis',
    ],
    technologies: ['Python', 'Java', 'NumPy', 'Pandas'],
    icon: IconBrain,
    accentColor: '#10b981', // Emerald
    achievements: [
      'Developed a data collection and analysis pipeline for NBA play-by-play statistics using Python.',
      'Created a Java application to normalize and clean NBA play-by-play datasets totaling 6.5+ million rows for further analysis',
      'Developed an application for structured statistical breakdowns and player analysis using Java.'
    ],
    skills: [ 'Data Analysis', 'Apis', 'Data Pipeline'],
    type: 'internship'
  }
]; 