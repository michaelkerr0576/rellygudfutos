import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import PhotoGrid_Component from "./components/PhotoGrid.vue";
import Login_Component from "./components/Login.vue";
import Portfolio_Component from "./components/Portfolio.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/development", redirect: "/portfolio" },
  {
    name: "home",
    path: "/home",
    components: {
      "app-main": PhotoGrid_Component,
    },
  },
  {
    name: "portfolio",
    path: "/portfolio",
    components: {
      "app-main": Portfolio_Component,
    },
  },
  {
    name: "login",
    path: "/login",
    components: {
      "app-main": Login_Component,
    },
  },
];

export default new VueRouter({
  mode: "history",
  routes: routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});
