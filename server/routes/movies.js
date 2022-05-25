const express = require("express");

const movieRoutes = express.Router();

const dbo = require("../db/conn");

const movie = require("../models/movie");

movieRoutes.get("/getAllMovies", async (req, res) => {
    try {
        let db_connect = dbo.getDb("NetBlix");

        await db_connect
            .collection("movies")
            .find({})
            .toArray(function (err, result) {
                if (err) {
                    res.status(400).send("error : " + err);
                } else {
                    res.status(200).send(result);
                }
            });
    } catch (err) {
        console.log(err);
    }
});
movieRoutes.post("/SaveNewMovie", async (req, res) => {
    try {
        let new_movie = new movie({
            title: req.body.title,
            description: req.body.description,
            genre: req.body.genre,
            date: new Date(),
            poster: req.body.poster,
            cover: req.body.cover,
        });
        await new_movie.save();
        res.status(200).send("saved new user !");
    } catch (err) {
        console.log("error");
        res.status(400).send(err);
    }
});
movieRoutes.get("/getNewestMovies", async (req, res) => {
    try {
        let db_connect = dbo.getDb("NetBlix");

        await db_connect
            .collection("movies")
            .find({})
            .sort({ date: 1 })
            .limit(5)
            .toArray(function (err, result) {
                if (err) {
                    res.status(400).send("error : " + err);
                } else {
                    res.status(200).send(result);
                }
            });
    } catch (err) {
        console.log(err);
    }
});
module.exports = movieRoutes;
