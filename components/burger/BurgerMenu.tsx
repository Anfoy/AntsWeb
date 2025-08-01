import { Divider, Stack } from "@mantine/core";
import { MobileLink } from "@/extras/types";
import { BurgerDrawer } from "./BurgerDrawer";
import { NavLink } from "../nav/NavLink";

export function BurgerMenu({ opened, close, mobileLinks }: { 
    opened: boolean; 
    close: () => void; 
    mobileLinks: MobileLink[]; 
  }) {
    return (
      <BurgerDrawer
        close={close}
        opened={opened}
      >
        <Stack gap="lg" p="xl">
          {mobileLinks.map((link, index) => (
            <div key={link.label}>
              <NavLink
                href={link.href}
                label={link.label}
                color="winter.0"
                onClick={close}
                icon={link.icon}
              />
              {index !== mobileLinks.length - 1 && (
                <Divider 
                  my="lg" 
                  opacity={0.2}
                  color="winter.0"
                />
              )}
            </div>
          ))}
        </Stack>
      </BurgerDrawer>
    );
  }
