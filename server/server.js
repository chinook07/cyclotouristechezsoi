const express = require("express");
// const multer = require("multer");
const morgan = require("morgan");
const fileUpload = require('express-fileupload');
// const bodyParser = require("body-parser");

const {
    nouveauSite,
    televPhotos,
    tousSites,
    commentaireSite
} = require("./handlers")

express()
    .use(morgan("tiny"))
    .use(express.json())
    .use(express.static("public"))
    .use(fileUpload())
    // .use(bodyParser.urlencoded({extended: true}))
    .get("/api/tous-sites", tousSites)
    .post("/api/nouveau-site", nouveauSite)
    .post("/api/telev-photos", televPhotos)
    .put("/api/commentaire-site", commentaireSite)
    .get("*", (req, res) => {
        res.status(404).json({
            status: 404,
            message: "Désolé, erreur🚲!"
        })
    })
    .listen(8000, () => console.log(`Listening on port 8000`));