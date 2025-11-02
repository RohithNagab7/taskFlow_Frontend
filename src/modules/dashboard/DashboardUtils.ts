import { z } from "zod";

export const agentSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  mobileNumber: z.string().regex(/^\+\d{1,3}\d{7,14}$/, {
    message:
      "Invalid mobile number format (must include country code, e.g., +911234567890)",
  }),
});

export type AgentFormValues = z.infer<typeof agentSchema>;

export interface AgentTypes {
  _id: string;
  name: string;
  email: string;
  mobileNumber: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface DistributedListTypes {
  email: string;
  name: string;
  _id: string;
  tasks: TasksTypes[];
}

export interface AgentCardDataProps {
  mobileNumber?: string;
  email: string;
  name: string;
  _id: string;
  tasks: TasksTypes[];
}

export interface TasksTypes {
  firstName: string;
  phone: string;
  notes: string;
}

export interface initialStateType {
  agentsData: AgentTypes[] | [];
}
