"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";

export default function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <Tooltip>
      <TooltipTrigger>
        <Button size="icon-sm" variant="ghost" onClick={toggleTheme}>
          {resolvedTheme === "dark" ? <Sun /> : <Moon />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>Toggle Theme</TooltipContent>
    </Tooltip>
  );
}
