import { z } from "zod";

export const permissionApiDto = z
  .object({
    id: z.string().uuid(),
    name: z.string(),
    description: z.string().nullable(),
    action: z.string(),
    resource: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
  })
  .transform((data) => ({
    id: data.id,
    name: data.name,
    description: data.description,
    action: data.action,
    resource: data.resource,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  }));

export const insertPermissionApiDto = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string().nullable().optional(),
    action: z.string(),
    resource: z.string(),
    created_at: z.string().optional(),
    updated_at: z.string().optional(),
  })
  .transform((data) => ({
    id: data.id,
    name: data.name,
    description: data.description,
    action: data.action,
    resource: data.resource,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  }));

export type Permission = z.infer<typeof permissionApiDto>;
export type InsertPermission = z.infer<typeof insertPermissionApiDto>;
