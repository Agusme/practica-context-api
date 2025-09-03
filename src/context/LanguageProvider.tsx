import { useState, type ReactNode } from "react";
import { LanguageContext, type Languages } from "./LanguageContext";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [languages, setLanguage] = useState<Languages>("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ languages, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
