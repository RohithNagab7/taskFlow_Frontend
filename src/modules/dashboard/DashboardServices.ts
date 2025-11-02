import { GlobalAPIEndpoints } from "../../utils/APIEndpoints";
import ServiceRequest from "../../utils/ServiceRequest";
import type { LoginResponse } from "../login/LoginPageUtils";
import type { AgentTypes } from "./DashboardUtils";


export const createAgentService = async (
  payload: Omit<AgentTypes, "_id">
): Promise<LoginResponse<AgentTypes[]>> => {
  try {
    const response = await ServiceRequest.post<LoginResponse<AgentTypes[]>>(
      GlobalAPIEndpoints.CREATE_AGENT,
      payload
    );
    return response;
  } catch (error) {
    console.error("Create Agent API Error:", error);
    throw error;
  }
};

// ✅ Get Agents
export const getAgentsService = async (): Promise<LoginResponse<AgentTypes[]>> => {
  try {
    const response = await ServiceRequest.get<LoginResponse<AgentTypes[]>>(
      GlobalAPIEndpoints.GET_AGENTS
    );
    return response;
  } catch (error) {
    console.error("Get Agents API Error:", error);
    throw error;
  }
};

// ✅ Delete Agent
export const deleteAgentService = async (
  id: string
): Promise<LoginResponse<AgentTypes[]>> => {
  try {
    const endpoint = GlobalAPIEndpoints.DELETE_AGENT.replace(":id", id);
    const response = await ServiceRequest.delete<LoginResponse<AgentTypes[]>>(
      endpoint
    );
    return response;
  } catch (error) {
    console.error("Delete Agent API Error:", error);
    throw error;
  }
};
