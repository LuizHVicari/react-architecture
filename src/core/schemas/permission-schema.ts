import z from "zod";

export const permissionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  action: z.string(),
  resource: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type PermissionSchema = z.infer<typeof permissionSchema>;
