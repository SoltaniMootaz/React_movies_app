const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookmarkSchema = mongoose.Schema({
    id_movie: { type: Schema.Types.ObjectId, required: true },
    id_user: { type: Schema.Types.ObjectId, required: true },
});
const bookmarked = mongoose.model("bookmark", bookmarkSchema);
module.exports = bookmarked;
