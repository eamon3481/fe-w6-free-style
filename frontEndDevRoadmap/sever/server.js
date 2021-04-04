const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	Name: String, // 이름
  password: String, // 비밀번호
  map: String,
});

module.exports = mongoose.model("User", UserSchema);
