<template>
  <div id="portfolio">
    <!-- ----------- NAVBAR----------- -->
    <div id="navbar" class="pt-3">
      <b-nav card-header tabs>
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
      <b-container fluid>
        <b-row>
          <!-- Profile Picture -->
          <b-col cols="12" sm="12" md="4" lg="4" xl="3">
            <div id="profile_image">
              <b-img
                fluid
                :src="assets.profile_image"
                width="auto"
                height="auto"
              ></b-img>
            </div>
          </b-col>

          <!-- Profile Details LEFT -->
          <b-col cols="auto" class="mr-auto">
            <div id="profile_details_left" class="pl-1 pt-4 pb-3">
              <h1 class="text-light">MICHAEL <strong>KERR</strong></h1>
              <h3 class="text-light">Full Stack Developer</h3>
              <b-img
                left
                blank
                blank-color="#ccc"
                width="220"
                height="3.5"
              ></b-img>
              <h6 class="text-light pt-3">
                <i class="far fa-envelope mr-2"></i>michaelkerr0576@hotmail.com
              </h6>
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
            <div id="profile_details_right" class="pl-1 pt-1 pb-3">
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
                  <i class="fab fa-github-alt mr-2"></i
                  >github.com/michaelkerr0576
                </h6>
              </div>

              <!-- Profile Details RIGHT - Instagram -->
              <div
                style="cursor: pointer;"
                onclick="window.location='https://www.instagram.com/michaelkerr_futos/';"
              >
                <h6 class="text-light profile_details_links c-textUnderline">
                  <i class="fab fa-instagram mr-2"></i
                  >instagram.com/michaelkerr_futos
                </h6>
              </div>

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
          <b-col class="pt-4" cols="12" sm="12" md="5" lg="4">
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
                      I am a full stack developer specialised in frontend and
                      backend development for web applications. Experienced
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
                      and review the code on GitHub. Want to contact me? Check
                      out my contact details in my profile. CV is available upon
                      request.
                    </b-card-text>
                  </b-media>
                </b-media-body>
              </b-media>
            </b-card>
          </b-col>

          <!-- ----------- SKILLS & TOOLS ----------- -->
          <b-col class="pt-4" cols="12" sm="12" md="7" lg="8">
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
                          width="63"
                          height="auto"
                        ></b-img>
                        <p class="text-center font-weight-light">Vue</p>
                      </b-col>
                      <b-col cols="auto">
                        <b-img
                          center
                          :src="assets.react_image"
                          width="72"
                          height="auto"
                        ></b-img>
                        <p class="text-center font-weight-light">React</p>
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
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- Border Step Down -->
    <div id="bordersteptogray3"></div>
    <div id="bordersteptogray4"></div>

    <!-- ----------- PROJECTS - GRID ----------- -->
    <div id="projects" class="pt-5">
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
            <b-col cols="12" offset-xl="1" xl="10">
              <b-card-group deck>
                <!-- ----------- rellygudfutos ----------- -->
                <b-card
                  class="img-hover-zoom"
                  :img-src="assets.rellygudfutos_image"
                  img-alt="rellygudfutos"
                  img-top
                  style="cursor: pointer;"
                  v-b-modal.modal-rellygudfutos
                >
                  <!-- rellygudfutos - text -->
                  <b-card-text class="pt-1">
                    <strong>Objective: </strong>To build a full stack website
                    where I could showcase my photography.
                  </b-card-text>
                  <b-card-text class="pt-2 border-top">
                    <strong>Overview: </strong>
                    The photography needed to be the main focus. The UI was
                    built to be clear, consise and intuitive. Each feature takes
                    up as little room as possible to allow the attention to be
                    on the photography.
                  </b-card-text>
                  <b-card-text class="pt-2 border-top">
                    <strong>MEVN Stack: </strong>
                    MongoDB, Express, Vue & Node.
                  </b-card-text>
                  <template v-slot:footer>
                    <!-- Card Buttons -->
                    <div class="btn-group special btn-group-md" role="group">
                      <!-- GitHub Button -->
                      <b-button
                        squared
                        href="https://github.com/michaelkerr0576/rellygudfutos"
                        variant="dark"
                        v-b-tooltip.hover
                        title="View Source Code"
                        ><span class="fab fa-github"></span
                      ></b-button>
                      <!-- Demo Button -->
                      <b-button
                        squared
                        href="/home"
                        variant="secondary"
                        v-b-tooltip.hover
                        title="Live Demo"
                        ><span class="fas fa-globe"></span
                      ></b-button>
                      <!-- View More Button -->
                      <b-button
                        squared
                        v-b-modal.modal-rellygudfutos
                        variant="dark"
                        v-b-tooltip.hover
                        title="View More"
                        ><span class="fas fa-ellipsis-h"></span
                      ></b-button>
                    </div>
                  </template>
                </b-card>

                <!-- ----------- fakenews ----------- -->
                <b-card
                  class="img-hover-zoom"
                  :img-src="assets.reactproject_image"
                  img-alt="reactproject"
                  img-top
                  style="cursor: pointer;"
                  v-b-modal.modal-reactproject
                >
                  <!-- fakenews - text -->
                  <b-card-text class="pt-1">
                    <strong>Objective: </strong>To build a full stack newspaper
                    application focused on typography.
                  </b-card-text>
                  <b-card-text class="pt-2 border-top">
                    <strong>Overview: </strong>
                    WORK IN PROGRESS - 95% of the web content is typography. A
                    good web designer should first focus this discipline before
                    moving on to other web design components. No colour or
                    images were used to show the significance of typography in
                    front end development.
                  </b-card-text>
                  <b-card-text class="pt-2 border-top">
                    <strong>MERN Stack: </strong>
                    MongoDB, Express, React & Node.
                  </b-card-text>
                  <template v-slot:footer>
                    <div class="btn-group special btn-group-md" role="group">
                      <!-- GitHub Button -->
                      <b-button
                        squared
                        href="https://github.com/michaelkerr0576/fakenews"
                        variant="dark"
                        v-b-tooltip.hover
                        title="View Source Code"
                        ><span class="fab fa-github"></span
                      ></b-button>
                      <!-- Demo Button -->
                      <b-button
                        squared
                        href="https://fakenews01.herokuapp.com/"
                        variant="secondary"
                        v-b-tooltip.hover
                        title="Live Demo"
                        ><span class="fas fa-globe"></span
                      ></b-button>
                      <!-- View More Button -->
                      <b-button
                        squared
                        v-b-modal.modal-reactproject
                        variant="dark"
                        v-b-tooltip.hover
                        title="View More"
                        ><span class="fas fa-ellipsis-h"></span
                      ></b-button>
                    </div>
                  </template>
                </b-card>
              </b-card-group>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>

    <!-- ----------- PROJECTS - MODALS ----------- -->
    <div id="projects_modals">
      <!-- rellygudfutos - modal -->
      <b-modal
        id="modal-rellygudfutos"
        size="lg"
        centered
        scrollable
        header-bg-variant="light"
        title="rellygudfutos"
        footerClass="p-0 border-top-0"
      >
        <!-- Top Image -->
        <b-row class="justify-content-md-center">
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.rellygudfutos_grid_image"
              alt="rellygudfutos_grid"
            ></b-img>
          </b-col>
        </b-row>
        <!-- Summary & Database type -->
        <b-row class="mt-4">
          <b-col cols="12" md="auto">
            <!-- Summary -->
            <p class="font-weight-normal pb-2">
              <strong>Summary: </strong>The goal was to build a full stack
              website where I could showcase my photography. The site needed to
              be built with a dynamic UI to support a wide range of devices
              (phone, tablet, desktop, etc). I wanted to create the backend
              (server side) and the user facing frontend (client side) to run
              CRUD operations. CRUD refers to the major functions to create,
              read, update or delete records from a database. Only read requests
              will be available for non admin users, allowing them access to
              view photos, but not to create, update, or delete them. Create,
              update and delete will only be available for the admin (me). The
              desired result was a photo grid that can be filtered, sorted and
              searched in a visually appealing manner. I went with a MEVN stack
              to build the website, it stands for MongoDB, Express, Vue and Node
              (exciting). Normally people refer to a MEAN stack but I swapped
              out Angular for Vue as my frontend framework.
            </p>
            <hr />
            <!-- Requirements -->
            <p class="font-weight-normal pb-2">
              <strong>Requirements: </strong>A user shall be able to login as
              admin. A logged in user can create, update and delete photos and
              tags. A logged out user will only have read access. In the photo
              upload form, the admin shall be able to upload a photo file with
              fields "title", "caption", "location", "tags" & "store" attached.
              Photo fields "camera", "lens", "aperature", "focal length",
              "shutter speed", "iso" and "capture datetime" shall be
              automatically updated from the photo metadata. The photo grid
              shall be sortable by "capture datetime", "title" and "shuffle" The
              photo grid shall be filterable by the tags the admin has created.
              The photo grid shall be searchable by key words. The grid shall be
              available in a packery and list view. On image click, the grid
              shall switch to list view with photo details below the image. The
              UI shall be dynamic to support a wide range of devices (phone,
              tablet, desktop). Links to social media and storefront shall be
              available.
            </p>
            <hr />
            <!-- Database -->
            <p class="font-weight-normal pt-2">
              <strong>Database: </strong>MongoDB was chosen as it is a
              schema-less database, way less hassle in getting set up as I do
              not have to define strict database schema and can store the data
              as JSON documents. Having the option to store files where each
              document could have its own set of unique fields appealed to me. I
              went with MongoDB Atlas as my storage because it is a global cloud
              database service and is compliant with data security and privacy
              standards.
            </p>
            <p class="font-weight-normal">
              I used an ODM (Object Data Modelling) called Mongoose to help
              manage relationships between data, providing schema validation and
              translate objects in code to be represented in MongoDB. I
              potentially overused Mongoose when defining models, schema, and
              relationships, slightly defeating the purpose of a schema-less
              database.
            </p>
          </b-col>
        </b-row>
        <!-- Database Images -->
        <b-row class="justify-content-md-center mt-3">
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.mongoDB_atlas_image"
              alt="mongoDB_atlas"
            ></b-img>
            <p class="text-center font-weight-light">
              Cluster in MongoDB Atlas containing 1 database with 3 collections
            </p>
          </b-col>
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.mongoose_model_photo_image"
              alt="mongoose_model_photo"
            ></b-img>
            <p class="text-center font-weight-light">
              Mongoose photo model
            </p>
          </b-col>
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.mongoose_model_tags_image"
              alt="mongoose_model_tags"
            ></b-img>
            <p class="text-center font-weight-light">
              Mongoose tags model
            </p>
          </b-col>
        </b-row>
        <!-- Backend type -->
        <b-row class="mt-1">
          <b-col cols="12" md="auto">
            <hr />
            <p class="font-weight-normal pt-2">
              <strong>Backend: </strong>Node.js was chosen as it offers the
              luxury of writing server side applications in JavaScript. This
              allowed me to develop both the frontend and backend in JavaScript
              using a runtime environment. No other server side programming
              language was needed. Perfect for creating real time applications,
              providing asynchronous, event driven I/O APIs. It runs single
              threaded event based loop so there is no risk of dead-locking the
              process since all execution is non-blocking. It is useful that
              when the application's photos are loading to the grid other events
              are not being blocked. Both events will be run simultaneously.
            </p>
            <p class="font-weight-normal">
              NPM (Node Package Manager) is a powerful package manager, it made
              package installation, version management and dependency management
              simple (simple as it can be). All dependencies and versions are
              stored in the package.json where I can easily see what is
              installed.
            </p>
            <p class="font-weight-normal">
              Express is a minimal and flexible Node.js web application
              framework that allows the user to define routing which is used to
              perform different actions based on HTTP Requests (GET, POST, PUT
              or DELETE) on specific URLs. The purpose is to dynamically render
              HTML pages according to routing request.
            </p>
          </b-col>
        </b-row>
        <!-- Backend Images -->
        <b-row class="justify-content-md-center mt-3">
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.NPM_backend_image"
              alt="NPM_backend"
            ></b-img>
            <p class="text-center font-weight-light">
              NPM backend dependencies
            </p>
          </b-col>
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.NPM_frontend_image"
              alt="NPM_frontend"
            ></b-img>
            <p class="text-center font-weight-light">
              NPM frontend dependencies
            </p>
          </b-col>
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.express_routes_photo_image"
              alt="express_routes_photo"
            ></b-img>
            <p class="text-center font-weight-light">
              Express photo routes
            </p>
          </b-col>
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.express_routes_tags_image"
              alt="express_routes_tags"
            ></b-img>
            <p class="text-center font-weight-light">
              Express tags routes
            </p>
          </b-col>
        </b-row>
        <!-- Frontend type -->
        <b-row class="mt-1">
          <b-col cols="12" md="auto">
            <hr />
            <p class="font-weight-normal pt-2">
              <strong>Frontend: </strong>Vue.js was chosen as it is known as an
              emerging frontend technology and is often compared to Angular.js
              and React.js. Vue.js is a combination of the two, utilising
              concepts such as directives and components to control and render
              user interfaces. I loved the fact that each file component can
              store HTML, CSS and JavaScript. It felt natural and far easier to
              manage the individual components. At this point in time, nearly
              every useful JavaScript plugin has a Vue.js version, which makes
              it uncomplicated to integrate as a component.
            </p>
            <p class="font-weight-normal">
              I chose the magical Isotope plugin to help dynamically change
              layout, sort and filter the photo grid. Isotope supports plenty of
              different layouts, the three I was interested in were Masonry,
              Packery and Vertical. It was between Masonry and Packery to be the
              default layout mode, Masonry places elements based on the vertical
              space available while Packery will fill the empty gaps. I went
              with Packery to fill the grid in a more visually pleasing manner.
              A downside to Packery is that if a photo does not fit a gap in the
              grid, it will push the next available photo that can fit
              regardless if it’s next in the sort order or not. This is a
              concession to fill the grid width and make it look aesthetically
              pleasing. The vertical layout will present the photos in a list
              where the photo is larger and centred.
            </p>
            <p class="font-weight-normal">
              A major goal was to be able to dynamically update the grid by
              filtering tags and sorting by date, title or shuffle. The user can
              have one active filter and sort at any one time. Other photo grid
              features include a search by title input, a mode to view the
              Packery or the Vertical layout in fullscreen and a click photo
              view where the user can view a larger photo and photo details
              (title, tags, date uploaded).
            </p>
            <p class="font-weight-normal">
              The admin has access to additional functionality, this includes an
              admin form that can upload a new photo, add a new tag, delete a
              tag or update a tag. The photo grid and available tags will
              dynamically update based off actions, there is no need to reload
              the DOM (Document Object Model) after every action. If the admin
              is logged in, they will have a different view of the photo grid
              Vertical layout. A form is present to allow the admin to delete or
              update a photo. The admin components can be dynamically rendered
              depending if the admin is logged in or not.
            </p>
          </b-col>
        </b-row>
        <!-- Frontend Images -->
        <b-row class="justify-content-md-center mt-3">
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.isotope_masonry_image"
              alt="isotope_masonry"
            ></b-img>
            <p class="text-center font-weight-light">
              Isotope masonry
            </p>
          </b-col>
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.isotope_packery_image"
              alt="isotope_packery"
            ></b-img>
            <p class="text-center font-weight-light">
              Isotope packery
            </p>
          </b-col>
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.isotope_vertical_image"
              alt="isotope_vertical"
            ></b-img>
            <p class="text-center font-weight-light">
              Isotope vertical
            </p>
          </b-col>
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.isotope_sorting_image"
              alt="isotope_sorting"
            ></b-img>
            <p class="text-center font-weight-light">
              Isotope sorting
            </p>
          </b-col>
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.isotope_filtering_image"
              alt="isotope_filtering"
            ></b-img>
            <p class="text-center font-weight-light">
              Isotope filtering
            </p>
          </b-col>
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.admin_form_image"
              alt="admin_form"
            ></b-img>
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
            <p class="text-center font-weight-light">
              Admin edit photo form
            </p>
          </b-col>
        </b-row>
        <!-- Deployment type -->
        <b-row class="mt-1">
          <b-col cols="12" md="auto">
            <hr />
            <p class="font-weight-normal pt-2">
              <strong>Deployment: </strong>Heroku is a perfect choice for any
              developer working on personal projects or small applications, if
              your expected monthly website traffic is minimal then Heroku is a
              no brainer. Other more complex competitors like Amazon Web
              Services (AWS) should only be considered if your traffic is high
              enough to merit it. Heroku is a cloud platform that helps you
              deploy and host your applications. It takes care of the “easy”
              configurations and integrates seamlessly with GitHub for automated
              deployment.
            </p>
            <p class="font-weight-normal">
              If I make a change to the frontend and want to deploy the changes
              to Heroku I would do the following: 1) Run a production build to
              place the static assets in the server folder, these are JavaScript
              files, style sheets, images that don’t change and are presented to
              the user. 2) Commit the changes to GitHub. 3) Sync GitHub and
              Heroku and deploy automatically or manually. AWS S3 was used a
              dedicated file storage to hold photo uploads, this was done
              because Heroku’s file system is ephemeral – which means that any
              changes to the file system only lasts until its shut down or
              restarted. Each time the app is booted up with a clean copy of the
              file system from the most recent deploy, clearing any recent file
              uploads.
            </p>
          </b-col>
        </b-row>
        <!-- Deployment Images -->
        <b-row class="justify-content-md-center mt-3">
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.heroku_pricing_image"
              alt="heroku_pricing"
            ></b-img>
            <p class="text-center font-weight-light">
              Heroku pricing
            </p>
          </b-col>
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.AWS_bucket_image"
              alt="AWS_bucket"
            ></b-img>
            <p class="text-center font-weight-light">
              Amazong Web Services S3 Bucket containing photos
            </p>
          </b-col>
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.github_respository_image"
              alt="github_respository"
            ></b-img>
            <p class="text-center font-weight-light">
              GitHub respository ready to be deployed to Heroku
            </p>
          </b-col>
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.heroku_deployment_image"
              alt="heroku_deployment"
            ></b-img>
            <p class="text-center font-weight-light">
              Heroku deployment through GitHub
            </p>
          </b-col>
        </b-row>
        <!-- Conclusion type -->
        <b-row class="mt-1">
          <b-col cols="12" md="auto">
            <hr />
            <p class="font-weight-normal pt-2">
              <strong>Conclusion: </strong>A great website… Check out the live
              demo for yourself and inspect the source code on GitHub. If you
              are interested in contacting me, you can do so by using my contact
              details listed in the profile section.
            </p>
          </b-col>
        </b-row>

        <!-- Modal Footer Buttons -->
        <template v-slot:modal-footer>
          <div class="w-100 btn-group special btn-group-md" role="group">
            <!-- GitHub Button -->
            <b-button
              squared
              href="https://github.com/michaelkerr0576/rellygudfutos"
              variant="dark"
              v-b-tooltip.hover
              title="View Source Code"
              ><span class="fab fa-github"></span
            ></b-button>
            <!-- Demo Button -->
            <b-button
              squared
              href="/home"
              variant="secondary"
              v-b-tooltip.hover
              title="Live Demo"
              ><span class="fas fa-globe"></span
            ></b-button>
            <!-- View More Button -->
            <b-button
              squared
              @click="$bvModal.hide('modal-rellygudfutos')"
              variant="dark"
              v-b-tooltip.hover
              title="Close Me"
              ><span class="fas fa-window-close"></span
            ></b-button>
          </div>
        </template>
      </b-modal>

      <!-- reactproject - modal -->
      <b-modal
        id="modal-reactproject"
        size="lg"
        centered
        scrollable
        header-bg-variant="light"
        title="reactproject"
        footerClass="p-0 border-top-0"
      >
        <!-- Top Image -->
        <!-- <b-row class="justify-content-md-center">
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.rellygudfutos_grid_image"
              alt="rellygudfutos_grid"
            ></b-img>
          </b-col>
        </b-row> -->
        <!-- Summary & Database type -->
        <b-row class="mt-4">
          <b-col cols="12" md="auto">
            <!-- Summary -->
            <p class="font-weight-normal pb-2">
              <strong>Summary: </strong>WORK IN PROGRESS: Application is not
              running CRUD operations from MongoDB yet. All updates only exist
              in the DOM and are overwritten with the initial state when the
              page is refreshed. Check out the LatestNews component to see how
              adding, updating and deleting articles currently works. The
              overall feel of the site is there. The components just need to be
              made smart.
            </p>
            <hr />
            <p class="font-weight-normal pb-2">
              <strong>Requirements: </strong>A user shall be able to login as
              admin. A logged in user can post, update and delete articles. A
              logged out user will only have read access. In the article post
              form, the admin shall be able to post an article with fields
              "title", "subtitle", "body", "author" and "section. Article field
              "datetime" shall be automatically inserted from time of upload.
              Article field "section" shall be selected from a set list "News",
              "Sport", "Business", "Opinion", "Life & Style" and "Culture". A
              user shall be able to filter the section through buttons in the
              navbar. An Admin shall be able to create a custom order of the
              articles in the articles grid. A "Most Read" column shall display
              the top 5 most read articles. A "Latest News" column shall display
              the 5 latest articles. Each article shall be clickable to view in
              more detail. The article grid shall be searchable by key words.
              The UI shall be dynamic to support a wide range of devices (phone,
              tablet, desktop). Links to fake social media shall be available.
            </p>
            <hr />
            <!-- Database -->
            <p class="font-weight-normal pt-2">
              <strong>Database: </strong>TODO.
            </p>
          </b-col>
        </b-row>
        <!-- Database Images -->
        <!-- <b-row class="justify-content-md-center mt-3">
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.mongoDB_atlas_image"
              alt="mongoDB_atlas"
            ></b-img>
            <p class="text-center font-weight-light">
              Cluster in MongoDB Atlas containing 1 database with 3 collections
            </p>
          </b-col>
        </b-row> -->
        <!-- Backend type -->
        <b-row class="mt-1">
          <b-col cols="12" md="auto">
            <hr />
            <p class="font-weight-normal pt-2">
              <strong>Backend: </strong>TODO.
            </p>
          </b-col>
        </b-row>
        <!-- Backend Images -->
        <!-- <b-row class="justify-content-md-center mt-3">
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.NPM_backend_image"
              alt="NPM_backend"
            ></b-img>
            <p class="text-center font-weight-light">
              NPM backend dependencies
            </p>
          </b-col>
        </b-row> -->
        <!-- Frontend type -->
        <b-row class="mt-1">
          <b-col cols="12" md="auto">
            <hr />
            <p class="font-weight-normal pt-2">
              <strong>Frontend: </strong>TODO.
            </p>
          </b-col>
        </b-row>
        <!-- Frontend Images -->
        <!-- <b-row class="justify-content-md-center mt-3">
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.isotope_masonry_image"
              alt="isotope_masonry"
            ></b-img>
            <p class="text-center font-weight-light">
              Isotope masonry
            </p>
          </b-col>
        </b-row> -->
        <!-- Deployment type -->
        <b-row class="mt-1">
          <b-col cols="12" md="auto">
            <hr />
            <p class="font-weight-normal pt-2">
              <strong>Deployment: </strong>TODO.
            </p>
          </b-col>
        </b-row>
        <!-- Deployment Images -->
        <!-- <b-row class="justify-content-md-center mt-3">
          <b-col cols="12" md="auto">
            <b-img
              thumbnail
              center
              fluid
              :src="assets.heroku_pricing_image"
              alt="heroku_pricing"
            ></b-img>
            <p class="text-center font-weight-light">
              Heroku pricing
            </p>
          </b-col>
        </b-row> -->
        <!-- Conclusion type -->
        <b-row class="mt-1">
          <b-col cols="12" md="auto">
            <hr />
            <p class="font-weight-normal pt-2">
              <strong>Conclusion: </strong>TODO.
            </p>
          </b-col>
        </b-row>

        <!-- Modal Footer Buttons -->
        <template v-slot:modal-footer>
          <div class="w-100 btn-group special btn-group-md" role="group">
            <!-- GitHub Button -->
            <b-button
              squared
              href="https://github.com/michaelkerr0576/fakenews"
              variant="dark"
              v-b-tooltip.hover
              title="View Source Code"
              ><span class="fab fa-github"></span
            ></b-button>
            <!-- Demo Button -->
            <b-button
              squared
              href="https://fakenews01.herokuapp.com/"
              variant="secondary"
              v-b-tooltip.hover
              title="Live Demo"
              ><span class="fas fa-globe"></span
            ></b-button>
            <!-- View More Button -->
            <b-button
              squared
              @click="$bvModal.hide('modal-reactproject')"
              variant="dark"
              v-b-tooltip.hover
              title="Close Me"
              ><span class="fas fa-window-close"></span
            ></b-button>
          </div>
        </template>
      </b-modal>
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
import reactproject_image from "../assets/reactproject.jpg";
//rellygudfutos development images
import rellygudfutos_grid_image from "../assets/rellygudfutos_grid.jpg";
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
        profile_image: profile_image,
        html5_image: html5_image,
        css3_image: css3_image,
        javascript_image: javascript_image,
        bootstrap_image: bootstrap_image,
        vue_image: vue_image,
        react_image: react_image,
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
        rellygudfutos_image: rellygudfutos_image,
        reactproject_image: reactproject_image,
        rellygudfutos_grid_image: rellygudfutos_grid_image,
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
        heroku_deployment_image: heroku_deployment_image,
      },
    };
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
  background-color: #484848;
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
  color: #fff;
  text-decoration: underline;
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
  #profile_details_left > h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    font-size: 2em;
  }
  #profile_details_left > h3 {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 1.4em;
  }
  #profile_details_left > h6,
  #profile_details_right > div > h6 {
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    font-size: 0.88em;
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
