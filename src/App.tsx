import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home from "./pages/home";
import Biluthyrning from "./pages/biluthyrning";
import Flytt from "./pages/flytt";
import Transport from "./pages/transport";
import Priser from "./pages/priser";
import Kontakt from "./pages/kontakt";
import NotFound from "./pages/not-found";
import Tack from "./pages/tack";

// Auto-scroll to top when changing pages
function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  const [location] = useLocation();

  // GTM sidvisning
  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "pageview",
        page: location,
      });
    }
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Header currentPath={location} />
        <main className="flex-grow">
          <ScrollToTop />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/biluthyrning" component={Biluthyrning} />
            <Route path="/flytt" component={Flytt} />
            <Route path="/transport" component={Transport} />
            <Route path="/priser" component={Priser} />
            <Route path="/kontakt" component={Kontakt} />
            <Route path="/tack" component={Tack} />

            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
