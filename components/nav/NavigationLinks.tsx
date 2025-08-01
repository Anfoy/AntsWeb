'use client';

import { Group } from '@mantine/core';
import { IconCode, IconBriefcase, IconMail } from '@tabler/icons-react';
import { NavLink } from './NavLink';

export function NavigationLinks() {
  return (
    <Group gap={40} visibleFrom="md">
      <NavLink 
        href="/projects" 
        label="Projects"
        icon={<IconCode size={18} />}
        color="winter.5"
        glowColor="other.linkGlow"
      />
      <NavLink 
        href="/experience" 
        label="Experience"
        icon={<IconBriefcase size={18} />}
        color="winter.5"
        glowColor="other.linkGlow"
      />
      <NavLink 
        href="/contact" 
        label="Contact"
        icon={<IconMail size={18} />}
        color="winter.5"
        glowColor="other.linkGlow"
      />
    </Group>
  );
} 