const user = require("express");
const express = require("express");
const router = express.Router();
const UserController = require("../controller/user");

router.post("/userSignup", UserController.signup);
router.get("/userLogin", UserController.login);

module.exports = router;
