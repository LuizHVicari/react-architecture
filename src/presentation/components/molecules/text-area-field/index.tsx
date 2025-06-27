import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/presentation/components/ui/form";
import { Textarea } from "@/presentation/components/ui/textarea";
import { type Control, type FieldValues, type Path } from "react-hook-form";

interface TextAreaFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> {
  control: Control<TFieldValues>;
  name: TName;
  label: string;
  disabled?: boolean;
  placeholder?: string;
  maxHeight?: string;
  rows?: number;
}

export default function TextAreaField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>({
  control,
  name,
  label,
  disabled = false,
  placeholder,
  maxHeight,
  rows,
}: TextAreaFieldProps<TFieldValues, TName>): React.JSX.Element {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              disabled={disabled}
              placeholder={placeholder}
              rows={rows}
              style={maxHeight ? { maxHeight } : undefined}
              {...field}
              value={field.value || ""}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
