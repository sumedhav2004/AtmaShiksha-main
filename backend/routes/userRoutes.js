const express = require("express");
const {registerUser, allUsers} = require("../controllers/userControllers")
const {authUser} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/")
.post(registerUser)

//for login
router.post("/login",authUser);

module.exports = router;