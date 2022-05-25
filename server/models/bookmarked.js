const mongoose = require("mongoose");

const bookmarkSchema = mongoose.Schema({
    id_movie: { type: mongoose.Types.ObjectId, required: true },
    id_user: { type: mongoose.Types.ObjectId, required: true },
});
const bookmarked = mongoose.model("bookmark", bookmarkSchema);
module.exports = bookmarked;
