// formulaire pour ajouter un site de camping à la carte

import styled from "styled-components";
import { useState, useContext } from "react";
import { format } from 'date-fns';

import CarteAjout from "./CarteAjout";
import { CycloContext } from "../../../../../CycloContext";
import TypeDeSite from "./TypeDeSite";
import TelevPhotos from "./TelevPhotos";
import Contributeur from "./Contributeur";
import { frCA } from 'date-fns/locale';

const FormAjout = ({ setConfirmation, setMontrerAjoutCarte, ajoutsFaits, setAjoutsFaits }) => {
        
    const { coordAjout } = useContext(CycloContext);

    const anneeCourante = new Date().getFullYear();
    const dateAuj = format(new Date(), "dd-MMM-yyyy", { locale: frCA });

    const [champs, setChamps] = useState({
        name: "",
        description: "",
        annee: anneeCourante,
        fichiers: [],
        nom: "",
        courriel: "",
        type: "",
        legit: false
    });

    const mAJName = (e) => setChamps(prec => ({ ...prec, name: e.target.value }));
    const mAJDescription = (e) => setChamps(prec => ({ ...prec, description: e.target.value }));
    const mAJAnnee = (e) => setChamps(prec => ({ ...prec, annee: e.target.value }));
    const mAJNom = (e) => setChamps(prec => ({ ...prec, nom: e.target.value }));
    const mAJCourriel = (e) => setChamps(prec => ({ ...prec, courriel: e.target.value }));
    const mAJType = (e) => setChamps(prec => ({ ...prec, type: e.target.value }));
    const mAJFichiers = (e) => {setChamps(prec => ({ ...prec, fichiers: e.target.files }))};

    const annees = [];
    for (let i = 2020; i <= anneeCourante; i++) {
        annees.push(i)
    }

    const mAJLegit = (e) => setChamps(prec => ({ ...prec, legit: e.target.checked }));

    const baseURL = process.env.NODE_ENV === 'production' ? 'https://ccs-serveur.onrender.com/api' : 'http://localhost:8000/api';

    const handleUploads = (result) => {
        const formData = new FormData();
        formData.append("type", champs.type);
        formData.append("id", result.id)
        for (let i = 0; i < champs.fichiers.length; i++) {
            formData.append("fichiers", champs.fichiers[i]);
        }
        console.log(formData);
        fetch(`${baseURL}/telev-photos`, {
            method: "POST",
            body: formData,
        })
        .then(res => {
            if (res.status === 201) {
                console.log("Bravo!");
            } else {
                console.log("Failed to upload files.");
            }
        })
        .catch(err => console.log(err));
    }

    const ajoutSite = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${baseURL}/nouveau-site`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    type: "Feature",
                    properties: {
                        name: champs.name,
                        description: champs.description,
                        annee: champs.annee,
                        type: champs.type,
                        dateAuj
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [coordAjout.lng, coordAjout.lat]
                    },
                    contributeur: {
                        nom: champs.nom,
                        courriel: champs.courriel
                    }
                })
            });

            if (response.status === 201) {
                const result = await response.json();
                setConfirmation(true);
                if (champs.fichiers.length > 0) {
                    await handleUploads(result);
                }
                setMontrerAjoutCarte(false);
                let x = ajoutsFaits;
                setAjoutsFaits(x + 1);
            } else {
                console.log("Failed to create a new site.");
            }
        } catch (err) {
            console.log(err);
        }
    }
    
    return (
        <Wrapper
            onSubmit={ajoutSite}
            encType="multipart/form-data"
            // action="https://formspree.io/f/mvodrepv"
            // method="POST"
        >
            <fieldset>
                <legend>Ajout d'un site de camping</legend>
                <p>Choisissez l'emplacement du terrain sur la carte. Si vous faites une erreur, cliquez de nouveau.</p>
                <CarteAjout />
                {
                    coordAjout.lat &&
                    <Endroit>
                        <div>
                                <label>Latitude : </label>
                                <input
                                    name="lat"
                                    readOnly
                                    type="text"
                                    value={coordAjout.lat.toFixed(4)}
                                />
                            </div>
                            <div>
                                <label>Longitude : </label>
                                <input
                                    name="lon"
                                    readOnly
                                    type="text"
                                    value={coordAjout.lng.toFixed(4)}
                                />
                        </div>
                    </Endroit>
                }
                <Name
                    name="name"
                    onChange={mAJName}
                    placeholder="Titre"
                    required
                    value={champs.name}
                />
                <Description
                    name="description"
                    onChange={mAJDescription}
                    placeholder="Description détaillée : accès, quiétude, services, etc."
                    rows="10"
                    required
                    value={champs.description}
                />
                <p>Il est fortement suggéré d'ajouter des photos de l'emplacement, dans le but de bâtir un répertoire de qualité.</p>
                {/* <p>Le téléversement de photos est temporairement indisponible. Merci pour votre compréhension!</p> */}
                {/* <LiensImgDESUET ajoutPhoto={ajoutPhoto} liens={liens} /> */}
                <TelevPhotos mAJFichiers={mAJFichiers} />
                <TypeDeSite mAJType={mAJType} />
                <AnneeVisite>
                    <label htmlFor="anneeVisite">Année visitée : </label>
                    <select
                        id="anneeVisite"
                        name="anneeVisite"
                        onChange={mAJAnnee}
                        value={champs.annee}
                    >
                        {
                            annees.map((item, index) => {
                                return (
                                    <option
                                        key={index}
                                        value={item}
                                    >{item}</option>
                                )
                            })
                        }
                    </select>
                </AnneeVisite>
                <Contributeur mAJNom={mAJNom} mAJCourriel={mAJCourriel} champs={champs} />
                <Legit>
                    <input
                        name="legit"
                        onChange={mAJLegit}
                        type="checkbox"
                        required
                        value={champs.legit}
                    />
                    <span>J'ai visité cet endroit et je me sentirais en sécurité dormir ici. Si j'ai un site offert par un ou une propriétaire, je confirme être celui-ci ou avoir la permission d'offrir l'hébergement sur mon terrain.</span>
                </Legit>
                <Envoyer type="submit">Ajouter</Envoyer>
            </fieldset>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    fieldset {
        border: none;
        border-radius: 5px;
        legend {
            background-color: var(--c6);
            border-radius: 5px;
            color: var(--c0);
            padding: 5px 10px;
        }
        background-color: var(--c2);
    }
`

const Endroit = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 10px 0;
    > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        input {
            background-color: unset;
            border: none;
            width: 100px;
            text-align: center;
        }
    }
    @media screen and (max-width: 480px) {
        flex-direction: column;
        gap: 15px;
    }
`

const Name = styled.input`
    border-radius: 5px;
    margin: 15px 0;
    padding: 10px;
    width: 250px;
`

const Description = styled.textarea`
    border-radius: 5px;
    margin: 10px 0;
    padding: 10px;
    width: 100%;
`

const AnneeVisite = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 20px 0;
    select {
        border-radius: 5px;
        padding: 5px;
    }
`

const Legit = styled.label`
    text-align: center;
`

const Envoyer = styled.button`
    background-color: var(--c1);
    border-radius: 10px;
    cursor: pointer;
    display: block;
    margin: 10px auto;
    padding: 10px 15px;
    &:hover {
        box-shadow: 1px 1px var(--c6);
    }
`

export default FormAjout;