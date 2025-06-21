import { CheckCircle } from "lucide-react";
import { Button } from "../components/button";
import { useLocation } from "wouter";
import { useEffect } from "react";

const Tack = () => {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLocation("/");
    }, 8000); // Redirect efter 8 sekunder

    return () => clearTimeout(timeout);
  }, [setLocation]);

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-white">
      <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
      <h1 className="text-3xl font-bold text-neutral-800 mb-2">
        Tack för att du kontaktade oss!
      </h1>
      <p className="text-neutral-600 text-lg mb-6">
        Vi återkommer till dig så snart som möjligt.
      </p>
      <Button onClick={() => setLocation("/")}>Till startsidan</Button>
    </section>
  );
};

export default Tack;
