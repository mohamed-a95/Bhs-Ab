import { Link } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

const MobileMenu = ({ isOpen, onClose, currentPath }: MobileMenuProps) => {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      <nav className="flex flex-col space-y-4 py-4">
        <Link
          href="/"
          className={`font-medium px-4 py-2 rounded mx-4 block ${
            currentPath === "/"
              ? "text-primary bg-neutral-100"
              : "text-neutral-600 hover:text-primary hover:bg-neutral-100"
          }`}
          onClick={onClose}
        >
          Hem
        </Link>
        <Link
          href="/biluthyrning"
          className={`font-medium px-4 py-2 rounded mx-4 block ${
            currentPath === "/biluthyrning"
              ? "text-primary bg-neutral-100"
              : "text-neutral-600 hover:text-primary hover:bg-neutral-100"
          }`}
          onClick={onClose}
        >
          Biluthyrning
        </Link>
        <Link
          href="/priser"
          className={`font-medium px-4 py-2 rounded mx-4 block ${
            currentPath === "/priser"
              ? "text-primary bg-neutral-100"
              : "text-neutral-600 hover:text-primary hover:bg-neutral-100"
          }`}
          onClick={onClose}
        >
          Prislista
        </Link>
        <Link
          href="/flytt"
          className={`font-medium px-4 py-2 rounded mx-4 block ${
            currentPath === "/flytt"
              ? "text-primary bg-neutral-100"
              : "text-neutral-600 hover:text-primary hover:bg-neutral-100"
          }`}
          onClick={onClose}
        >
          Flytt
        </Link>
        <Link
          href="/transport"
          className={`font-medium px-4 py-2 rounded mx-4 block ${
            currentPath === "/transport"
              ? "text-primary bg-neutral-100"
              : "text-neutral-600 hover:text-primary hover:bg-neutral-100"
          }`}
          onClick={onClose}
        >
          Transport och bud
        </Link>
        <Link
          href="/kontakt"
          className={`font-medium px-4 py-2 rounded mx-4 block ${
            currentPath === "/kontakt"
              ? "text-primary bg-neutral-100"
              : "text-neutral-600 hover:text-primary hover:bg-neutral-100"
          }`}
          onClick={onClose}
        >
          Kontakt
        </Link>
        <a
          href="tel:+46704562100"
          className="flex items-center bg-secondary text-white px-4 py-2 rounded-md hover:bg-[#d62f3c] transition mx-4 mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>Ring oss: 070-456 21 00</span>
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
