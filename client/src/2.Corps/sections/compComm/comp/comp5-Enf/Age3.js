import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceGrin, faBatteryHalf, faTruck, faFeather, faTrain, faHandPointUp } from "@fortawesome/free-solid-svg-icons";

const Age3 = () => {
    return (
        <Wrapper>
            <p>Adieu la sieste, vive la liberté! Il n'est plus nécessaire de trainer un lit portable en voyage! (Mais dites adieu aussi à la possibilité de passer un après-midi en silence, et en rattrapant le retard accumulé du matin.) À partir de cet âge, un seul système de transport suffira. Le choix est alors plus facile à faire.</p>
            <ol>
                <li><FontAwesomeIcon icon={faFaceGrin}/> Est-ce trippant pour l'enfant?</li>
                <li><FontAwesomeIcon icon={faTruck} /> Pourrez-vous amener beaucoup de matériel?</li>
                <li><FontAwesomeIcon icon={faFeather} /> Voyagerez-vous (relativement) léger?</li>
                <li><FontAwesomeIcon icon={faTrain} /> À quel point pourrez-vous prendre d'autres moyens de transport (train, autocar, REM, métro, etc)?</li>
                <li><FontAwesomeIcon icon={faBatteryHalf} /> Est-ce que votre enfant pourra dépenser son énergie en avançant?</li>
                <li><FontAwesomeIcon icon={faHandPointUp} /> Pourra-t-il rouler de façon autonome ou au moins avoir le choix de pédaler s'il souhaite?</li>
            </ol>
            <ul>
                <li>
                    <h4>FollowMe Tandem <FontAwesomeIcon icon={faBatteryHalf} /> <FontAwesomeIcon icon={faHandPointUp} /></h4>
                    <p>Voilà le système par excellence, permettant à l'enfant de contrôler son vélo à part entière, ou être attaché à son parent. C'est facile pour un enfant un peu plus âgé de transporter son vélo dans les transports en commun. Il peut aussi installer de petites sacoches sur son vélo et le parent peut être chargé comme une mule.</p>
                    <p>Bon jusqu'à 45 kg (incluant le poids du vélo de l'enfant).</p>
                    <p>Note globale : 85 %</p>
                </li>
                <li>
                    <h4>Siège cadre <FontAwesomeIcon icon={faFeather} /> <FontAwesomeIcon icon={faFaceGrin}/> <FontAwesomeIcon icon={faTrain} /></h4>
                    <p>D'un côté, l'enfant est assis et ne pédale pas. En même temps, il peut profiter d'être le copilote à papa ou maman pendant encore quelques années. Pour certains enfants, c'est la solution parfaite. Pour le parent, c'est le setup le plus léger et compatible avec les transports en commun.</p>
                    <p>Bon jusqu'à environ 25 kg, selon le modèle.</p>
                    <p>Note globale : 80 %</p>
                </li>
                <li>
                    <h4>Demi-vélo <FontAwesomeIcon icon={faBatteryHalf} /></h4>
                    <p>Le demi-vélo offre moins d'avantage que le FollowMe Tandem, puisque l'enfant se trouve attaché en permanence à l'adulte. Par contre, ça lui permet de pédaler, et n'enlève du vélo du parent que l'espace par-dessus le porte-bagage. Côté intermodalité, ce n'est pas génial.</p>
                    <p>Bon jusqu'à 39 kg.</p>
                    <p>Note globale : 75 %</p>
                </li>
                <li>
                    <h4>Demi-vélo Weehoo <FontAwesomeIcon icon={faBatteryHalf} /></h4>
                    <p>Puisque l'enfant n'a plus besoin de faire sa sieste, le Weehoo perd une partie de sa valeur. De plus, c'est la pire option en terme d'intermodalité. Le jeune enfant qui aime son confort trouverait son compte. Il y a au moins ça à gagner.</p>
                    <p>Bon jusqu'à 45 kg.</p>
                    <p>Note globale : 70 %</p>
                </li>
                <li>
                    <h4>Chariot <FontAwesomeIcon icon={faTruck} /></h4>
                    <p>À un certain point, votre enfant se lassera d'être enfermé dans un chariot. Il fut une époque ou c'était génial pour la sieste, mais pour faire véritablement partie de l'aventure, il faudrait peut-être penser à transitionner votre grand vers un système de transport plus captivant. Seuls avantages : la capacité de transporter du matériel et pour l'enfant de rester au sec.</p>
                    <p>Bon jusqu'à 22 kg.</p>
                    <p>Note globale : 55 %</p>
                </li>
                <li>
                    <h4>Siège arrière</h4>
                    <p>Pour les enfants qui n'auront plus besoin de faire la sieste avant d'atteindre 18 kg, il pourrait être tentant de conserver le siège arrière. Par contre, avec tous les inconvénients de ce système, l'idéal serait de magasiner pour une autre solution.</p>
                    <p>Bon jusqu'à 18 kg.</p>
                    <p>Note globale : 45 %</p>
                </li>
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
    ol, ul {
        list-style: none;
        padding: 0;
    }
`

export default Age3;