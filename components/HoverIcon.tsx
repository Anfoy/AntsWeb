import { ActionIcon } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { HoverIconType } from "@/extras/types";

export default function HoverIcon({ href, color, target, variant, size, children }: HoverIconType & { children: React.ReactNode }) {
  const { hovered, ref } = useHover();
  return (
    <ActionIcon
      ref={ref}
      variant={variant}
      size={size}
      color={color}
      component="a"
      href={href}
      target={target}
      style={{
        transform: hovered ? 'translateY(-5px)' : 'none',
        transition: 'transform 0.2s ease',
      }}
    >
      {children}
    </ActionIcon>
  )
}