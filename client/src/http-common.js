import axios from "axios";

export const instance = axios.create({
  // TODO - some reason environemental variable is being a bollix
  //baseURL: process.env.VUE_APP_URL,
  baseURL: "https://www.rellygudfutos.com",
  timeout: 30000,
  // headers: {
  //   Authorization: 'Bearer {token}'
  // }
});
