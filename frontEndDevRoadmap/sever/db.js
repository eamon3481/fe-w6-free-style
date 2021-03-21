const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const url = `mongodb+srv://admin:${process.env.DB_PASS}@roadmap.du3gc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

module.exports = () => {
  mongoose.connect(url, function (err) {
    if (err) {
      console.error("mongodb connection error", err);
    }
    console.log("mongodb connected");
  });
};
