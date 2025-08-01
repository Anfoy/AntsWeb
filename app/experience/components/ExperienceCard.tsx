'use client';

import { Card, Text, Badge, Group, Stack, Title, Collapse, ActionIcon, List, ThemeIcon } from '@mantine/core';
import { IconChevronDown, IconChevronUp, IconCheck, Icon } from '@tabler/icons-react';
import { useState } from 'react';
import { useHover } from '@mantine/hooks';

interface ExperienceCardProps {
  experience: {
    id: string;
    company: string;
    position: string;
    duration: string;
    description: string[];
    technologies: string[];
    icon: Icon;
    accentColor: string;
    achievements: string[];
    skills: string[];
    type: 'internship' | 'fulltime' | 'freelance';
  };
  index: number;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { hovered, ref } = useHover();
  const IconComponent = experience.icon;

  return (
    <Card
      ref={ref}
      shadow="lg"
      padding="xl"
      radius="lg"
      style={() => ({
        backgroundColor: 'rgba(26, 27, 30, 0.8)',
        border: `2px solid ${experience.accentColor}20`,
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-8px)' : 'none',
        boxShadow: hovered 
          ? `0 12px 30px ${experience.accentColor}30` 
          : '0 4px 20px rgba(0, 0, 0, 0.1)'
      })}
    >
      <Group justify="space-between" align="flex-start" mb="md">
        <Group gap="md">
          <div
            style={{
              backgroundColor: experience.accentColor,
              borderRadius: '50%',
              width: 60,
              height: 60,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '24px'
            }}
          >
            <IconComponent size={28} />
          </div>
          
          <Stack gap={4}>
            <Title 
              order={3} 
              style={(theme) => ({
                fontFamily: theme.other.fonts.slab,
                color: theme.colors.winter[0],
                fontSize: '1.5rem'
              })}
            >
              {experience.position}
            </Title>
            <Text 
              size="lg" 
              style={{ color: experience.accentColor, fontWeight: 600 }}
            >
              {experience.company}
            </Text>
            <Text size="sm" c="winter.3">
              {experience.duration}
            </Text>
          </Stack>
        </Group>

        <ActionIcon
          variant="subtle"
          size="lg"
          onClick={() => setExpanded(!expanded)}
          style={{ color: experience.accentColor }}
        >
          {expanded ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
        </ActionIcon>
      </Group>

      {/* Technologies */}
      <Group gap="xs" mb="md">
        {experience.technologies.map((tech: string) => (
          <Badge 
            key={tech} 
            variant="light" 
            size="sm"
            style={{ 
              backgroundColor: `${experience.accentColor}20`,
              color: experience.accentColor,
              border: `1px solid ${experience.accentColor}40`
            }}
          >
            {tech}
          </Badge>
        ))}
      </Group>

      {/* Description */}
      <Stack gap="sm" mb="md">
        {experience.description.map((desc: string, idx: number) => (
          <Text 
            key={idx} 
            size="sm" 
            style={(theme) => ({
              color: theme.colors.winter[3],
              lineHeight: 1.6
            })}
          >
            • {desc}
          </Text>
        ))}
      </Stack>

      {/* Expandable Content */}
      <Collapse in={expanded}>
        <Stack gap="lg" pt="md" style={{ borderTop: `1px solid ${experience.accentColor}20` }}>
          
          {/* Achievements */}
          <div>
            <Text 
              size="sm" 
              fw={600} 
              mb="sm"
              style={{ color: experience.accentColor }}
            >
              Key Achievements
            </Text>
            <List
              spacing="xs"
              icon={
                <ThemeIcon size="sm" style={{ backgroundColor: experience.accentColor }}>
                  <IconCheck size={12} />
                </ThemeIcon>
              }
            >
              {experience.achievements.map((achievement: string, idx: number) => (
                <List.Item key={idx}>
                  <Text size="sm" c="winter.3">
                    {achievement}
                  </Text>
                </List.Item>
              ))}
            </List>
          </div>

          {/* Skills */}
          <div>
            <Text 
              size="sm" 
              fw={600} 
              mb="sm"
              style={{ color: experience.accentColor }}
            >
              Skills Developed
            </Text>
            <Group gap="xs">
              {experience.skills.map((skill: string) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  size="sm"
                  style={{ 
                    borderColor: experience.accentColor,
                    color: experience.accentColor
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </Group>
          </div>
        </Stack>
      </Collapse>
    </Card>
  );
} 