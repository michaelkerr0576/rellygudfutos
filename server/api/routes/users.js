const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

// Importing Controller
const UsersController = require("../controllers/users");

// Only admin can create other uses
// @route   POST /users/
// @desc    Posts user
// @access  Private
// router.post("/create", UsersController.users_create);

// @route   POST /users/
// @desc    Login user
// @access  Public
router.post("/login", UsersController.users_login_user);

// @route   DELETE /users/id
// @desc    Deletes user by id
// @access  Private
// router.delete("/:userId", checkAuth, UsersController.user_delete_user);

module.exports = router;
