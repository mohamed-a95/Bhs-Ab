import { Link } from "wouter";
import { Calendar, Package, Sofa, Shield, Check } from "lucide-react";
import { getImagePath } from "../assets/index";

const Flytt = () => {
  return (
    <>
      {/* Hero Section with Background Image and Overlay */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/Chatgptflytt.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Flytthjälp</h1>
            <p className="text-lg md:text-xl text-white/90">
              Vi erbjuder professionell flytthjälp för både hem och kontor. Våra
              erfarna flyttare tar hand om hela processen.
            </p>
          </div>
        </div>
      </section>

      {/* Moving Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-700 mb-4">
                Kompletta flyttlösningar
              </h3>
              <p className="text-neutral-600 mb-6">
                Vår flyttservice inkluderar allt från packning och emballering
                till transport och utplacering på den nya adressen. Vi anpassar
                våra tjänster efter dina specifika behov och önskemål.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <Package className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-700">
                      Packning & emballering
                    </h4>
                    <p className="text-neutral-500">
                      Vi kan packa dina tillhörigheter säkert med högkvalitativt
                      emballage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <Sofa className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-700">
                      Möbelmontering
                    </h4>
                    <p className="text-neutral-500">
                      Vi monterar ned och återmonterar möbler på din nya adress.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-700">Försäkring</h4>
                    <p className="text-neutral-500">
                      Alla våra flyttar är försäkrade för din trygghet.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/kontakt"
                className="inline-flex items-center bg-secondary text-white font-medium px-6 py-3 rounded-md hover:bg-red-700 transition"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Boka flytthjälp
              </Link>
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={getImagePath("/images/moving-boxes.jpg")}
                alt="Professionell flytthjälp"
                className="w-full h-full object-cover"
                width="800"
                height="600"
              />
            </div>
          </div>

          <div className="bg-neutral-100 p-8 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-neutral-700 mb-6 text-center">
              Våra flyttpaket
            </h3>

            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-6">
                <Calendar className="h-10 w-10 text-primary mr-4" />
                <h4 className="text-xl font-semibold text-neutral-700">
                  Skräddarsydda flyttlösningar
                </h4>
              </div>

              <p className="text-neutral-600 text-center mb-6">
                Varje flytt är unik med olika behov och förutsättningar. Vi
                erbjuder därför skräddarsydda flyttlösningar baserade på dina
                specifika krav. Kontakta oss för en kostnadsfri offert där vi
                tar hänsyn till:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "Flyttprojektets omfattning",
                  "Antal rum och möbler",
                  "Flyttsträcka",
                  "Packnings- och bärtjänster",
                  "Behov av specialtransport",
                  "Önskad försäkringsnivå",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="bg-neutral-50 p-4 rounded-lg flex items-center"
                  >
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center bg-secondary text-white font-medium px-6 py-3 rounded-md hover:bg-red-700 transition"
                >
                  Kontakta oss för offert
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-neutral-700 mb-8 text-center">
            Vanliga frågor om flytthjälp
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg text-neutral-700 mb-2">
                Hur lång tid i förväg bör jag boka flytthjälp?
              </h3>
              <p className="text-neutral-600">
                Vi rekommenderar att du bokar flytthjälp minst 2–3 veckor i
                förväg för att säkerställa tillgänglighet, särskilt under
                månadsskiften som är extra populära flyttdagar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg text-neutral-700 mb-2">
                Vad ingår i grundförsäkringen?
              </h3>
              <p className="text-neutral-600">
                Vår grundförsäkring täcker skador på möbler och gods under
                transporten upp till ett värde av 500 000 kr.
                Premium-försäkringen utökar skyddet och har en högre
                beloppsgräns.
              </p>
            </div>

            <div className="text-center pt-4">
              <Link
                href="/kontakt"
                className="bg-primary text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition inline-block"
              >
                Har du fler frågor? Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Flytt;
