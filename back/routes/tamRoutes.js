const express = require("express");
const { getTAMData } = require("../controllers/tamController");

const router = express.Router();

router.get("/tam-data", getTAMData);

module.exports = router;
