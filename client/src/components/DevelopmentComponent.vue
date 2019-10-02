<template>
  <div id="developemnt" class="py-5">
    <b-container fluid>
      <b-row class="justify-content-md-center">
        <b-col cols="12" xl="8">
          <b-row align-h="between" class="mt-3">
            <b-col cols="auto">
              <h3>
                How
                <i>rellygudfutos</i> was built
              </h3>
            </b-col>
            <b-col cols="auto">
              <b-button-group size="md">
                <b-button
                  href="https://github.com/michaelkerr0576/rellygudfutos"
                  variant="warning"
                  v-b-tooltip.hover
                  title="View Source Code"
                >
                  <span class="fab fa-github"></span>
                  <!-- <span class="fab fa-github-square"></span> -->
                </b-button>
                <b-button
                  href="https://www.linkedin.com/in/michael-kerr-941a95124/"
                  variant="primary"
                  v-b-tooltip.hover
                  title="View LinkedIn"
                >
                  <span class="fab fa-linkedin-in"></span>
                  <!-- <span class="fab fa-linkedin"></span> -->
                </b-button>
              </b-button-group>
            </b-col>
          </b-row>

          <b-card id="technologies-card" bg-variant="default" border-variant="light" class="mt-2">
            <b-media no-body>
              <b-media-aside vertical-align="top">
                <b-img blank blank-color="#ccc" width="3.5" height="85"></b-img>
              </b-media-aside>

              <b-media-body class="ml-3">
                <b-row>
                  <b-col cols="12">
                    <h4>Technologies used:</h4>
                  </b-col>
                </b-row>

                <b-media class="mt-1">
                  <template v-slot:aside>
                    <b-img blank blank-color="#ccc" width="3.5" height="75"></b-img>
                  </template>
                  <h5 class="font-weight-normal">Frontend:</h5>
                  <b-row class="justify-content-md-center mt-3">
                    <b-col cols="auto">
                      <b-img center :src="assets.html5_image" width="85" height="auto"></b-img>
                      <p class="text-center font-weight-light">HTML5</p>
                    </b-col>
                    <b-col cols="auto">
                      <b-img center :src="assets.css3_image" width="85" height="auto"></b-img>
                      <p class="text-center font-weight-light">CSS3</p>
                    </b-col>
                    <b-col cols="auto">
                      <b-img center :src="assets.javascript_image" width="75" height="auto"></b-img>
                      <p class="text-center font-weight-light">JavaScript</p>
                    </b-col>
                    <b-col cols="auto">
                      <b-img center :src="assets.bootstrap_image" width="85" height="auto"></b-img>
                      <p class="text-center font-weight-light">Bootstrap</p>
                    </b-col>
                    <b-col cols="auto">
                      <b-img center :src="assets.vue_image" width="85" height="auto"></b-img>
                      <p class="text-center font-weight-light">Vue</p>
                    </b-col>
                  </b-row>
                </b-media>

                <b-media class="mt-3">
                  <template v-slot:aside>
                    <b-img blank blank-color="#ccc" width="3.5" height="75"></b-img>
                  </template>
                  <h5 class="font-weight-normal">Backend:</h5>
                  <b-row class="justify-content-md-center">
                    <b-col cols="auto">
                      <b-img
                        center
                        :src="assets.node_image"
                        width="115"
                        height="auto"
                        class="my-2 pt-3"
                      ></b-img>
                      <p class="text-center font-weight-light pt-1">Node</p>
                    </b-col>
                    <b-col cols="auto">
                      <b-img
                        center
                        :src="assets.npm_image"
                        width="114"
                        height="auto"
                        class="my-3 pt-3"
                      ></b-img>
                      <p class="text-center font-weight-light pt-3">NPM</p>
                    </b-col>
                    <b-col cols="auto">
                      <b-img center :src="assets.express_image" width="118" height="auto"></b-img>
                      <p class="text-center font-weight-light pt-2">Express</p>
                    </b-col>
                    <b-col cols="auto">
                      <b-img
                        center
                        :src="assets.mongoose_image"
                        width="148"
                        height="auto"
                        class="my-4 pt-3"
                      ></b-img>
                      <p class="text-center font-weight-light pt-3">Mongoose</p>
                    </b-col>
                  </b-row>
                </b-media>

                <b-media class="mt-3">
                  <template v-slot:aside>
                    <b-img blank blank-color="#ccc" width="3.5" height="75" alt="placeholder"></b-img>
                  </template>
                  <h5 class="font-weight-normal">Database:</h5>
                  <b-row class="justify-content-md-center mt-3">
                    <b-col cols="auto">
                      <b-img
                        center
                        :src="assets.mongo_image"
                        width="150"
                        height="auto"
                        class="py-1"
                      ></b-img>
                      <p class="text-center font-weight-light mt-3">MongoDB</p>
                    </b-col>
                  </b-row>
                </b-media>

                <b-media class="mt-3">
                  <template v-slot:aside>
                    <b-img blank blank-color="#ccc" width="3.5" height="75" alt="placeholder"></b-img>
                  </template>
                  <h5 class="font-weight-normal">Deployment:</h5>
                  <b-row class="justify-content-md-center mt-3">
                    <b-col cols="auto">
                      <b-img center :src="assets.github_image" width="85" height="auto"></b-img>
                      <p class="text-center font-weight-light">GitHub</p>
                    </b-col>
                    <b-col cols="auto">
                      <b-img center :src="assets.heroku_image" width="88" height="auto"></b-img>
                      <p class="text-center font-weight-light">Heroku</p>
                    </b-col>
                    <b-col cols="auto">
                      <b-img center :src="assets.AWS_S3_image" width="89" height="auto"></b-img>
                      <p class="text-center font-weight-light">Amazon Web Services S3</p>
                    </b-col>
                  </b-row>
                </b-media>
              </b-media-body>
            </b-media>
          </b-card>

          <b-card id="summary-card" bg-variant="default" border-variant="light" class="mt-5">
            <b-media no-body>
              <b-media-aside vertical-align="top">
                <b-img blank blank-color="#ccc" width="3.5" height="85"></b-img>
              </b-media-aside>

              <b-media-body class="ml-3">
                <b-row>
                  <b-col cols="12">
                    <h4>Summary:</h4>
                    <p
                      class="font-weight-normal py-1 px-3"
                    >The goal was to build a full stack website where I could showcase my photography. The site needed to be built with a dynamic UI to support a wide range of devices (phone, tablet, desktop, etc). I wanted to create the backend (server side) and the user facing frontend (client side) to run CRUD operations. CRUD refers to the major functions to create, read, update or delete records from a database. Only read requests will be available for non admin users, allowing them access to view photos, but not to create, update, or delete them. Create, update and delete will only be available for the admin (me). The desired result was a photo grid that can be filtered, sorted and searched in a visually appealing manner. I went with a MEVN stack to build the website, it stands for MongoDB, Express, Vue and Node (exciting). Normally people refer to a MEAN stack but I swapped out Angular for Vue as my frontend framework.</p>
                  </b-col>
                </b-row>
                <b-row class="justify-content-md-center mt-4">
                  <b-col cols="12">
                    <b-img thumbnail center fluid :src="assets.photo_grid_image" alt="photo_grid"></b-img>
                    <p class="text-center font-weight-light">Photo grid: layout, sorting & filtering</p>
                  </b-col>
                </b-row>
              </b-media-body>
            </b-media>
          </b-card>

          <b-card id="database-card" bg-variant="default" border-variant="light" class="mt-5">
            <b-media no-body>
              <b-media-aside vertical-align="top">
                <b-img blank blank-color="#ccc" width="3.5" height="85"></b-img>
              </b-media-aside>

              <b-media-body class="ml-3">
                <b-row>
                  <b-col cols="12">
                    <h4>Database:</h4>
                    <p
                      class="font-weight-normal py-1 px-3"
                    >MongoDB was chosen as it is a schema-less database, way less hassle in getting set up as I do not have to define strict database schema and can store the data as JSON documents. Having the option to store files where each document could have its own set of unique fields appealed to me. I went with MongoDB Atlas as my storage because it is a global cloud database service and is compliant with data security and privacy standards.</p>
                    <p
                      class="font-weight-normal py-1 px-3"
                    >I used an ODM (Object Data Modelling) called Mongoose to help manage relationships between data, providing schema validation and translate objects in code to be represented in MongoDB. I potentially overused Mongoose when defining models, schema, and relationships, slightly defeating the purpose of a schema-less database.</p>
                  </b-col>
                </b-row>
                <b-row class="justify-content-md-center mt-4">
                  <b-col cols="12" md="auto">
                    <b-img
                      thumbnail
                      center
                      fluid
                      :src="assets.mongoDB_atlas_image"
                      alt="mongoDB_atlas"
                    ></b-img>
                    <p
                      class="text-center font-weight-light"
                    >Cluster in MongoDB Atlas containing 1 database with 3 collections</p>
                  </b-col>
                  <b-col cols="12" md="auto">
                    <b-img
                      thumbnail
                      center
                      fluid
                      :src="assets.mongoose_model_photo_image"
                      alt="mongoose_model_photo"
                    ></b-img>
                    <p class="text-center font-weight-light">Mongoose photo model</p>
                  </b-col>
                  <b-col cols="12" md="auto">
                    <b-img
                      thumbnail
                      center
                      fluid
                      :src="assets.mongoose_model_tags_image"
                      alt="mongoose_model_tags"
                    ></b-img>
                    <p class="text-center font-weight-light">Mongoose tags model</p>
                  </b-col>
                </b-row>
              </b-media-body>
            </b-media>
          </b-card>

          <b-card id="backend-card" bg-variant="default" border-variant="light" class="mt-5">
            <b-media no-body>
              <b-media-aside vertical-align="top">
                <b-img blank blank-color="#ccc" width="3.5" height="85"></b-img>
              </b-media-aside>

              <b-media-body class="ml-3">
                <b-row>
                  <b-col cols="12">
                    <h4>Backend:</h4>
                    <p
                      class="font-weight-normal py-1 px-3"
                    >Node.js was chosen as it offers the luxury of writing server side applications in JavaScript. This allowed me to develop both the frontend and backend in JavaScript using a runtime environment. No other server side programming language was needed. Perfect for creating real time applications, providing asynchronous, event driven I/O APIs. It runs single threaded event based loop so there is no risk of dead-locking the process since all execution is non-blocking. It is useful that when the application's photos are loading to the grid other events are not being blocked. Both events will be run simultaneously.</p>
                    <p
                      class="font-weight-normal py-1 px-3"
                    >NPM (Node Package Manager) is a powerful package manager, it made package installation, version management and dependency management simple (simple as it can be). All dependencies and versions are stored in the package.json where I can easily see what is installed.</p>
                    <p
                      class="font-weight-normal py-1 px-3"
                    >Express is a minimal and flexible Node.js web application framework that allows the user to define routing which is used to perform different actions based on HTTP Requests (GET, POST, PUT or DELETE) on specific URLs. The purpose is to dynamically render HTML pages according to routing request.</p>
                  </b-col>
                </b-row>
                <b-row class="justify-content-md-center mt-4">
                  <b-col cols="12" md="auto">
                    <b-img thumbnail center fluid :src="assets.NPM_backend_image" alt="NPM_backend"></b-img>
                    <p class="text-center font-weight-light">NPM backend dependencies</p>
                  </b-col>
                  <b-col cols="12" md="auto">
                    <b-img
                      thumbnail
                      center
                      fluid
                      :src="assets.NPM_frontend_image"
                      alt="NPM_frontend"
                    ></b-img>
                    <p class="text-center font-weight-light">NPM frontend dependencies</p>
                  </b-col>
                  <b-col cols="12" md="auto">
                    <b-img
                      thumbnail
                      center
                      fluid
                      :src="assets.express_routes_photo_image"
                      alt="express_routes_photo"
                    ></b-img>
                    <p class="text-center font-weight-light">Express photo routes</p>
                  </b-col>
                  <b-col cols="12" md="auto">
                    <b-img
                      thumbnail
                      center
                      fluid
                      :src="assets.express_routes_tags_image"
                      alt="express_routes_tags"
                    ></b-img>
                    <p class="text-center font-weight-light">Express tags routes</p>
                  </b-col>
                </b-row>
              </b-media-body>
            </b-media>
          </b-card>

          <b-card id="frontend-card" bg-variant="default" border-variant="light" class="mt-5">
            <b-media no-body>
              <b-media-aside vertical-align="top">
                <b-img blank blank-color="#ccc" width="3.5" height="85"></b-img>
              </b-media-aside>

              <b-media-body class="ml-3">
                <b-row>
                  <b-col cols="12">
                    <h4>Frontend:</h4>
                    <p
                      class="font-weight-normal py-1 px-3"
                    >Vue.js was chosen as it is known as an emerging frontend technology and is often compared to Angular.js and React.js. Vue.js is a combination of the two, utilising concepts such as directives and components to control and render user interfaces. I loved the fact that each file component can store HTML, CSS and JavaScript. It felt natural and far easier to manage the individual components. At this point in time, nearly every useful JavaScript plugin has a Vue.js version, which makes it uncomplicated to integrate as a component.</p>
                    <p
                      class="font-weight-normal py-1 px-3"
                    >I chose the magical Isotope plugin to help dynamically change layout, sort and filter the photo grid. Isotope supports plenty of different layouts, the three I was interested in were Masonry, Packery and Vertical. It was between Masonry and Packery to be the default layout mode, Masonry places elements based on the vertical space available while Packery will fill the empty gaps. I went with Packery to fill the grid in a more visually pleasing manner. A downside to Packery is that if a photo does not fit a gap in the grid, it will push the next available photo that can fit regardless if it’s next in the sort order or not. This is a concession to fill the grid width and make it look aesthetically pleasing. The vertical layout will present the photos in a list where the photo is larger and centred.</p>
                    <p
                      class="font-weight-normal py-1 px-3"
                    >A major goal was to be able to dynamically update the grid by filtering tags and sorting by date, title or shuffle. The user can have one active filter and sort at any one time. Other photo grid features include a search by title input, a mode to view the Packery or the Vertical layout in fullscreen and a click photo view where the user can view a larger photo and photo details (title, tags, date uploaded).</p>
                    <p
                      class="font-weight-normal py-1 px-3"
                    >The admin has access to additional functionality, this includes an admin form that can upload a new photo, add a new tag, delete a tag or update a tag. The photo grid and available tags will dynamically update based off actions, there is no need to reload the DOM (Document Object Model) after every action. If the admin is logged in, they will have a different view of the photo grid Vertical layout. A form is present to allow the admin to delete or update a photo. The admin components can be dynamically rendered depending if the admin is logged in or not.</p>
                  </b-col>
                </b-row>
                <b-row class="justify-content-md-center mt-4">
                  <b-col cols="12" md="auto">
                    <b-img
                      thumbnail
                      center
                      fluid
                      :src="assets.isotope_masonry_image"
                      alt="isotope_masonry"
                    ></b-img>
                    <p class="text-center font-weight-light">Isotope masonry</p>
                  </b-col>
                  <b-col cols="12" md="auto">
                    <b-img
                      thumbnail
                      center
                      fluid
                      :src="assets.isotope_packery_image"
                      alt="isotope_packery"
                    ></b-img>
                    <p class="text-center font-weight-light">Isotope packery</p>
                  </b-col>
                  <b-col cols="12" md="auto">
                    <b-img
                      thumbnail
                      center
                      fluid
                      :src="assets.isotope_vertical_image"
                      alt="isotope_vertical"
                    ></b-img>
                    <p class="text-center font-weight-light">Isotope vertical</p>
                  </b-col>
                  <b-col cols="12" md="auto">
                    <b-img
                      thumbnail
                      center
                      fluid
                      :src="assets.isotope_sorting_image"
                      alt="isotope_sorting"
                    ></b-img>
                    <p class="text-center font-weight-light">Isotope sorting</p>
                  </b-col>
                  <b-col cols="12" md="auto">
                    <b-img
                      thumbnail
                      center
                      fluid
                      :src="assets.isotope_filtering_image"
                      alt="isotope_filtering"
                    ></b-img>
                    <p class="text-center font-weight-light">Isotope filtering</p>
                  </b-col>
                  <b-col cols="12" md="auto">
                    <b-img thumbnail center fluid :src="assets.admin_form_image" alt="admin_form"></b-img>
                    <p class="text-center font-weight-light">Admin form</p>
                  </b-col>
                  <b-col cols="12" md="auto">
                    <b-img
                      thumbnail
                      center
                      fluid
                      :src="assets.admin_form_editphoto_image"
                      alt="admin_form_editphoto"
                    ></b-img>
                    <p class="text-center font-weight-light">Admin edit photo form</p>
                  </b-col>
                </b-row>
              </b-media-body>
            </b-media>
          </b-card>

          <b-card id="deployment-card" bg-variant="default" border-variant="light" class="mt-5">
            <b-media no-body>
              <b-media-aside vertical-align="top">
                <b-img blank blank-color="#ccc" width="3.5" height="85"></b-img>
              </b-media-aside>

              <b-media-body class="ml-3">
                <b-row>
                  <b-col cols="12">
                    <h4>Deployment:</h4>
                    <p
                      class="font-weight-normal py-1 px-3"
                    >Heroku is a perfect choice for any developer working on personal projects or small applications, if your expected monthly website traffic is minimal then Heroku is a no brainer. Other more complex competitors like Amazon Web Services (AWS) should only be considered if your traffic is high enough to merit it. Heroku is a cloud platform that helps you deploy and host your applications. It takes care of the “easy” configurations and integrates seamlessly with GitHub for automated deployment.</p>
                    <p
                      class="font-weight-normal py-1 px-3"
                    >If I make a change to the frontend and want to deploy the changes to Heroku I would do the following: 1) Run a production build to place the static assets in the server folder, these are JavaScript files, style sheets, images that don’t change and are presented to the user. 2) Commit the changes to GitHub. 3) Sync GitHub and Heroku and deploy automatically or manually. AWS S3 was used a dedicated file storage to hold photo uploads, this was done because Heroku’s file system is ephemeral – which means that any changes to the file system only lasts until its shut down or restarted. Each time the app is booted up with a clean copy of the file system from the most recent deploy, clearing any recent file uploads.</p>
                  </b-col>
                </b-row>
                <b-row class="justify-content-md-center mt-4">
                  <b-col cols="12" md="auto">
                    <b-img thumbnail center fluid :src="assets.heroku_pricing_image" alt="heroku_pricing"></b-img>
                    <p
                      class="text-center font-weight-light"
                    >Heroku pricing</p>
                  </b-col>
                  <b-col cols="12" md="auto">
                    <b-img thumbnail center fluid :src="assets.AWS_bucket_image" alt="AWS_bucket"></b-img>
                    <p
                      class="text-center font-weight-light"
                    >Amazong Web Services S3 Bucket containing photos</p>
                  </b-col>
                  <b-col cols="12" md="auto">
                    <b-img
                      thumbnail
                      center
                      fluid
                      :src="assets.github_respository_image"
                      alt="github_respository"
                    ></b-img>
                    <p
                      class="text-center font-weight-light"
                    >GitHub respository ready to be deployed to Heroku</p>
                  </b-col>
                  <b-col cols="12" md="auto">
                    <b-img
                      thumbnail
                      center
                      fluid
                      :src="assets.heroku_deployment_image"
                      alt="heroku_deployment"
                    ></b-img>
                    <p class="text-center font-weight-light">Heroku deployment through GitHub</p>
                  </b-col>
                </b-row>
              </b-media-body>
            </b-media>
          </b-card>

          <b-card id="conclusion-card" bg-variant="default" border-variant="light" class="mt-5">
            <b-media no-body>
              <b-media-aside vertical-align="top">
                <b-img blank blank-color="#ccc" width="3.5" height="85"></b-img>
              </b-media-aside>

              <b-media-body class="ml-3">
                <b-row>
                  <b-col cols="12">
                    <h4>Conclusion:</h4>
                    <p
                      class="font-weight-normal py-1 px-3"
                    >A great website… If you are interested in checking out the source code, click the github button and take a look. If you are interested in contacting me, you can do so by clicking the LinkedIn button and sending me a message.</p>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="text-center">
                      <b-button-group size="lg">
                        <b-button
                          href="https://github.com/michaelkerr0576/rellygudfutos"
                          variant="warning"
                          v-b-tooltip.hover
                          title="View Source Code"
                        >
                          <span class="fab fa-github"></span>
                          <!-- <span class="fab fa-github-square"></span> -->
                        </b-button>
                        <b-button
                          href="https://www.linkedin.com/in/michael-kerr-941a95124/"
                          variant="primary"
                          v-b-tooltip.hover
                          title="View LinkedIn"
                        >
                          <span class="fab fa-linkedin-in"></span>
                          <!-- <span class="fab fa-linkedin"></span> -->
                        </b-button>
                      </b-button-group>
                    </div>
                  </b-col>
                </b-row>
              </b-media-body>
            </b-media>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import { instance } from "../http-common";
//technologies used images
import html5_image from "../assets/html5.png";
import css3_image from "../assets/css3.png";
import javascript_image from "../assets/javascript.png";
import bootstrap_image from "../assets/bootstrap.png";
import vue_image from "../assets/vue.png";
import node_image from "../assets/node.png";
import express_image from "../assets/express.png";
import npm_image from "../assets/npm.svg";
import mongoose_image from "../assets/mongoose.png";
import mongo_image from "../assets/mongodb.png";
import github_image from "../assets/github.png";
import heroku_image from "../assets/heroku.png";
import AWS_S3_image from "../assets/AWS_S3.png";
//development images
import photo_grid_image from "../assets/photo_grid.jpg";
import mongoDB_atlas_image from "../assets/mongoDB_atlas.jpg";
import mongoose_model_photo_image from "../assets/mongoose_model_photo.jpg";
import mongoose_model_tags_image from "../assets/mongoose_model_tags.jpg";
import NPM_backend_image from "../assets/NPM_backend.jpg";
import NPM_frontend_image from "../assets/NPM_frontend.jpg";
import express_routes_photo_image from "../assets/express_routes_photo.jpg";
import express_routes_tags_image from "../assets/express_routes_tags.jpg";
import isotope_masonry_image from "../assets/isotope_masonry.jpg";
import isotope_packery_image from "../assets/isotope_packery.jpg";
import isotope_vertical_image from "../assets/isotope_vertical.jpg";
import isotope_sorting_image from "../assets/isotope_sorting.jpg";
import isotope_filtering_image from "../assets/isotope_filtering.jpg";
import admin_form_image from "../assets/admin_form.jpg";
import admin_form_editphoto_image from "../assets/admin_form_editphoto.jpg";
import AWS_bucket_image from "../assets/AWS_bucket.jpg";
import github_respository_image from "../assets/github_respository.jpg";
import heroku_pricing_image from "../assets/heroku_pricing.jpg";
import heroku_deployment_image from "../assets/heroku_deployment.jpg";

export default {
  name: "DevelopmentComponent",
  data() {
    return {
      assets: {
        html5_image: html5_image,
        css3_image: css3_image,
        javascript_image: javascript_image,
        bootstrap_image: bootstrap_image,
        vue_image: vue_image,
        node_image: node_image,
        express_image: express_image,
        npm_image: npm_image,
        mongoose_image: mongoose_image,
        mongo_image: mongo_image,
        github_image: github_image,
        heroku_image: heroku_image,
        AWS_S3_image: AWS_S3_image,
        photo_grid_image: photo_grid_image,
        mongoDB_atlas_image: mongoDB_atlas_image,
        mongoose_model_photo_image: mongoose_model_photo_image,
        mongoose_model_tags_image: mongoose_model_tags_image,
        NPM_backend_image: NPM_backend_image,
        NPM_frontend_image: NPM_frontend_image,
        express_routes_photo_image: express_routes_photo_image,
        express_routes_tags_image: express_routes_tags_image,
        isotope_masonry_image: isotope_masonry_image,
        isotope_packery_image: isotope_packery_image,
        isotope_vertical_image: isotope_vertical_image,
        isotope_sorting_image: isotope_sorting_image,
        isotope_filtering_image: isotope_filtering_image,
        admin_form_image: admin_form_image,
        admin_form_editphoto_image: admin_form_editphoto_image,
        AWS_bucket_image: AWS_bucket_image,
        github_respository_image: github_respository_image,
        heroku_pricing_image: heroku_pricing_image,
        heroku_deployment_image: heroku_deployment_image
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#developemnt {
  background-color: #f8f8f8;
  line-height: 1.5;
}
@media (max-width: 576px) {
  .img {
    width: 50%;
  }
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
    padding-right: 10px;
    padding-left: 10px;
  }
}
@media (min-width: 960px) {
}
</style>
