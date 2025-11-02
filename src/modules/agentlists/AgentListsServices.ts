import ServiceRequest from "../../utils/ServiceRequest";
import { GlobalAPIEndpoints } from "../../utils/APIEndpoints";

export const uploadTaskFile = async (file: File): Promise<any> => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await ServiceRequest.post(GlobalAPIEndpoints.FILE_POST, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error: any) {
    console.error("File upload error:", error);
    throw error;
  }
};

export const getAgentTasks = async (): Promise<any> => {
  try {
    const response = await ServiceRequest.get(GlobalAPIEndpoints.DISTRIBUTED_LIST_GET);
    return response;
  } catch (error: any) {
    console.error("Get agent tasks error:", error);
    throw error;
  }
};