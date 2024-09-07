import { authKey } from "@/constants/authKey";
import { ResponseSuccessType } from "@/types";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage(authKey);
    console.log("access token in interceptor ", accessToken);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    console.log("config headers ", config.headers.Authorization);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("interceptor response ", response);
    const responseObject: ResponseSuccessType = {
      message: response?.data?.message,
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log(error);

    // ?  Use this bellow line code if we do not want modify error in axios interceptor.
    // return Promise.reject(error); // ! This line already been comment out previously

    console.log("interceptor error ", error?.response);
    // ! comment out if else block and use gpt solution
    // if (error?.response?.status === 403) {
    //   console.log("403 error ", error?.response);
    //   // ? I have added this code otherwise there is problem with error response or can remove the if else block
    //   const responseObject: IGenericErrorResponse = {
    //     statusCode: error?.response?.data?.statusCode || 500,
    //     message: error?.response?.data?.message || "Something went wrong",
    //     errorMessages: error?.response?.data?.errorMessages,
    //   };
    //   return responseObject;
    // } else {
    //   const responseObject: IGenericErrorResponse = {
    //     statusCode: error?.response?.data?.statusCode || 500,
    //     message: error?.response?.data?.message || "Something went wrong",
    //     errorMessages: error?.response?.data?.errorMessages,
    //   };
    //   return responseObject;
    // }

    return {
      error: {
        statusCode: error?.response?.status || 500,
        data: error?.response?.data || error.message,
        errorMessages: error?.response?.data?.errorMessages || [],
      },
    };
  }
);

export { instance };
