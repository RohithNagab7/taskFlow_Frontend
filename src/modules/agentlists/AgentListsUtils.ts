import { z } from "zod";

export const FileUploadSchema = z.object({
  file: z.any(),
});

export type FileUploadValues = z.infer<typeof FileUploadSchema>;
