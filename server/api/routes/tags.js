const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

// Importing Controller
const TagsController = require("../controllers/tags");

// @route   GET /tags/
// @desc    Gets all tags
// @access  Public
router.get("/", TagsController.tags_get_all);

// @route   POST /tags/
// @desc    Posts tag
// @access  Private
router.post("/", checkAuth, TagsController.tags_add_tag);

// @route   GET /tags/id
// @desc    GET tag by id
// @access  Public
router.get("/:tagId", TagsController.tags_get_tag);

// @route   PATCH /tags/id
// @desc    Updates tag by id
// @access  Private
router.patch("/:tagId", checkAuth, TagsController.tags_update_tag);

// @route   DELETE /tags/id
// @desc    Deletes tag by id
// @access  Private
router.delete("/:tagId", checkAuth, TagsController.tags_delete_tag);

module.exports = router;
