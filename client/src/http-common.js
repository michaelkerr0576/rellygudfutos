import axios from "axios";

export const instance = axios.create({
  // TODO - some reason environemental variable is being a bollix
  // http://localhost:5000 for Dev and https://www.rellygudfutos.com for production
  //baseURL: "http://localhost:5000",
  baseURL: "https://www.rellygudfutos.com",
  //baseURL: process.env.VUE_APP_URL,
  timeout: 30000,
  // headers: {
  //   Authorization: 'Bearer {token}'
  // }
});
