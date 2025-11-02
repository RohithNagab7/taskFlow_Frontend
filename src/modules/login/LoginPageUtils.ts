import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Enter a valid email address" }),

  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse<T> {
  message: string;
  success: boolean;
  data: T;
}