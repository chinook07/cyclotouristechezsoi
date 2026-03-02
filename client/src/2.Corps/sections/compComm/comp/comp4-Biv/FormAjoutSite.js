// nouveau formulaire pour ajouter un site de camping à la carte, envoyé par Formspree

import styled from "styled-components";
import { useState, useContext } from "react";

import CarteAjout from "./CarteAjout";
import { CycloContext } from "../../../../../CycloContext";
import TypeDeSite from "./v2TypeDeSite";
import Contributeur from "./v2Contributeur";
import LiensImgManuel from "./LiensImgManuel";

const FormAjoutSite = ({ setConfirmation, setMontrerAjoutCarte, ajoutsFaits, setAjoutsFaits }) => {
        
    const { coordAjout } = useContext(CycloContext);

    const anneeCourante = new Date().getFullYear();

    const [champs, setChamps] = useState({
        name: "",
        description: "",
        annee: anneeCourante,
        fichiers: [],
        nom: "",
        courriel: "",
        type: "",
        liens: "",
        legit: false
    });

    const mAJName = (e) => setChamps(prec => ({ ...prec, name: e.target.value }));
    const mAJDescription = (e) => setChamps(prec => ({ ...prec, description: e.target.value }));
    const mAJAnnee = (e) => setChamps(prec => ({ ...prec, annee: e.target.value }));
    const mAJNom = (e) => setChamps(prec => ({ ...prec, nom: e.target.value }));
    const mAJCourriel = (e) => setChamps(prec => ({ ...prec, courriel: e.target.value }));
    const mAJType = (e) => setChamps(prec => ({ ...prec, type: e.target.value }));
    const mAJLiens = (e) => setChamps(prec => ({ ...prec, liens: e.target.value }));
    
    const annees = [];
    for (let i = 2020; i <= anneeCourante; i++) {
        annees.push(i)
    }

    const mAJLegit = (e) => setChamps(prec => ({ ...prec, legit: e.target.checked }));

    const reset = () => {
        console.log("reset");
        setChamps({
            name: "",
            description: "",
            annee: anneeCourante,
            fichiers: [],
            nom: "",
            courriel: "",
            type: "",
            liens: "",
            legit: false
        })
    }

    const envoyerSite = async (e) => {
        e.preventDefault()
        if (coordAjout.lat !== undefined) {
            const formData = new FormData(e.target);
            await fetch("https://formspree.io/f/mvodrepv", {
                method: "POST",
                mode: "no-cors",
                body: formData,
            })
                .then(() => {
                    reset()
                    setConfirmation(true)
                })
                .catch(err => console.log(err))
        } else {
            alert("Veuillez séléctionner un emplacement sur la carte!")
        }
        e.preventDefault();
    }

    return (
        <Wrapper
            onSubmit={envoyerSite}
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
                <Name>
                    <label htmlFor="name">Choisissez un titre captivant pour votre site!</label>
                    <input
                        name="name"
                        onChange={mAJName}
                        placeholder="Titre évocateur"
                        required
                        value={champs.name}
                    />
                </Name>
                <Description>
                    <label htmlFor="description">Qu'est-ce qui rend ce site unique? Décrivez-le en quelques phrases!</label>
                    <textarea
                        name="description"
                        onChange={mAJDescription}
                        placeholder="Description détaillée : accès, quiétude, services, etc."
                        rows="10"
                        required
                        value={champs.description}
                    />
                </Description>
                <LiensImgManuel mAJLiens={mAJLiens} />
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
                <p>Vos coordonnées ne seront pas affichés sur la carte et ne serviront que si l'administrateur doit vous contacter en cas d'erreur.</p>
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
        border-radius: 0 0 10px 10px;
        margin: 0;
        legend {
            background-color: var(--c6);
            border-radius: 5px;
            color: var(--c0);
            display: none;
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

const Name = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    input {
        border-radius: 5px;
        margin: 15px 0;
        padding: 10px;
    }
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    textarea {
        border-radius: 5px;
        margin: 10px 0;
        padding: 10px;
        width: 100%;
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

export default FormAjoutSite;