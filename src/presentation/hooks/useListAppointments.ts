import type AppointmentsRepository from "@/core/repositories/appointments-repository";
import { ListAppointmentsErrors } from "@/core/repositories/appointments-repository";
import type { AppointmentSchema } from "@/core/schemas/appointment-schema";
import assertUnreachable from "@/shared/helpers/assert-unreachable";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { getListAppointmentsQueryKeys } from "../tanstack-keys/appointment-keys";

type UseListAppointmentsReturn = {
  query: UseQueryResult<AppointmentSchema[]>;
};

interface Props {
  appointmentsRepository: AppointmentsRepository;
  filters: Record<string, unknown>;
}

export default function useListAppointments({
  appointmentsRepository,
  filters,
}: Props): UseListAppointmentsReturn {
  const listAppointments = async (): Promise<AppointmentSchema[]> => {
    const result = await appointmentsRepository.listAppointments(filters);

    if (result.success) {
      return result.result;
    }

    const { reason } = result;
    switch (reason) {
      case ListAppointmentsErrors.Unknown:
        throw new Error("Não foi possível listar as consultas");

      default:
        throw assertUnreachable(reason);
    }
  };

  const query = useQuery({
    queryFn: listAppointments,
    queryKey: getListAppointmentsQueryKeys(filters),
  });

  return { query };
}
