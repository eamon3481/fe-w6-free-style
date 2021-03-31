const express = require("express");
const router = express.Router();
const data = require("../public/datas/sample.json");
const db = require("../sever/db.js");
db();
const User = require("../sever/server.js");
const querystring = require("querystring");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Dev-Road-Map" });
});

router.get("/sample.json", (req, res, next) => {
  res.send(data);
});

router.get("/alert", (req, res, next) => {
  res.send(
    `<script type="text/javascript">
  alert("ERROR:: You need to confirm password!!");
  window.location.href = "http://localhost:3000";
</script>`
  );
  res.redirect(`/`);
});

//Log-in
router.post("/LogIn", async (req, res) => {
  const post = req.body;
});
//Sign-in
router.post("/resister", async (req, res) => {
  const post = req.body;
  if (post.password !== post.password2) res.redirect(`/alert`);

  let user = new User({
    Name: post.Name,
    password: post.password,
  });

  try {
    console.log(user);
    user = await user.save();
    const query = querystring.stringify({
      name: post.Name,
    });
    res.redirect("/user?" + query);
    console.log("sucsess");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
