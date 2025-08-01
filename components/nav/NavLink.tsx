'use client';

import { Box, Text, useMantineTheme } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
  color?: string;
  glowColor?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ 
  href, 
  label, 
  color = 'winter.4',
  glowColor = 'rgba(168, 198, 223, 0.5)',
  icon,
  onClick
}: NavLinkProps) {
  const { hovered, ref } = useHover();
  const theme = useMantineTheme();
  
  // Get the glow color from theme.other or use fallback
  const actualGlowColor = glowColor === 'other.linkGlow' 
    ? theme.other.linkGlow 
    : glowColor;
  
  return (
    <Link 
      href={href} 
      style={{ textDecoration: 'none' }}
      onClick={onClick}
    >
      <Box
        style={{
          position: 'relative',
          padding: '8px 12px',
          borderRadius: '4px',
          transition: 'all 0.2s ease',
          background: 'transparent',
        }}
      >
        <Text
          ref={ref}
          c={color}
          fw={500}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease',
            textShadow: hovered ? `0 0 8px ${actualGlowColor}` : 'none',
          }}
        >
          {icon}
          {label}
        </Text>
      </Box>
    </Link>
  );
} 