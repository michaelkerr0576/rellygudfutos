const express = require("express");
const router = express.Router();
const multer = require("multer");
const checkAuth = require("../middleware/check-auth");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true); //stores file
  } else {
    cb(null, false); //rejects all other file types
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 40 // limits to 40mb file size
  },
  fileFilter: fileFilter
});

//Importing Controller
const PhotosControllers = require("../controllers/photos");

//@route GET /photos/
//@desc loads photos and details
router.get("/", PhotosControllers.photos_get_all);

//@route POST /photos/
//@desc uploads photo and details
router.post(
  "/",
  checkAuth,
  upload.single("uploadPhoto"),
  PhotosControllers.photos_upload_photo
);

//@route GET /photos/id
//@desc loads individual photo and details
router.get("/:photoId", PhotosControllers.photos_get_photo);

//@route PATCH /photos/id
//@desc updates details for photo
router.patch("/:photoId", checkAuth, PhotosControllers.photos_update_photo);

//@route DELETE /photos/id
//@desc deletes photo and details
router.delete("/:photoId", checkAuth, PhotosControllers.photos_delete_photo);

module.exports = router;
