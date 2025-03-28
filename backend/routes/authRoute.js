const express = require("express");
const router = express.Router();
const { signUp } = require('../controllers/authController')

// AUTH ROUTES
router.post("/signup", signUp);

module.exports = router;