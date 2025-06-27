import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type UseFormReturn } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import type AppointmentsRepository from "@/core/repositories/appointments-repository";
import { CreateAppointmentErrors } from "@/core/repositories/appointments-repository";
import type {
  AppointmentSchema,
  CreateAppointmentSchema,
} from "@/core/schemas/appointment-schema";
import { createAppointmentSchema } from "@/core/schemas/appointment-schema";

interface Props {
  appointmentsRepository: AppointmentsRepository;
  onSuccess?: (appointment: AppointmentSchema) => Promise<void>;
  onError?: (error: CreateAppointmentErrors) => void;
}

type MutationResult =
  | { success: true; result: AppointmentSchema }
  | { success: false; reason: CreateAppointmentErrors };

type UseCreateAppointmentReturn = {
  form: UseFormReturn<CreateAppointmentSchema>;
  isPending: boolean;
  createError?: string;
  handleSubmit: ReturnType<
    UseFormReturn<CreateAppointmentSchema>["handleSubmit"]
  >;
};

export default function useCreateAppointment({
  appointmentsRepository,
  onSuccess,
  onError,
}: Props): UseCreateAppointmentReturn {
  const [createError, setCreateError] = useState<string | undefined>();

  const mutation = useMutation<
    MutationResult,
    unknown,
    CreateAppointmentSchema
  >({
    mutationFn: (data: CreateAppointmentSchema) =>
      appointmentsRepository.createAppointment(data as AppointmentSchema),
    onSuccess: async (result) => {
      if (result.success) {
        console.log("Appointment created:", result.result);
        await onSuccess?.(result.result);
      } else {
        onError?.(result.reason);
        switch (result.reason) {
          case CreateAppointmentErrors.InvalidParameters:
            setCreateError("Invalid appointment parameters.");
            break;
          default:
            setCreateError("Unknown error. Please try again.");
        }
      }
    },
  });

  const form = useForm<CreateAppointmentSchema>({
    resolver: zodResolver(createAppointmentSchema),
  });

  const onSubmit = async (data: CreateAppointmentSchema): Promise<void> => {
    setCreateError(undefined);
    await mutation.mutateAsync(data);
  };

  return {
    form,
    isPending: mutation.isPending,
    createError,
    handleSubmit: form.handleSubmit(onSubmit),
  };
}
