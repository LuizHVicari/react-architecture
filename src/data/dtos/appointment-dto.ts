import { z } from "zod";

export const appointmentApiDto = z
  .object({
    id: z.number(),
    created_by: z.string(),
    date: z.string(),
    description: z.string().nullable(),
    place: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
  })
  .transform((data) => ({
    id: data.id,
    createdBy: data.created_by,
    date: data.date,
    description: data.description,
    place: data.place,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  }));

export const insertAppointmentApiDto = z
  .object({
    id: z.number().optional(),
    created_by: z.string().optional(),
    date: z.string(),
    description: z.string().nullable().optional(),
    place: z.string(),
    created_at: z.string().optional(),
    updated_at: z.string(),
  })
  .transform((data) => ({
    id: data.id,
    createdBy: data.created_by,
    date: data.date,
    description: data.description,
    place: data.place,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  }));

export type AppointmentApiDto = z.infer<typeof appointmentApiDto>;
export type InsertAppointmentApiDto = z.infer<typeof insertAppointmentApiDto>;
