import '@mantine/core/styles.css';
import { ColorSchemeScript } from '@mantine/core';
import { AppShell, AppShellMain } from '@mantine/core';
import { Header } from '@/components';
import { HEADER_HEIGHT } from '@/extras/constants/layout';
import { MantineClientProvider } from './mantine-provider';
import { inter, dancingScript, robotoSlab, poppins } from './fonts';

export const metadata = {
  title: "Anthony's Portfolio",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${dancingScript.variable} ${robotoSlab.variable} ${poppins.variable}`}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineClientProvider>
          <AppShell
            header={{ height: HEADER_HEIGHT }}
            styles={{
              main: {
                paddingTop: HEADER_HEIGHT,
              }
            }}
          >
            <Header />
            <AppShellMain>
              {children}
            </AppShellMain>
          </AppShell>
        </MantineClientProvider>
      </body>
    </html>
  );
}
