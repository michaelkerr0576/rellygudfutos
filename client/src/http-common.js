import axios from "axios";
require("dotenv").config();

export const instance = axios.create({
  baseURL: process.env.URL,
  timeout: 30000
  // headers: {
  //   Authorization: 'Bearer {token}'
  // }
});
