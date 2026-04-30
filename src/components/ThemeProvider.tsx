import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Theme = "ocean" | "sunrise" | "forest" | "lavender";

const THEMES: { id: Theme; label: string; swatch: string }[] = [
  { id: "ocean", label: "Ocean", swatch: "linear-gradient(135deg,#0ea5e9,#22d3ee,#fbbf24)" },
  { id: "sunrise", label: "Sunrise", swatch: "linear-gradient(135deg,#f97316,#fbbf24,#ec4899)" },
  { id: "forest", label: "Forest", swatch: "linear-gradient(135deg,#10b981,#34d399,#fde047)" },
  { id: "lavender", label: "Lavender", swatch: "linear-gradient(135deg,#8b5cf6,#c084fc,#38bdf8)" },
];

const Ctx = createContext<{ theme: Theme; setTheme: (t: Theme) => void }>({
  theme: "ocean",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem("ecsss-theme") as Theme) || "ocean");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ecsss-theme", theme);
  }, [theme]);
  return <Ctx.Provider value={{ theme, setTheme }}>{children}</Ctx.Provider>;
};

export const useTheme = () => useContext(Ctx);

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-border bg-card/70 p-1 backdrop-blur">
      {THEMES.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          aria-label={`${t.label} theme`}
          title={t.label}
          className={`h-6 w-6 rounded-full transition-transform hover:scale-110 ${
            theme === t.id ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""
          }`}
          style={{ background: t.swatch }}
        />
      ))}
    </div>
  );
};
