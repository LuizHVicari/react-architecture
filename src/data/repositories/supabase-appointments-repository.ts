import {
  CreateAppointmentErrors,
  DeleteAppointmentErrors,
  RetrieveAppointmentErrors,
  UpdateAppointmentErrors,
  ListAppointmentsErrors,
} from "@/core/repositories/appointments-repository";
import type AppointmentsRepository from "@/core/repositories/appointments-repository";
import type { AppointmentSchema } from "@/core/schemas/appointment-schema";
import type { Result } from "@/core/types/result";
import { supabase } from "@/shared/clients/supabase-client";
import SUPABASE_ENDPOINTS from "../constants/supabase-endpoints";
import { appointmentApiDto } from "../dtos/appointment-dto";

function toSnakeCaseAppointment(
  appointment: Partial<AppointmentSchema>,
): Record<string, unknown> {
  return {
    id: appointment.id,
    created_by: appointment.createdBy,
    date: appointment.date,
    description: appointment.description,
    place: appointment.place,
    created_at: appointment.createdAt,
    updated_at: appointment.updatedAt,
  };
}

export default class AppointmentsSupabaseRepository
  implements AppointmentsRepository
{
  async createAppointment(
    appointment: AppointmentSchema,
  ): Promise<Result<AppointmentSchema, CreateAppointmentErrors>> {
    try {
      const appointmentToInsert = toSnakeCaseAppointment(appointment);

      const { data, error } = await supabase
        .from(SUPABASE_ENDPOINTS.APPOINTMENTS)
        .insert(appointmentToInsert)
        .select()
        .single();

      if (error || !data) {
        return {
          success: false,
          reason: CreateAppointmentErrors.InvalidParameters,
        };
      }

      const parsed = appointmentApiDto.parse(data);

      return {
        success: true,
        result: parsed,
      };
    } catch {
      return {
        success: false,
        reason: CreateAppointmentErrors.InvalidParameters,
      };
    }
  }

  async listAppointments(
    _: object,
  ): Promise<Result<AppointmentSchema[], ListAppointmentsErrors>> {
    try {
      const { data, error } = await supabase
        .from(SUPABASE_ENDPOINTS.APPOINTMENTS)
        .select("*");

      if (error || !data)
        return {
          success: false,
          reason: ListAppointmentsErrors.Unknown,
        };

      const appointments = data.map((appointment) =>
        appointmentApiDto.parse(appointment),
      );
      return {
        success: true,
        result: appointments,
      };
    } catch {
      return {
        success: false,
        reason: ListAppointmentsErrors.Unknown,
      };
    }
  }

  async deleteAppointment(
    id: AppointmentSchema["id"],
  ): Promise<Result<true, DeleteAppointmentErrors>> {
    try {
      const { error } = await supabase
        .from(SUPABASE_ENDPOINTS.APPOINTMENTS)
        .delete()
        .eq("id", id);

      if (error) {
        if (error.code === "PGRST116") {
          return { success: false, reason: DeleteAppointmentErrors.NotFound };
        }
        return { success: false, reason: DeleteAppointmentErrors.Unknown };
      }

      return { success: true, result: true };
    } catch {
      return { success: false, reason: DeleteAppointmentErrors.Unknown };
    }
  }

  async retrieveAppointment(
    id: AppointmentSchema["id"],
  ): Promise<Result<AppointmentSchema, RetrieveAppointmentErrors>> {
    try {
      const { data, error } = await supabase
        .from(SUPABASE_ENDPOINTS.APPOINTMENTS)
        .select("*")
        .eq("id", id)
        .single();

      if (error || !data) {
        if (error?.code === "PGRST116") {
          return { success: false, reason: RetrieveAppointmentErrors.NotFound };
        }
        return { success: false, reason: RetrieveAppointmentErrors.Unknown };
      }

      const parsed = appointmentApiDto.parse(data);

      return {
        success: true,
        result: parsed,
      };
    } catch {
      return {
        success: false,
        reason: RetrieveAppointmentErrors.Unknown,
      };
    }
  }

  async updateAppointment(
    id: AppointmentSchema["id"],
    updatedAppointment: Partial<AppointmentSchema>,
  ): Promise<Result<AppointmentSchema, UpdateAppointmentErrors>> {
    try {
      const appointmentToUpdate = toSnakeCaseAppointment(updatedAppointment);

      const { data, error } = await supabase
        .from(SUPABASE_ENDPOINTS.APPOINTMENTS)
        .update(appointmentToUpdate)
        .eq("id", id)
        .select()
        .single();

      if (error || !data) {
        if (error?.code === "PGRST116") {
          return { success: false, reason: UpdateAppointmentErrors.NotFound };
        }
        return { success: false, reason: UpdateAppointmentErrors.InvalidData };
      }

      const parsed = appointmentApiDto.parse(data);

      return {
        success: true,
        result: parsed,
      };
    } catch {
      return {
        success: false,
        reason: UpdateAppointmentErrors.InvalidData,
      };
    }
  }
}
