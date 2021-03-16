var express = require("express");
var router = express.Router();
const data = require("../public/datas/sample.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Dev-Roadmap" });
});

router.get("/sample.json", (req, res, next) => {
  res.send(data);
});

module.exports = router;
