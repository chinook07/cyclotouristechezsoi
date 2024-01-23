const express = require("express");
const morgan = require("morgan");
const fileUpload = require('express-fileupload');

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
    .listen(8000, () => console.log(`Listening on port 8000`));