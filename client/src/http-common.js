import axios from "axios";

export const instance = axios.create({
  //Use VUE_APP_URL for developement and URL for production
  //process.env.VUE_APP_URL,
  baseURL: process.env.URL,
  timeout: 30000,
  // headers: {
  //   Authorization: 'Bearer {token}'
  // }
});
