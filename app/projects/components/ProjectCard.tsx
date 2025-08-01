'use client';

import { Card, Image, Text, Badge, Group, Stack, Title, Button } from '@mantine/core';
import { Project } from '@/extras/types';
import { useHover } from '@mantine/hooks';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, imageUrl, technologies, githubUrl, liveUrl } = project;
  const { hovered, ref } = useHover();

  return (
    <Card 
      ref={ref}
      shadow="lg"
      padding={0}
      radius="md"
      style={(theme) => ({
        backgroundColor: 'rgba(26, 27, 30, 0.6)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: `1px solid ${theme.colors.winter[8]}`,
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-8px) scale(1.02)' : 'none',
        boxShadow: hovered ? `0 15px 35px ${theme.colors.winter[9]}40` : 'none',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '400px'
      })}
    >
      <Card.Section>
        <Image
          src={imageUrl}
          height={180}
          alt={title}
          style={{
            width: '100%',
            objectFit: 'cover',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'transform 0.3s ease',
            transform: hovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      </Card.Section>
      <ProjectCardDetails 
        title={title} 
        description={description} 
        technologies={technologies}
        githubUrl={githubUrl}
        liveUrl={liveUrl}
        hovered={hovered}
      />
    </Card>
  );
}

function ProjectCardDetails({
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl, 
  hovered
}: {
  title: string, 
  description: string, 
  technologies: string[], 
  githubUrl?: string,
  liveUrl?: string,
  hovered: boolean
}) {
  return (
    <Stack p="xl" gap="md" style={{ flex: 1 }}>
      <Title 
        order={3} 
        style={(theme) => ({
          fontFamily: theme.other.fonts.slab,
          color: theme.colors.winter[0],
          fontSize: '1.4rem',
          letterSpacing: '0.5px',
          transition: 'color 0.3s ease'
        })}
      >
        {title}
      </Title>

      <Text 
        size="sm" 
        style={(theme) => ({
          color: theme.colors.winter[3],
          lineHeight: 1.6,
          flex: 1
        })}
      >
        {description}
      </Text>

      <Group gap="xs" mt="auto">
        {technologies.slice(0, 3).map((tech) => (
          <Badge 
            key={tech} 
            variant="light" 
            color="winter.4"
            size="sm"
            style={(theme) => ({
              fontFamily: theme.other.fonts.sans,
              textTransform: 'none',
              letterSpacing: '0.3px'
            })}
          >
            {tech}
          </Badge>
        ))}
        {technologies.length > 3 && (
          <Badge 
            variant="subtle" 
            color="winter.4"
            size="sm"
          >
            +{technologies.length - 3}
          </Badge>
        )}
      </Group>

      {/* Action buttons that appear on hover */}
      <Group gap="sm" mt="md" style={{
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.3s ease'
      }}>
        {githubUrl && (
          <Button
            component="a"
            href={githubUrl}
            target="_blank"
            variant="light"
            color="winter.4"
            leftSection={<IconBrandGithub size={14} />}
            size="xs"
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
            leftSection={<IconExternalLink size={14} />}
            size="xs"
          >
            Live Demo
          </Button>
        )}
      </Group>
    </Stack>
  )
};
