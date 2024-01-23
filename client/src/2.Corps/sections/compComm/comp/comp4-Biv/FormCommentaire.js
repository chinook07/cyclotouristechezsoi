import styled from "styled-components";
import { useState } from "react";
import { format } from 'date-fns';

import TelevPhotos from "./TelevPhotos";
import { frCA } from 'date-fns/locale';

const FormCommentaire = ({ site, rapport, setConfirmation }) => {

    const anneeCourante = new Date().getFullYear();
    const dateAuj = format(new Date(), "dd-MMM-yyyy", { locale: frCA });

    const [champs, setChamps] = useState({
        description: "",
        annee: anneeCourante,
        fichiers: [],
        nom: "",
        courriel: "",
        type: site.properties.type,
        legit: false
    });
    

    const mAJDescription = (e) => setChamps(prec => ({ ...prec, description: e.target.value }));
    const mAJFichiers = (e) => {
        console.log(e.target.files);
        setChamps(prec => ({ ...prec, fichiers: e.target.files }))
    };
    const mAJAnnee = (e) => setChamps(prec => ({ ...prec, annee: e.target.value }));
    const mAJCourriel = (e) => setChamps(prec => ({ ...prec, courriel: e.target.value }));
    const mAJLegit = (e) => setChamps(prec => ({ ...prec, legit: e.target.checked }));

    const annees = [];
    for (let i = 2020; i <= anneeCourante; i++) {
        annees.push(i)
    }

    const handleUploads = async ({ result }) => {
        console.log(result);
        const formData = new FormData();
        formData.append("type", champs.type);
        formData.append("id", site._id);
        formData.append("nComm", result.nDeCommentaires);
        for (let i = 0; i < champs.fichiers.length; i++) {
            formData.append("fichiers", champs.fichiers[i]);
        }
        console.log(formData);
        fetch("/api/commentaires-photos", {
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

    const ajoutCommentaire = async (e) => {
        console.log(champs.fichiers);
        e.preventDefault()
        try {
            const response = await fetch("/api/commentaire-site", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    _id: site._id,
                    properties: {
                        description: champs.description,
                        annee: champs.annee,
                        type: site.properties.type,
                        dateAuj
                    },
                    contributeur: {
                        courriel: champs.courriel
                    }
                })
            })
            if (response.status === 200) {
                const result = await response.json();
                console.log(result);
                setConfirmation(true)
                if (champs.fichiers.length > 0) {
                    await handleUploads({ result });
                }
                // rapport(undefined)
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Wrapper onSubmit={ajoutCommentaire}>
            <p>Vous êtes passé par là et vous souhaitez ajouter un commentaire? Faites-le ici!</p>
            <fieldset>
                <label htmlFor="texteComm">Entrez l'information à jour pour l'afficher sur la carte.</label>
                <textarea
                    id="texteComm"
                    name="texteComm"
                    onChange={mAJDescription}
                    placeholder="Ex : J'ai dormi là en juin 2041 au doux son du ruisseau. Il y a maintenant une toilette sèche à 300 mètres au nord. Je recommande ce site."
                    required
                    value={champs.description}
                />
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
                <p>Il est fortement suggéré d'ajouter des photos de l'emplacement, dans le but de bâtir un répertoire de qualité.</p>
                <TelevPhotos mAJFichiers={mAJFichiers} />
                <label htmlFor="courrielComm">L'adresse courriel ne sera utilisée que pour vous permettre de modifier ultérieurement les informations que vous avez soumises.</label>
                <input
                    id="courrielComm"
                    name="courrielComm"
                    onChange={mAJCourriel}
                    type="email"
                    value={champs.courriel}
                />
                <div>
                    <input
                        id="validComm"
                        name="validComm"
                        onChange={mAJLegit}
                        required
                        type="checkbox"
                        value={champs.legit}
                    />
                    <label htmlFor="validComm">Je consens que ces informations sont exacts, dans la mesure du possible.</label>
                </div>
                <button type="submit">Envoyer</button>
            </fieldset>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    fieldset {
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        textarea {
            border-radius: 5px;
            height: 100px;
            padding: 10px;
        }
        input[type=email] {
            border: 2px solid var(--c10);
            border-radius: 10px;
            max-width: 300px;
            padding: 10px 15px;
        }
        button {
            background-color: var(--c1);
            border: 2px solid var(--c10);
            border-radius: 10px;
            cursor: pointer;
            max-width: 100px;
            padding: 10px 15px;
            width: fit-content;
        }
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

export default FormCommentaire;