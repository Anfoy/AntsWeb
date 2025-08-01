import { Drawer } from "@mantine/core";
import { Logo } from "../Logo";
import { IconX } from "@tabler/icons-react";

export function BurgerDrawer({opened, close, children}: {opened: boolean, close: () => void, children: React.ReactNode}) {
    return (
      <Drawer
      opened={opened}
      onClose={close}
      size="xs"
      padding="xl"
      hiddenFrom="md"
      title={
        <div 
          onClick={close}
          style={{ 
            cursor: 'pointer',
            transition: 'opacity 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          <Logo color="winter.0" />
        </div>
      }
      closeButtonProps={{
        icon: <IconX size={24} stroke={1.5} color="#F8F9FA" />,
      }}
      styles={drawerStyles}
      >
        {children}
      </Drawer>
    );
  }

  const drawerStyles = {
    content: {
      background: 'linear-gradient(170deg, #1B4A78 0%,rgb(70, 125, 201) 100%)',
    },
    header: {
      background: 'linear-gradient(170deg,rgb(74, 157, 240) 0%,rgb(60, 131, 202) 100%)',
      padding: 'var(--mantine-spacing-xl)'
    }
  }