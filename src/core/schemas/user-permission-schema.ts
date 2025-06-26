import z from "zod";

export const userPermissionSchema = z.object({
  id: z.string(),
  userId: z.string(),
  permissionId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type UserPermissionSchema = z.infer<typeof userPermissionSchema>;
