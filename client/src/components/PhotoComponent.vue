<template>
  <div id="main">
    <PhotoAdmCRUDComponent v-if="isLoggedIn" :photos="mutablePhotos" :tags="mutableTags" />
    <b-container fluid>
      <b-row>
        <b-col cols="12" sm="6" md="6" lg="6" xl="5">
          <div id="filter">
            <b-input-group>
              <b-form-input
                type="text"
                v-model="filterText"
                placeholder="Filter futo by title.."
                :class="[filterOption==='filterByText' ? 'is-checked' : '']"
                @click="$refs.cpt.filter('filterByText')"
              ></b-form-input>
              <b-input-group-append is-text>
                <i class="fas fa-search"></i>
              </b-input-group-append>
            </b-input-group>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" sm="2" md="2" lg="2" xl="2">
          <div id="tags" v-if="window.width >= 576">
            <h3>Filter</h3>
            <hr />
            <b-row>
              <b-button
                block
                variant="light"
                :class="[filterOption==='removeFilter' ? 'is-checked' : '']"
                @click="$refs.cpt.filter('removeFilter'); removeFilterValue();"
              >
                Show All
                <b-badge pill variant="dark">{{ photos.length }}</b-badge>
              </b-button>
            </b-row>
            <b-row v-for="tag in mutableTags" :key="tag._id">
              <b-button
                block
                variant="light"
                :class="[filterOption==='filterByTag' ? 'is-checked' : '']"
                @click="getFilterValue(tag.tag); $refs.cpt.filter('filterByTag')"
              >
                {{ tag.tag | capitalize}}
                <b-badge pill variant="dark">{{ tag.photosCount }}</b-badge>
              </b-button>
            </b-row>
          </div>

          <div id="sort" v-if="window.width >= 576">
            <h3>Sort</h3>
            <hr />
            <b-row>
              <b-button
                block
                variant="light"
                :class="[sortOption==='newest' ? 'is-checked' : '']"
                @click="getSortValue('Newest'); $refs.cpt.sort('newest')"
              >
                Sort by newest
                <span class="fas fa-sort"></span>
              </b-button>
            </b-row>
            <b-row>
              <b-button
                block
                variant="light"
                :class="[sortOption==='oldest' ? 'is-checked' : '']"
                @click="getSortValue('Oldest'); $refs.cpt.sort('oldest')"
              >
                Sort by oldest
                <span class="fas fa-sort"></span>
              </b-button>
            </b-row>
            <b-row>
              <b-button
                block
                variant="light"
                :class="[sortOption==='titleAZ' ? 'is-checked' : '']"
                @click="getSortValue('Title (A-Z)'); $refs.cpt.sort('titleAZ')"
              >
                Sort by title (a-z)
                <span class="fas fa-sort"></span>
              </b-button>
            </b-row>
            <b-row>
              <b-button
                block
                variant="light"
                :class="[sortOption==='titleZA' ? 'is-checked' : '']"
                @click="getSortValue('Title (Z-A)'); $refs.cpt.sort('titleZA')"
              >
                Sort by title (z-a)
                <span class="fas fa-sort"></span>
              </b-button>
            </b-row>
            <!-- <b-row>
              <b-button
                block
                variant="light"
                :class="[sortOption==='id' ? 'is-checked' : '']"
                @click="getSortValue('ID'); $refs.cpt.sort('id')"
              >
                Sort by id
                <span class="fas fa-sort"></span>
              </b-button>
            </b-row>-->
            <b-row>
              <b-button block variant="light" @click="getSortValue('Shuffle'); $refs.cpt.shuffle()">
                Shuffle
                <span class="fas fa-random"></span>
              </b-button>
            </b-row>
          </div>

          <div id="mobile-sorttags" v-if="window.width < 576">
            <b-button-toolbar>
              <b-dropdown size="sm" text="Filter" variant="outline-secondary">
                <b-dropdown-item
                  :class="[filterOption==='removeFilter' ? 'is-checked' : '']"
                  @click="$refs.cpt.filter('removeFilter'); removeFilterValue();"
                >
                  Show All
                  <b-badge pill variant="dark">{{ photos.length }}</b-badge>
                </b-dropdown-item>
                <b-dropdown-item
                  v-for="tag in mutableTags"
                  :key="tag._id"
                  :class="[filterOption==='filterByTag' ? 'is-checked' : '']"
                  @click="getFilterValue(tag.tag); $refs.cpt.filter('filterByTag')"
                >
                  {{ tag.tag | capitalize}}
                  <b-badge pill variant="dark">{{ tag.photosCount }}</b-badge>
                </b-dropdown-item>
              </b-dropdown>
              <b-dropdown size="sm" right text="Sort" variant="outline-secondary">
                <b-dropdown-item
                  :class="[sortOption==='newest' ? 'is-checked' : '']"
                  @click="getSortValue('Newest'); $refs.cpt.sort('newest')"
                >
                  Sort by newest
                  <span class="fas fa-sort"></span>
                </b-dropdown-item>
                <b-dropdown-item
                  :class="[sortOption==='oldest' ? 'is-checked' : '']"
                  @click="getSortValue('Oldest'); $refs.cpt.sort('oldest')"
                >
                  Sort by oldest
                  <span class="fas fa-sort"></span>
                </b-dropdown-item>
                <b-dropdown-item
                  :class="[sortOption==='titleAZ' ? 'is-checked' : '']"
                  @click="getSortValue('Title (A-Z)'); $refs.cpt.sort('titleAZ')"
                >
                  Sort by title (a-z)
                  <span class="fas fa-sort"></span>
                </b-dropdown-item>
                <b-dropdown-item
                  :class="[sortOption==='titleZA' ? 'is-checked' : '']"
                  @click="getSortValue('Title (Z-A)'); $refs.cpt.sort('titleZA')"
                >
                  Sort by title (z-a)
                  <span class="fas fa-sort"></span>
                </b-dropdown-item>
                <!-- <b-dropdown-item
                  :class="[sortOption==='id' ? 'is-checked' : '']"
                  @click="getSortValue('ID'); $refs.cpt.sort('id')"
                >
                  Sort by id
                  <span class="fas fa-sort"></span>
                </b-dropdown-item>-->
                <b-dropdown-item @click="getSortValue('Shuffle'); $refs.cpt.shuffle()">
                  Shuffle
                  <span class="fas fa-random"></span>
                </b-dropdown-item>
              </b-dropdown>
            </b-button-toolbar>
          </div>
        </b-col>

        <b-col cols="12" sm="10" md="10" lg="10" xl="8" offset-xl="1">
          <div id="layout">
            <b-nav tabs align="center">
              <b-nav-item
                :active="packeryActive"
                :class="[layout===currentLayout? 'is-checked' : '']"
                class="button"
                v-b-tooltip.hover
                title="Gallery View"
                @click="changeLayout('packery'); removeFilterValue();"
              >
                <span class="fas fa-th"></span>
              </b-nav-item>
              <b-nav-item
                :active="verticalActive"
                :class="[layout===currentLayout? 'is-checked' : '']"
                class="button"
                v-b-tooltip.hover
                title="List View"
                @click="changeLayout('vertical'); removeFilterValue();"
              >
                <span class="fas fa-bars"></span>
              </b-nav-item>
              <b-nav-item
                class="button"
                v-b-tooltip.hover
                title="Fullscreen View"
                @click="toggleFullscreen()"
              >
                <span class="fas fa-expand"></span>
              </b-nav-item>
              <!-- <b-nav-item disabled>Width: {{ window.width }}</b-nav-item>
              <b-nav-item disabled>Height: {{ window.height }}</b-nav-item>-->
            </b-nav>
          </div>

          <div id="grid">
            <b-button-group size="sm">
              <b-button disabled pill size="sm" variant="dark" :v-model="sortValue">
                {{ sortValue }}
                <b-badge pill variant="light">
                  <span class="fas fa-sort-down"></span>
                </b-badge>
              </b-button>
              <b-button
                id="filterpill"
                pill
                size="sm"
                variant="dark"
                :v-model="filterValue"
                v-if="filterValue.length > 0"
                :class="[filterOption==='removeFilter' ? 'is-checked' : '']"
                @click="$refs.cpt.filter('removeFilter'); removeFilterValue();"
                v-b-tooltip.hover
                title="Remove filter"
              >
                {{ filterValue }}
                <b-badge pill variant="light">
                  <span class="fas fa-times"></span>
                </b-badge>
              </b-button>
            </b-button-group>

            <fullscreen ref="fullscreen" :fullscreen.sync="fullscreen" class="text-center">
              <isotope
                id="root_isotope"
                ref="cpt"
                :options="getOptions()"
                v-images-loaded:on.progress="layout"
                :list="photos"
              >
                <div
                  v-for="photo in mutablePhotos"
                  :key="photo._id"
                  @click="selected=photo"
                  :style="[photoStyle, calculateSize(photo.size)]"
                >
                  <div>
                    <b-img
                      :src="photo.uploadPhoto"
                      fluid
                      rounded
                      :alt="photo.title"
                      :style="verticalActive ? 'margin-bottom: 20px;' : 'false'"
                      @click="fullscreen ? fullscreen=false : $bvModal.show(photo._id);"
                    ></b-img>
                    <PhotoAdmEditComponent
                      v-if="isLoggedIn"
                      :photos="mutablePhotos"
                      :photo="photo"
                      :tags="mutableTags"
                    />
                    <b-modal
                      centered
                      size="xl"
                      :id="photo._id"
                      hide-header
                      :footer-bg-variant="footerBgVariant"
                      :footer-text-variant="footerTextVariant"
                    >
                      <b-container fluid>
                        <b-row>
                          <b-img
                            :src="photo.uploadPhoto"
                            fluid
                            rounded
                            center
                            :alt="photo.title"
                            @click="$bvModal.hide(photo._id)"
                          ></b-img>
                        </b-row>
                      </b-container>
                      <div id="modal-footer" slot="modal-footer" class="w-100">
                        <b-container fluid>
                          <b-row>
                            <b-col cols="12">
                              <h6 class="text-white">
                                <strong>{{photo.title}}</strong>
                              </h6>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col align-self="start" cols="12" md="auto">
                              <div class="text-white">
                                <span class="font-weight-noraml">Tag(s):&nbsp;</span>
                                <span
                                  class="font-weight-normal"
                                  v-for="tag in photo.tags"
                                  :key="tag._id"
                                >{{tag.tag | capitalize}},&nbsp;</span>
                              </div>
                            </b-col>
                            <b-col align-self="start" cols="12" md="auto">
                              <div
                                class="font-weight-light text-white-50"
                              >Posted {{photo.uploadDate | moment("from", "now") }}; {{photo.uploadDate | moment("dddd, MMMM Do YYYY") }}</div>
                            </b-col>
                            <b-col align-self="end" cols="12">
                              <b-button
                                id="modal-button"
                                variant="outline-light"
                                size="sm"
                                @click="$bvModal.hide(photo._id)"
                              >Close</b-button>
                            </b-col>
                          </b-row>
                        </b-container>
                      </div>
                    </b-modal>
                  </div>
                </div>
              </isotope>
            </fullscreen>

            <div id="infiniteloader" class="mt-3">
              <b-row>
                <b-col cols="12" align-self="end">
                  <p class="errors" v-if="errors.length > 0">{{errors}}</p>
                  <infinite-loading
                    ref="infiniteLoading"
                    @infinite="infiniteHandler"
                    spinner="spiral"
                  >
                    <span slot="no-more">
                      <div>
                        No more futos
                        <i class="fas fa-frown"></i>
                      </div>
                      <b-button variant="link" @click="scrollToTop()">
                        Back to Top&nbsp;
                        <i class="fas fa-smile"></i>
                      </b-button>
                    </span>
                  </infinite-loading>
                </b-col>
              </b-row>
            </div>

            <p class="errors" v-if="errors.length > 0">{{errors}}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import { instance } from "../http-common";
import InfiniteLoading from "vue-infinite-loading";
import isotope from "vueisotope";
require("isotope-packery");
import imagesLoaded from "vue-images-loaded";
import fullscreen from "vue-fullscreen/src/component.vue";
import PhotoAdmCRUDComponent from "./PhotoAdmCRUDComponent.vue";
import PhotoAdmEditComponent from "./PhotoAdmEditComponent.vue";

export default {
  name: "PhotoComponent",
  components: {
    InfiniteLoading,
    isotope,
    fullscreen,
    PhotoAdmCRUDComponent,
    PhotoAdmEditComponent
  },
  directives: {
    imagesLoaded
  },
  data() {
    return {
      photos: [],
      tags: [],
      page: 1,
      errors: [],
      currentLayout: "packery",
      packeryActive: true,
      verticalActive: false,
      sortOption: null,
      sortValue: "Newest",
      filterOption: null,
      filterText: "",
      filterValue: "",
      fullscreen: false,
      footerBgVariant: "dark",
      footerTextVariant: "light",
      photoStyle: {
        width: "33.333%",
        height: "auto",
        padding: "1.75%"
      },
      smSize: {
        width: "33.333%"
      },
      mdSize: {
        width: "50%"
      },
      lgSize: {
        width: "66.666%"
      },
      xlSize: {
        width: "100%"
      },
      window: {
        width: 0,
        height: 0
      }
    };
  },
  computed: {
    mutablePhotos: function() {
      console.log("get photos");
      console.log(this.photos);
      return this.photos;
    },
    mutableTags: function() {
      console.log("get tags");
      function compare(a, b) {
        if (a.photosCount > b.photosCount) return -1;
        if (a.photosCount < b.photosCount) return 1;
        return 0;
      }
      console.log(this.tags);
      return this.tags.sort(compare);
    },
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  created() {
    this.axios
      .all([/*instance.get("photos"),*/ instance.get("tags")])
      .then(
        this.axios.spread((/*photosRes, tagsRes*/ { data }) => {
          // do something with both responses
          // console.log(photosRes);
          // this.photos = photosRes.data;
          console.log(data);
          this.tags.push(...data.Tags);
          // this.tags = tagsRes.data;
        })
      )
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
    //window resize listener
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  methods: {
    infiniteHandler($state) {
      instance
        .get("photos", {
          params: {
            page: this.page
          }
        })
        .then(({ data }) => {
          console.log(data);
          if (data.Photos.length > this.photos.length) {
            this.page += 1;
            this.photos.push(...data.Photos);
            $state.loaded();
            this.$nextTick(function() {
              this.$refs.cpt.sort("newest");
            }, this);
          } else {
            $state.complete();
          }
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
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    getFilterValue: function(value) {
      return (this.filterValue = value);
    },
    removeFilterValue: function() {
      return (this.filterValue = "");
    },
    getSortValue: function(value) {
      return (this.sortValue = value);
    },
    changeLayout: function(value) {
      this.currentLayout = value;
      this.packeryActive = !this.packeryActive;
      this.verticalActive = !this.verticalActive;
      this.$refs.cpt.layout(this.currentLayout);
      this.$nextTick(function() {
        this.$refs.cpt.unfilter();
        this.$refs.cpt.sort("newest");
      }, this);
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    toggleFullscreen() {
      this.$nextTick(function() {
        this.fullscreen = !this.fullscreen;
      }, this);
    },
    getOptions: function() {
      const _this = this;
      return {
        itemselector: ".root_isotope",
        layoutMode: _this.currentLayout,
        packery: {
          //gutter: 10
        },
        vertical: {
          horizontalAlignment: 0.5
        },
        sortBy: "id",
        sortAscending: {
          id: false,
          titleAZ: true,
          titleZA: false,
          newest: false,
          oldest: true
        },
        getSortData: {
          id: "_id",
          titleAZ: function(itemElem) {
            return itemElem.title.toLowerCase();
          },
          titleZA: function(itemElem) {
            return itemElem.title.toLowerCase();
          },
          newest: function(itemElem) {
            return itemElem.uploadDate;
          },
          oldest: function(itemElem) {
            return itemElem.uploadDate;
          }
        },
        getFilterData: {
          removeFilter: function() {
            return true;
          },
          filterByText: function(itemElem) {
            return itemElem.title
              .toLowerCase()
              .includes(_this.filterText.toLowerCase());
          },
          filterByTag: function(itemElem) {
            const arrPhotoLength = _this.mutablePhotos.length;
            const arrPhotoTagsLength = itemElem.tags.length;
            for (var i = 0; i < arrPhotoLength; i++) {
              for (var j = 0; j < arrPhotoTagsLength; j++) {
                if (itemElem.tags[j].tag == _this.filterValue)
                  return itemElem.tags[j].tag;
              }
            }
          }
        }
      };
    },
    layout() {
      this.$refs.cpt.layout(this.currentLayout);
    },
    calculateSize(photoSize) {
      const size = "";
      // TODO: tidy up if else statements
      if (this.window.width < 960) {
        //Less than 960ox width
        if (this.currentLayout === "vertical") {
          //all images in vertical layout are 100% width
          return this.xlSize;
        } else if (photoSize === "small") {
          return this.smSize;
        } else if (photoSize === "medium") {
          return this.mdSize;
        } else if (photoSize === "large") {
          return this.lgSize;
        } else if (photoSize === "xlarge") {
          return this.xlSize;
        } else {
          return this.photoStyle;
        }
      } else {
        //More than 960ox width
        if (this.currentLayout === "vertical" && photoSize === "small") {
          //small in vertical layout are 50% width
          return this.mdSize;
        } else if (
          this.currentLayout === "vertical" &&
          photoSize === "medium"
        ) {
          //madium images in vertical layout are 66% width
          return this.lgSize;
        } else if (
          this.currentLayout === "vertical" &&
          (photoSize === "large" || photoSize === "xlarge")
        ) {
          //large and xlarge images in vertical layout are 100% width
          return this.xlSize;
        } else if (photoSize === "small") {
          return this.smSize;
        } else if (photoSize === "medium") {
          return this.mdSize;
        } else if (photoSize === "large") {
          return this.lgSize;
        } else if (photoSize === "xlarge") {
          return this.xlSize;
        } else {
          return this.photoStyle;
        }
      }
      return size;
    }
  }
};
</script>

<!-- Global styling -->
<style>
.modal-body,
.modal-footer {
  background-color: #585858;
}
.modal-dialog {
  width: auto;
  z-index: 100000;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  margin-bottom: 0.5rem;
  font-family: "Cabin Sketch", cursive;
  font-weight: 500;
  line-height: 1.2;
}
h2 {
  margin-left: 10px;
}
.input-group {
  margin: 10px 0px;
  padding: 0px;
}
.btn {
  margin: 5px 0px;
  padding: 5px;
  text-align: right;
}
/*current tag and sort x*/
.btn-sm,
.btn-group-sm > .btn {
  margin-left: 10px;
  margin-top: 15px;
  padding: 0.15rem 0.5rem;
  font-size: 0.8.2rem;
}
.btn-dark {
  color: #fff;
  background-color: #495057;
  border-color: #495057;
}
.badge-dark {
  color: #fff;
  background-color: #495057;
}
/*mouse over styling*/
.img-fluid {
  cursor: pointer;
  position: relative;
  max-height: calc(100vh - 180px);
}
.img-fluid .hover {
  display: none;
  position: absolute;
}
.img-fluid:hover .hover {
  display: block;
}
.img-fluid:hover .original {
  display: none;
}
#filter {
  margin-top: 50px;
}
#tags,
#sort {
  margin: 30px 0px;
}
#layout {
  margin: 0px 40px;
}
#filterpill {
  margin-left: 10px;
}
#mobile-sorttags .btn-group {
  margin: 0px 0px;
  margin-bottom: 25px;
  width: 50%;
}
#modal-button {
  position: absolute;
  bottom: 0;
  right: 0;
}
@media (max-width: 576px) {
  #filter {
    margin: 0px 10px;
    margin-top: 35px;
  }
  #mobile-sorttags {
    margin: 0px 10px;
  }
  #layout {
    margin: 0px 15px;
  }
  #modal-button {
    position: relative;
    float: right;
    bottom: 0;
    right: 0;
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
    position: relative;
    width: 100%;
    padding-right: 0px;
    padding-left: 0px;
  }
}
/* 
@media (min-width: 960px) {
  .fullscreen-modal .modal-dialog {
    max-width: 100%;
    margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    display: flex;
    position: fixed;
    z-index: 100000;
  }
} */
</style>