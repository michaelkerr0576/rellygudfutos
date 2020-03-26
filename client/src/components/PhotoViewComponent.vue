<template>
  <!-- ----------- PHOTO VIEW ----------- -->
  <div>
    <b-container class="pt-3 pb-5">
      <b-row>
        <!-- ----------- CAMERA SPECS for DESKTOP ----------- -->
        <b-col cols="5">
          <div v-if="window.width >= 576">
            <div class="float-right border-top border-right pt-3 pr-1">
              <!-- Camera and Lens -->
              <b-row>
                <b-col cols="auto" sm="6" md="5" lg="4" xl="4"
                  ><div class="camera-icon"></div
                ></b-col>
                <b-col cols="12" sm="12" md="7" lg="8" xl="8">
                  <div class="mt-2">
                    <h6 class="text-dark">
                      <samp>{{ photo.camera }}</samp>
                    </h6>
                    <h6 class="text-dark">
                      <samp>{{ photo.lens }}</samp>
                    </h6>
                  </div>
                </b-col>
              </b-row>

              <!-- Aperature and Focal Length -->
              <b-row>
                <b-col class="mt-2" cols="12" sm="12" md="6" lg="6" xl="6"
                  ><div class="aperture-icon">
                    <samp>&nbsp;&nbsp;&nbsp;&nbsp;{{ photo.aperature }}</samp>
                  </div></b-col
                >
                <b-col class="mt-2" cols="12" sm="12" md="6" lg="6" xl="6"
                  ><div class="focallength-icon">
                    <samp>&nbsp;&nbsp;&nbsp;&nbsp;{{ photo.focalLength }}</samp>
                  </div></b-col
                >
              </b-row>

              <!-- Shutterspeed and ISO -->
              <b-row>
                <b-col class="mt-2" cols="12" sm="12" md="6" lg="6" xl="6"
                  ><div class="shutterspeed-icon">
                    <samp
                      >&nbsp;&nbsp;&nbsp;&nbsp;{{ photo.shutterSpeed }}</samp
                    >
                  </div></b-col
                >
                <b-col class="mt-2" cols="12" sm="12" md="6" lg="6" xl="6"
                  ><div class="iso-icon">
                    <samp>&nbsp;&nbsp;&nbsp;&nbsp;{{ photo.iso }}</samp>
                  </div></b-col
                >
              </b-row>
            </div>
          </div>
        </b-col>

        <!-- ----------- PHOTO DETAILS ----------- -->
        <b-col cols="12" sm="7" md="7" lg="6" xl="6">
          <div class="border-left custom-border-bottom pl-3">
            <!-- Photo Title -->
            <b-row class="pt-2">
              <b-col cols="12">
                <h6>
                  <strong>{{ photo.title | capitalize }}</strong>
                </h6>
                <hr />
              </b-col>
            </b-row>

            <!-- Photo Caption -->
            <b-row>
              <b-col cols="12">
                <div class="text-body">
                  <p>{{ photo.caption | capitalize }}</p>
                </div>
              </b-col>
            </b-row>

            <!-- Photo Location -->
            <b-row>
              <b-col cols="12">
                <div class="text-body">
                  <i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;
                  <a
                    id="photo-location"
                    v-bind:href="
                      'http://www.google.com/search?q=' + photo.location
                    "
                  >
                    {{ photo.location | capitalize }}</a
                  >
                </div>
              </b-col>
            </b-row>

            <!-- Photo Tags -->
            <b-row>
              <b-col cols="12">
                <div class="text-body">
                  <i class="fas fa-tags"></i>
                  <span
                    id="photo-tags"
                    class="font-weight-normal"
                    v-for="(tag, index) in photo.tags"
                    :key="tag._id"
                    >&nbsp;{{ tag.tag | capitalize
                    }}{{ tagWithComma(index, photo.tags.length) }}</span
                  >
                </div>
              </b-col>
            </b-row>

            <!-- Photo Store -->
            <b-row>
              <b-col cols="12">
                <div class="text-body">
                  <i class="fas fa-shopping-cart"></i>&nbsp;
                  <a v-bind:href="photo.store">
                    Buy Print or License Image</a
                  >
                </div>
              </b-col>
            </b-row>

            <!-- Photo Capture Date -->
            <b-row class="pb-2">
              <b-col cols="12">
                <br />
                <p class="font-weight-normal text-black-50">
                  Photo captured
                  {{ photo.captureDate | moment("from", "now") }};
                  {{ photo.captureDate | moment("dddd, MMMM Do YYYY") }}
                </p>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>

      <!-- <b-row class="d-flex flex-row-reverse"> -->
      <b-row class="d-flex flex-row-reverse">
        <!-- ----------- CAMERA SPECS for MOBILE ----------- -->
        <div v-if="window.width < 576">
          <b-col cols="12">
            <div class="border-right border-bottom px-3 py-3">
              <!-- Camera and Lens -->
              <b-row>
                <b-col cols="auto" sm="6" md="5" lg="4" xl="4"
                  ><div class="camera-icon"></div
                ></b-col>
                <b-col cols="7" sm="6" md="7" lg="8" xl="8">
                  <div class="mt-2">
                    <h6 class="text-dark">
                      <samp>{{ photo.camera }}</samp>
                    </h6>
                    <h6 class="text-dark">
                      <samp>{{ photo.lens }}</samp>
                    </h6>
                  </div>
                </b-col>
              </b-row>

              <!-- Aperature and Focal Length -->
              <b-row>
                <b-col class="mt-2" cols="6"
                  ><div class="aperture-icon">
                    <samp>&nbsp;&nbsp;&nbsp;&nbsp;{{ photo.aperature }}</samp>
                  </div></b-col
                >
                <b-col class="mt-2" cols="6"
                  ><div class="focallength-icon">
                    <samp>&nbsp;&nbsp;&nbsp;&nbsp;{{ photo.focalLength }}</samp>
                  </div></b-col
                >
              </b-row>

              <!-- Shutterspeed and ISO -->
              <b-row>
                <b-col class="mt-2" cols="6"
                  ><div class="shutterspeed-icon">
                    <samp
                      >&nbsp;&nbsp;&nbsp;&nbsp;{{ photo.shutterSpeed }}</samp
                    >
                  </div></b-col
                >
                <b-col class="mt-2" cols="6"
                  ><div class="iso-icon">
                    <samp>&nbsp;&nbsp;&nbsp;&nbsp;{{ photo.iso }}</samp>
                  </div></b-col
                >
              </b-row>
            </div>
          </b-col>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import { instance } from "../http-common";

export default {
  name: "PhotoViewComponent",
  props: ["photos", "photo", "tags"],
  data() {
    return {
      window: {
        width: 0,
        height: 0
      }
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  created() {
    //window resize listener
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    tagWithComma(index, tagsNum) {
      if (index !== tagsNum - 1) {
        return ",";
      } else {
        return "";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
  margin-left: -48px;
}
#photo-location {
  margin-left: 1px;
}
#photo-tags {
  margin-left: 2px;
}
.camera-icon {
  background-image: url(https://combo.staticflickr.com/ap/build/images/scrappy-camera-icons/CanonEOSRebelXT.png);
  display: block;
  width: 100%;
  min-width: 77px;
  min-height: 76px;
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 1px 0;
}
.aperture-icon {
  background: url(https://combo.staticflickr.com/ap/build/images/sprites/scrappy-0df0b38d.png) -94px -101px
    no-repeat;
  width: 22px;
  height: 22px;
}
.focallength-icon {
  background: url(https://combo.staticflickr.com/ap/build/images/sprites/scrappy-0df0b38d.png) -100px -78px
    no-repeat;
  width: 20px;
  height: 22px;
}
.shutterspeed-icon {
  background: url(https://combo.staticflickr.com/ap/build/images/sprites/scrappy-0df0b38d.png) -40px -126px
    no-repeat;
  width: 20px;
  height: 22px;
}
.iso-icon {
  background: url(https://combo.staticflickr.com/ap/build/images/sprites/scrappy-0df0b38d.png) -86px -126px
    no-repeat;
  width: 24px;
  height: 16px;
}
@media (max-width: 576px) {
  .custom-border-bottom {
    border-bottom: 1px solid #dee2e6;
  }
}
</style>
