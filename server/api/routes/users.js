const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

//Importing Controller
const UsersControllers = require("../controllers/users");

//Only admin can create other uses
// router.post("/create", UsersControllers.users_create);

router.post("/login", UsersControllers.users_login_user);

// router.delete("/:userId", checkAuth, UsersControllers.user_delete_user);

module.exports = router;
