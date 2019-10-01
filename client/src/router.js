import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import PhotoComponent from "./components/PhotoComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import DevelopmentComponent from "./components/DevelopmentComponent.vue";

const routes = [
  { path: "/", redirect: "/home" },
  {
    name: "home",
    path: "/home",
    components: {
      "app-main": PhotoComponent
    }
  },
  {
    name: "development",
    path: "/development",
    components: {
      "app-main": DevelopmentComponent
    }
  },
  {
    name: "login",
    path: "/login",
    components: {
      "app-main": LoginComponent
    }
  }
];

export default new VueRouter({
  mode: "history",
  routes: routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active"
});
