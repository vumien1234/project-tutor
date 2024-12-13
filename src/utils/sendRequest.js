import { notification } from "antd";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { v4 as uuidv4 } from "uuid";
import { createClient } from "@supabase/supabase-js";

function refactorURL(url) {
  // Xóa dấu / ở cuối URL hoặc dấu / trước dấu ?
  return url.replace(/\/(\?|$)/, "$1");
}


const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabaseApi = createClient(supabaseUrl, supabaseKey);

export const uploadImage = async (file, oldfile = "") => {
  const imageName = `${uuidv4()}.${file.name.split(".").pop()}`;

  if (oldfile) {
    await trackPromise(supabaseApi.storage.from("avatar").remove(oldfile));
  }

  // Track the promise and await the result
  await trackPromise(supabaseApi.storage.from("avatar").upload(`${imageName}`, file));

  return imageName;
};
export const BASE_URL = "https://api.onllearning.edu.vn/api";
// export const BASE_URL = "http://localhost:3005/api";

const SendRequest = async (url, payload, thunkAPI, method = "post") => {
  url = refactorURL(url);
  const token = localStorage.getItem("token") || "";
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  const makeRequest = async (retry = true) => {
    try {
      const dataPayload = { ...payload, retry: retry };
      const requestConfig = {
        method,
        url,
        [method.toLowerCase() === "get" ? "params" : "data"]: dataPayload
      };


      let response = await trackPromise(instance(requestConfig));
      if (response) {
        if (url === "/users/login") {
          notification.info({
            message: "Thành công",
            description: "Đăng nhập thành công."
          });
        } else {
          let successMessage = "";
          if (method.toLocaleLowerCase() === "post") {
            successMessage = "Dữ liệu đã được gửi và tạo thành công.";
          } else if (method.toLocaleLowerCase() === "put") {
            successMessage = "Dữ liệu đã được cập nhật thành công.";
          } else if (method.toLocaleLowerCase() === "delete") {
            successMessage = "Dữ liệu đã được xóa thành công.";
          }
          if (successMessage) {
            notification.success({
              message: "Thành công",
              description: successMessage
            });
          }
        }
      }

      if (response.data) {
        return response.data;
      } else {
        return response;
      }
    } catch (error) {
      if (error.response || error.code === "ERR_NETWORK") {
        if ((error.code === "ERR_NETWORK" || error.response.status === 500) && !retry) {
          // Gọi lại API một lần nữa
          // return makeRequest(true);
        } else {
          if (error.response.status !== 403) {
            if (url === "/users/me") {
              return thunkAPI.rejectWithValue(undefined, error);
            }
            if (error.response?.data?.error?.includes("duplicate key")) {
              notification.error({
                message: "Lỗi",
                description: "Dữ liệu đã tồn tại. Vui lòng kiểm tra lại."
              });
            } else {
              let errorMessage = "Có lỗi xảy ra khi lấy dữ liệu. Vui lòng thử lại.";
              if (method.toLocaleLowerCase() === "post") {
                errorMessage = "Có lỗi xảy ra khi gửi, tạo dữ liệu. Vui lòng thử lại.";
              } else if (method.toLocaleLowerCase() === "put") {
                errorMessage = "Có lỗi xảy ra khi cập nhật dữ liệu. Vui lòng thử lại.";
              } else if (method.toLocaleLowerCase() === "delete") {
                errorMessage = "Có lỗi xảy ra khi xóa dữ liệu. Vui lòng thử lại.";
              }
              notification.error({
                message: "Lỗi",
                description: errorMessage
              });
            }
          }
        }
      }
      return thunkAPI.rejectWithValue(undefined, error);
    }
  };

  const response = await makeRequest();
  return response
};

export default SendRequest;
