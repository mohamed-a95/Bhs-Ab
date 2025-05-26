import PricingTabs from "../components/pricing-tabs";

const Priser = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-grey-200 bg-opacity-95 text-neutral-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Prislista</h1>
            <p className="text-lg opacity-90">
              Transparenta priser utan dolda avgifter för alla våra tjänster.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/*<div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-700 mb-2">
              Prislista
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Transparenta priser utan dolda avgifter för alla våra tjänster.
            </p>
          </div>*/}

          <PricingTabs />
        </div>
      </section>

      {/* Additional Information */}
      {/*   <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-700 mb-6 text-center">
              Viktigt att veta
            </h2>

            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
              <div>
                <h3 className="font-semibold text-neutral-700 text-lg mb-2">
                  Bokningsvillkor
                </h3>
                <p className="text-neutral-600">
                  Bokning kan göras via telefon, e-post eller genom
                  kontaktformuläret på vår hemsida. En bokningsavgift på 20% av
                  totalsumman debiteras vid bokningstillfället.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-700 text-lg mb-2">
                  Avbokningsregler
                </h3>
                <p className="text-neutral-600">
                  Vid avbokning mer än 48 timmar före bokad tid återbetalas hela
                  beloppet förutom bokningsavgiften. Vid senare avbokning
                  debiteras 50% av den totala kostnaden.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-700 text-lg mb-2">
                  Betalningsmetoder
                </h3>
                <p className="text-neutral-600">
                  Vi accepterar betalning via Swish, banköverföring och
                  kreditkort. Företag erbjuds även möjlighet till fakturering
                  (kreditupplysning genomförs).
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-700 text-lg mb-2">
                  Försäkring
                </h3>
                <p className="text-neutral-600">
                  Alla våra tjänster omfattas av grundläggande försäkringsskydd.
                  Vi rekommenderar dock att kontrollera din hemförsäkring för
                  ytterligare skydd vid flytt.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="/kontakt"
                className="bg-primary text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Kontakta oss för offert
              </a>
            </div>
          </div>
        </div>
      </section>*/}
    </>
  );
};

export default Priser;
