import {
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../../ui/pagination";

interface Props {
  type: "previous" | "next";
  enabled: boolean;
  onClick: () => void;
}

const PaginationButton: React.FC<Props> = ({ type, enabled, onClick }) => {
  const Component = type === "previous" ? PaginationPrevious : PaginationNext;

  return (
    <PaginationItem>
      <Component
        className={!enabled ? "pointer-events-none opacity-50" : ""}
        onClick={onClick}
      />
    </PaginationItem>
  );
};

export default PaginationButton;
