import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs";
import PriceTable from "./price-table";
import RentalTable from "./rental-table";
import VanPriceTable from "./van-price-table";
import { TrailerPricing } from "../lib/utils/data";

const PricingTabs = () => {
  return (
    <Tabs defaultValue="personbilar-minibussar" className="w-full">
      <TabsList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10 bg-neutral-100 p-1 rounded-lg shadow-sm">
        <TabsTrigger
          value="personbilar-minibussar"
          className="text-base font-medium py-3 transition-all bg-neutral-100 hover:bg-white/50 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary"
        >
          Personbilar & Minibussar
        </TabsTrigger>
        <TabsTrigger
          value="skapbilar"
          className="text-base font-medium py-3 transition-all bg-neutral-100 hover:bg-white/50 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary"
        >
          Skåpbilar
        </TabsTrigger>
        <TabsTrigger
          value="slap"
          className="text-base font-medium py-3 transition-all bg-neutral-100 hover:bg-white/50 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary"
        >
          Släp och Takbox
        </TabsTrigger>
      </TabsList>

      <TabsContent value="personbilar-minibussar" className="mt-8 pt-4">
        <RentalTable />
      </TabsContent>

      <TabsContent value="skapbilar" className="mt-8 pt-4">
        <VanPriceTable />
      </TabsContent>

      <TabsContent value="slap" className="mt-8 pt-4">
        <PriceTable
          data={TrailerPricing}
          columns={[
            "Typ",
            "Korttid (0-4h)/Grundavgift",
            "Dygn",
            "2 Dygn",
            "Helg (fre-mån)",
            "Vecka",
            "Självriskreducering",
            "",
          ]}
          footerText="Släpvagnsdrag krävs för hyra av släp. Takräcke krävs för takbox."
        />
      </TabsContent>
    </Tabs>
  );
};

export default PricingTabs;
