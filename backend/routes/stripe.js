const express = require("express");
const router = express.Router();
const stripeController = require("../controllers/stripe");

router.post("/create-checkout-session", stripeController.createCheckoutSession);

module.exports = router;
