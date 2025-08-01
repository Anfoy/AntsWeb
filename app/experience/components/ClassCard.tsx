'use client';

import { Card, Text, Badge, Group, Stack, Title, Collapse, ActionIcon } from '@mantine/core';
import { IconChevronDown, IconChevronUp, IconBook} from '@tabler/icons-react';
import { useState } from 'react';
import { useHover } from '@mantine/hooks';
import { Class } from '@/extras/types';

interface ClassCardProps {
  classItem: Class;
  index: number;
}

export function ClassCard({ classItem, index }: ClassCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { hovered, ref } = useHover();

  return (
    <Card
      ref={ref}
      shadow="lg"
      padding="xl"
      radius="lg"
      style={(theme) => ({
        backgroundColor: 'rgba(26, 27, 30, 0.8)',
        border: `2px solid ${theme.colors.blue[6]}20`,
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-8px)' : 'none',
        boxShadow: hovered 
          ? `0 12px 30px ${theme.colors.blue[6]}30` 
          : '0 4px 20px rgba(0, 0, 0, 0.1)'
      })}
    >
      <Group justify="space-between" align="flex-start" mb="md">
        <Group gap="md">
          <div
            style={{
              backgroundColor: '#3b82f6',
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
            <IconBook size={28} />
          </div>
          
          <InititalCard classItem={classItem} index={index} />
        </Group>

        <ActionIcon
          variant="subtle"
          size="lg"
          onClick={() => setExpanded(!expanded)}
          style={{ color: '#3b82f6' }}
        >
          {expanded ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
        </ActionIcon>
      </Group>

      {/* Description */}
      <Text 
        size="sm" 
        style={(theme) => ({
          color: theme.colors.winter[3],
          lineHeight: 1.6,
          marginBottom: '1rem'
        })}
      >
        {classItem.description}
      </Text>

      {/* Topics */}
      <Group gap="xs" mb="md">
        {classItem.topics.slice(0, 4).map((topic: string) => (
          <Badge 
            key={topic} 
            variant="light" 
            size="sm"
            style={{ 
              backgroundColor: '#3b82f620',
              color: '#3b82f6',
              border: `1px solid #3b82f640`
            }}
          >
            {topic}
          </Badge>
        ))}
        {classItem.topics.length > 4 && (
          <Badge 
            variant="subtle" 
            color="blue"
            size="sm"
          >
            +{classItem.topics.length - 4} more
          </Badge>
        )}
      </Group>

      {/* Expandable Content */}
      <Collapse in={expanded}>
        <Stack gap="lg" pt="md" style={{ borderTop: '#3b82f620 1px solid' }}>
          
          {/* All Topics */}
          <div>
            <Text 
              size="sm" 
              fw={600} 
              mb="sm"
              style={{ color: '#3b82f6' }}
            >
              Course Topics
            </Text>
            <Group gap="xs" wrap="wrap">
              {classItem.topics.map((topic: string) => (
                <Badge 
                  key={topic} 
                  variant="outline" 
                  size="sm"
                  style={{ 
                    borderColor: '#3b82f6',
                    color: '#3b82f6'
                  }}
                >
                  {topic}
                </Badge>
              ))}
            </Group>
          </div>

          {/* Course Details */}
          <div>
            <Text 
              size="sm" 
              fw={600} 
              mb="sm"
              style={{ color: '#3b82f6' }}
            >
              Course Details
            </Text>
            <Group gap="md">
              <div>
                <Text size="xs" c="winter.4" mb={4}>Institution</Text>
                <Text size="sm" c="winter.2">{classItem.institution}</Text>
              </div>
              <div>
                <Text size="xs" c="winter.4" mb={4}>Semester</Text>
                <Text size="sm" c="winter.2">{classItem.semester}</Text>
              </div>
              <div>
                <Text size="xs" c="winter.4" mb={4}>Credits</Text>
                <Text size="sm" c="winter.2">{classItem.credits}</Text>
              </div>
              {classItem.grade && (
                <div>
                  <Text size="xs" c="winter.4" mb={4}>Grade</Text>
                  <Text size="sm" c="winter.2">{classItem.grade}</Text>
                </div>
              )}
            </Group>
          </div>
        </Stack>
      </Collapse>
    </Card>
  );
} 

function InititalCard({classItem}: ClassCardProps){
  return (
    <Stack gap={4}>
    <Title 
      order={3} 
      style={(theme) => ({
        fontFamily: theme.other.fonts.slab,
        color: theme.colors.winter[0],
        fontSize: '1.5rem'
      })}
    >
      {classItem.name}
    </Title>
    <Group gap="md" align="center">
      <Text 
        size="lg" 
        style={{ color: '#3b82f6', fontWeight: 600 }}
      >
        {classItem.code}
      </Text>
      <Text size="sm" c="winter.3">
        {classItem.institution}
      </Text>
    </Group>
    <Group gap="md" align="center">
      <Text size="sm" c="winter.3">
        {classItem.semester}
      </Text>
      {classItem.grade && (
        <Badge 
          variant="filled" 
          color="green"
          size="sm"
        >
          Grade: {classItem.grade}
        </Badge>
      )}
      <Badge 
        variant="light" 
        color="blue"
        size="sm"
      >
        {classItem.credits} Credits
      </Badge>
    </Group>
  </Stack>
  )
}