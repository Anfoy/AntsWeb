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
    duration: 'June 2025 - October 2025',
    description: [
      'Building social features and infrastructure for the 3rd Space platform',
      'Collaborating with other developers to build the platform',
      'Implementing responsive design and ensuring optimal user experience'
    ],
    technologies: ['React/React Native', 'TypeScript', 'Bun', 'Hono', 'SST', 'Drizzle', 'Neon', 'AWS'],
    icon: IconRocket,
    accentColor: '#6366f1', // Indigo
    achievements: [
      ' Deployed a full-stack Expo React Native app to AWS using SST infrastructure-as-code, integrating backend'
  + ' services (Hono API, Drizzle ORM) into serverless cloud infrastructure.',
      'Built a custom in-app chat using Stream Chat, supporting 100+ real-time concurrent connections to'
+ ' improve event coordination and reduce organizer overhead, after evaluating multiple third-party providers'
 + ' for scalability and fit.'
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
      'Engineered a robust Python–Java pipeline to ingest, normalize, and clean 6.5 million+ rows of NBA play-by-'
 + ' play data, enabling high-speed, large-scale analysis and accelerating downstream statistical modeling'
+ ' efforts.',
      'Developed a Java-based application for detailed statistical breakdowns and player-level insights,'
+ ' streamlining analytics workflows, and empowering deeper performance evaluations.',
    ],
    skills: [ 'Data Analysis', 'Apis', 'Data Pipeline'],
    type: 'internship'
  }
]; 
