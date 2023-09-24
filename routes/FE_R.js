const express = require('express');
const router = express.Router()
module.exports = router;

router.get("/",(req, res) => {

    res.render("mainPage", {pageTitle:"בוקר טוב"});
});

router.get("/Addemployee",(req, res) => {

    res.render("employePage", {});
});

router.get("/Addentry",(req, res) => {

    res.render("entryPage", {});
});

router.get("/Viewtime",(req, res) => {

    res.render("TimedisplayPage", {});
});