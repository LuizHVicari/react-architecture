import { TableHead, TableHeader, TableRow } from "../../ui/table";
import For from "../for";

interface Props {
  columns: string[];
}

const DataTableHeader: React.FC<Props> = ({ columns }) => {
  return (
    <TableHeader>
      <TableRow>
        <For each={columns} keyExtractor={(_, index) => index}>
          {({ item: column }) => <TableHead>{column}</TableHead>}
        </For>
      </TableRow>
    </TableHeader>
  );
};

export default DataTableHeader;
