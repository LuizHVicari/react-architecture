import type AppointmentsRepository from "@/core/repositories/appointments-repository";
import useListAppointments from "../hooks/useListAppointments";
import type {
  AppointmentSchema,
  CreateAppointmentSchema,
} from "@/core/schemas/appointment-schema";
import useCreateAppointment from "../hooks/useCreateAppointment";
import type { UseFormReturn } from "react-hook-form";
import { useCallback, useState } from "react";

type UseHomePageReturn = {
  appointments?: AppointmentSchema[];
  isErrorListing: boolean;
  isLoading: boolean;
  isPendingCreate: boolean;
  createError?: string;
  form: UseFormReturn<CreateAppointmentSchema>;
  createModalOpen: boolean;
  refetch: () => void;
  handleSubmit: () => Promise<void>;
  openCreateModal: () => void;
  closeCreateModal: () => void;
};

interface Props {
  appointmentsRepository: AppointmentsRepository;
}

export default function useHomePage({
  appointmentsRepository,
}: Props): UseHomePageReturn {
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const {
    query: { data: appointments, isError: isErrorListing, isLoading, refetch },
  } = useListAppointments({
    appointmentsRepository,
    filters: {},
  });

  const { form, handleSubmit, isPending, createError } = useCreateAppointment({
    appointmentsRepository,
  });

  const openCreateModal = useCallback(() => {
    setCreateModalOpen(true);
  }, []);

  const closeCreateModal = useCallback(() => {
    setCreateModalOpen(false);
  }, []);

  return {
    appointments,
    isErrorListing,
    isLoading,
    createError,
    form,
    isPendingCreate: isPending,
    createModalOpen,
    refetch,
    handleSubmit,
    openCreateModal,
    closeCreateModal,
  };
}
