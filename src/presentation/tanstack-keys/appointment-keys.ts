import type AppointmentsRepository from "@/core/repositories/appointments-repository";
import serializeObject from "@/shared/helpers/serialize-object";

type ListAppointmentsFilters = Parameters<
  AppointmentsRepository["listAppointments"]
>[0];

export const getListAppointmentsQueryKeys = (
  filters: ListAppointmentsFilters,
): string[] => ["list-appointments", ...serializeObject(filters)];
