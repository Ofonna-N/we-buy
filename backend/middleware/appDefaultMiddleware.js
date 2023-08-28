const express = require("express");
const cookieParser = require("cookie-parser");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser());

module.exports = router;
