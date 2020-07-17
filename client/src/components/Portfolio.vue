<template>
  <div id="portfolio">
    <!-- ----------- NAVBAR----------- -->
    <div id="navbar" class="pt-3">
      <b-nav tabs>
        <!-- Profile Button -->
        <b-nav-item
          active
          v-scroll-to="{
            element: '#profile',
            offset: 0,
            duration: 400,
          }"
          >Profile</b-nav-item
        >
        <!-- About Me Button -->
        <b-nav-item
          v-scroll-to="{
            element: '#about-card',
            offset: -25,
            duration: 800,
          }"
          >About</b-nav-item
        >
        <!-- Skills & Tools Button -->
        <b-nav-item
          v-scroll-to="{
            element: '#skills-card',
            offset: -25,
            duration: 800,
          }"
          >Skills</b-nav-item
        >
        <!-- Projects Button -->
        <b-nav-item
          v-scroll-to="{
            element: '#projects',
            offset: 10,
            duration: 1200,
          }"
          >Projects</b-nav-item
        >
      </b-nav>
    </div>

    <!-- ----------- PROFILE----------- -->
    <div id="profile">
      <b-container fluid class="c-diagonal-split-background">
        <b-row>
          <!-- Profile Picture -->
          <!-- vue bootstrap cant handle custom sass xxxl breakpoints, using standard bootstrap syntax -->
          <div
            class="col-12 col-sm-12 col-md-4 col-lg-4 col-xxxl-3 col-xxxxl-2"
          >
            <div id="profile_image">
              <b-img
                fluid
                :src="assets.profile_image"
                width="auto"
                height="auto"
              ></b-img>
            </div>
          </div>

          <!-- Profile Details LEFT -->
          <b-col cols="auto" class="mr-auto">
            <div id="profile_details_left" class="pt-4 pb-3">
              <h1 class="text-light">MICHAEL <strong>KERR</strong></h1>
              <h3 class="text-light">Full Stack Web Developer</h3>
              <b-img
                left
                blank
                blank-color="#ccc"
                width="220"
                height="3.5"
              ></b-img>
              <div
                style="cursor: pointer;"
                onclick="window.location='mailto:michaelkerr0576@hotmail.com?subject=&body=';"
              >
                <h6 class="c-textUnderline text-light font-weight-light pt-3">
                  <i class="far fa-envelope mr-2"></i
                  >michaelkerr0576@hotmail.com
                </h6>
              </div>
              <h6 id="profile_details_mobile" class="text-light pt-1">
                <i class="fas fa-mobile-alt mr-2"></i
                >+353&thinsp;83&thinsp;805&thinsp;7946
              </h6>
              <h6 class="text-light pt-1">
                <i class="fas fa-map-marker-alt mr-2"></i>Dublin, Ireland
              </h6>
            </div>
          </b-col>

          <!-- Profile Details RIGHT -->
          <b-col align-self="end" cols="12" sm="auto">
            <div id="profile_details_right" class="pt-1 pb-3">
              <!-- Profile Details RIGHT - Linkedln -->
              <div
                style="cursor: pointer;"
                onclick="window.location='https://www.linkedin.com/in/michaelkerr0576/';"
              >
                <h6 class="text-light c-textUnderline">
                  <i class="fab fa-linkedin mr-2"></i
                  >linkedin.com/in/michaelkerr0576
                </h6>
              </div>

              <!-- Profile Details RIGHT - Github -->
              <div
                style="cursor: pointer;"
                onclick="window.location='https://github.com/michaelkerr0576';"
              >
                <h6 class="text-light c-textUnderline">
                  <i class="fab fa-github mr-2"></i>github.com/michaelkerr0576
                </h6>
              </div>

              <!-- Profile Details RIGHT - Instagram -->
              <!-- <div
                style="cursor: pointer;"
                onclick="window.location='https://www.instagram.com/michaelkerr_futos/';"
              >
                <h6 class="text-light profile_details_links c-textUnderline">
                  <i class="fab fa-instagram mr-2"></i
                  >instagram.com/michaelkerr_futos
                </h6>
              </div> -->

              <!-- Profile Details RIGHT - Website -->
              <div style="cursor: pointer;" onclick="window.location='/home';">
                <h6 class="text-light profile_details_links c-textUnderline">
                  <i class="fas fa-globe mr-2"></i>rellygudfutos.com/portfolio
                </h6>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- Border Step Down -->
    <div id="bordersteptogray1"></div>
    <div id="bordersteptogray2"></div>

    <!-- ----------- ABOUT & SKILLS ----------- -->
    <div id="aboutskills" class="pb-4">
      <b-container fluid class="pb-1">
        <b-row>
          <!-- ----------- ABOUT ME ----------- -->
          <!-- vue bootstrap cant handle custom sass xxxl breakpoints, using standard bootstrap syntax -->
          <div
            class="pt-4 col-12 col-sm-12 col-md-5 col-lg-4 col-xxxl-3 offset-xxxl-1 col-xxxxl-2 offset-xxxxl-2"
          >
            <b-card
              id="about-card"
              bg-variant="default"
              border-variant="light"
              class="mt-2"
            >
              <b-media no-body>
                <b-media-aside vertical-align="top">
                  <b-img
                    blank
                    blank-color="#ccc"
                    width="3.5"
                    height="85"
                  ></b-img>
                </b-media-aside>

                <b-media-body class="ml-3">
                  <b-row>
                    <b-col cols="12">
                      <h4>ABOUT ME</h4>
                    </b-col>
                  </b-row>

                  <b-media class="mt-1">
                    <b-card-text>
                      I am a Full Stack Web Developer specialised in frontend
                      and backend development for web applications. Experienced
                      using <em>Node.js</em> and <em>MongoDB</em> as well as
                      frontend frameworks like <em>Vue.js</em> and
                      <em>React.js</em> to deliver responsive and intuitive
                      experiences.
                    </b-card-text>
                    <b-card-text class="pt-2 border-top">
                      I graduated with a bachelor's degree in Multimedia Systems
                      and Web Design from Dun Laoghaire Institute of Art, Design
                      and Technology with a
                      <em>Second Class Honours, Grade 1</em>. Studies included a
                      wide set of disciplines in computing:
                      <em
                        >Advanced Javascript, Advanced Web Design, Multimedia
                        Systems, Software Production, Statistics, Usability/UX,
                        ASP.NET, Object-Oriented Programming, Computer Networks
                        and Distributed Systems & Digital Media
                        Entrepreneurship.</em
                      >
                    </b-card-text>
                    <b-card-text class="pt-2 border-top">
                      Want to know how I create my apps? Check out my projects
                      and review my code on GitHub. Want to contact me? Send me
                      an email. My CV is available upon request.
                    </b-card-text>
                  </b-media>
                </b-media-body>
              </b-media>
            </b-card>
            <div class="mt-2">
              <b-button
                squared
                block
                size="lg"
                variant="outline-dark"
                href="https://github.com/michaelkerr0576"
              >
                <!-- &thinsp; to keep button inline with CONTACT ME button -->
                <i class="fab fa-github mr-1"></i>
                MY GITHUB&thinsp;&thinsp;&thinsp;&thinsp;</b-button
              >
            </div>
            <div class="mt-2">
              <b-button
                squared
                block
                size="lg"
                variant="outline-dark"
                onclick="window.location='mailto:michaelkerr0576@hotmail.com?subject=&body=';"
              >
                <i class="far fa-envelope mr-2"></i>CONTACT ME</b-button
              >
            </div>
          </div>

          <!-- ----------- SKILLS & TOOLS ----------- -->
          <div
            class="pt-4 col-12 col-sm-12 col-md-7 col-lg-8 col-xxxl-7 col-xxxxl-6"
          >
            <b-card
              id="skills-card"
              bg-variant="default"
              border-variant="light"
              class="mt-2"
            >
              <b-media no-body>
                <b-media-aside vertical-align="top">
                  <b-img
                    blank
                    blank-color="#ccc"
                    width="3.5"
                    height="85"
                  ></b-img>
                </b-media-aside>

                <b-media-body class="ml-3">
                  <b-row>
                    <b-col cols="12">
                      <h4>SKILLS & TOOLS</h4>
                    </b-col>
                  </b-row>

                  <!-- Frontend -->
                  <b-media class="mt-1 border-top">
                    <template v-slot:aside>
                      <b-img
                        blank
                        blank-color="#ccc"
                        width="3.5"
                        height="100"
                      ></b-img>
                    </template>
                    <h5 class="pt-1 font-weight-normal">Frontend:</h5>
                    <b-row class="justify-content-md-center mt-3">
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.html5_image"
                          width="65"
                          height="auto"
                        ></b-img>
                        <p class="text-center font-weight-light">HTML5</p>
                      </b-col>
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.css3_image"
                          width="65"
                          height="auto"
                        ></b-img>
                        <p class="text-center font-weight-light">CSS3</p>
                      </b-col>
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.javascript_image"
                          width="57"
                          height="auto"
                        ></b-img>
                        <p class="text-center font-weight-light">JavaScript</p>
                      </b-col>
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.bootstrap_image"
                          width="64"
                          height="auto"
                        ></b-img>
                        <p class="text-center font-weight-light">Bootstrap</p>
                      </b-col>
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.vue_image"
                          width="64"
                          height="auto"
                        ></b-img>
                        <p class="text-center font-weight-light">Vue</p>
                      </b-col>
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.react_image"
                          width="73"
                          height="auto"
                        ></b-img>
                        <p class="text-center font-weight-light">React</p>
                      </b-col>
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.redux_image"
                          width="68"
                          height="auto"
                        ></b-img>
                        <p class="text-center font-weight-light">Redux</p>
                      </b-col>
                    </b-row>
                  </b-media>

                  <!-- Backend -->
                  <b-media class="mt-3 border-top">
                    <template v-slot:aside>
                      <b-img
                        blank
                        blank-color="#ccc"
                        width="3.5"
                        height="100"
                      ></b-img>
                    </template>
                    <h5 class="pt-1 font-weight-normal">Backend:</h5>
                    <b-row class="justify-content-md-center">
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.node_image"
                          width="95"
                          height="auto"
                          class="my-2 pt-3"
                        ></b-img>
                        <p class="text-center font-weight-light pt-1">Node</p>
                      </b-col>
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.npm_image"
                          width="100"
                          height="auto"
                          class="my-2 pt-4"
                        ></b-img>
                        <p class="text-center font-weight-light pt-3">NPM</p>
                      </b-col>
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.express_image"
                          width="107"
                          height="auto"
                        ></b-img>
                        <p class="text-center font-weight-light pt-1">
                          Express
                        </p>
                      </b-col>
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.mongoose_image"
                          width="118"
                          height="auto"
                          class="mt-4 mb-3 pt-3"
                        ></b-img>
                        <p class="text-center font-weight-light pt-3">
                          Mongoose
                        </p>
                      </b-col>
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.postman_image"
                          width="67"
                          height="auto"
                          class="mt-2 pt-1"
                        ></b-img>
                        <p class="text-center font-weight-light pt-3">
                          Postman
                        </p>
                      </b-col>
                    </b-row>
                  </b-media>

                  <!-- Database -->
                  <b-media class="mt-3 border-top">
                    <template v-slot:aside>
                      <b-img
                        blank
                        blank-color="#ccc"
                        width="3.5"
                        height="100"
                        alt="placeholder"
                      ></b-img>
                    </template>
                    <h5 class="pt-1 font-weight-normal">Database:</h5>
                    <b-row class="justify-content-md-center mt-3">
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.mongo_image"
                          width="135"
                          height="auto"
                          class="pt-3"
                        ></b-img>
                        <p class="text-center font-weight-light mt-3">
                          MongoDB
                        </p>
                      </b-col>
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.mysql_image"
                          width="120"
                          height="auto"
                          class="py-0"
                        ></b-img>
                        <p class="text-center font-weight-light mt-3">
                          MySQL
                        </p>
                      </b-col>
                    </b-row>
                  </b-media>

                  <!-- Deployment -->
                  <b-media class="mt-3 border-top">
                    <template v-slot:aside>
                      <b-img
                        blank
                        blank-color="#ccc"
                        width="3.5"
                        height="100"
                        alt="placeholder"
                      ></b-img>
                    </template>
                    <h5 class="pt-1 font-weight-normal">Deployment:</h5>
                    <b-row class="justify-content-md-center mt-3">
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.github_image"
                          width="65"
                          height="auto"
                        ></b-img>
                        <p class="text-center font-weight-light">GitHub</p>
                      </b-col>
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.heroku_image"
                          width="67"
                          height="auto"
                        ></b-img>
                        <p class="text-center font-weight-light">Heroku</p>
                      </b-col>
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.AWS_S3_image"
                          width="67"
                          height="auto"
                        ></b-img>
                        <p class="text-center font-weight-light">
                          AWS S3
                        </p>
                      </b-col>
                    </b-row>
                  </b-media>

                  <!-- Adobe -->
                  <b-media class="mt-3 border-top">
                    <template v-slot:aside>
                      <b-img
                        blank
                        blank-color="#ccc"
                        width="3.5"
                        height="100"
                        alt="placeholder"
                      ></b-img>
                    </template>
                    <h5 class="pt-1 font-weight-normal">Adobe:</h5>
                    <b-row class="justify-content-md-center mt-3">
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.photoshop_image"
                          width="65"
                          height="auto"
                        ></b-img>
                        <p class="text-center font-weight-light">Photoshop</p>
                      </b-col>
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.lightroom_image"
                          width="65"
                          height="auto"
                        ></b-img>
                        <p class="text-center font-weight-light">Lightroom</p>
                      </b-col>
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.premiere_image"
                          width="65"
                          height="auto"
                        ></b-img>
                        <p class="text-center font-weight-light">
                          Premiere
                        </p>
                      </b-col>
                    </b-row>
                  </b-media>
                </b-media-body>
              </b-media>
            </b-card>
          </div>
        </b-row>
      </b-container>
    </div>

    <!-- Border Step Down -->
    <div id="bordersteptogray3"></div>
    <div id="bordersteptogray4"></div>

    <!-- ----------- PROJECTS - GRID ----------- -->
    <div id="projects" class="my-5 pt-2">
      <b-container fluid>
        <!-- Project Title -->
        <b-row class="justify-content-center">
          <b-col cols="12" md="auto"
            ><div
              id="projects_title"
              class="border border-secondary rounded-0 pt-1 px-2 mb-2"
            >
              <h3>
                PROJECTS
              </h3>
            </div>
          </b-col>
        </b-row>

        <!-- Project Grid -->
        <div id="projects_grid" class="pt-2 pb-5 px-2">
          <b-row>
            <!-- vue bootstrap cant handle custom sass xxxl breakpoints, using standard bootstrap syntax -->
            <div
              class="col-12 col-xl-8 offset-xl-2 col-xxxl-6 offset-xxxl-3 col-xxxxl-4 offset-xxxxl-4"
            >
              <b-card-group deck>
                <b-card
                  v-for="project in projects"
                  :key="project.id"
                  class="img-hover-zoom"
                  no-body
                >
                  <b-card-img
                    :src="project.image"
                    :alt="project.title"
                    v-on:click="goToURL(project.liveDemo)"
                    style="cursor: pointer;"
                    top
                  ></b-card-img>
                  <!-- tech stack - badges -->
                  <b-card-body>
                    <b-card-title>{{ project.title }}</b-card-title>
                    <b-card-text class="pt-2 border-top">
                      <strong>Tech Stack: </strong>
                      <b-badge
                        v-for="tech in project.techStack"
                        :key="tech"
                        pill
                        variant="dark"
                        class="mr-2 py-1 px-2"
                      >
                        {{ tech }}
                      </b-badge>
                    </b-card-text>
                    <!-- objectives - text -->
                    <b-card-text class="pt-2 border-top">
                      <strong>Objective: </strong>
                      {{ project.objective }}
                    </b-card-text>
                    <!-- overview - text -->
                    <b-card-text class="py-2 border-top">
                      <strong>Overview: </strong>
                      {{ project.overview }}
                    </b-card-text>
                  </b-card-body>
                  <template v-slot:footer>
                    <!-- Card Buttons -->
                    <div class="btn-group special btn-group-md" role="group">
                      <!-- GitHub Button -->
                      <b-button
                        squared
                        :href="project.sourceCode"
                        variant="dark"
                        v-b-tooltip.hover
                        title="View Source Code"
                        ><span class="fab fa-github"></span
                      ></b-button>
                      <!-- Demo Button -->
                      <b-button
                        squared
                        :href="project.liveDemo"
                        variant="secondary"
                        v-b-tooltip.hover
                        title="Live Demo"
                        ><span class="fas fa-globe"></span
                      ></b-button>
                    </div>
                  </template>
                </b-card>
              </b-card-group>
            </div>
          </b-row>
        </div>
      </b-container>
    </div>

    <!-- Border Step Up -->
    <div id="bordersteptogray4"></div>
    <div id="bordersteptogray3"></div>
  </div>
</template>

<script>
/* eslint-disable */
import { instance } from "../http-common";
//about me
import profile_image from "../assets/profile.jpg";
//skills and tools
import html5_image from "../assets/html5.png";
import css3_image from "../assets/css3.png";
import javascript_image from "../assets/javascript.png";
import bootstrap_image from "../assets/bootstrap.png";
import vue_image from "../assets/vue.png";
import react_image from "../assets/react.png";
import redux_image from "../assets/redux.png";
import node_image from "../assets/node.png";
import express_image from "../assets/express.png";
import npm_image from "../assets/npm.svg";
import mongoose_image from "../assets/mongoose.png";
import postman_image from "../assets/postman.png";
import mongo_image from "../assets/mongodb.png";
import mysql_image from "../assets/mysql.png";
import github_image from "../assets/github.png";
import heroku_image from "../assets/heroku.png";
import AWS_S3_image from "../assets/AWS_S3.png";
import photoshop_image from "../assets/photoshop.svg";
import lightroom_image from "../assets/lightroom.svg";
import premiere_image from "../assets/premiere.svg";
//projects
import rellygudfutos_image from "../assets/rellygudfutos.jpg";
import fakenews_image from "../assets/fakenews.jpg";

export default {
  name: "DevelopmentComponent",
  data() {
    return {
      assets: {
        profile_image: profile_image,
        html5_image: html5_image,
        css3_image: css3_image,
        javascript_image: javascript_image,
        bootstrap_image: bootstrap_image,
        vue_image: vue_image,
        react_image: react_image,
        redux_image: redux_image,
        node_image: node_image,
        express_image: express_image,
        npm_image: npm_image,
        mongoose_image: mongoose_image,
        postman_image: postman_image,
        mongo_image: mongo_image,
        mysql_image: mysql_image,
        github_image: github_image,
        heroku_image: heroku_image,
        AWS_S3_image: AWS_S3_image,
        photoshop_image: photoshop_image,
        lightroom_image: lightroom_image,
        premiere_image: premiere_image,
      },
      projects: [
        {
          id: 1,
          image: rellygudfutos_image,
          title: "rellygudfutos",
          techStack: [
            "Vue",
            "Node",
            "Express",
            "Mongoose",
            "MongoDB",
            "AWS S3",
          ],
          objective:
            "To build a full stack website where I could showcase my photography.",
          overview:
            "The photography needed to be the main focus. The UI was built to be clear, consise and intuitive. Each feature takes up as little room as possible to allow the attention to be on the photography. Rellygudfutos was built using a MEVN Stack (MongoDB, Express, Vue, Node).",
          sourceCode: "https://github.com/michaelkerr0576/rellygudfutos",
          liveDemo: "/home",
        },
        {
          id: 2,
          image: fakenews_image,
          title: "fakenews",
          techStack: [
            "React",
            "Redux",
            "Node",
            "Express",
            "Mongoose",
            "MongoDB",
          ],
          objective:
            "To build a full stack newspaper application focused on typography.",
          overview:
            "WORK IN PROGRESS - 95% of the web content is typography. A good web designer should first focus this discipline before moving on to other web design components. No colour or images were used to show the significance of typography in front end development. Fakenews was built using a MERN Stack (MongoDB, Express, React, Node).",
          sourceCode: "https://github.com/michaelkerr0576/fakenews",
          liveDemo: "https://fakenews01.herokuapp.com/",
        },
      ],
    };
  },
  methods: {
    goToURL: function(url) {
      alert("Loading live demo @ " + url);
      if (url) {
        window.location.href = url;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#portfolio {
  line-height: 1.5;
}
#navbar {
  background-color: #f2f2f2;
}
#profile {
  /* background-color: #484848; */
}
#bordersteptogray1 {
  height: 15px;
  background-color: #ccc;
}
#bordersteptogray2 {
  height: 15px;
  background-color: #e8e8e8;
}
#bordersteptogray3 {
  height: 15px;
  background-color: #f6f6f6;
}
#bordersteptogray4 {
  height: 15px;
  background-color: #f9f9f9;
}
#aboutskills {
  background-color: #f2f2f2;
}
#profile_details_mobile {
  padding-left: 2px;
}
.c-textUnderline:hover {
  /* color: #fff; */
  text-decoration: underline;
}
.c-diagonal-split-background {
  background-color: #484848;
  width: 100%;
  background-image: linear-gradient(120deg, #484848 50%, #696969 50.2%);
}
/* [1] The container */
.img-hover-zoom {
  height: auto; /* [1.1] Set it as per your need */
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
}
/* [2] Transition property for smooth transformation of images */
.img-hover-zoom img {
  transition: transform 0.5s ease;
}
/* [3] Finally, transforming the image when container gets hovered */
.img-hover-zoom:hover img {
  transform: scale(1.11) translateY(-5.1%);
}
.card-footer {
  padding: 0px;
}
.badge-dark {
  color: #fff;
  background-color: #484848;
}
.btn-dark {
  color: #fff;
  background-color: #484848;
  border-color: #484848;
}
.btn-group.special {
  display: flex;
}
.special .btn {
  flex: 1;
  margin-right: 0px;
}
@media (max-width: 576px) {
  #profile_details_left {
    margin-left: 20px;
  }
  #profile_details_right {
    margin-left: 20px;
    margin-bottom: 15px;
  }
}
@media (max-width: 768px) {
  #projects_title {
    text-align: center;
  }
}
@media (max-width: 1012px) {
  #profile_details_left {
    margin-left: 0px;
  }
  #profile_details_right {
    margin-left: 0px;
    margin-bottom: 0px;
  }
  #profile_details_left > h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    font-size: 1.8em;
  }
  #profile_details_left > h3 {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 1.3em;
  }
  #profile_details_left > h6,
  #profile_details_left > div > h6,
  #profile_details_right > div > h6 {
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    font-size: 0.8em;
  }
  #profile_image {
    margin-right: -10px;
    margin-left: -10px;
  }
  /* .img {
    width: 50%;
  } */
  .card-body {
    padding: 5px;
  }
  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12,
  .col,
  .col-auto,
  .col-sm-1,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm,
  .col-sm-auto,
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md,
  .col-md-auto,
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg,
  .col-lg-auto,
  .col-xl-1,
  .col-xl-2,
  .col-xl-3,
  .col-xl-4,
  .col-xl-5,
  .col-xl-6,
  .col-xl-7,
  .col-xl-8,
  .col-xl-9,
  .col-xl-10,
  .col-xl-11,
  .col-xl-12,
  .col-xl,
  .col-xl-auto {
    padding: 0px 10px;
  }
}
@media (min-width: 1012px) {
  #profile_image {
    margin-left: -15px;
    margin-right: -15px;
  }
  #profile_details_left > h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    font-size: 3em;
  }
  #profile_details_left > h3 {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
  }
  #profile_details_left > h6,
  #profile_details_left > div > h6,
  #profile_details_right > div > h6 {
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
  }
}
@media (min-width: 1200px) {
  #profile_details_left,
  #profile_details_right {
    margin: 0px 15px;
  }
}
</style>
