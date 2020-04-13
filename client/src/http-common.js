import axios from "axios";
require("dotenv").config();

export const instance = axios.create({
  // http://localhost:5000 for Dev and process.env.URL for production
  // baseURL: "http://localhost:5000",
  baseURL: process.env.URL,
  timeout: 30000
  // headers: {
  //   Authorization: 'Bearer {token}'
  // }
});
