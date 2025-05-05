import { useState, useEffect } from "react";

type Language = "sv" | "en";
type Translations = Record<string, Record<Language, string>>;

// Example translations - expand as needed
const translations: Translations = {
  "home": {
    "sv": "Hem",
    "en": "Home"
  },
  "rentals": {
    "sv": "Biluthyrning",
    "en": "Car Rentals"
  },
  "moving": {
    "sv": "Flytt",
    "en": "Moving Services"
  },
  "transport": {
    "sv": "Transport",
    "en": "Transport"
  },
  "pricing": {
    "sv": "Priser",
    "en": "Pricing"
  },
  "contact": {
    "sv": "Kontakt",
    "en": "Contact"
  }
};

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("sv");

  // Detect browser language on initial load
  useEffect(() => {
    const browserLang = navigator.language;
    if (browserLang.startsWith("en")) {
      setLanguage("en");
    }
    // Otherwise default to Swedish (already set)
  }, []);

  // Translation function
  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key; // Fallback to key if translation not found
  };

  return {
    language,
    setLanguage,
    t
  };
}
