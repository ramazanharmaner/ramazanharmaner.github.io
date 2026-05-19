"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en, tr, Dictionary } from "./dictionaries";

type Language = "en" | "tr";

interface LanguageContextType {
  language: Language;
  dict: Dictionary;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("app-lang") as Language;
    if (savedLang === "en" || savedLang === "tr") {
      setLanguageState(savedLang);
    } else {
      // Default to English, but we could check navigator.language
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "tr") {
        setLanguageState("tr");
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("app-lang", lang);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "tr" : "en"));
  };

  const dict = language === "en" ? en : tr;

  return (
    <LanguageContext.Provider value={{ language, dict, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
