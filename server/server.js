const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || 8000

const {
    testApi,
    tousSites,
    photosDuSite,
    nouveauSite,
    nouveauSitePhoto,
    nouveauCommentaire,
    nouveauCommentairePhoto
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
    .use(fileUpload({useTempFiles: true}))
    .get("/api/test", testApi)
    .get("/api/tous-sites", tousSites)
    .put("/api/photos-du-site", photosDuSite)
    .post("/api/nouveau-site", nouveauSite)
    .post("/api/telev-photos", nouveauSitePhoto)
    .put("/api/commentaire-site", nouveauCommentaire)
    .post("/api/commentaires-photos", nouveauCommentairePhoto)
    .get("/api/courriel/:id", chercherCourriel)
    .get("/api/courriel-commentaire/:id", chercherCourrielCommentaire)
    .get("*", (req, res) => {
        res.status(404).json({
            status: 404,
            message: "Désolé, erreur🚲!"
        })
    })
    .listen(PORT, () => console.log(`Écoute sur le port ${PORT}`));