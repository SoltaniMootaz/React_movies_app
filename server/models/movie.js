const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    genre: { type: String, required: true },
    date: { type: Date, required: true },
    poster: { type: String, required: true },
    cover: { type: String, required: true },
});
const movie = mongoose.model("movie", movieSchema);
module.exports = movie;
