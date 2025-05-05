import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/table";
import { RentalPricing } from "../lib/utils/data";

const RentalTable = () => {
  return (
    <div className="space-y-12">
      <div className="overflow-x-auto">
        <Table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
          <TableHeader className="bg-primary text-white">
            <TableRow>
              {RentalPricing.columns.map((column, index) => (
                <TableHead
                  key={index}
                  className="py-5 px-6 text-center text-lg font-bold text-white"
                >
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-neutral-200">
            {RentalPricing.data.map((item, index) => (
              <TableRow key={index} className="hover:bg-neutral-50">
                <TableCell className="py-5 px-6 font-medium text-base">
                  {item.period}
                </TableCell>
                <TableCell className="py-5 px-6 text-center">
                  {item.plan || "-"}
                </TableCell>
                <TableCell className="py-5 px-6 text-center font-medium text-primary">
                  {item.car}
                </TableCell>
                <TableCell className="py-5 px-6 text-center font-medium text-primary">
                  {item.van}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="overflow-x-auto">
        <Table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
          <TableHeader className="bg-neutral-200 text-neutral-800">
            <TableRow>
              <TableHead className="py-5 px-6 text-lg font-bold">
                Tilläggsavgifter
              </TableHead>
              <TableHead className="py-5 px-6 text-center text-lg font-bold">
                Personbil
              </TableHead>
              <TableHead className="py-5 px-6 text-center text-lg font-bold">
                Minibuss
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-neutral-200">
            {RentalPricing.extraInfo.map((item, index) => (
              <TableRow key={index} className="hover:bg-neutral-50">
                <TableCell className="py-5 px-6 font-medium text-base">
                  {item.period}
                </TableCell>
                <TableCell className="py-5 px-6 text-center font-medium text-primary">
                  {item.car}
                </TableCell>
                <TableCell className="py-5 px-6 text-center font-medium text-primary">
                  {item.van}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-6 bg-neutral-100 p-5 rounded-lg shadow-sm text-neutral-700 text-base">
        <p>{RentalPricing.footerText}</p>
      </div>
    </div>
  );
};

export default RentalTable;
