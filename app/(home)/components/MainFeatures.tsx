'use client';

import { Container, Title, Text, Card, Group, rem, SimpleGrid } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { IconBrandReact, IconDatabase, IconCloud, IconBrain } from '@tabler/icons-react';
import { Feature } from '../../../extras/types/index';

const features: Feature[] = [
  {
    icon: IconBrandReact,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with React/React Native, TamaGui, Mantine, Tanstack Query, and Expo',
    gradient: 'linear-gradient(45deg, #61DAFB20, #61DAFB40)',
    iconColor: '#61DAFB'
  },
  {
    icon: IconDatabase,
    title: 'Backend Development',
    description: 'Designing robust server-side applications and RESTful APIs with Hono, Neon, MySQL, and Drizzle ORM',
    gradient: 'linear-gradient(45deg, #83CD2920, #83CD2940)',
    iconColor: '#83CD29'
  },
  {
    icon: IconCloud,
    title: 'Cloud Solutions',
    description: 'Deploying and managing applications using AWS and SST',
    gradient: 'linear-gradient(45deg, #FF990020, #FF990040)',
    iconColor: '#FF9900'
  },
  {
    icon: IconBrain,
    title: 'Data Science',
    description: 'Analyzing data and building machine learning models using Python, R, and SQL',
    gradient: 'linear-gradient(45deg, #FF634720, #FF634740)',
    iconColor: '#FF6347'
  }
];

export function MainFeatures() {
  return (
    <Container size="lg" py={50}>
      <Title 
        order={2} 
        ta="center" 
        mb={100}
        style={(theme) => ({
          fontSize: '5rem',
          color: theme.white,
          fontFamily: theme.other.fonts.slab,
        })}
      >
        Overview
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </SimpleGrid>
    </Container>
  );
} 

function FeatureCard({ feature }: { feature: Feature }) {
  const { hovered, ref } = useHover();

  return (
    <Card
      ref={ref}
      padding="xl"
      radius="md"
      shadow="xl"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: feature.gradient,
        transform: hovered ? 'translateY(-10px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Glossy overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(
            105deg,
            transparent 0%,
            transparent 25%,
            ${hovered ? 'rgba(255, 255, 255, 0.15)' : 'transparent'} 45%,
            ${hovered ? 'rgba(255, 255, 255, 0.2)' : 'transparent'} 50%,
            ${hovered ? 'rgba(255, 255, 255, 0.15)' : 'transparent'} 55%,
            transparent 75%,
            transparent 100%
          )`,
          transform: hovered ? 'translateX(100%)' : 'translateX(-100%)',
          transition: 'transform 0.8s ease',
          pointerEvents: 'none',
        }}
      />

        <GlossyOverlay hovered={hovered} feature={feature} />
    </Card>
  );
}




function GlossyOverlay({ hovered, feature }: { hovered: boolean, feature: Feature }) {
return (
  <>
  <div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(
      105deg,
      transparent 0%,
      transparent 25%,
      ${hovered ? 'rgba(255, 255, 255, 0.15)' : 'transparent'} 45%,
      ${hovered ? 'rgba(255, 255, 255, 0.2)' : 'transparent'} 50%,
      ${hovered ? 'rgba(255, 255, 255, 0.15)' : 'transparent'} 55%,
      transparent 75%,
      transparent 100%
    )`,
    transform: hovered ? 'translateX(100%)' : 'translateX(-100%)',
    transition: 'transform 0.8s ease',
    pointerEvents: 'none',
  }}
/>

<Group align="flex-start" gap="md">
  <div style={{ 
    padding: rem(4),
    background: 'transparent',
    position: 'relative', // Ensure icon stays above overlay
  }}>
    <feature.icon 
      size={80} 
      color={feature.iconColor}
      style={{ 
        filter: `drop-shadow(0 0 4px ${feature.iconColor}40)`,
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease',
      }}
    />
  </div>
  <div style={{ flex: 1, position: 'relative' }}> {/* Ensure text stays above overlay */}
    <Text size="lg" fw={700} mb="xs" style={{ color: feature.iconColor }}>
      {feature.title}
    </Text>
    <Text size="lg" c="winter.0">
      {feature.description}
    </Text>
  </div>
</Group>
</>
)
}