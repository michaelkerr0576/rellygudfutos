/* eslint-disable */
require("dotenv").config();
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import store from "./stores/store";
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo);

//client
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(require("vue-moment"));

const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}

Vue.config.productionTip = false;

new Vue(Vue.util.extend({ router, store }, App)).$mount("#app");
