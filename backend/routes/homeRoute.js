const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  return res.send("Welcome to we by Api");
});

module.exports = router;
