import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/presentation/components/ui/form";
import DatePicker from "@/presentation/components/molecules/date-picker";
import { type Control, type FieldValues, type Path } from "react-hook-form";

interface DateFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> {
  control: Control<TFieldValues>;
  name: TName;
  label: string;
  disabled?: boolean;
  placeholder?: string;
  maxYear?: number;
  minYear?: number;
}

export default function DateField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>({
  control,
  name,
  label,
  disabled = false,
  placeholder,
  maxYear,
  minYear,
}: DateFieldProps<TFieldValues, TName>): React.JSX.Element {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <DatePicker
              disabled={disabled}
              maxYear={maxYear}
              minYear={minYear}
              placeholder={placeholder}
              value={field.value ? new Date(field.value) : undefined}
              onChange={(date) => field.onChange(date?.toISOString())}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}