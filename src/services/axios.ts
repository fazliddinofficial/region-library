import axios from "axios";
import { store } from "../store";
import { clearToken } from "../store/authSlice";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9000",
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const {token} = store.getState().auth

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config
  },
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(clearToken())
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(clearToken())
    }

    return Promise.reject(error);
  }
)

export default axiosInstance;
