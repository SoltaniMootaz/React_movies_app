const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../db/conn");

recordRoutes.route("/record").get(function (req, res) {
    let db_connect = dbo.getDb("NetBlix");
    db_connect
        .collection("Users")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

module.exports = recordRoutes;
