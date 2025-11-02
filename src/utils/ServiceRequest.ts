import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

// ✅ Create a centralized Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:7777", // your backend URL
  withCredentials: true, // ensures cookies (JWTs) are sent automatically
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error.response?.data || error);
  }
);

class ServiceRequest {
  
  static async get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await axiosInstance.get<T>(url, config);
    return response.data;
  }

  // POST request
  static async post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await axiosInstance.post<T>(url, data, config);
    return response.data;
  }

  // DELETE request
  static async delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await axiosInstance.delete<T>(url, config);
    return response.data;
  }
}

export default ServiceRequest;
