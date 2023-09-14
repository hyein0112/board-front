import axios from "axios";
import { AxiosRequestConfig } from "axios";

const interceptor = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

interceptor.interceptors.request.use((error) => {
  return Promise.reject(error);
});

interceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const AxiosInstance = (data: AxiosRequestConfig) => {
  return interceptor({
    method: data.method,
    url: data.url,
    withCredentials: false,
    data: data.data,
  });
};

export default AxiosInstance;
