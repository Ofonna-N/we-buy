const express = require("express");
const router = express.Router();
const path = require("path");

if (process.env.NODE_ENV === "production") {
  router.get("/", (_, res) => {
    return res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
  });
} else {
  // console.log(path);
  router.get("/", (_, res) => {
    return res.send("Welcome to we by Api");
  });
}

module.exports = router;
