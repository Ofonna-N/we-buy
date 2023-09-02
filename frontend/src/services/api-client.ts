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

  post(config?: AxiosRequestConfig) {
    return axiosInstance.post<APIResponse<T>>(this.endpoint, config);
  }
}
