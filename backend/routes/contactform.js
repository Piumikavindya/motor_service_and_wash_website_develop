const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactform");

router.post("/send-message", contactController.sendMessage);
router.get("/get-messages", contactController.getAllMessages); // New route to fetch all messages

module.exports = router;
