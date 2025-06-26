import type { AppointmentSchema } from "../schemas/appointment-schema";
import type { Result } from "../types/result";

// Enums de erro para cada operação
export enum CreateAppointmentErrors {
  InvalidParameters,
}

export enum ListAppointmentsErrors {
  Unknown,
}

export enum DeleteAppointmentErrors {
  NotFound,
  Unknown,
}

export enum RetrieveAppointmentErrors {
  NotFound,
  Unknown,
}

export enum UpdateAppointmentErrors {
  NotFound,
  InvalidData,
  Unknown,
}

export default interface AppointmentsRepository {
  createAppointment(
    appointment: AppointmentSchema
  ): Promise<Result<AppointmentSchema, CreateAppointmentErrors>>;

  listAppointments(
    filters: object
  ): Promise<Result<AppointmentSchema[], ListAppointmentsErrors>>;

  deleteAppointment(
    id: AppointmentSchema["id"]
  ): Promise<Result<true, DeleteAppointmentErrors>>;

  retrieveAppointment(
    id: AppointmentSchema["id"]
  ): Promise<Result<AppointmentSchema, RetrieveAppointmentErrors>>;

  updateAppointment(
    id: AppointmentSchema["id"],
    updatedAppointment: Partial<AppointmentSchema>
  ): Promise<Result<AppointmentSchema, UpdateAppointmentErrors>>;
}
