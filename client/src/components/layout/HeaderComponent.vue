<template>
  <div id="header">
    <b-container fluid>
      <!-- ----------- NAVIGATION BAR ----------- -->
      <b-row>
        <b-col
          offset="0"
          cols="12"
          offset-sm="1"
          sm="11"
          offset-md="6"
          md="6"
          offset-lg="7"
          lg="5"
        >
          <div id="menu">
            <b-nav tabs>
              <!-- Home Button -->
              <b-nav-item
                router-link-exact-active
                to="/home"
                class="button"
                v-b-tooltip.hover
                title="Home"
              >
                <span class="fas fa-home"></span>
              </b-nav-item>

              <!-- Storefront Button -->
              <b-nav-item
                router-link-exact-active
                href="https://michaelkerr.picfair.com/"
                class="button"
                v-b-tooltip.hover
                title="Storefront"
              >
                <span class="fas fa-store"></span>
              </b-nav-item>

              <!-- LinkedLn Button -->
              <b-nav-item
                router-link-exact-active
                href="https://www.linkedin.com/in/michael-kerr-941a95124/"
                class="button"
                v-b-tooltip.hover
                title="LinkedIn"
              >
                <span class="fab fa-linkedin-in"></span>
              </b-nav-item>

              <!-- Instagram Button -->
              <b-nav-item
                router-link-exact-active
                href="https://www.instagram.com/michaelkerr_futos/"
                class="button"
                v-b-tooltip.hover
                title="Instagram"
              >
                <span class="fab fa-instagram"></span>
              </b-nav-item>

              <!-- Portfolio Button -->
              <b-nav-item
                router-link-exact-active
                to="/portfolio"
                class="button"
                v-b-tooltip.hover
                title="Portfolio"
              >
                <span class="fas fa-briefcase"></span>
              </b-nav-item>

              <!-- Admin Button -->
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

      <!-- ----------- LOGO ----------- -->
      <b-row>
        <b-col cols="12">
          <div id="rellygudfutos">
            <b-navbar-brand href="/home">
              <h3>michaelkerr</h3>
              <h1>rellygudfutos</h1>
            </b-navbar-brand>
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
  color: black;
}
h3 {
  font-family: "Shadows Into Light Two", cursive;
  color: black;
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
