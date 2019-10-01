<template>
  <div id="login" class="py-5">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="8" lg="5">
          <h3 class="text-center">Admin</h3>
          <b-form autocomplete="off" @submit.prevent="login">
            <b-form-group>
              <b-input-group>
                <template v-slot:prepend>
                  <b-input-group-text>
                    <i class="fas fa-envelope"></i>
                  </b-input-group-text>
                </template>
                <b-form-input
                  id="input-email"
                  v-model="loginForm.email"
                  type="email"
                  required
                  placeholder="Email"
                ></b-form-input>
              </b-input-group>
            </b-form-group>

            <b-form-group>
              <b-input-group>
                <template v-slot:prepend>
                  <b-input-group-text>
                    <i class="fas fa-lock"></i>
                  </b-input-group-text>
                </template>
                <b-form-input
                  id="input-password"
                  v-model="loginForm.password"
                  type="password"
                  required
                  placeholder="Password"
                ></b-form-input>
              </b-input-group>
            </b-form-group>

            <div class="text-center">
              <b-button type="submit" variant="secondary" class="w-50">Login</b-button>
            </div>
          </b-form>
        </b-col>
        <p class="errors" v-if="errors.length > 0">{{errors}}</p>
      </b-row>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "LoginComponent",
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      },
      errors: []
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    login(event) {
      event.preventDefault();
      if (
        this.loginForm.email.length > 2 &&
        this.loginForm.password.length > 2
      ) {
        const email = this.loginForm.email;
        const password = this.loginForm.password;
        this.$store
          .dispatch("login", { email, password })
          .then(success => {
            this.$router.push("/");
          })
          .catch(err => {
            if (err.response) {
              // The request was made and the server responded with a status code
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
              this.errors.push(err.response.status);
              this.errors.push(err.response.data);
            } else if (err.request) {
              // The request was made but no response was received
              console.log(err.request);
              this.errors.push(err.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", err.message);
              this.errors.push("Error", err.message);
            }
            console.log(err.config);
          });
      }
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
  background-color: #f8f8f8;
}
</style>
