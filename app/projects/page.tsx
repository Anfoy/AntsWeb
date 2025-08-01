'use client';

import { Container, Title, Group, Text, Badge, Stack, Card, Image, Button } from '@mantine/core';
import { ProjectCard } from './components/ProjectCard';
import { projects } from './data/projects';
import { PageTransition } from '@/components/PageTransition';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { Project } from '@/extras/types';

export default function Projects() {
  // Categorize projects by type for better organization
  const featuredProjects = projects.slice(0, 3); // First 3 projects as featured
  const regularProjects = projects.slice(3);

  return (
    <PageTransition>
      <Container size="xl" py={80}>
        <Title 
          ta="center" 
          mb={20}
          style={(theme) => ({
            fontFamily: theme.other.fonts.slab,
            color: theme.colors.winter[1],
            fontSize: '3rem'
          })}
        >
          My Projects
        </Title>
        
        <Text 
          ta="center" 
          mb={60}
          size="lg"
          style={(theme) => ({
            color: theme.colors.winter[3],
            maxWidth: '600px',
            margin: '0 auto'
          })}
        >
          A collection of my work across different technologies and domains
        </Text>

        {/* Featured Projects Section */}
        <Title 
          order={2} 
          mb={40}
          style={(theme) => ({
            fontFamily: theme.other.fonts.slab,
            color: theme.colors.winter[2],
            fontSize: '2rem'
          })}
        >
          Featured Projects
        </Title>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          marginBottom: '80px'
        }}>
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* All Projects Section */}
        <Title 
          order={2} 
          mb={40}
          style={(theme) => ({
            fontFamily: theme.other.fonts.slab,
            color: theme.colors.winter[2],
            fontSize: '2rem'
          })}
        >
          All Projects
        </Title>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '25px'
        }}>
          {regularProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </PageTransition>
  );
}

// Featured project card with larger, more prominent design
function FeaturedProjectCard({ project }: { project: Project }) {
  const { title, description, imageUrl, technologies, githubUrl, liveUrl } = project;
  const linkType = liveUrl ? 'Live Demo' : 'View on GitHub';

  return (
    <Card 
      shadow="xl"
      padding={0}
      radius="lg"
      style={(theme) => ({
        backgroundColor: 'rgba(26, 27, 30, 0.8)',
        border: `2px solid ${theme.colors.winter[8]}`,
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '500px',
        display: 'flex',
        flexDirection: 'column'
      })}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 255, 255, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <Card.Section>
        <Image
          src={imageUrl}
          height={250}
          alt={title}
          style={{
            width: '100%',
            objectFit: 'cover'
          }}
        />
        <div style={{
          position: 'absolute',
          top: 16,
          right: 16,
          background: 'rgba(0, 0, 0, 0.8)',
          padding: '8px 16px',
          borderRadius: '8px',
          fontSize: '0.875rem',
          color: '#fff',
          fontWeight: 500
        }}>
          {linkType}
        </div>
      </Card.Section>

      <Stack p="xl" gap="md" style={{ flex: 1 }}>
        <Title 
          order={2} 
          style={(theme) => ({
            fontFamily: theme.other.fonts.slab,
            color: theme.colors.winter[0],
            fontSize: '1.75rem',
            letterSpacing: '0.5px'
          })}
        >
          {title}
        </Title>

        <Text 
          size="md" 
          style={(theme) => ({
            color: theme.colors.winter[3],
            lineHeight: 1.7,
            flex: 1
          })}
        >
          {description}
        </Text>

        <Group gap="xs" mt="auto">
          {technologies.slice(0, 4).map((tech: string) => (
            <Badge 
              key={tech} 
              variant="filled" 
              color="winter.6"
              size="md"
              style={(theme) => ({
                fontFamily: theme.other.fonts.sans,
                textTransform: 'none',
                letterSpacing: '0.3px'
              })}
            >
              {tech}
            </Badge>
          ))}
          {technologies.length > 4 && (
            <Badge 
              variant="light" 
              color="winter.4"
              size="md"
            >
              +{technologies.length - 4} more
            </Badge>
          )}
        </Group>

        <Group gap="sm" mt="md">
          {githubUrl && (
            <Button
              component="a"
              href={githubUrl}
              target="_blank"
              variant="light"
              color="winter.4"
              leftSection={<IconBrandGithub size={16} />}
              size="sm"
            >
              GitHub
            </Button>
          )}
          {liveUrl && (
            <Button
              component="a"
              href={liveUrl}
              target="_blank"
              variant="filled"
              color="winter.6"
              leftSection={<IconExternalLink size={16} />}
              size="sm"
            >
              Live Demo
            </Button>
          )}
        </Group>
      </Stack>
    </Card>
  );
}