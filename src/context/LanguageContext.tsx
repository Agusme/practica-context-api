import { createContext } from "react";

export type Languages = "es" | "en";

export type LanguageContextType = {
  languages: Languages;
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextType>({
    languages:"es",
    toggleLanguage:()=>{}
})