const express = require("express");

const userRoutes = express.Router();

const dbo = require("../db/conn");

const user = require("../models/user");

userRoutes.route("/GetUsers").get(async (req, res) => {
    let db_connect = dbo.getDb("NetBlix");
    db_connect
        .collection("users")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});
userRoutes.post("/SaveNewUser", async (req, res) => {
    try {
        let new_user = new user({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        });
        await new_user.save();
        res.send("saved new user !");
    } catch (err) {
        console.log("erreur");
        res.send(err);
    }
});
userRoutes.post("/CheckUser", async (req, res) => {
    const _username = req.body.username;
    const _password = req.body.password;

    await user.findOne({ $or: [{ email: _username }, { username: _username }] }).then((result) => {
        if (result) {
            if (result.password == _password) {
                res.status(200).send(result);
            } else {
                res.status(200).send("mot de pass incorrect");
            }
        } else {
            res.status(400).send("erreur lors de l'execution de ce request");
        }
    });
});
userRoutes.post("/VerifyUser", async (req, res) => {
    const _username = req.body.username;

    await user
        .findOne({ $or: [{ email: _username }, { username: _username }] })
        .lean()
        .then((result) => {
            if (result) {
                res.status(200).send("1");
            } else {
                res.status(400).send("-1");
            }
        });
});
module.exports = userRoutes;
