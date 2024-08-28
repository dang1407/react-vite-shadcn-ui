import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



interface ListItemsViewProps {
  data: Array<Object>;
  tableHeaders: Array<string>;
}

export default function ListItemsView({data, tableHeaders} : ListItemsViewProps){
  return (
    <>
      <div className="flex">
        <Table>
          {tableHeaders.map((header) => (
            <TableHeader>{header}</TableHeader>
          ))}
        </Table>
      </div>
    </>
  );
}