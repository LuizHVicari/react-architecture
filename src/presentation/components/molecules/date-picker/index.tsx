import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/presentation/components/ui/button";
import { Calendar } from "@/presentation/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/presentation/components/ui/popover";

interface DatePickerProps {
  value?: Date;
  onChange: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  maxYear?: number;
  minYear?: number;
}

export default function DatePicker({
  value,
  onChange,
  placeholder = "Select date",
  disabled = false,
  maxYear,
  minYear,
}: DatePickerProps): React.JSX.Element {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          className="w-full justify-between font-normal"
          disabled={disabled}
          variant="outline"
        >
          {value ? value.toLocaleDateString() : placeholder}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto overflow-hidden p-0">
        <Calendar
          captionLayout="label"
          endMonth={maxYear ? new Date(maxYear, 11) : undefined}
          mode="single"
          selected={value}
          startMonth={minYear ? new Date(minYear, 0) : undefined}
          onSelect={(date) => {
            onChange(date);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
