import { authKey } from "@/constants/authKey";
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
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
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

    // ? Below code directly sending response with only data property but not message or others property.
    // const responseObject: ResponseSuccessType = {
    //   message: response?.data?.message,
    //   data: response?.data?.data,
    //   meta: response?.data?.meta,
    // };

    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log(error);

    // ?  Use this bellow line code if we do not want modify error in axios interceptor.
    // return Promise.reject(error); // ! This line already been comment out previously

    // ! comment out if else block and use gpt solution
    // if (error?.response?.status === 403) {
    //   console.log("403 error ", error?.response);

    //   ? I have added this code otherwise there is problem with error response or can remove the if else block
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

    // ! Below code is from ChatGPT solution it's work. But in the receiving end, response error is not thrown into catch block instead in result also no message or statusCode property only errorMessages property found
    // const responseObject: IGenericErrorResponse = {
    //   statusCode: error?.response?.data?.statusCode || 500,
    //   message: error?.response?.data?.message || "Something went wrong",
    //   errorMessages: error?.response?.data?.errorMessages,
    // };
    // return responseObject;

    // ! I was trying to send this below object to promise.reject function but it did not work
    // Promise.reject({
    //   success: error?.response?.data?.success || false,
    //   statusCode: error?.response?.data?.statusCode || 500,
    //   message:
    //     error?.response?.data?.message || error?.data || "Something went wrong",
    //   errorMessages: error?.response?.data?.errorMessages,
    // });

    console.log(error);

    if (error?.response?.data.message === "jwt expired") {
      console.log("jwt expired");
    }

    // ? Just return error object as it is and it well work fine with redux toolkit query
    return Promise.reject(error);
  }
);

export { instance };
