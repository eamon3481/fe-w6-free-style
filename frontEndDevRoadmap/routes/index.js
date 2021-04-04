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

router.get("/IDAlert", (req, res, next) => {
  res.send(
    `<script type="text/javascript">
  alert("ERROR:: You need to confirm NAME!!");
  window.location.href = "http://localhost:3000";
</script>`
  );
  res.redirect(`/`);
});

router.get("/passwordConfirmAlert", (req, res, next) => {
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
  console.log(post.Name);
  User.find()
    .where("Name")
    .equals(post.Name)
    .exec()
    .then(function (result) {
      if (post.password !== result[0].password) {
        res.redirect(`/passwordConfirmAlert`);
      }
      const query = querystring.stringify({
        name: post.Name,
      });
      res.redirect("/user?" + query);
    })
    .catch(function (err) {
      res.redirect(`/IDAlert`);
    });
});
//Sign-in
router.post("/resister", async (req, res) => {
  const post = req.body;
  if (post.password !== post.password2) res.redirect(`/passwordConfirmAlert`);

  let user = new User({
    Name: post.Name,
    password: post.password,
    map: JSON.stringify(data.map),
  });

  try {
    console.log(user);
    user = await user.save();

    const query = querystring.stringify({
      name: post.Name,
    });
    res.redirect("/user?" + query);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
