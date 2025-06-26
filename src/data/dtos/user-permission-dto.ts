import z from "zod";

export const userPermissionApiDto = z
  .object({
    id: z.string(),
    user_id: z.string(),
    permission_id: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
  })
  .transform((data) => ({
    id: data.id,
    userId: data.user_id,
    permissionId: data.permission_id,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  }));

export const insertUserPermissionApiDto = z
  .object({
    id: z.string().optional(),
    user_id: z.string(),
    permission_id: z.string(),
    created_at: z.string().optional(),
    updated_at: z.string().optional(),
  })
  .transform((data) => ({
    id: data.id,
    userId: data.user_id,
    permissionId: data.permission_id,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  }));

export type UserPermission = z.infer<typeof userPermissionApiDto>;
export type InsertUserPermission = z.infer<typeof insertUserPermissionApiDto>;
