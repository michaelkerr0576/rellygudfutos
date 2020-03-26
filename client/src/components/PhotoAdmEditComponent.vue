<template>
  <!-- ----------- PHOTO EDIT FORM ----------- -->
  <div>
    <form autocomplete="off" @submit.prevent="updatePhoto && deletePhoto">
      <b-card bg-variant="light" border-variant="default" align="left">
        <!-- Photo ID Field -->
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">ID</b-input-group-text>
          <b-form-input v-model="photo._id" disabled></b-form-input>
        </b-input-group>

        <!-- Photo Title Field -->
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Title</b-input-group-text>
          <b-form-input
            required
            v-model="photo.title"
            placeholder="Photo Title - A short description"
          ></b-form-input>
          <b-form-invalid-feedback :state="editTitleState">
            <b-card class="invalidfeedback"
              >requires at least 3 characters pls</b-card
            >
          </b-form-invalid-feedback>
        </b-input-group>

        <!-- Photo Caption Field -->
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Caption</b-input-group-text>
          <b-form-textarea
            required
            v-model="photo.caption"
            placeholder="Photo Caption - A fuller description of what is happening in the picture"
            rows="3"
          ></b-form-textarea>
          <b-form-invalid-feedback :state="editCaptionState">
            <b-card class="invalidfeedback"
              >requires at least 3 characters pls</b-card
            >
          </b-form-invalid-feedback>
        </b-input-group>

        <!-- Photo Location Field -->
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Location</b-input-group-text>
          <b-form-input
            required
            v-model="photo.location"
            placeholder="Photo Location - Where the photo was taken"
          ></b-form-input>
          <b-form-invalid-feedback :state="editLocationState">
            <b-card class="invalidfeedback"
              >requires at least 3 characters pls</b-card
            >
          </b-form-invalid-feedback>
        </b-input-group>

        <!-- Photo Store Field -->
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Store</b-input-group-text>
          <b-form-input
            required
            v-model="photo.store"
            placeholder="Photo Store Link - Enter link to store"
          ></b-form-input>
          <b-form-invalid-feedback :state="editLocationState">
            <b-card class="invalidfeedback"
              >requires at least 3 characters pls</b-card
            >
          </b-form-invalid-feedback>
        </b-input-group>

        <!-- Photo Capture Date Field -->
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Capture Date</b-input-group-text>
          <b-form-input v-model="photo.captureDate" disabled></b-form-input>
        </b-input-group>

        <!-- Photo Camera Field -->
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Camera</b-input-group-text>
          <b-form-input v-model="photo.camera" disabled></b-form-input>
        </b-input-group>

        <!-- Photo Lens Field -->
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Lens</b-input-group-text>
          <b-form-input v-model="photo.lens" disabled></b-form-input>
        </b-input-group>

        <!-- Photo Aperature Field -->
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Aperature</b-input-group-text>
          <b-form-input v-model="photo.aperature" disabled></b-form-input>
        </b-input-group>

        <!-- Photo Focal Length Field -->
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Focal Length</b-input-group-text>
          <b-form-input v-model="photo.focalLength" disabled></b-form-input>
        </b-input-group>

        <!-- Photo Shutter Speed Field -->
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Shutter Speed</b-input-group-text>
          <b-form-input v-model="photo.shutterSpeed" disabled></b-form-input>
        </b-input-group>

        <!-- Photo ISO Field -->
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">ISO</b-input-group-text>
          <b-form-input v-model="photo.iso" disabled></b-form-input>
        </b-input-group>

        <!-- Photo OG Name Field -->
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">OG Name</b-input-group-text>
          <b-form-input v-model="photo.originalName" disabled></b-form-input>
        </b-input-group>

        <!-- Photo Upload Field -->
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Upload</b-input-group-text>
          <b-form-input v-model="photo.uploadPhoto" disabled></b-form-input>
        </b-input-group>

        <!-- Photo Tags Field -->
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Old Tag(s):</b-input-group-text>
          <b-form-input disabled></b-form-input>
          <b-input-group-text
            slot="prepend"
            v-for="tag in photo.tags"
            :key="tag._id"
            :value="tag.id"
            disabled
            >{{ tag.tag | capitalize }}</b-input-group-text
          >
        </b-input-group>
        <b-card>
          <b-form-checkbox-group
            size="sm"
            required
            id="editphototags"
            v-model="edittags"
          >
            <b-form-checkbox
              v-for="tag in tags"
              :key="tag._id"
              :value="tag._id"
              >{{ tag.tag | capitalize }}</b-form-checkbox
            >
            <b-form-invalid-feedback :state="editTagState"
              >select at least one tag pls</b-form-invalid-feedback
            >
          </b-form-checkbox-group>
        </b-card>

        <!-- Photo Size Field -->
        <b-input-group size="sm">
          <b-input-group-text slot="prepend">Old Size:</b-input-group-text>
          <b-form-input disabled></b-form-input>
          <b-input-group-text slot="prepend" disabled>{{
            photo.size
          }}</b-input-group-text>
        </b-input-group>
        <b-card>
          <b-form-radio-group
            required
            v-model="editsize"
            :options="sizes"
          ></b-form-radio-group>
          <b-form-invalid-feedback :state="editSizeState"
            >select at least one size pls</b-form-invalid-feedback
          >
        </b-card>

        <!-- Button Actions -->
        <b-button
          type="submit"
          v-on:click="updatePhoto(photo._id)"
          block
          variant="warning"
          >Update</b-button
        >
        <b-button v-on:click="deletePhoto(photo._id)" block variant="danger"
          >Delete</b-button
        >

        <!-- Alerts -->
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
          <b-progress
            variant="success"
            :max="dismissSecs"
            :value="dismissCountDown"
            height="4px"
          ></b-progress>
        </b-alert>

        <b-alert
          variant="danger"
          dismissible
          fade
          :show="showErrorAlert"
          @dismissed="showErrorAlert = false"
          >{{ errors }}</b-alert
        >
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
    editCaptionState() {
      return this.photo.caption.length > 2 ? true : false;
    },
    editLocationState() {
      return this.photo.location.length > 2 ? true : false;
    },
    editStoreState() {
      const pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // fragment locator
      return !!pattern.test(this.photo.store);
    },
    editTagState() {
      return this.edittags.length > 0 ? true : false;
    },
    editSizeState() {
      return Boolean(this.editsize);
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
                this.photo.size = res.data.updatedPhoto.size;
                this.photo.tags = res.data.updatedPhoto.tags;
                //clear size and tags in form
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
