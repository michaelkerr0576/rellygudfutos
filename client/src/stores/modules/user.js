/* eslint-disable */

import axios from "axios";
import { resolve } from "path";
import { instance } from "../../http-common";

export default {
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {}
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        instance
          .post("user/login", user)
          .then(response => {
            console.log(response);
            const token = response.data.token;
            const user = response.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(response);
          })
          .catch(error => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(error);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    }
  }
};
