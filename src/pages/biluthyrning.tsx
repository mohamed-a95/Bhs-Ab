import { Link } from "wouter";
import RentalTable from "../components/rental-table";
import { getImagePath } from "../assets/index";

const Biluthyrning = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary bg-opacity-95 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Biluthyrning
            </h1>
            <p className="text-lg opacity-90">
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

      {/* Main Content Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-neutral-700 mb-4">
                Vårt erbjudande
              </h2>
              <p className="text-neutral-600 mb-6">
                Vårat garage löser de flesta behoven. Vare sig du vill ha en
                liten personbil för ett snabbt ärende, eller om fotbollslaget
                behöver en minibuss för en längre resa alt en skåpbil för en
                flytt. Så finns BHS här för dig. Vi har allt ifrån mindre
                personbilar till stora flyttbilar.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-neutral-700 mb-4">
                  Varför ska ni anlita oss?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-primary text-white p-2 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-semibold">Erfarenhet</h3>
                      <p className="text-neutral-600">
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
                      <p className="text-neutral-600">
                        Vi använder oss alltid utav moderna material för att
                        effektivisera vårt arbete.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white p-2 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-semibold">Gott rykte</h3>
                      <p className="text-neutral-600">
                        Sen starten av vår verksamhet har vi haft fokus på att
                        sätta våra kunder först. Vi har därför kunnat etablera
                        en god kundkontakt och byggt upp ett bra rykte.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-neutral-700 mb-4">
                  Vad får du?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-primary text-white p-2 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-semibold">Service</h3>
                      <p className="text-neutral-600">
                        När du anlitar BHS så får du ett företag som bryr sig om
                        sina kunder.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white p-2 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-semibold">Bra pris</h3>
                      <p className="text-neutral-600">
                        Vi strävar alltid efter att erbjuda våra kunder ett
                        konkurrenskraftigt pris.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white p-2 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-semibold">Flexibilitet</h3>
                      <p className="text-neutral-600">
                        Förutom bra pris och service så är vi väldigt flexibla
                        och anpassningsbara efter era önskemål.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/*<div className="mt-12">
              <h2 className="text-2xl font-bold text-neutral-700 mb-6 text-center">
                Snabböversikt - Personbilar och Minibussar
              </h2>
              <div className="mb-8">
                <p className="text-neutral-600 text-center mb-4">
                  Nedan ser du våra priser för personbilar och minibussar. För
                  en fullständig prislista med alla fordonstyper, inklusive
                  skåpbilar, släp och takboxar, besök{" "}
                  <Link href="/priser" className="text-primary font-medium">
                    Prislista
                  </Link>{" "}
                  i huvudmenyn.
                </p>
              </div>

              <div className="mt-8">
                <RentalTable />
              </div>
            </div>*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default Biluthyrning;
