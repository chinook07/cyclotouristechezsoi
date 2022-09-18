import styled from "styled-components";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import trajetsDB from "../donnees/trajets.json";
import { faBicycle, faCheck, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Abitibi, BasSaintLaurent } from "../schemas";

const DetailsDuTrajet = ({ itineraire, changerTrajet }) => {

    const details = trajetsDB.find(item => item.trajet === itineraire)

    return (
        <Wrapper>
            <h2>{details.trajet}</h2>
            <div>{details.intro}</div>
            <h3>Aperçu</h3>
            <div>
                <p>Distance : {details.distance} km.</p>
                <p>Véloroutes : </p>
                <ul>
                    {
                        details.veloroutes.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
                <p>Proportion sur piste cyclable : {details.proportion} %.</p>
                <p>Terrain : {details.terrain}</p>
            </div>
            <h3>Notes de l'auteur</h3>
            <div>
                <p>
                    <span>Déjà pédalé : </span>
                    {
                        details.deja.length &&
                        details.deja.map((item, index) => {
                            return (
                                <span key={index}>{item} <FontAwesomeIcon icon={faCheck} /></span>
                            )
                        })
                    }
                    {
                        details.deja === true &&
                        <span>tout le parcours <FontAwesomeIcon icon={faCheck} /></span>
                    }
                    {
                        details.deja === false &&
                        <span>aucun tronçon <FontAwesomeIcon icon={faTimesCircle} /></span>
                    }
                </p>
                {
                    details.appreciation !== null &&
                    <p>
                        <span>Appréciation personnelle de 1 à 5 :</span>
                        <span>
                            {
                                [...Array(details.appreciation)].map((e, i) => <FontAwesomeIcon key={i} icon={faBicycle} />)
                            }
                        </span>
                    </p>
                }
                {
                    details.coups &&
                    <p>Coups de cœur : {details.coups}</p>
                }
                {
                    details.defis &&
                    <p>Défis rencontrés : {details.defis}</p>
                }
                <p>Autres notes : {details.notes}</p>
                {
                    details.varietes &&
                    <p>Variétés au parcours : {details.varietes}</p>
                }
            </div>
            <h3>Carte</h3>
            <iframe
                frameBorder="0"
                allowFullScreen
                src={details.carteURL}
            />
            <ExternalLink href="https://umap.openstreetmap.fr/fr/map/carte-generale-cyclotouristechezsoi_584684">Voir en plein écran</ExternalLink>
            <h3>Trajets associés</h3>
            <div>
                {
                    details.ass.map((item, index) => {
                        return <button onClick={() => changerTrajet(item)} key={index}>{item}</button>
                    })
                }
            </div>
            <h3>Galerie des photos</h3>
            <p>Cliquez sur les images ci-dessous pour rêver!</p>
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default DetailsDuTrajet;