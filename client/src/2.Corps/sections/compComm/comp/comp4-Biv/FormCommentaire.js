import styled from "styled-components";
import { useState } from "react";

const FormCommentaire = ({ site }) => {

    const [champs, setChamps] = useState({
        description: "",
        photos: [],
        nom: "",
        courriel: "",
        type: site.properties.type,
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

    const mAJDescription = (e) => setChamps(prec => ({ ...prec, description: e.target.value }));
    const mAJCourriel = (e) => setChamps(prec => ({ ...prec, courriel: e.target.value }));
    const mAJPhotos = (e, index) => {
        let copiePhotos = champs.photos;
        copiePhotos[index] = e.target.value;
        setChamps(prec => ({ ...prec, photos: copiePhotos }));
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

    const ajoutCommentaire = (e) => {
        e.preventDefault()
        fetch("/api/commentaire-site", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                _id: site._id,
                properties: {
                    description: champs.description,
                    photos: champs.photos,
                    type: site.properties.type
                },
                contributeur: {
                    courriel: champs.courriel
                }
            })
        })
            .then(res => {
                res.json()
                setConfirmation(true)
            })
            .catch(err => console.log(err))
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
                <AjImage>
                    <p>Il est fortement suggéré d'ajouter des photos de l'emplacement, dans le but de bâtir un répertoire de qualité. Pour ce faire, les images doivent être stockées sur un site ou une page publique. Exemple :</p>
                    <ul>
                        <li>Une publication publique dans les réseaux sociaux</li>
                        <li>Un groupe public sur Facebook</li>
                        <li>Dans ce dossier nuagique partagé, tout en utilisant le mot de passe <span>cyclotouriste</span></li>
                        <li>Une page web personnel</li>
                    </ul>
                    <div>{liens}</div>
                    <button onClick={ajoutPhoto} type="button" >Ajouter une photo</button>
                </AjImage>
                <label htmlFor="courrielComm">L'adresse courriel ne sera utilisé que pour vous permettre de modifier ultérieurement les informations que vous avez soumises.</label>
                <input
                    id="courrielComm"
                    name="courrielComm"
                    onChange={mAJCourriel}
                    type="email"
                    value={champs.courriel}
                />
                <Validation>
                    <input
                        id="validComm"
                        name="validComm"
                        onChange={mAJLegit}
                        required
                        type="checkbox"
                        value={champs.legit}
                    />
                    <label htmlFor="validComm">Je consens que ces informations sont exacts, dans la mesure du possible.</label>
                </Validation>
                <button type="submit">Envoyer</button>
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

const AjImage = styled.div`
    > div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        input {
            max-width: 350px;
        }
    }
`

const Confirm = styled.p`
    font-weight: bold;
    text-align: center;
`

const Validation = styled.div``

export default FormCommentaire;