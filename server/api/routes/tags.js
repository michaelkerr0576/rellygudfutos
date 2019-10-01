const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

//Importing Controller
const TagsControllers = require("../controllers/tags");

//@route GET /tags/
//@desc loads tags
router.get("/", TagsControllers.tags_get_all);

//@route POST /tags/
//@desc uploads tag for selection
router.post("/", checkAuth, TagsControllers.tags_add_tag);

//@route GET /tags/id
//@desc loads tags by id
router.get("/:tagId", TagsControllers.tags_get_tag);

//@route PATCH /tags/id
//@desc updates tags by id
router.patch("/:tagId", checkAuth, TagsControllers.tags_update_tag);

//@route DELETE /tags/id
//@desc deletes tag by id
router.delete("/:tagId", checkAuth, TagsControllers.tags_delete_tag);

module.exports = router;
