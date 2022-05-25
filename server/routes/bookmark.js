const express = require("express");
const { default: mongoose } = require("mongoose");

const bookmarksRoutes = express.Router();

const dbo = require("../db/conn");

const bookmark = require("../models/bookmarked");
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
module.exports = bookmarksRoutes;
