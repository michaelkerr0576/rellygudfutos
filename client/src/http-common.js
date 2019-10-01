import axios from "axios";

export const instance = axios.create({
  //** live server:
  //baseURL: `https://rellygudfutos.com/`,
  //** heroku server:
  //baseURL: `https://rellygudfutos.herokuapp.com/`,
  //** development server:
  baseURL: `http://localhost:5000/`,
  timeout: 30000
  // headers: {
  //   Authorization: 'Bearer {token}'
  // }
});
