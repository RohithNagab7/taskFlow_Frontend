import { GlobalAPIEndpoints } from "../../utils/APIEndpoints";
import ServiceRequest from "../../utils/ServiceRequest";
import type { LoginPayload, LoginResponse } from "./LoginPageUtils";

const postLoginURL = GlobalAPIEndpoints.LOGIN_POST;

export const postLoginUser = async (
  payload: LoginPayload
): Promise<LoginResponse<[]>> => {
  try {
    const response = await ServiceRequest.post<LoginResponse<[]>>(
     postLoginURL ,
      payload
    );
    return response;
  } catch (error) {
    console.error("Login API Error:", error);
    throw error;
  }
};
