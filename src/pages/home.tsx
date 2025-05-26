import { Link } from "wouter";
import { CarFront, PackageCheck } from "lucide-react";
import ServiceCard from "../components/service-card";
import { getImagePath } from "../assets/index";
import img1 from "../assets/images/ChatGPT Image 17 maj 2025 14_20_11.png";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section relative text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/ChatGPT Image 17 maj 2025 14_20_11.png')", // ändra till rätt sökväg
        }}
      >
        {/* Mörk overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Innehåll */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Din pålitliga partner för
              <br />
              bil, flytt och transport
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Vi erbjuder prisvärda och flexibla lösningar för alla dina behov i
              Stockholm och omnejd.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/biluthyrning"
                className="bg-white text-primary font-medium px-6 py-3 rounded-md shadow hover:bg-neutral-100 transition text-center flex items-center justify-center"
              >
                <CarFront className="mr-2 h-5 w-5" />
                Hyr bil
              </Link>
              <Link
                href="/flytt"
                className="bg-secondary text-white font-medium px-6 py-3 rounded-md shadow hover:bg-red-700 transition text-center flex items-center justify-center"
              >
                <PackageCheck className="mr-2 h-5 w-5" />
                Boka flytt
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-700 mb-2">
              Våra tjänster
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Vi erbjuder ett brett utbud av tjänster för både privatpersoner
              och företag, anpassade för dina specifika behov.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Biluthyrning"
              description="Vi erbjuder ett brett utbud av personbilar för uthyrning till konkurrenskraftiga priser."
              imgSrc={getImagePath("/images/car-rental.jpg")}
              imgAlt="Biluthyrning - Personbil"
              link="/biluthyrning"
            />
            <ServiceCard
              title="Flytthjälp"
              description="Professionell flytt av hem, kontor eller enstaka möbler med erfarna flyttare."
              imgSrc={getImagePath("/images/moving-boxes.jpg")}
              imgAlt="Flytthjälp - Flyttlådor"
              link="/flytt"
            />
            <ServiceCard
              title="Transport"
              description="Transport av varor och gods med våra skåpbilar och släp för alla typer av leveranser."
              imgSrc={getImagePath("/images/transport-truck.jpg")}
              imgAlt="Transport - Lastbil"
              link="/transport"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-700 mb-4">
            Redo att komma igång?
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto mb-8">
            Kontakta oss idag för att diskutera dina behov.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/kontakt"
              className="bg-primary text-white font-medium px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
            >
              Kontakta oss
            </Link>
            <Link
              href="/priser"
              className="bg-white text-primary border border-primary font-medium px-6 py-3 rounded-md shadow hover:bg-neutral-50 transition"
            >
              Se våra priser
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
