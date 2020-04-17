const express = require("express");
const router = express.Router();
const multer = require("multer");
const checkAuth = require("../middleware/check-auth");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Importing Controller
const PhotosController = require("../controllers/photos");

// @route   GET /photos/
// @desc    Gets all photos
// @access  Public
router.get("/", PhotosController.photos_get_all);

// @route   POST /photos/
// @desc    Posts photo
// @access  Private
router.post(
  "/",
  checkAuth,
  upload.single("uploadPhoto"),
  PhotosController.photos_upload_photo
);

// @route   GET /photos/id
// @desc    GET photo by id
// @access  Public
router.get("/:photoId", PhotosController.photos_get_photo);

// @route   PATCH /photos/id
// @desc    Updates photo by id
// @access  Private
router.patch("/:photoId", checkAuth, PhotosController.photos_update_photo);

// @route   DELETE /photos/id
// @desc    Deletes photo by id
// @access  Private
router.delete("/:photoId", checkAuth, PhotosController.photos_delete_photo);

module.exports = router;
