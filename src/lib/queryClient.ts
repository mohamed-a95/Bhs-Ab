import { QueryClient } from "@tanstack/react-query";

// Denna fil har anpassats för frontend-only applikationen
// API-anrop har ersatts med statiska data och mailto-länkar

// Dummy-funktion för kontaktformulär istället för API-anrop
// Används med mailto-länkar istället
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<any> {
  console.log(`Simulerad API-förfrågan: ${method} ${url}`, data);
  
  // Simulera en server-respons med fördröjning
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Förfrågan mottagen" });
    }, 500);
  });
}

// Skapar en enkel QueryClient för React Query
// I en frontend-only applikation används QueryClient främst för 
// caching och tillståndshantering
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
