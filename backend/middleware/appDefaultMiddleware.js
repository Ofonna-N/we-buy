const express = require("express");
const cookieParser = require("cookie-parser");
const router = express.Router();
const path = require("path");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser(process.env.AUTHCOOKIE_SECRET));

if (process.env.NODE_ENV === "production") {
  router.use(express.static(path.join(__dirname, "../../frontend/dist")));
}
module.exports = router;
