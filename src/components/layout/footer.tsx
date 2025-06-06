import { Link } from "wouter";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-700 text-neutral-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/Bhslogo.jpeg"
                alt="BHS logotyp"
                className="h-12 w-auto object-contain bg-white rounded"
              />
              {/* <span className="font-semibold">Bil & Flytthjälp Service</span>*/}
            </div>
            <p className="text-neutral-400 mb-6">
              Din partner för biluthyrning, flytt och transport i Stockholm
              sedan 1998.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Bhsbiluthyrning/"
                className="text-neutral-300 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  />
                </svg>
              </a>
              <a
                href=" https://www.instagram.com/bhsbiluthyrning/?hl=en"
                className="text-neutral-300 hover:text-white transition"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                  />
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                </svg>
              </a>
              {/*<a
                href="#"
                className="text-neutral-300 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
                  />
                  <rect
                    x="2"
                    y="9"
                    width="4"
                    height="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                </svg>
              </a>*/}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Tjänster</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/biluthyrning"
                  className="text-neutral-400 hover:text-white transition"
                >
                  Biluthyrning
                </Link>
              </li>
              <li>
                <Link
                  href="/flytt"
                  className="text-neutral-400 hover:text-white transition"
                >
                  Flytthjälp
                </Link>
              </li>
              <li>
                <Link
                  href="/transport"
                  className="text-neutral-400 hover:text-white transition"
                >
                  Transport
                </Link>
              </li>
              <li>
                {/*<Link
                  href="/priser"
                  className="text-neutral-400 hover:text-white transition"
                >
                  Prislista
                </Link>*/}
              </li>
            </ul>
          </div>

          {/*<div>
            <h4 className="font-semibold text-white text-lg mb-4">
              Information
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition"
                >
                  Om oss
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition"
                >
                  Villkor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition"
                >
                  Integritetspolicy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition"
                >
                  Cookies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>*/}

          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 mr-3 mt-1 text-neutral-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Honnörsgatan 6<br />
                  170 69 Solna
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-3 text-neutral-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+46739845068"
                  className="hover:text-white transition"
                >
                  073-984 50 68
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-3 text-neutral-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@bhs.se"
                  className="hover:text-white transition"
                >
                  info@bhs.se
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © {year} BHS - Bil & Flytthjälp Service. Alla rättigheter
            förbehållna.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-neutral-400 hover:text-white text-sm transition"
            >
              Villkor
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white text-sm transition"
            >
              Integritet
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white text-sm transition"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
