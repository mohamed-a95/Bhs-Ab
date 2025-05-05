import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/table";
import { Link } from "wouter";

interface PriceItemProps {
  name: string;
  description?: string;
  day: string;
  weekend: string;
  week: string;
  extraPerKm?: string;
}

interface PriceTableProps {
  data: PriceItemProps[];
  columns: string[];
  footerText: string;
}

const PriceTable = ({ data, columns, footerText }: PriceTableProps) => {
  return (
    <>
      <div className="overflow-x-auto">
        <Table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <TableHeader className="bg-primary text-white">
            <TableRow>
              {columns.map((column, index) => (
                <TableHead
                  key={index}
                  className={`py-5 px-6 text-lg font-bold text-white ${
                    index === 0 ? "text-left" : "text-center"
                  }`}
                >
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-neutral-200">
            {data.map((item, index) => (
              <TableRow key={index} className="hover:bg-neutral-50">
                <TableCell className="py-5 px-6">
                  <div className="font-medium text-base">{item.name}</div>
                  {item.description && (
                    <div className="text-sm text-neutral-500">
                      {item.description}
                    </div>
                  )}
                </TableCell>
                <TableCell className="py-5 px-6 text-center font-medium text-primary">
                  {item.day}
                </TableCell>
                <TableCell className="py-5 px-6 text-center font-medium text-primary">
                  {item.weekend}
                </TableCell>
                <TableCell className="py-5 px-6 text-center font-medium text-primary">
                  {item.week}
                </TableCell>
                {item.extraPerKm && (
                  <TableCell className="py-5 px-6 text-center font-medium text-primary">
                    {item.extraPerKm}
                  </TableCell>
                )}
                <TableCell className="py-5 px-6 text-center">
                  <Link
                    href="/kontakt"
                    className="bg-secondary text-white text-sm px-4 py-2 rounded hover:bg-red-700 transition inline-block"
                  >
                    Boka
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-6 bg-neutral-100 p-5 rounded-lg shadow-sm text-neutral-700">
        <p className="text-base">{footerText}</p>
      </div>
    </>
  );
};

export default PriceTable;
