const express = require('express');
const updateRequestStatus = require( "../controllers/approval.js");

const router = express.Router();


router.put("/updateStatus/:id", updateRequestStatus);

module.exports = router;