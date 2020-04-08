import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import PhotoComponent from "./components/PhotoComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
//import DevelopmentComponent from "./components/DevelopmentComponent.vue";
import PortfolioComponent from "./components/PortfolioComponent.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/development", redirect: "/portfolio" },
  {
    name: "home",
    path: "/home",
    components: {
      "app-main": PhotoComponent,
    },
  },
  {
    name: "portfolio",
    path: "/portfolio",
    components: {
      "app-main": PortfolioComponent,
    },
  },
  {
    name: "login",
    path: "/login",
    components: {
      "app-main": LoginComponent,
    },
  },
];

export default new VueRouter({
  mode: "history",
  routes: routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});
