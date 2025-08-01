'use client';

import { AppShell, Burger, Group, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconCode, IconBriefcase, IconMail} from '@tabler/icons-react';
import { NavigationLinks } from './nav';
import { BurgerMenu } from './burger';
import { Logo } from './Logo';
import { MobileLink } from '@/extras/types';
import { HEADER_HEIGHT } from '@/extras/constants/layout';

const mobileLinks: MobileLink[] = [
    { href: '/projects', label: 'Projects', icon: <IconCode size={24} /> },
    { href: '/experience', label: 'Experience', icon: <IconBriefcase size={24} /> },
    { href: '/contact', label: 'Contact', icon: <IconMail size={24} /> },
  ];


export function Header() {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <>
      <AppShell.Header>
        <HeaderGroup>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="md"
            size="sm"
            color="winter.5"
          />
          <Logo color="winter.5" />
          <NavigationLinks />
        </HeaderGroup>
      </AppShell.Header>
      <BurgerMenu opened={opened} close={close} mobileLinks={mobileLinks} />
    </>
  );
} 

function HeaderGroup({children}: {children: React.ReactNode}) {
    const theme = useMantineTheme();
    return (
        <Group justify="space-between" align="center" h={HEADER_HEIGHT} px="md" style={{
            background: theme.other.headerBackground,
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
            {children}
        </Group>
    );
}

