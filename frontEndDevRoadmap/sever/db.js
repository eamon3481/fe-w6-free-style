const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const url = `mongodb+srv://admin:${process.env.DB_PASS}@devroadmap.du3gc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
module.exports = () => {
  mongoose
    .connect(url, function (err) {
      if (err) {
        console.error("mongodb connection error", err);
      }
    })
    .then(console.log("mongodb connected"));
};
