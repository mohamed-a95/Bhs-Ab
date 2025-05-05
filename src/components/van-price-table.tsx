import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/table";

import { Link } from "wouter";

const VanPriceTable = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <Table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <TableHeader className="bg-primary text-white">
            <TableRow>
              <TableHead className="py-5 px-6 text-base md:text-lg font-bold text-white text-left">
                Hyresperiod
              </TableHead>
              <TableHead className="py-5 px-4 text-sm md:text-base font-bold text-white text-center whitespace-nowrap">
                Lastbil 1<br />
                (11 m³)
              </TableHead>
              <TableHead className="py-5 px-4 text-sm md:text-base font-bold text-white text-center whitespace-nowrap">
                Lastbil 2<br />
                (18 m³)
              </TableHead>
              <TableHead className="py-5 px-4 text-sm md:text-base font-bold text-white text-center whitespace-nowrap">
                Lastbil 3<br />
                (20 m³)
              </TableHead>
              <TableHead className="py-5 px-4 text-sm md:text-base font-bold text-white text-center whitespace-nowrap">
                Lastbil 2 + släp
                <br />
                (18 m³ + 11 m³)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-neutral-200">
            <TableRow className="hover:bg-neutral-50">
              <TableCell className="py-3 md:py-4 px-3 md:px-6 font-medium text-sm md:text-base">
                Korttid 0–4 timmar (inkl. 50 km)
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                529 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                759 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                939 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                1 199 kr
              </TableCell>
            </TableRow>

            <TableRow className="hover:bg-neutral-50">
              <TableCell className="py-3 md:py-4 px-3 md:px-6 font-medium text-sm md:text-base">
                Dygn inkl. 100 km
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                839 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                1 299 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                1 519 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                1 899 kr
              </TableCell>
            </TableRow>

            <TableRow className="hover:bg-neutral-50">
              <TableCell className="py-3 md:py-4 px-3 md:px-6 font-medium text-sm md:text-base">
                Fri körsträcka, 1:a dygn
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                1 899 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                2 499 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                3 099 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                3 399 kr
              </TableCell>
            </TableRow>

            <TableRow className="hover:bg-neutral-50">
              <TableCell className="py-3 md:py-4 px-3 md:px-6 font-medium text-sm md:text-base">
                Fri körsträcka, 2:a dygn
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                1 319 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                1 499 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                1 749 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                4 799 kr
              </TableCell>
            </TableRow>

            <TableRow className="hover:bg-neutral-50">
              <TableCell className="py-3 md:py-4 px-3 md:px-6 font-medium text-sm md:text-base">
                Vecka inkl. 700 km
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                5 479 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                7 999 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                9 999 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                10 999 kr
              </TableCell>
            </TableRow>

            <TableRow className="hover:bg-neutral-50">
              <TableCell className="py-3 md:py-4 px-3 md:px-6 font-medium text-sm md:text-base">
                Vecka fri körsträcka
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                6 799 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                9 999 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                12 999 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                13 599 kr
              </TableCell>
            </TableRow>

            <TableRow className="hover:bg-neutral-50">
              <TableCell className="py-3 md:py-4 px-3 md:px-6 font-medium text-sm md:text-base">
                Månad¹ inkl. 2100 km
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                15 999 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                20 199 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                26 259 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-medium text-primary text-sm md:text-base">
                –
              </TableCell>
            </TableRow>

            <TableRow className="hover:bg-neutral-50 bg-neutral-50">
              <TableCell className="py-3 md:py-4 px-3 md:px-6 font-bold text-sm md:text-base">
                Extra km
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-bold text-primary text-sm md:text-base">
                5,0 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-bold text-primary text-sm md:text-base">
                6,0 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-bold text-primary text-sm md:text-base">
                7,5 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-bold text-primary text-sm md:text-base">
                8,0 kr
              </TableCell>
            </TableRow>

            <TableRow className="hover:bg-neutral-50 bg-neutral-50">
              <TableCell className="py-3 md:py-4 px-3 md:px-6 font-bold text-sm md:text-base">
                Självriskreducering
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-bold text-primary text-sm md:text-base">
                140 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-bold text-primary text-sm md:text-base">
                140 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-bold text-primary text-sm md:text-base">
                140 kr
              </TableCell>
              <TableCell className="py-3 md:py-4 px-2 md:px-6 text-center font-bold text-primary text-sm md:text-base">
                195 kr
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center mt-6">
        <Link
          href="/kontakt"
          className="bg-secondary text-white font-medium px-6 py-3 rounded-md hover:bg-red-700 transition"
        >
          Boka lastbil nu
        </Link>
      </div>
      <div className="mt-6 bg-neutral-100 p-5 rounded-lg shadow-sm text-neutral-700">
        <p className="text-sm md:text-base space-y-2">
          <strong>Noter:</strong>
          <br />
          ¹ Minst 30 dagars hyra.
          <br />
          • Alla priser är inklusive moms.
          <br />
          • Självriskreducering minskar din självrisk från 8000 kr till 4000 kr.
          <br />
          • B-körkort gäller för alla fordon utom Lastbil 2 + släp som kräver
          BE-körkort.
          <br />• Avbokning ska göras minst 48 timmar innan bokad tid för att
          undvika avgift.
        </p>
      </div>
    </>
  );
};

export default VanPriceTable;
