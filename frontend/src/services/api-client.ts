import axios, { AxiosRequestConfig } from "axios";
import APIResponse from "../types/APIResponse";

const axiosInstance = axios.create({
  baseURL: "/api",
});

export default class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get(config?: AxiosRequestConfig) {
    return axiosInstance.get<APIResponse<T>>(this.endpoint, config);
  }

  post<B>(body: B, config?: AxiosRequestConfig) {
    return axiosInstance.post<APIResponse<T>>(this.endpoint, body, config);
  }
  patch<B>(body: B, config?: AxiosRequestConfig) {
    return axiosInstance.patch<APIResponse<T>>(this.endpoint, body, config);
  }
  put<B>(body: B, config?: AxiosRequestConfig) {
    return axiosInstance.put<APIResponse<T>>(this.endpoint, body, config);
  }
  delete(config?: AxiosRequestConfig) {
    return axiosInstance.delete<APIResponse<T>>(this.endpoint, config);
  }
}
