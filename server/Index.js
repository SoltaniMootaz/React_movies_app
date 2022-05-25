const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
const port = process.env.port || 3001;
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(require("./routes/users"));
app.use(require("./routes/movies"));
//app.use(require("./routes/bookmark"));
const dbo = require("./db/conn");

mongoose
    .connect(
        "mongodb+srv://Mootaz:Mootazxsoltani123@cluster0.ut5ja.mongodb.net/NetBlix?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("est connecté !");
        app.listen(port, () => {
            dbo.connectToServer(function (err) {
                if (err) console.log("erreur: ", err);
            });
            console.log(`Server is running on port: ${port}`);
        });
    });
