import axios from "axios";

export const instance = axios.create({
  // TODO - some reason environemental variable is being a bollix
  // http://localhost:5000 for Dev and process.env.URL for production
  //baseURL: "http://localhost:5000",
  //baseURL: process.env.URL,
  baseURL: process.env.VUE_APP_URL,
  timeout: 30000,
  // headers: {
  //   Authorization: 'Bearer {token}'
  // }
});
