// src/gtm/GtmProvider.tsx
import React, { createContext, useContext, ReactNode } from "react";
import TagManager from "react-gtm-module";

// Typ för vårt push-objekt
export type GtmEvent = Record<string, unknown>;

// Skapa en kontext för att pusha till dataLayer
const GtmContext = createContext<(event: GtmEvent) => void>(() => {
  console.warn("GTM inte initialiserad");
});

interface Props {
  children: ReactNode;
}

export function GtmProvider({ children }: Props) {
  const gtmId = import.meta.env.VITE_GTM_ID;
  if (!gtmId) {
    console.warn("VITE_GTM_ID saknas—GTM initierades inte");
  } else {
    TagManager.initialize({ gtmId });
  }

  // Funktion som komponenter kan använda för att skicka events
  const push = (data: GtmEvent) => {
    TagManager.dataLayer({ dataLayer: data });
  };

  return <GtmContext.Provider value={push}>{children}</GtmContext.Provider>;
}

// Hook för att enkelt komma åt push-funktionen
export function useGtm() {
  return useContext(GtmContext);
}
