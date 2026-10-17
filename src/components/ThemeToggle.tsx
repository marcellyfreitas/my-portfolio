"use client";

import { useEffect, useSyncExternalStore } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

type Theme = "dark" | "light";

let theme: Theme = "dark";
const listeners = new Set<() => void>();

function getDomTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  const t = document.documentElement.dataset.theme;
  return t === "light" ? "light" : "dark";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot(): Theme {
  return theme;
}

function getServerSnapshot(): Theme {
  return "dark";
}

function applyTheme(next: Theme) {
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* ignore */
  }
}

export default function ThemeToggle() {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const dom = getDomTheme();
    if (dom !== theme) {
      theme = dom;
      listeners.forEach((l) => l());
    }
  }, []);

  const toggle = () => {
    const next: Theme = current === "dark" ? "light" : "dark";
    theme = next;
    applyTheme(next);
    listeners.forEach((l) => l());
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={current === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"}
      className="rounded-md p-2 text-foreground transition-colors hover:bg-card-hover active:bg-border"
    >
      {current === "dark" ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
    </button>
  );
}
