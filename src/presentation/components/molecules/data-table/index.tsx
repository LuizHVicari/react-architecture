import { Table, TableBody } from "../../ui/table";
import DataTableHeader from "../../atoms/table-header";
import DataTableRow from "../../atoms/table-row-data";
import TablePagination from "../table-pagination";
import For from "../../atoms/for";

interface Props<T> {
  columns: string[];
  data: T[];
  renderRow: (item: T) => (string | number | React.ReactNode)[];
  keyExtractor: (item: T, index: number) => string | number;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

function DataTable<T>({
  columns,
  data,
  renderRow,
  keyExtractor,
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  className,
}: Props<T>): React.JSX.Element {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  return (
    <div className="space-y-4">
      <div className={`rounded-md border ${className || ""}`}>
        <Table>
          <DataTableHeader columns={columns} />
          <TableBody>
            <For each={data} keyExtractor={keyExtractor}>
              {({ item }) => <DataTableRow data={renderRow(item)} />}
            </For>
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Mostrando {startIndex + 1} a {endIndex} de {totalItems} itens
        </p>

        <TablePagination
          currentPage={currentPage}
          nextEnabled={currentPage < totalPages}
          previousEnabled={currentPage > 1}
          totalPages={totalPages}
          onClickNext={() => onPageChange(currentPage + 1)}
          onClickPage={onPageChange}
          onClickPrevious={() => onPageChange(currentPage - 1)}
        />
      </div>
    </div>
  );
}

export default DataTable;
