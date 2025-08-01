'use client';

import { Container, Title, Text } from '@mantine/core';
import { PageTransition } from '@/components/PageTransition';
import { SocialLinksCard } from './components/SocialLinksCard';
import { ContactInfoCard } from './components/ContactInfoCard';

export default function ContactPage() {

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
          Get in Touch
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
          Ready to collaborate, design, produce, and innovate.
        </Text>

        <ContactInfoCard />
       <SocialLinksCard />
      </Container>
    </PageTransition>
  );
} 