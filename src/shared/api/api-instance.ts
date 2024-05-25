import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> =>
  apiInstance({
    ...config,
    ...options,
  }).then((r) => {

    return r.data;
  });

export type BodyType<Data> = Data;
export type ErrorType<Error> = AxiosError<Error>;
