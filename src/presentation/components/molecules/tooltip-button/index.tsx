import { Button } from "../../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";

interface Props {
  children: React.ReactNode;
  tooltipTitle: string;
  onClick: () => void;
}

const TooltipButton: React.FC<Props> = ({
  children,
  tooltipTitle,
  onClick,
}: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button size="icon" variant="outline" onClick={onClick}>
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipTitle}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default TooltipButton;
