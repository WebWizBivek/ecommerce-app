const express = require('express');
const router = express.Router();
const { signup, signin, editProfile } = require("../controllers/userController");
router.post("/signup", signup);
router.post("/signin", signin);
router.patch("/edit", editProfile);

module.exports = router;
// router.patch("/edit")

