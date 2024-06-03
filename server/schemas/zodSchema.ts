import { z } from "zod";

export const updateSchema = z.object({
  ID: z.string().uuid(),
  nameToUpdate: z.string()
});

