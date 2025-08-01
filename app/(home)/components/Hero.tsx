'use client';

import { Container, Title, Text, Card, Image, Stack, Flex, Group, useMantineTheme, Divider } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react';
import HoverIcon from '@/components/HoverIcon';

export default function Hero() {

  return (
    <Container size="lg" py={50}>
      <HeroCard>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          gap={40}
        >
          <HeroDescription />
          <HeroImage />
        </Flex>
      </HeroCard>

    </Container>
  );
} 

function HeroCard({children,}: {children: React.ReactNode}){
  const theme = useMantineTheme();
  return (
    <Card
      radius="lg" 
      p="xl"
      bg={theme.other.heroCardBackground}
      shadow="xl"
      style={{
        boxShadow: `
          0 0 20px rgba(255, 255, 255, 0.1),
          0 0 40px rgba(255, 255, 255, 0.05),
          0 0 60px rgba(255, 255, 255, 0.025),
          0 8px 32px rgba(0, 0, 0, 0.3)
        `,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle inner glow overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      
      {/* Content wrapper to ensure it's above the glow overlay */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </Card>
  )
}


function HeroDescription(){
  const theme = useMantineTheme();
  return (
    <Stack gap="md" justify="center" align="center" style={{ flex: 2 }}>
      <Title 
        size="h1"
        ta="center"
        style={(theme) => ({
          fontSize: '3.5rem',
          lineHeight: 1.2,
          fontWeight: 900,
          fontFamily: theme.other.fonts.slab,
          // No background needed when using colored spans
          marginBottom: '0.5rem'
        })}
      >
                  <span style={{ color: theme.colors.winter[2] }}>Hi, I&apos;m </span>
          <span style={{ 
            color: theme.colors.winter[2],
          }}>
            Anthony!
          </span>
      </Title>

      <Text 
        size="xl" 
        c="winter.0"
        maw={600}
        ta="center"
        mt={0}
      >
        A Full Stack Developer and Data Science Student at Purdue University.
      </Text>

      <Text
        mt="xl"
        style={(theme) => ({
          fontFamily: theme.other.fonts.cursive,
          fontSize: '2rem',
          color: theme.colors.winter[3],
          textAlign: 'center',
          fontWeight: 600,
          letterSpacing: '0.5px'
        })}
      >
        Changing the future through code.
      </Text>
    </Stack>
  )
}

function HeroImage(){
  return (
    <Stack align="center" style={{ flex: 1 }}>
      <Image
        src="/anthonypfp.jpg"
        alt="Anthony's profile"
        radius={360}
        w="70%"
        h="70%"
      />
              <Divider 
          w="50%"
          size="sm"
          color="winter.4"
          style={{
            opacity: 0.5
          }}
        />
      <HeroIcons />
    </Stack>
  )
}

function HeroIcons(){

  return (
    <Group gap="xl" mt="md">
      <HoverIcon href="https://github.com/Anfoy" color="black" target="_blank" variant="subtle" size="lg">
        <IconBrandGithub size={28} />
      </HoverIcon>
      <HoverIcon href="https://linkedin.com/in/anthony-dierkes" color="blue" target="_blank" variant="subtle" size="lg">
        <IconBrandLinkedin size={28} />
      </HoverIcon>
      <HoverIcon href="https://instagram.com/anthonydierkes_" color="pink" target="_blank" variant="subtle" size="lg">
        <IconBrandInstagram size={28} />
      </HoverIcon>
      </Group>
  )
}
