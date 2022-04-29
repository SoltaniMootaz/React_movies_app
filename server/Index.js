const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.port || 3001;
app.use(cors());
app.use(express.json());
app.use(require("./routes/users"));
const dbo = require("./db/conn");

app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if (err) console.log("erreur: ", err);
    });
    console.log(`Server is running on port: ${port}`);
});
