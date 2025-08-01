'use client';

import { Text } from '@mantine/core';
import Link from 'next/link';

type LogoProps = {
  color: string;
}

export function Logo({ color }: LogoProps) {
  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <Text
        size="xl"
        fw={700}
        c={color}
      >
        Anthony&apos;s Website
      </Text>
    </Link>
  );
} 