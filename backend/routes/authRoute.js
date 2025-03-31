const express = require("express");
const router = express.Router();
const { signUp,signIn } = require('../controllers/authController')


// AUTH ROUTES
router.post("/signup", signUp);
router.post("/signin",signIn)

module.exports = router;