import { TableCell, TableRow } from "../../ui/table";
import For from "../for";

interface Props {
  data: (string | number | React.ReactNode)[];
  className?: string;
}

const DataTableRow: React.FC<Props> = ({
  data,
  className = "hover:bg-primary",
}) => {
  return (
    <TableRow className={className}>
      <For each={data}>
        {({ item, index }) => (
          <TableCell className={index === 0 ? "font-medium" : ""}>
            {item}
          </TableCell>
        )}
      </For>
    </TableRow>
  );
};

export default DataTableRow;
