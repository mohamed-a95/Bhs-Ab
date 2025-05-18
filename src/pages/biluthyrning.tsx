import { Link } from "wouter";
import RentalTable from "../components/rental-table";
import { getImagePath } from "../assets/index";

const Biluthyrning = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-white">
        {/* Bakgrundsbild + overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/Chatgpttruck.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        ></div>

        {/* Mörk overlay separat */}
        <div className="absolute inset-0 bg-black opacity-55 z-10"></div>

        {/* Content on top */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Biluthyrning
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Boka din hyrbil idag från 25% billigare pris än konkurrenterna. Vi
              finns i Solna men du kan snabbt och smidigt få din hyrbil utkörd
              hem till dig.
            </p>
          </div>
        </div>
      </section>

      {/* Car Image Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <img
              src={getImagePath("/images/car-rental.jpg")}
              alt="Biluthyrning hos BHS"
              className="rounded-lg shadow-xl max-w-full md:max-w-3xl object-cover"
              width="1024"
              height="576"
            />
          </div>
        </div>
      </section>

      {/* Main Content Section utan bakgrundsbild */}
      <section className="py-16 bg-neutral-50 text-neutral-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Vårt erbjudande</h2>
              <p className="mb-6">
                Vårat garage löser de flesta behoven. Vare sig du vill ha en
                liten personbil för ett snabbt ärende, eller om fotbollslaget
                behöver en minibuss för en längre resa alt en skåpbil för en
                flytt. Så finns BHS här för dig. Vi har allt ifrån mindre
                personbilar till stora flyttbilar.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Varför ska ni anlita oss?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-primary text-white p-2 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-semibold">Erfarenhet</h3>
                      <p>
                        Vår personal har mångårig erfarenhet inom branschen.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white p-2 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-semibold">Moderna material</h3>
                      <p>
                        Vi använder alltid moderna material för effektivitet.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white p-2 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-semibold">Gott rykte</h3>
                      <p>
                        Vi har byggt ett starkt rykte genom god kundservice.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-4">Vad får du?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-primary text-white p-2 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-semibold">Service</h3>
                      <p>Du får ett företag som bryr sig om sina kunder.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white p-2 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-semibold">Bra pris</h3>
                      <p>Vi erbjuder konkurrenskraftiga priser.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white p-2 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-semibold">Flexibilitet</h3>
                      <p>Vi anpassar oss efter era behov och önskemål.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* 
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Snabböversikt - Personbilar och Minibussar
              </h2>
              <p className="text-center mb-4">
                För fullständig prislista med alla fordonstyper, inklusive
                skåpbilar och släp, besök{" "}
                <Link href="/priser" className="text-primary font-medium">
                  Prislista
                </Link>.
              </p>
              <RentalTable />
            </div> 
            */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Biluthyrning;
