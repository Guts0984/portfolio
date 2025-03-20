"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component only renders after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents rendering before theme is loaded

  return (
    <Button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      size="sm"
      variant="ghost"
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="size-8 text-orange-300" />
      ) : (
        <MoonIcon className="size-8 text-sky-950" />
      )}

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
