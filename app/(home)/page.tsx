'use client';

import Hero from './components/Hero';
import { MainFeatures } from './components/MainFeatures';
import { FeaturedProjects } from './components/FeaturedProjects';
import { PageTransition } from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <MainFeatures />
      <FeaturedProjects />
    </PageTransition>
  );
}
