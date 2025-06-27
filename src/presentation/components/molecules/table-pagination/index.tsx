import { Pagination, PaginationContent } from "../../ui/pagination";
import PaginationButton from "../../atoms/pagination-button";
import PaginationPages from "../../atoms/pagination-pages";

interface Props {
  previousEnabled: boolean;
  nextEnabled: boolean;
  currentPage: number;
  totalPages: number;
  onClickPage: (page: number) => void;
  onClickNext: () => void;
  onClickPrevious: () => void;
}

const TablePagination: React.FC<Props> = ({
  currentPage,
  previousEnabled,
  nextEnabled,
  totalPages,
  onClickPage,
  onClickNext,
  onClickPrevious,
}) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationButton
          enabled={previousEnabled}
          type="previous"
          onClick={onClickPrevious}
        />
        <PaginationPages
          currentPage={currentPage}
          totalPages={totalPages}
          onClickPage={onClickPage}
        />
        <PaginationButton
          enabled={nextEnabled}
          type="next"
          onClick={onClickNext}
        />
      </PaginationContent>
    </Pagination>
  );
};

export default TablePagination;
