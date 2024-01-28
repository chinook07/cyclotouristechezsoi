const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || 8000

const {
    nouveauSite,
    televPhotos,
    tousSites,
    commentaireSite,
    commentairesPhotos
} = require("./handlers");

const {
    chercherCourriel,
    chercherCourrielCommentaire
} = require("./handlersCrypto")

express()
    .use(morgan("tiny"))
    .use(cors())
    .options("https://www.cyclotouristechezsoi.ca", cors())
    .use(express.json())
    .use(express.static("public"))
    .use(fileUpload())
    .get("/api/tous-sites", tousSites)
    .post("/api/nouveau-site", nouveauSite)
    .post("/api/telev-photos", televPhotos)
    .post("/api/commentaires-photos", commentairesPhotos)
    .put("/api/commentaire-site", commentaireSite)
    .get("/api/courriel/:id", chercherCourriel)
    .get("/api/courriel-commentaire/:id", chercherCourrielCommentaire)
    .get("*", (req, res) => {
        res.status(404).json({
            status: 404,
            message: "Désolé, erreur🚲!"
        })
    })
    .listen(PORT, () => console.log(`Listening on port ${PORT}`));