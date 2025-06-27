import { useMemo } from "react";
import For from "../for";
import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "../../ui/pagination";

interface Props {
  currentPage: number;
  totalPages: number;
  onClickPage: (page: number) => void;
}

const PaginationPages: React.FC<Props> = ({
  currentPage,
  totalPages,
  onClickPage,
}) => {
  const keyExtractor = (item: number | null, index: number): string | number =>
    item ?? `ellipsis-${index}`;

  const pages = useMemo((): (number | null)[] => {
    const delta = 1;
    const range: (number | null)[] = [];

    range.push(1);

    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    if (left > 2) range.push(null);
    for (let i = left; i <= right; i++) range.push(i);
    if (right < totalPages - 1) range.push(null);

    if (totalPages > 1) range.push(totalPages);

    return range;
  }, [currentPage, totalPages]);

  return (
    <For each={pages} keyExtractor={keyExtractor}>
      {({ item }) =>
        item === null ? (
          <PaginationEllipsis />
        ) : (
          <PaginationItem
            aria-current={item === currentPage ? "page" : undefined}
            className={item === currentPage ? "border rounded-md" : ""}
          >
            <PaginationLink onClick={() => onClickPage(item)}>
              {item}
            </PaginationLink>
          </PaginationItem>
        )
      }
    </For>
  );
};

export default PaginationPages;
