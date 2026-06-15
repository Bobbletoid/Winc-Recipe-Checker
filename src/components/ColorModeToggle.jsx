import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useTheme } from "next-themes";

export function ColorModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This code runs once, right after the component is shown in the browser
    setMounted(true); // Set the mounted useState value
  }, []);

  // Pick theme if available, otherwise use resolvedTheme
  const current = theme ?? resolvedTheme;

  // Helper function, returns true if the button's mode matches current theme
  const isActive = (mode) => {
    return current === mode;
  };

  // If the component is not yet mounted in the browser, don't show anything (return nothing instead of UI).
  if (!mounted) return null;

  return (
    <ButtonGroup isAttached size="sm" aria-label="Theme toggle">
      <Button
        onClick={() => setTheme("system")}
        color={isActive("system") ? undefined : "white"}
        variant={isActive("system") ? "solid" : "ghost"}
        _hover={
          isActive("system")
            ? undefined
            : {
                _light: { color: "black" }, // in light mode
                _dark: { color: "white" }, // in dark mode
              }
        }
      >
        System
      </Button>
      <Button
        onClick={() => setTheme("light")}
        color={isActive("light") ? undefined : "white"}
        variant={
          isActive("light")
            ? "solid" // if the light theme is active
            : "ghost" // otherwise
        }
        _hover={
          isActive("light")
            ? undefined
            : {
                _light: { color: "black" }, // in light mode
                _dark: { color: "white" }, // in dark mode
              }
        }
      >
        Light
      </Button>
      <Button
        onClick={() => setTheme("dark")}
        color={isActive("dark") ? undefined : "white"}
        variant={
          isActive("dark")
            ? "solid" // if the dark theme is active
            : "ghost" // otherwise
        }
        _hover={
          isActive("dark")
            ? undefined
            : {
                _light: { color: "black" }, // in light mode
                _dark: { color: "white" }, // in dark mode
              }
        }
      >
        Dark
      </Button>
    </ButtonGroup>
  );
}
