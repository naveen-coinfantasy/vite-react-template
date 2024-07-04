import axios from "axios";
import { BASE_FETCH_URL } from "./env";
export const axiosInstance = axios.create({
  baseURL: BASE_FETCH_URL,
});
