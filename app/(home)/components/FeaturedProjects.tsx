'use client';

import { Container, Title, Card, Image, Text, SimpleGrid, Button, Group, Stack, useMantineTheme, Divider } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link';
import { Project } from '../../../extras/types/index';

const projects: Project[] = [
  {
    id: '1',
    title: 'HandAlytics',
    description: 'Analyze and record your poker hands.',
    imageUrl: '/handalytics.png',
    liveUrl: 'https://www.handalytics.com',
    technologies: ['Python', 'AWS Cloud Infrastructure', 'JavaScript', 'React', 'Vite'],
  },
  {
    id: '2',
    title: '3rd Space Social Features',
    description: 'Join the 3rd Space community and connect with others.',
    imageUrl: '/3rdspace.png',
    liveUrl: 'https://3rdspace.social/',
    technologies: ['React', 'Hono', 'PostgreSQL', 'TypeScript', 'TamaGui', 'Neon', 'Tanstack Query', 'SST', 'AWS'],
  }
];

export function FeaturedProjects() {
  return (
    <Container size="lg" py={80}>
      <Group justify="space-between" mb={50}>
        <Title 
          order={2}
          style={(theme) => ({
            fontSize: '2.5rem',
            color: theme.white
          })}
        >
          Most Recent Work
        </Title>
        <ViewProjectsButton text="View All Projects" />
      </Group>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </SimpleGrid>
    </Container>
  );
} 

function ProjectCard({ project }: { project: Project }) {
  const theme = useMantineTheme();
  return (
    <Card 
      shadow="md" 
      radius="md" 
      component={Link}
      href={project.liveUrl || project.githubUrl || ''}
      style={{ 
        cursor: 'pointer',
        background: theme.colors.winter[4], // Matching your hero card background
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Card.Section>
        <Image
          src={project.imageUrl}
          height={120}
          alt={project.title}
        />
      </Card.Section>

      <Stack p="md" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text fw={500} size="30px" c="winter.0" style={{
          fontFamily: theme.other.fonts.slab,
        }}>
          {project.title}
        </Text>
        <Divider 
          w="100%"
          size="sm"
          color="winter.2"
          style={{
            opacity: 0.5
          }}
        />

        <Text c="winter.7" size="md" ta="center" style={{
          fontFamily: theme.other.fonts.sans,
        }}>
          {project.description}
        </Text>
        <Text c="winter.0" size="sm" ta="center" style={{
          fontFamily: theme.other.fonts.sans,
        }}>
          {project.technologies.join(', ')}
        </Text>
      </Stack>
    </Card>
  )
}

function ViewProjectsButton({text}: {text: string}){
  return (
    <Button 
      component={Link} 
      href="/projects"
      variant="light"
      color="winter.2"
      rightSection={<IconExternalLink size={16} />}
    >
      {text}
    </Button>
  )
}