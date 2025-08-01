'use client';

import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: 'var(--font-inter), sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    fontFamily: 'var(--font-inter), sans-serif',
  },
  colors: {
    winter: [
      '#EAF2F7',  // [0] Lightest - Snow white, good for hover states
      '#D5E5F0',  // [1] Very light ice blue, subtle backgrounds
      '#A8C6DF',  // [2] Light ice blue, used in Logo and accents
      '#7BA7CE',  // [3] Ice blue, secondary text
      '#4D7DA6',  // [4] Medium winter blue, primary interactive elements
      '#2E5C8A',  // [5] Deep winter blue, hover states for buttons
      '#1B4A78',  // [6] Darker blue, active states
      '#0D3666',  // [7] Very dark blue, backgrounds
      '#042554',  // [8] Almost navy, dark mode backgrounds
      '#021942',  // [9] Darkest - Night sky, dark mode elements
    ],
  },
  black: '#1A1B1E',
  white: '#F8F9FA',
  defaultRadius: 'md',
  other: {
    // Custom colors and effects
    fonts: {
      cursive: 'var(--font-dancing-script), cursive',
      slab: 'var(--font-roboto-slab), serif',
      sans: 'var(--font-poppins), sans-serif',
    },
    linkGlow: 'rgba(46, 92, 138, 0.5)',
    headerBackground: 'linear-gradient(170deg, #A8C6DF 0%, #7BA7CE 100%)',
    heroCardBackground: 'rgba(65, 72, 90, 0.65)',
  },
  components: {
    AppShell: {
      styles: {
        main: {
          background: 'linear-gradient(170deg, #1a2332 0%, #2c3e50 100%)',
          minHeight: '100vh'
        }
      },
      defaultProps: {
        padding: 0
      }
    }
  }
});

export function MantineClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider 
      theme={theme}
      defaultColorScheme="dark"
    >
      {children}
    </MantineProvider>
  );
} 