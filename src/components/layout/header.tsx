import { useState, useEffect } from "react";
import { Link } from "wouter";
import MobileMenu from "./mobile-menu";

interface HeaderProps {
  currentPath: string;
}

const Header = ({ currentPath }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 ${isScrolled ? "shadow-md" : ""} transition-all duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <div className="bg-primary text-white font-bold text-xl px-3 py-2 rounded">BHS</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className={currentPath === "/" 
                ? "text-primary font-medium" 
                : "text-neutral-600 hover:text-primary font-medium"}
            >
              Hem
            </Link>
            <Link 
              href="/biluthyrning" 
              className={currentPath === "/biluthyrning" 
                ? "text-primary font-medium" 
                : "text-neutral-600 hover:text-primary font-medium"}
            >
              Biluthyrning
            </Link>
            <Link 
              href="/priser" 
              className={currentPath === "/priser" 
                ? "text-primary font-medium" 
                : "text-neutral-600 hover:text-primary font-medium"}
            >
              Prislista
            </Link>
            <Link 
              href="/flytt" 
              className={currentPath === "/flytt" 
                ? "text-primary font-medium" 
                : "text-neutral-600 hover:text-primary font-medium"}
            >
              Flytt
            </Link>
            <Link 
              href="/transport" 
              className={currentPath === "/transport" 
                ? "text-primary font-medium" 
                : "text-neutral-600 hover:text-primary font-medium"}
            >
              Transport
            </Link>
            <Link 
              href="/kontakt" 
              className={currentPath === "/kontakt" 
                ? "text-primary font-medium" 
                : "text-neutral-600 hover:text-primary font-medium"}
            >
              Kontakt
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Contact Button */}
          <a
            href="tel:+46704562100"
            className="hidden md:flex items-center bg-secondary text-white px-4 py-2 rounded-md hover:bg-[#d62f3c] transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>070-456 21 00</span>
          </a>
        </div>

        {/* Mobile Navigation Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          currentPath={currentPath}
        />
      </div>
    </header>
  );
};

export default Header;