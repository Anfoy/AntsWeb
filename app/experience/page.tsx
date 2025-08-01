'use client';

import { Container, Title, Stack, Group, Badge, Text } from '@mantine/core';
import { ExperienceCard } from './components/ExperienceCard';
import { ClassCard } from './components/ClassCard';
import { experiences } from './data/experiences';
import { classes } from './data/classes';
import { useState } from 'react';
import { PageTransition } from '@/components/PageTransition';

export default function ExperiencePage() {
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredExperiences = selectedType === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === selectedType);

  const experienceTypes = [
    { value: 'all', label: 'All Experience' },
    { value: 'internship', label: 'Internships' },
    { value: 'fulltime', label: 'Full-Time' },
    { value: 'freelance', label: 'Freelance' },
    { value: 'classes', label: 'Classes' }
  ];

  return (
    <PageTransition>
      <Container size="lg" py={80}>
      <Title 
        ta="center"
        mb={20}
        style={(theme) => ({
          fontFamily: theme.other.fonts.slab,
          color: theme.colors.winter[1],
          fontSize: '3rem'
        })}
      >
        My Experience
      </Title>

      <Text 
        ta="center" 
        mb={50}
        size="lg"
        style={(theme) => ({
          color: theme.colors.winter[3],
          maxWidth: 600,
          margin: '0 auto'
        })}
      >
        Where I&apos;ve been and what I&apos;ve learned
      </Text>

      {/* Filter Buttons */}
      <Group justify="center" mb={50}>
        {experienceTypes.map((type) => (
          <Badge
            key={type.value}
            variant={selectedType === type.value ? 'filled' : 'light'}
            size="lg"
            style={(theme) => ({
              cursor: 'pointer',
              backgroundColor: selectedType === type.value 
                ? theme.colors.winter[4] 
                : 'transparent',
              color: selectedType === type.value 
                ? theme.white 
                : theme.colors.winter[3],
              border: `1px solid ${theme.colors.winter[4]}`,
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: theme.colors.winter[4],
                color: theme.white
              }
            })}
            onClick={() => setSelectedType(type.value)}
          >
            {type.label}
          </Badge>
        ))}
      </Group>

      {/* Content based on selected type */}
      {selectedType === 'classes' ? (
        <Stack gap={40}>
          {classes.map((classItem, index) => (
            <ClassCard 
              key={classItem.id} 
              classItem={classItem} 
              index={index}
            />
          ))}
        </Stack>
      ) : (
        <Stack gap={40}>
          {filteredExperiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              index={index}
            />
          ))}
        </Stack>
      )}
      </Container>
    </PageTransition>
  );
} 