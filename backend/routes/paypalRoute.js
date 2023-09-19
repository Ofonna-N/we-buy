const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const paypalController = require("../controllers/paypalController");

router.get("/clientid", auth, paypalController.getPaypalClientId);

module.exports = router;
