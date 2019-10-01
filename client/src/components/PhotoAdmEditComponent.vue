<template>
  <div>
    <form autocomplete="off" @submit.prevent="updatePhoto && deletePhoto">
      <b-card bg-variant="light" border-variant="default" align="left">
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">ID</b-input-group-text>
          <b-form-input id="editphotoid" v-model="photo._id" disabled></b-form-input>
        </b-input-group>

        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Title</b-input-group-text>
          <b-form-input id="editphototitle" required v-model="photo.title" placeholder="Futo title"></b-form-input>
          <b-form-invalid-feedback :state="editTitleState">
            <b-card
              class="invalidfeedback"
            >requires at least 3 characters pls: [country]_[county/province]_[city/place]_[tag*]_[meta*]</b-card>
          </b-form-invalid-feedback>
        </b-input-group>

        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Photo</b-input-group-text>
          <b-form-input id="editphotouploadphoto" v-model="photo.uploadPhoto" disabled></b-form-input>
        </b-input-group>

        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Old Datetime</b-input-group-text>
          <b-form-input id="editphotouploadphoto" v-model="photo.uploadDate" disabled></b-form-input>
        </b-input-group>
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Datetime</b-input-group-text>
          <b-form-input
            id="editphotouploaddate"
            required
            v-model="editdate"
            placeholder="new futo datetime"
          ></b-form-input>
          <b-form-invalid-feedback :state="editDateState">
            <b-card class="invalidfeedback">follow naming zample pls: YYYY-MM-DDThh:mm:ss.milZ pls</b-card>
          </b-form-invalid-feedback>
        </b-input-group>

        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Old Tag(s):</b-input-group-text>
          <b-form-input disabled></b-form-input>
          <b-input-group-text
            slot="prepend"
            v-for="tag in photo.tags"
            :key="tag._id"
            :value="tag.id"
            disabled
          >{{ tag.tag | capitalize}}</b-input-group-text>
        </b-input-group>
        <b-card>
          <b-form-checkbox-group size="sm" id="editphototags" v-model="edittags">
            <b-form-checkbox
              required
              v-for="tag in tags"
              :key="tag._id"
              :value="tag._id"
            >{{ tag.tag | capitalize}}</b-form-checkbox>
            <b-form-invalid-feedback :state="editTagState">select at least one tag pls</b-form-invalid-feedback>
          </b-form-checkbox-group>
        </b-card>

        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Old Size:</b-input-group-text>
          <b-form-input disabled></b-form-input>
          <b-input-group-text slot="prepend" disabled>{{ photo.size }}</b-input-group-text>
        </b-input-group>
        <b-card>
          <b-form-radio-group required v-model="editsize" :options="sizes"></b-form-radio-group>
          <b-form-invalid-feedback :state="editSizeState">select at least one size pls</b-form-invalid-feedback>
        </b-card>

        <b-button type="submit" v-on:click="updatePhoto(photo._id)" block variant="warning">Update</b-button>
        <b-button v-on:click="deletePhoto(photo._id)" block variant="danger">Delete</b-button>

        <b-alert
          :show="dismissCountDown"
          dismissible
          fade
          variant="success"
          @dismiss-count-down="countDownChanged"
        >
          <p>
            <strong>Futo updated!</strong>
            <i>&nbsp;Bye alert in {{ dismissCountDown }} seconds..</i>
          </p>
          <b-progress variant="success" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
        </b-alert>

        <b-alert
          variant="danger"
          dismissible
          fade
          :show="showErrorAlert"
          @dismissed="showErrorAlert=false"
        >{{errors}}</b-alert>
      </b-card>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import { instance } from "../http-common";

export default {
  name: "PhotoAdmEditComponent",
  props: ["photos", "photo", "tags"],
  data() {
    return {
      editdate: "",
      edittags: [],
      editsize: null,
      sizes: [
        { text: "small", value: "small" },
        { text: "medium", value: "medium" },
        { text: "large", value: "large" },
        { text: "xlarge", value: "xlarge" }
      ],
      dismissSecs: 5,
      dismissCountDown: 0,
      showErrorAlert: false,
      errors: []
    };
  },
  computed: {
    editTitleState() {
      return this.photo.title.length > 2 ? true : false;
    },
    editTagState() {
      return this.edittags.length > 0 ? true : false;
    },
    editSizeState() {
      return Boolean(this.editsize);
    },
    editDateState() {
      return this.editdate.length > 2 ? true : false;
    }
  },
  watch: {
    errors: function(value) {
      if (this.errors.length > 0) {
        this.showErrorAlert = true;
        this.errors = value;
      }
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    updatePhoto(id) {
      const token = localStorage.getItem("token");
      if (this.edittags.length > 0 && this.editsize != "") {
        const formData = [
          {
            prop: "title",
            value: this.photo.title
          },
          {
            prop: "size",
            value: this.editsize
          },
          {
            prop: "tags",
            value: this.edittags
          },
          {
            prop: "uploadDate",
            value: this.editdate
          }
        ];
        instance
          .patch("photos/" + id, formData, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token
            }
          })
          .then(res => {
            console.log(res);
            this.dismissCountDown = this.dismissSecs; //success alert
            //const arrPhotosLength = this.photos.length;
            const arrTagsLength = this.tags.length;
            const arrOldPhotoTagsLength = this.photo.tags.length;
            const arrNewPhotoTagsLength = res.data.updatedPhoto.tags.length;
            this.$nextTick(function() {
              for (var i = 0; i < arrTagsLength; i++) {
                //console.log(i + " - currenttag: " + this.tags[i].tag);
                for (var j = 0; j < arrOldPhotoTagsLength; j++) {
                  // console.log(
                  //   j + " - currentphototag: " + this.photo.tags[j].tag
                  // );
                  if (this.tags[i]._id === this.photo.tags[j]._id) {
                    console.log(
                      "MATCH - delete 1 count from: " + this.photo.tags[j].tag
                    );
                    this.tags[i].photosCount = this.tags[i].photosCount - 1;
                    break; // remove this line if there could be multiple matching elements
                  }
                }
              }
              this.$nextTick(function() {
                for (var i = 0; i < arrTagsLength; i++) {
                  //add new tag(s) to count
                  for (var j = 0; j < arrNewPhotoTagsLength; j++) {
                    if (
                      this.tags[i]._id === res.data.updatedPhoto.tags[j]._id
                    ) {
                      console.log(
                        "NEW - add: " + res.data.updatedPhoto.tags[j].tag
                      );
                      this.tags[i].photosCount = this.tags[i].photosCount + 1;
                      break; // remove this line if there could be multiple matching elements
                    }
                  }
                }
              }, this);
              this.$nextTick(function() {
                //set new tags to prop
                this.photo.uploadDate = res.data.updatedPhoto.uploadDate;
                this.photo.size = res.data.updatedPhoto.size;
                this.photo.tags = res.data.updatedPhoto.tags;
                //clear size and tags in form
                this.editdate = "";
                this.editsize = "";
                this.edittags = [];
              }, this);
            }, this);
          })
          .catch(err => {
            if (
              err.response.status === 401 &&
              err.response.config &&
              !err.response.config.__isRetryRequest
            ) {
              this.$store.dispatch("logout").then(() => {
                this.$router.push("/login");
              });
            } else if (err.response) {
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
    },
    deletePhoto(id) {
      const token = localStorage.getItem("token");
      if (confirm("Do u relly want to delete?")) {
        instance
          .delete("photos/" + id, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token
            }
          })
          .then(res => {
            console.log(res);
            const arrPhotosLength = this.photos.length;
            const arrTagsLength = this.tags.length;
            for (var j = 0; j < arrTagsLength; j++) {
              //console.log(j + " - currenttag: " + this.tags[j].tag);
              const arrTagPhotosLength = this.tags[j].photosCount;
              for (var k = 0; k < arrTagPhotosLength; k++) {
                if (this.tags[j].photos[k]._id === id) {
                  console.log("Remove 1 from tags: " + this.tags[j].tag);
                  this.tags[j].photosCount = this.tags[j].photosCount - 1;
                  //break; // remove this line if there could be multiple matching elements
                }
              }
            }
            this.$nextTick(function() {
              for (var i = 0; i < arrPhotosLength; i++) {
                //console.log(i + " - currentphoto: " + this.photos[i].title);
                if (this.photos[i]._id === id) {
                  console.log("photo removed: " + this.photos[i].title);
                  this.photos.splice(i, 1);
                  break; // remove this line if there could be multiple matching elements
                }
              }
            }, this);
          })
          .catch(err => {
            if (
              err.response.status === 401 &&
              err.response.config &&
              !err.response.config.__isRetryRequest
            ) {
              this.$store.dispatch("logout").then(() => {
                this.$router.push("/login");
              });
            } else if (err.response) {
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
.card-body {
  padding: 0.5rem;
}
.btn-block + .btn-block {
  margin-top: 0.03rem;
}
.invalidfeedback {
  margin: -5px 0px;
}
</style>
