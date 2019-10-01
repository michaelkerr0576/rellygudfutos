<template>
  <div id="header">
    <b-container fluid>
      <b-row>
        <b-col offset="3" cols="9" offset-sm="7" sm="5" offset-md="8" md="4" offset-lg="9" lg="3">
          <div id="menu">
            <b-nav tabs>
              <b-nav-item
                router-link-exact-active
                to="/home"
                class="button"
                v-b-tooltip.hover
                title="Home"
              >
                <span class="fas fa-home"></span>
              </b-nav-item>
              <b-nav-item
                router-link-exact-active
                to="/development"
                class="button"
                v-b-tooltip.hover
                title="Development"
              >
                <span class="fab fa-dev"></span>
              </b-nav-item>
              <b-nav-item
                v-if="!isLoggedIn"
                router-link-exact-active
                to="/login"
                class="button"
                v-b-tooltip.hover
                title="Login"
              >
                <span class="fas fa-user-cog"></span>
              </b-nav-item>
              <b-nav-item
                v-if="isLoggedIn"
                @click="logout()"
                class="button"
                v-b-tooltip.hover
                title="Logout"
              >
                <span class="fas fa-sign-out-alt"></span>
              </b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <div id="rellygudfutos">
            <h1>rellygudfutos</h1>
          </div>
        </b-col>
      </b-row>
      <hr />
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "HeaderComponent",
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  margin-top: 20px;
}
#rellygudfutos {
  margin-top: 90px;
  margin-bottom: 15px;
}
hr {
  margin-top: 0px;
  margin-bottom: 0px;
}
h1 {
  margin-bottom: 0.5rem;
  font-family: "Cabin Sketch", cursive;
  font-weight: 500;
  line-height: 1.2;
}
@media (max-width: 576px) {
  #header {
    margin-top: 20px;
    margin-right: 0px;
    margin-left: 0px;
  }
  #rellygudfutos {
    margin-top: 45px;
    margin-left: 0px;
  }
}
</style>
