import { z } from "zod";

export const appointmentSchema = z.object({
  id: z.number(),
  createdBy: z.string(),
  date: z.string(),
  description: z.string().nullable(),
  place: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type AppointmentSchema = z.infer<typeof appointmentSchema>;
