import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactHtmlParser from 'react-html-parser';

import { faClose } from "@fortawesome/free-solid-svg-icons";
import Actions from "./Actions";
import Commentaires from "./Commentaires";

const DetailsSite = ({ site, fermerSite }) => {

    const [photosAChercher, setPhotosAChercher] = useState({});
    const [photosPrets, setPhotosPrets] = useState({
        origine: [],
        commentaires: []
    });

    console.log(site);

    useEffect(() => {
        let photosDuSite = {
            "photosOrigine": [],
            "photosComm" : []
        };
        if (site.properties.photos) {
            site.properties.photos.forEach((item) => {
                photosDuSite.photosOrigine.push(item)
            })
        }
        if (site.properties.commentaires) {
            site.properties.commentaires.forEach((comment) => {
                if (comment.fichiers) {
                    comment.fichiers.forEach((commPhoto) => {
                        photosDuSite.photosComm.push(commPhoto)
                    })
                }
            })
        }
        console.log(photosDuSite);
        setPhotosAChercher(photosDuSite);
    }, [])

    const baseURL = process.env.NODE_ENV === 'production' ? 'https://ccs-serveur.onrender.com/api' : 'http://localhost:8000/api';

    // reste à faire

    useEffect(() => {
        if (Object.keys(photosAChercher).length > 0 && (photosAChercher.photosOrigine.length > 0 || photosAChercher.photosComm.length > 0)) {
            console.log(photosAChercher);
            fetch(`${baseURL}/photos-du-site`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(photosAChercher)
            })
                .then(res => res.json())
                .then(donnees => {
                    console.log("Je suis allé chercher les photos du serveur", donnees);
                    setPhotosPrets({
                        origine: donnees.tousPhotosOrigine,
                        commentaires: donnees.tousPhotosComm
                    })
                })
        }
    }, [photosAChercher])
    
    return (
        <Wrapper id="nouveauIFrame">
            <Banniere>
                {
                    site.properties.name
                        ? <h3>{site.properties.name}</h3>
                        : <h3>Lieu {site._id}</h3>
                }
                <button onClick={fermerSite} title="fermer">
                    <FontAwesomeIcon icon={faClose} />
                </button>
            </Banniere>
            <Categorie>Catégorie : {site.properties.type}</Categorie>
            <Description>
                <h4>Description</h4>
                {
                    photosPrets.origine.length > 0 &&
                    <>
                        <p>Oups! La photo {photosPrets.origine[0].filename} devrait apparaitre ici!</p>
                        <img src={`data:image/jpg;base64,${photosPrets.origine[0].content}`} alt="" />
                    </>
                }
                <p>{ReactHtmlParser(site.properties.description)}</p>
                {
                    photosPrets.origine.length > 1 &&
                    photosPrets.origine.map((photo, index) => {
                        if (index > 0) return <p key={index}>Oups! La photo {photo.filename} devrait apparaitre ici!</p>
                    })
                }
                {
                    site.properties.annee &&
                    <Ital>Visité en {site.properties.annee}</Ital>
                }
            </Description>
            {
                site.properties.commentaires &&
                <Commentaires site={site} />
            }
            <Actions site={site} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c6);
    border-radius:1 5px;
    color: var(--c11);
    max-height: 92%;
    left: 8%;
    padding: 10px;
    overflow-y: auto;
    position: absolute;
    top: 8%;
    transform: translate(-4%, -4%);
    width: 92%;
    z-index: 5000;
    img {
        display: block;
        margin: 0 auto;
        max-width: 400px;
        object-fit: contain;
        width: 100%;
    }
`

const Banniere = styled.div`
    align-items: center;
    background-color: var(--c6);
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    position: sticky;
    top: -10px;
    h3 {
        margin: 0;
        text-align: center;
    }
    button {
        border-radius: 50%;
        cursor: pointer;
        height: 40px;
        width: 40px;
        &:hover {
            background-color: var(--c1);
        }
    }
    @media screen and (max-width: 500px) {
        padding: 10px 5px;
    }
`

const Categorie = styled.p`
    margin: 10px;
    padding: 10px;
`

const Description = styled.div`
    background-color: var(--c4);
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    word-wrap: break-word;
`

const Ital = styled.p`
    font-style: italic;
`

export default DetailsSite;