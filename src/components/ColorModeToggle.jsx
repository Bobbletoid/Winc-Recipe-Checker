import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Group,
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  IconButton
  } from "@chakra-ui/react";
import { useTheme } from "next-themes";

export function ColorModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

 const current = theme ?? resolvedTheme;

  const isActive = (mode) => {
    return current === mode;
  };

  if (!mounted) return null;

  const HamburgerIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <line x1="4" y1="6" x2="20" y2="6"></line>
      <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
  );

  return (
    <>
      <Group 
        attached 
        size="sm" 
        aria-label="Theme toggle" 
        display={{ base: "none", md: "inline-flex" }}
      >
        <Button
          onClick={() => setTheme("system")}
          variant={isActive("system") ? "solid" : "ghost"}
        >
          System
        </Button>
        <Button
          onClick={() => setTheme("light")}
          variant={isActive("light") ? "solid" : "ghost"}
        >
          Light
        </Button>
        <Button
          onClick={() => setTheme("dark")}
          variant={isActive("dark") ? "solid" : "ghost"}
        >
          Dark
        </Button>
      </Group>

      <Box display={{ base: "block", md: "none" }}>
        <MenuRoot>
          <MenuTrigger asChild>
            <IconButton
              aria-label="Toggle theme menu"
              variant="ghost"
              size="sm"
            >
              <HamburgerIcon />
            </IconButton>
          </MenuTrigger>
          <MenuContent>
            <MenuItem 
              value="system"
              onClick={() => setTheme("system")}
              fontWeight={isActive("system") ? "bold" : "normal"}
            >
              System {isActive("system") && "✓"}
            </MenuItem>
            <MenuItem 
              value="light"
              onClick={() => setTheme("light")}
              fontWeight={isActive("light") ? "bold" : "normal"}
            >
              Light {isActive("light") && "✓"}
            </MenuItem>
            <MenuItem 
              value="dark"
              onClick={() => setTheme("dark")}
              fontWeight={isActive("dark") ? "bold" : "normal"}
            >
              Dark {isActive("dark") && "✓"}
            </MenuItem>
          </MenuContent>
        </MenuRoot>
      </Box>
    </>
  );
}
