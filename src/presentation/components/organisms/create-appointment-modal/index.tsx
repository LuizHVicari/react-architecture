import Modal from "@/presentation/components/molecules/modal";
import DateField from "@/presentation/components/molecules/date-field";
import TextField from "@/presentation/components/molecules/text-field";
import TextAreaField from "@/presentation/components/molecules/text-area-field";
import { Button } from "@/presentation/components/ui/button";
import { Form } from "@/presentation/components/ui/form";
import type { UseFormReturn } from "react-hook-form";
import type { CreateAppointmentSchema } from "@/core/schemas/appointment-schema";

interface CreateAppointmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  form: UseFormReturn<CreateAppointmentSchema>;
  handleSubmit: () => Promise<void>;
  isPending: boolean;
  createError?: string;
}

export default function CreateAppointmentModal({
  open,
  onOpenChange,
  form,
  handleSubmit,
  isPending,
  createError,
}: CreateAppointmentModalProps): React.JSX.Element {
  return (
    <Modal
      open={open}
      title="Create New Appointment"
      onOpenChange={onOpenChange}
    >
      <Form {...form}>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <DateField
            control={form.control}
            label="Data"
            name="date"
            placeholder="Selecione a data da consulta"
          />

          <TextField
            control={form.control}
            label="Local"
            name="place"
            placeholder="Informe o local"
          />

          <TextAreaField
            control={form.control}
            label="Descrição (Opcional)"
            maxHeight="128px"
            name="description"
            placeholder="Descrição..."
            rows={3}
          />

          {createError && (
            <div className="text-sm text-red-500">{createError}</div>
          )}

          <div className="flex justify-end gap-2">
            <Button
              disabled={isPending}
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button disabled={isPending} type="submit">
              {isPending ? "Creating..." : "Create Appointment"}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
}
