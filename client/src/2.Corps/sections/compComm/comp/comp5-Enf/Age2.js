import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceGrin, faBatteryHalf, faBed, faTruck, faFeather, faTrain } from "@fortawesome/free-solid-svg-icons";

const Age2 = () => {
    return (
        <Wrapper>
            <p>Une porte se referme, d'autres s'ouvrent. Il faut dire adieu au siège avant mais on découvre des systèmes de transport plus ludiques, permettant même à l'enfant de faire sa part dans le pédalage. Les solutions ci-dessous sont évaluées sur les six aspects suivants :</p>
            <ol>
                <li><FontAwesomeIcon icon={faFaceGrin}/> Est-ce trippant pour l'enfant?</li>
                <li><FontAwesomeIcon icon={faBed}/> Fera-t-il un bon dodo durant sa sieste?</li>
                <li><FontAwesomeIcon icon={faTruck}/> Pourrez-vous amener beaucoup de matériel?</li>
                <li><FontAwesomeIcon icon={faFeather}/> Voyagerez-vous (relativement) léger?</li>
                <li><FontAwesomeIcon icon={faTrain}/> À quel point pourrez-vous prendre d'autres moyens de transport (train, autocar, REM, métro, etc)?</li>
                <li><FontAwesomeIcon icon={faBatteryHalf}/> Et maintenant qu'il est plus grand, est-ce que votre enfant pourra dépenser son énergie en avançant?</li>
            </ol>
            <ul>
                <li>
                    <h4>Siège cadre + chariot <FontAwesomeIcon icon={faFaceGrin}/> <FontAwesomeIcon icon={faBed}/> <FontAwesomeIcon icon={faTruck}/></h4>
                    <p>Si vous (et/ou votre jeune) vous ennuyez du siège avant, cette configuration permet de prolonger le plaisir d'interagir avec votre jeune de façon illimitée, tout en conservant un nid douillet pour la sieste, ou en cas d'intempéries majeures.</p>
                    <p>Note globale : 80 %</p>
                </li>
                <li>
                    <h4>Siège cadre + demi-vélo Weehoo <FontAwesomeIcon icon={faFaceGrin}/> <FontAwesomeIcon icon={faBatteryHalf}/></h4>
                    <p>En remplaçant le chariot par le Weehoo, l'enfant peut pédaler si jamais il ne veut pas faire sa sieste. Justement, le dodo pourrait être un peu moins facile car il ne sera pas complètement à l'abri des intempéries. Avec le Weehoo, on peut ne peut pas transporter des sacoches par-dessus le porte-bagages, et il faut faire quelques ajustements même pour permettre l'ajout de sacoches latérales. Le demi-vélo vient avec des sacoches, par contre, mais n'offre pas l'espace de rangement d'un chariot. Autre souci : c'est moins facile à transporter dans les transports qu'un chariot pliable.</p>
                    <p>Note globale : 75 %</p>
                </li>
                <li>
                    <h4>Siège cadre + siège arrière <FontAwesomeIcon icon={faFaceGrin}/></h4>
                    <p>En utilsant le siège arrière inclinable pour la sieste, on sacrifie trois choses : l'espace de rangement, le confort pour le sommeil, ainsi que la possibilité pour l'enfant de pédaler. Les avantages sont les suivants : plus léger à transporter et moins difficile à transporter en train ou en autocar.</p>
                    <p>Note globale : 70 %</p>
                </li>
                <li>
                    <h4>Siège arrière + FollowMe Tandem <FontAwesomeIcon icon={faBatteryHalf}/></h4>
                    <p>On peut aussi conserver le siège arrière pour les siestes, et attacher le vélo de l'enfant grâce au système d'attelage FollowMe Tandem. L'enfant n'est plus face à l'action, mais peut pédaler tout seul ou avec son parent. On est encore une fois très limité en terme de cargo, mais on peut installer de petites sacoches sur le vélo de l'enfant.</p>
                    <p>Note globale : 70 %</p>
                </li>
                <li>
                    <h4>Demi-vélo Weehoo seulement <FontAwesomeIcon icon={faBatteryHalf}/></h4>
                    <p>Voici la meilleure solution qui utilise un système seulement. L'enfant peut pédaler, pas pédaler, faire une sieste, et plus. Le transport de matériel est par contre limité, et encore une fois, prendre les transports en commun devient presque impossible avec ce demi-vélo de format bizzare.</p>
                    <p>Note globale : 70 %</p>
                </li>
                <li>
                    <h4>Siège arrière + demi-vélo <FontAwesomeIcon icon={faBatteryHalf}/></h4>
                    <p>Voilà une option presque indentique à la combinaision siège arrière + FollowMe Tandem. Par contre, en utilisant un demi-vélo du style Trail-a-Bike, on rend l'intermodalité dans le REM et métro plus difficile car il est légèrement moins facile pour l'enfant de tirer un demi-vélo qu'un vélo complet qu'on peut simplement détacher.</p>
                    <p>Note globale : 65 %</p>
                </li>
                <li>
                    <h4>Chariot seulement <FontAwesomeIcon icon={faBed}/> <FontAwesomeIcon icon={faTruck}/></h4>
                    <p>L'enfant qui voyage uniquement en chariot risque de demander souvent de s'arrêter pour bouger. Êtes-vous certain de vouloir cela? Selon l'auteur, il serait judicieux d'avoir un siège sur le cadre en plus du chariot.</p>
                    <p>Note globale : 65 %</p>
                </li>
                <li>
                    <h4>Siège arrière seulement</h4>
                    <p>Encore une fois, c'est l'option simple et légère pour le parent : un siège, c'est tout. Par contre, l'enfant ne profite pas de la vue, et ne dormira pas très bien, en plus de ne pas bouger assez. Par contre, on ne peut pas transporter beaucoup de matériel si l'on utilise un siège arrière.</p>
                    <p>Note globale : 55 %</p>
                </li>
                <li>
                    <h4>Siège arrière + chariot <FontAwesomeIcon icon={faBed}/></h4>
                    <p>Cette configuration permet l'installation d'un siège non-inclinable, car l'enfant prendrait ses siestes dans le chariot, plus comfortable que le siège. Le parent transport plus de poids et l'intermodalité devient difficile avec le siège encombrant et le chariot. Ce dernier permet d'amener plus de stock, mais offre un niveau de divertissement limité pour l'enfant.</p>
                    <p>Note globale : 55 %</p>
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

export default Age2;