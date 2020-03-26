<template>
  <div id="footer">
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <hr />
        </b-col>
      </b-row>
      <!-- ----------- SOCIAL MEDIA BUTTONS ----------- -->
      <b-row class="justify-content-center pt-5">
        <b-col cols="auto">
          <br /><br />
          <b-button-group size="md">
            <!-- Storefront Button -->
            <b-button
              href="https://michaelkerr.picfair.com/"
              variant="info"
              v-b-tooltip.hover
              title="Storefront"
            >
              <span class="fas fa-store"></span>
            </b-button>

            <!-- LinkedIn Button -->
            <b-button
              href="https://www.linkedin.com/in/michael-kerr-941a95124/"
              variant="primary"
              v-b-tooltip.hover
              title="LinkedIn"
            >
              <span class="fab fa-linkedin-in"></span>
            </b-button>

            <!-- Instagram Button -->
            <b-button
              href="https://www.instagram.com/michaelkerr_futos/"
              variant="danger"
              v-b-tooltip.hover
              title="Instagram"
            >
              <span class="fab fa-instagram"></span>
            </b-button>

            <!-- GitHub Button -->
            <b-button
              href="https://github.com/michaelkerr0576/rellygudfutos"
              variant="warning"
              v-b-tooltip.hover
              title="GitHub"
            >
              <span class="fab fa-github"></span>
            </b-button>
          </b-button-group>
        </b-col>
      </b-row>
      <b-row class="justify-content-center pt-2 pb-5">
        <b-col cols="auto">
          <h4>michaelkerr</h4>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
  margin-top: 0px;
  margin-bottom: 0px;
}
h4 {
  font-family: "Shadows Into Light Two", cursive;
  color: black;
}
</style>
