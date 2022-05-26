const express = require("express");
const { default: mongoose } = require("mongoose");

const bookmarksRoutes = express.Router();

const dbo = require("../db/conn");

const bookmark = require("../models/bookmarked");

bookmarksRoutes.post("/getFavoriteMovies", async (req, res) => {
    const id = req.body.id;
    try {
        await bookmark.find({ id_user: id }).then((result) => res.status(200).send(result));
    } catch (err) {
        console.log(err);
        res.status(400).send("error : " + err);
    }
});
bookmarksRoutes.post("/SaveNewBookmark", async (req, res) => {
    try {
        let new_bookmark = new bookmark({
            id_user: req.body.idU,
            id_movie: req.body.idM,
        });
        await new_bookmark.save();
        res.status(200).send("saved new bookmark !");
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});
bookmarksRoutes.post("/checkIfBookmarked", async (req, res) => {
    const idU = req.body.idU;
    const idM = req.body.idM;
    try {
        await bookmark.findOne({ id_user: idU, id_movie: idM }).then(() => {
            console.log("found");
            res.status(200).send(true);
        });
    } catch (err) {
        console.log(err);
        res.status(400).send("error : " + err);
    }
});
bookmarksRoutes.delete("/DeleteBookmark", async (req, res) => {
    const id = req.body.id;
    try {
        await bookmark
            .findOneAndDelete({ id_user: id })
            .then(() => res.status(200).send("supression avec succées"));
    } catch (error) {
        console.log(err);
        res.status(400).send(err);
    }
});
module.exports = bookmarksRoutes;
