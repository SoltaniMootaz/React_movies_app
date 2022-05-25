const mongoose = require("mongoose");
const userRoutes = require("../routes/users");

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
});
const user = mongoose.model("user", userSchema);
module.exports = user;
