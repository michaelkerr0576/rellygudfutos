<template>
  <div id="adm-CRUD" class="pt-4">
    <b-container fluid>
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="auto">
          <div id="adm-uploadphoto" class="mb-3">
            <b-card-group deck>
              <b-card
                bg-variant="default"
                border-variant="secondary"
                header="Upload Photo"
                header-bg-variant="primary"
                header-border-variant="secondary"
                header-text-variant="white"
                align="left"
              >
                <b-card-text>
                  <div id="uploadPhotoForm">
                    <b-form autocomplete="off" @submit.prevent="uploadPhoto">
                      <b-form-file
                        id="photofile"
                        required
                        v-model="uploadPhotoForm.file"
                        :state="photoFileState"
                        placeholder="Chose a photo..."
                        drop-placeholder="Drop photo here..."
                        accept="image/jpeg, image/png"
                      ></b-form-file>
                      <b-form-invalid-feedback :state="photoFileState">select photo pls</b-form-invalid-feedback>
                      <b-form-valid-feedback :state="photoFileState">grazie beaucoup</b-form-valid-feedback>

                      <br />
                      <b-form-input
                        id="phototitle"
                        required
                        v-model="uploadPhotoForm.title"
                        :state="photoTitleState"
                        description="<country>_<county/province>_<city/place>_<tag*>_<meta*>"
                        placeholder="Photo title"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        :state="photoTitleState"
                      >requires at least 3 characters pls</b-form-invalid-feedback>
                      <b-form-valid-feedback :state="photoTitleState">merci mahalo</b-form-valid-feedback>
                      <b-form-text id="input-live-help">
                        <i>Title naming:</i>&nbsp;[country] - [county/province] - [city/place] - [tag*] - [title]
                      </b-form-text>

                      <br />
                      <b-form-group label="Photo tags 4 futo:">
                        <b-form-checkbox-group id="phototags" :state="photoTagsState">
                          <b-form-checkbox
                            required
                            v-for="tag in tags"
                            :key="tag._id"
                            :value="tag._id"
                            v-model="uploadPhotoForm.tags"
                          >{{ tag.tag | capitalize}}</b-form-checkbox>
                          <!-- <div>
                                    TagsSelected:
                                    <strong>{{ uploadPhotoForm.tags }}</strong>
                          </div>-->
                          <b-form-invalid-feedback
                            :state="photoTagsState"
                          >select at least one tag pls</b-form-invalid-feedback>
                          <b-form-valid-feedback :state="photoTagsState">gracias ciao bella</b-form-valid-feedback>
                        </b-form-checkbox-group>
                      </b-form-group>

                      <b-form-group label="Photo size 4 futo:">
                        <b-form-radio-group
                          id="photosize"
                          required
                          v-model="uploadPhotoForm.size"
                          :options="sizes"
                          :state="photoSizeState"
                        >
                          <b-form-invalid-feedback
                            :state="photoSizeState"
                          >select at least one size pls</b-form-invalid-feedback>
                          <b-form-valid-feedback :state="photoSizeState">tanks</b-form-valid-feedback>
                        </b-form-radio-group>
                      </b-form-group>

                      <div class="text-center">
                        <b-button
                          type="submit"
                          pill
                          variant="outline-secondary"
                          size="sm"
                          class="w-50"
                        >Upload</b-button>
                      </div>
                    </b-form>
                  </div>
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>
        </b-col>

        <b-col cols="12" md="auto">
          <div id="adm-add-delete-tags">
            <b-card-group deck>
              <b-card
                bg-variant="default"
                border-variant="secondary"
                header="Add Tag"
                header-bg-variant="primary"
                header-border-variant="secondary"
                header-text-variant="white"
                align="left"
              >
                <b-card-text>
                  <div id="addTagForm">
                    <b-form autocomplete="off" @submit.prevent="addTag">
                      <b-form-group>
                        <b-form-input
                          v-model="addTagForm.tag"
                          type="text"
                          required
                          :state="addTagState"
                          placeholder="Enter tag"
                        ></b-form-input>
                        <b-form-invalid-feedback :state="addTagState">enter new tag pls</b-form-invalid-feedback>
                        <b-form-valid-feedback :state="addTagState">well done</b-form-valid-feedback>
                      </b-form-group>

                      <div class="text-center">
                        <b-button
                          type="submit"
                          pill
                          variant="outline-secondary"
                          size="sm"
                          class="w-50"
                        >Add</b-button>
                      </div>
                    </b-form>
                  </div>
                </b-card-text>
              </b-card>
              <b-card
                id="deleteTagFormCard"
                bg-variant="default"
                border-variant="secondary"
                header="Delete Tag"
                header-bg-variant="danger"
                header-border-variant="secondary"
                header-text-variant="white"
                align="left"
              >
                <b-card-text>
                  <div id="deleteTagForm">
                    <b-form autocomplete="off" @submit.prevent="deleteTag">
                      <b-form-group>
                        <b-form-input
                          v-model="deleteTagForm.tag"
                          list="input-deletetag-list"
                          type="text"
                          required
                          :state="deleteTagState"
                          placeholder="Enter tag to delete"
                        ></b-form-input>
                        <datalist id="input-deletetag-list">
                          <option v-for="tag in tags" :key="tag._id">{{tag.tag | capitalize}}</option>
                        </datalist>
                        <b-form-invalid-feedback
                          :state="deleteTagState"
                        >select tag to delete from dropdown pls</b-form-invalid-feedback>
                        <b-form-valid-feedback :state="deleteTagState">adeus</b-form-valid-feedback>
                      </b-form-group>

                      <div class="text-center">
                        <b-button
                          type="submit()"
                          v-on:click="deleteTag(deleteTagForm.tag)"
                          pill
                          variant="outline-secondary"
                          size="sm"
                          class="w-50"
                        >Delete</b-button>
                      </div>
                    </b-form>
                  </div>
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>

          <div id="adm-update-tags" class="mt-3">
            <b-card-group deck>
              <b-card
                bg-variant="default"
                border-variant="secondary"
                header="Update Tag"
                header-bg-variant="warning"
                header-border-variant="secondary"
                header-text-variant="black"
                align="left"
              >
                <b-card-text>
                  <div id="updateTagForm">
                    <b-form autocomplete="off" @submit.prevent="updateTag">
                      <b-form-group>
                        <b-form-input
                          v-model="updateTagForm.oldTag"
                          list="input-updatetag-list"
                          type="text"
                          required
                          :state="updateOldTagState"
                          placeholder="Select tag to update"
                        ></b-form-input>
                        <datalist id="input-updatetag-list">
                          <option v-for="tag in tags" :key="tag._id">{{tag.tag | capitalize}}</option>
                        </datalist>
                        <b-form-invalid-feedback
                          :state="updateOldTagState"
                        >select tag to update from dropdown pls</b-form-invalid-feedback>
                        <b-form-valid-feedback :state="updateOldTagState">bien</b-form-valid-feedback>
                      </b-form-group>

                      <b-form-group>
                        <b-form-input
                          v-model="updateTagForm.newTag"
                          type="text"
                          required
                          :state="updateNewTagState"
                          placeholder="Enter tag"
                        ></b-form-input>
                        <b-form-invalid-feedback :state="updateNewTagState">enter updated tag pls</b-form-invalid-feedback>
                        <b-form-valid-feedback :state="updateNewTagState">Ça va bien</b-form-valid-feedback>
                      </b-form-group>

                      <div class="text-center">
                        <b-button
                          type="submit"
                          v-on:click="updateTag(updateTagForm.oldTag, updateTagForm.newTag)"
                          pill
                          variant="outline-secondary"
                          size="sm"
                          class="w-50"
                        >Update</b-button>
                      </div>
                    </b-form>
                  </div>
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="auto">
          <b-alert
            :show="dismissCountDown"
            dismissible
            fade
            variant="success"
            @dismiss-count-down="countDownChanged"
          >
            <p>
              <strong>Success!</strong>
              <i>&nbsp;Bye alert in {{ dismissCountDown }} seconds..</i>
            </p>
            <b-progress variant="success" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
            <!-- <a href="#" class="alert-link">See me futo pls!</a> -->
          </b-alert>

          <b-alert
            variant="danger"
            dismissible
            fade
            :show="showErrorAlert"
            @dismissed="showErrorAlert=false"
          >{{errors}}</b-alert>
        </b-col>
      </b-row>
      <div id="break" class="mt-4">
        <hr />
      </div>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import { instance } from "../http-common";

export default {
  name: "PhotoAdmCRUDComponent",
  props: ["photos", "tags"],
  data() {
    return {
      uploadPhotoForm: {
        file: null,
        title: "",
        tags: [],
        size: null
      },
      addTagForm: {
        tag: ""
      },
      deleteTagForm: {
        tag: ""
      },
      updateTagForm: {
        oldTag: "",
        newTag: ""
      },
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
    photoFileState() {
      return Boolean(this.uploadPhotoForm.file);
    },
    photoTitleState() {
      return this.uploadPhotoForm.title.length > 2 ? true : false;
    },
    photoTagsState() {
      return this.uploadPhotoForm.tags.length > 0 ? true : false;
    },
    photoSizeState() {
      return Boolean(this.uploadPhotoForm.size);
    },
    addTagState() {
      return this.addTagForm.tag.length > 1 ? true : false;
    },
    deleteTagState() {
      return this.deleteTagForm.tag.length > 1 ? true : false;
    },
    updateOldTagState() {
      return this.updateTagForm.oldTag.length > 1 ? true : false;
    },
    updateNewTagState() {
      return this.updateTagForm.newTag.length > 1 ? true : false;
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
    uploadPhoto(event) {
      event.preventDefault();
      const _this = this;
      const token = localStorage.getItem("token");
      let formData = new FormData();
      formData.append("uploadPhoto", this.uploadPhotoForm.file);
      formData.append("title", this.uploadPhotoForm.title);
      formData.append("size", this.uploadPhotoForm.size);
      for (var i = 0; i < this.uploadPhotoForm.tags.length; i++) {
        let phototag = this.uploadPhotoForm.tags[i];
        formData.append("tags[" + i + "]", phototag);
      }
      console.log(">> formData >> ", formData);
      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }
      instance
        .post("photos", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token
          }
        })
        .then(res => {
          console.log(res);
          this.dismissCountDown = this.dismissSecs;
          const arrTagsLength = this.tags.length;
          const arrPhotoTagsLength = res.data.createdPhoto.tags.length;
          this.$nextTick(function() {
            this.photos.splice(
              this.photos.length + 1,
              0,
              res.data.createdPhoto
            );
            //update filter tag count
            for (var i = 0; i < arrTagsLength; i++) {
              for (var j = 0; j < arrPhotoTagsLength; j++) {
                if (this.tags[i]._id === res.data.createdPhoto.tags[j]._id) {
                  this.tags[i].photosCount = this.tags[i].photosCount + 1;
                }
              }
            }
            //clear form
            this.uploadPhotoForm.file = null;
            this.uploadPhotoForm.title = "";
            this.uploadPhotoForm.tags = [];
            this.uploadPhotoForm.size = null;
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
    },
    addTag(event) {
      event.preventDefault();
      const _this = this;
      const token = localStorage.getItem("token");
      instance
        .post(
          "tags",
          { tag: this.addTagForm.tag },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token
            }
          }
        )
        .then(res => {
          console.log(res);
          this.dismissCountDown = this.dismissSecs;
          this.$nextTick(function() {
            this.tags.splice(this.tags.length + 1, 0, res.data.createdTags);
            //clear form
            this.addTagForm.tag = "";
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
    },
    deleteTag(value) {
      const token = localStorage.getItem("token");
      if (value.length > 1) {
        const arrPhotosLength = this.photos.length;
        const arrTagsLength = this.tags.length;
        for (var i = 0; i < arrTagsLength; i++) {
          //get tag id
          if (this.tags[i].tag.toLowerCase() === value.toLowerCase()) {
            console.log("Delete tag: " + value + ", ID: " + this.tags[i]._id);
            const id = this.tags[i]._id;
            this.$nextTick(function() {
              if (confirm("Do u relly want to delete?")) {
                instance
                  .delete("tags/" + id, {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer " + token
                    }
                  })
                  .then(res => {
                    console.log(res);
                    this.dismissCountDown = this.dismissSecs;
                    for (var j = 0; j < arrPhotosLength; j++) {
                      //console.log(j + " - currentphoto: " + this.photos[j].title);
                      const arrPhotoTagsLength = this.photos[j].tagsCount;
                      for (var k = 0; k < arrPhotoTagsLength; k++) {
                        if (this.photos[j].tags[k]._id === id) {
                          console.log(
                            "Remove 1 from photos: " + this.photos[j].title
                          );
                          this.photos[j].tags.splice(k, 1);
                          this.photos[j].tagsCount =
                            this.photos[j].tagsCount - 1;
                          break; // remove this line if there could be multiple matching elements
                        }
                      }
                    }
                    this.$nextTick(function() {
                      for (var i = 0; i < arrTagsLength; i++) {
                        if (this.tags[i]._id === id) {
                          console.log("tag removed: " + this.tags[i].tag);
                          this.tags.splice(i, 1);
                          //clear form
                          this.deleteTagForm.tag = "";
                          break;
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
            }, this);
          }
        }
      }
    },
    updateTag(oldValue, newValue) {
      const token = localStorage.getItem("token");
      if (oldValue.length > 1 && newValue.length > 1) {
        console.log(oldValue);
        console.log(newValue);
        const arrPhotosLength = this.photos.length;
        const arrTagsLength = this.tags.length;
        const formData = [
          {
            prop: "tag",
            value: newValue
          }
        ];
        for (var i = 0; i < arrTagsLength; i++) {
          //get tag id
          if (this.tags[i].tag.toLowerCase() === oldValue.toLowerCase()) {
            console.log(
              "Update old tag: " +
                oldValue +
                " (ID: " +
                this.tags[i]._id +
                "), with updated tag: " +
                newValue
            );
            const id = this.tags[i]._id;
            this.$nextTick(function() {
              if (confirm("Do u relly want to update?")) {
                instance
                  .patch("tags/" + id, formData, {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer " + token
                    }
                  })
                  .then(res => {
                    console.log(res);
                    this.dismissCountDown = this.dismissSecs; //success alert
                    for (var j = 0; j < arrPhotosLength; j++) {
                      console.log(
                        j + " - currentphoto: " + this.photos[j].title
                      );
                      const arrPhotoTagsLength = this.photos[j].tagsCount;
                      for (var k = 0; k < arrPhotoTagsLength; k++) {
                        if (this.photos[j].tags[k]._id === id) {
                          console.log(
                            "Update photo: " +
                              this.photos[j].title +
                              " with tag " +
                              "'" +
                              newValue +
                              "'"
                          );
                          console.log();
                          this.photos[j].tags[k].tag = newValue;
                          break; // remove this line if there could be multiple matching elements
                        }
                      }
                    }
                    this.$nextTick(function() {
                      for (var i = 0; i < arrTagsLength; i++) {
                        if (this.tags[i]._id === id) {
                          console.log(
                            "tag '" +
                              this.tags[i].tag +
                              "' updated to '" +
                              newValue +
                              "'"
                          );
                          //set new tags to prop
                          this.tags[i].tag = newValue;
                          //clear form
                          this.updateTagForm.oldTag = "";
                          this.updateTagForm.newTag = "";
                          break;
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
            }, this);
          }
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#adm-CRUD {
  background-color: #f8f8f8;
}
hr {
  margin-top: 0px;
  margin-bottom: 0px;
}
.card-header {
  text-align: center;
}
.alert {
  margin-top: 15px;
}
#phototags {
  max-width: 600px;
}
@media (max-width: 576px) {
  #break,
  .card-deck {
    margin: 0px 10px;
  }
  .card-body {
    padding-right: 10px;
    padding-left: 10px;
  }
  #deleteTagFormCard {
    margin-top: 15px;
  }
}
/*
@media (min-width: 576px) {
  .card-deck {
    margin-right: -50px;
    margin-left: -40px;
    margin-bottom: 10px;
  }
} */
</style>
