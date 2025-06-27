import type {
  AppointmentSchema,
  CreateAppointmentSchema,
} from "@/core/schemas/appointment-schema";
import AppointmentsTable from "@/presentation/components/organisms/appointments-table";
import CreateAppointmentModal from "@/presentation/components/organisms/create-appointment-modal";
import type { UseFormReturn } from "react-hook-form";

interface HomeScreenProps {
  appointments?: AppointmentSchema[];
  isError: boolean;
  isLoading: boolean;
  createModalOpen: boolean;
  isPendingCreate: boolean;
  createError?: string;
  form: UseFormReturn<CreateAppointmentSchema>;
  refetch: () => void;
  handleSubmit: () => Promise<void>;
  openCreateModal: () => void;
  closeCreateModal: () => void;
}

export default function HomeScreen({
  appointments = [],
  isError,
  isLoading,
  createModalOpen,
  isPendingCreate,
  createError,
  form,
  refetch,
  handleSubmit,
  openCreateModal,
  closeCreateModal,
}: HomeScreenProps): React.JSX.Element {
  if (isError) {
    return (
      <div className="h-full w-full p-4 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error loading appointments</p>
          <button
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            onClick={refetch}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="h-full w-full p-4 flex items-center justify-center">
        <div className="text-center">Loading appointments...</div>
      </div>
    );
  }

  return (
    <div className="h-full w-full p-4">
      <AppointmentsTable
        appointments={appointments}
        onClickAdd={openCreateModal}
      />
      <CreateAppointmentModal
        createError={createError}
        form={form}
        handleSubmit={handleSubmit}
        isPending={isPendingCreate}
        open={createModalOpen}
        onOpenChange={closeCreateModal}
      />
    </div>
  );
}
