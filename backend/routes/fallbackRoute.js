const express = require("express");
const router = express.Router();
const path = require("path");

if (process.env.NODE_ENV === "production") {
  router.get("/", (_, res) => {
    return res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
  });
} else {
  router.get("/", (_, res) => {
    return res.send("Fallback route");
  });
}

module.exports = router;
