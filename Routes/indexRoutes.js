const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

module.exports = router; //Its critical to have this line inorder to import the files 