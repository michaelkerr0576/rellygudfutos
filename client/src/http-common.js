import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.URL || process.env.VUE_APP_URL,
  timeout: 30000,
  // headers: {
  //   Authorization: 'Bearer {token}'
  // }
});
