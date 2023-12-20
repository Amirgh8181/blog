"use client"
import { ThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export function NextThemeProvider({ children }: ThemeProviderProps) {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}