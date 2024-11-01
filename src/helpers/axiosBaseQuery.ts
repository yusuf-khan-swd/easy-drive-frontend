import { IMeta } from "@/types";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosError, AxiosRequestConfig } from "axios";
import { instance as axiosInstance } from "./axiosInstance";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      body?: AxiosRequestConfig["data"]; // ! I think this data property is making redux to send body data in data property instead of sending body data in body property
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
      meta?: IMeta;
      contentType?: string;
    },
    unknown,
    unknown
  > =>
  async ({ url, method, body, params, contentType }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data: body,
        params,
        headers: {
          "Content-Type": contentType || "application/json",
        },
        // withCredentials: true, // TODO: comment out this line for cors error need to solve the issue
      });
      // return result; // ! previously only send result
      return { data: result.data }; // ? gpt solution for :  baseQuery returned an object containing neither a valid error and result. At least one of them should not be undefined
      // ? It needs to return an object with either the shape { data: <value> } or { error: <value> } that may contain an optional meta property.
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
