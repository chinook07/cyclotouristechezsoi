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
            <h2>Aperçu de {details.trajet}</h2>
            <div></div>
            <div>
                <p>Distance : {details.distance} km.</p>
                <p>
                    <span>Véloroutes : </span>
                    {
                        details.veloroutes.map((item, index) => {
                            return <span key={index}>{item}</span>
                        })
                    }
                </p>
                <p>Proportion sur piste cyclable : {details.proportion} %.</p>
                <p>Terrain : {details.terrain}</p>
            </div>
            <h2>Notes de l'auteur</h2>
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
                <p>Coups de cœur : {details.coups}</p>
                <p>Défis rencontrés : {details.defis}</p>
                <p>Autres notes : {details.notes}</p>
                {
                    details.varietes &&
                    <p>Variétés au parcours : {details.varietes}</p>
                }
            </div>
            <h2>Carte</h2>
            <iframe
                frameBorder="0"
                allowFullScreen
                src={details.carteURL}
            />
            <ExternalLink href="https://umap.openstreetmap.fr/fr/map/carte-generale-cyclotouristechezsoi_584684">Voir en plein écran</ExternalLink>
            <h2>Trajets associés</h2>
            <div>
                {
                    details.ass.map((item, index) => {
                        return <button onClick={() => changerTrajet(item)} key={index}>{item}</button>
                    })
                }
            </div>
            <h2>Galerie des photos</h2>
            <p>Cliquez sur les images ci-dessous pour rêver!</p>
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default DetailsDuTrajet;