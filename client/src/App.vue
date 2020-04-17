<template>
  <div id="app">
    <HeaderComponent />
    <router-view name="app-main"></router-view>
    <FooterComponent />
  </div>
</template>

<script>
/* eslint-disable */

import HeaderComponent from "./components/layout/Header.vue";
import FooterComponent from "./components/layout/Footer.vue";

export default {
  name: "app",
  components: {
    HeaderComponent,
    FooterComponent
  },
  created: function() {
    this.axios.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout").then(() => {
            this.$router.push("/login");
          });
        }
        throw err;
      });
    });
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgba(255, 255, 255, 0);
}
</style>
