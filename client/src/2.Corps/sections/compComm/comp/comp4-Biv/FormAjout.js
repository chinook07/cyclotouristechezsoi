import styled from "styled-components";
import { useState, useContext } from "react";

import CarteAjout from "./CarteAjout";
import { CycloContext } from "../../../../../CycloContext";
import TypeDeSite from "./TypeDeSite";
import Contributeur from "./Contributeur";
import { ExternalLink } from "react-external-link";

const FormAjout = () => {
    
    const { coordAjout } = useContext(CycloContext);

    const anneeCourante = new Date().getFullYear();

    const [champs, setChamps] = useState({
        name: "",
        description: "",
        annee: anneeCourante,
        photos: [],
        nom: "",
        courriel: "",
        type: "",
        legit: false
    });
    const [confirmation, setConfirmation] = useState(false);
    const [qtePhotos, setQtePhotos] = useState(0);

    const ajoutPhoto = () => {
        setQtePhotos(qtePhotos + 1);
        let photosActuels = champs.photos;
        photosActuels.push("");
        setChamps(prec => ({ ...prec, photos: photosActuels }));
    };

    const mAJName = (e) => setChamps(prec => ({ ...prec, name: e.target.value }));
    const mAJDescription = (e) => setChamps(prec => ({ ...prec, description: e.target.value }));
    const mAJAnnee = (e) => setChamps(prec => ({ ...prec, annee: e.target.value }));
    const mAJNom = (e) => setChamps(prec => ({ ...prec, nom: e.target.value }));
    const mAJCourriel = (e) => setChamps(prec => ({ ...prec, courriel: e.target.value }));
    const mAJType = (e) => setChamps(prec => ({ ...prec, type: e.target.value }));
    const mAJPhotos = (e, index) => {
        let copiePhotos = champs.photos;
        copiePhotos[index] = e.target.value;
        setChamps(prec => ({ ...prec, photos: copiePhotos }));
    }

    const annees = [];
    for (let i = 2020; i <= anneeCourante; i++) {
        annees.push(i)
    }

    const mAJLegit = (e) => setChamps(prec => ({ ...prec, legit: e.target.checked }));

    const liens = [];
    for (let index = 0; index < qtePhotos; index++) {
        liens.push(
            <input
                key={index}
                onChange={(e) => mAJPhotos(e, index)}
                type="url"
                value={champs.photos[index]}
            />
        );
    }

    const ajoutSite = (e) => {
        e.preventDefault()
        if (coordAjout.lat) {
            fetch("/api/nouveau-site", {
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
                        photos: champs.photos,
                        type: champs.type
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
            })
                .then(res => {
                    res.json()
                    setConfirmation(true)
                })
                .catch(err => console.log(err))
        } else {
            console.log("non");
        }
    }
    
    return (
        // <Wrapper onSubmit={ajoutSite} encType="multipart/form-data">
        <Wrapper onSubmit={ajoutSite}
            // action="https://formspree.io/f/mvodrepv"
            // method="POST"
        >
            <fieldset>
                <legend>Ajout d'un site de camping</legend>
                <p>Cliquez sur la carte pour définir l'emplacement du terrain. Si vous faites une erreur, cliquez de nouveau. Un marqueur apparaitra au bon endroit.</p>
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
                <p>Il est fortement suggéré d'ajouter des photos de l'emplacement, dans le but de bâtir un répertoire de qualité. Pour ce faire, les images doivent être stockées, le temps de les ajouter manuellement à la carte, sur un site ou une page publique, ou dont l'auteur de ce site y a accès. Exemple :</p>
                <ul>
                    <li>Une publication publique dans les réseaux sociaux</li>
                    <li>Un groupe public sur Facebook</li>
                    <li>Le <ExternalLink href="https://www.facebook.com/groups/539103319550016">groupe Cyclotourisme Québec</ExternalLink> sur Facebook</li>
                    <li>Dans <ExternalLink href="https://c.gmx.fr/@942516742939220237/Qfd4yoXUR4mKUmxUGFJqeg">ce dossier nuagique partagé</ExternalLink>, tout en utilisant le mot de passe <em>cyclotouriste</em></li>
                    <li>Une page web personnel</li>
                </ul>
                <LiensImg>
                    <label
                        htmlFor="lienimg"
                        name="liens"
                    >Veuillez lister les liens url vers vos images ci-dessous.</label>
                    <div>{liens}</div>
                    <button onClick={ajoutPhoto} type="button">Ajouter une photo</button>
                </LiensImg>
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
            {
                confirmation &&
                <Confirm>Merci d'avoir contribué à la carte!</Confirm>
            }
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

const LiensImg = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    textarea {
        border-radius: 5px;
        height: 80px;
        margin: 0 auto;
        max-width: 500px;
        padding: 10px;
        width: 100%;
    }
    button {
        cursor: pointer;
        display: block;
        border-radius: 5px;
        margin: 0 auto 15px;
        padding: 10px;
        width: 150px;
    }
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

const Confirm = styled.p`
    font-weight: bold;
    text-align: center;
`

export default FormAjout;