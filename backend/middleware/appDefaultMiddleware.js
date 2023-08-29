const express = require("express");
const cookieParser = require("cookie-parser");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser(process.env.AUTHCOOKIE_SECRET));

module.exports = router;
