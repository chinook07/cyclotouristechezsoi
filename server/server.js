const express = require("express");
const morgan = require("morgan");

// const upload = multer({dest: "uploads"})

const {
    nouveauSite,
    tousSites
} = require("./handlers")

express()
    .use(morgan("tiny"))
    .use(express.json())
    .use(express.static("public"))
    // .use(multer({dest: "uploads"}))
    .get("/api/tous-sites", tousSites)
    .post("/api/nouveau-site", nouveauSite)
    .get("*", (req, res) => {
        res.status(404).json({
            status: 404,
            message: "Désolé, erreur🚲!"
        })
    })
    .listen(8000, () => console.log(`Listening on port 8000`));