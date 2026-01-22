import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Age1 = () => {
    return (
        <Wrapper>
            <p>À défault d'utiliser un vélo-cargo qui permet l'installation d'un siège auto, il est recommandé d'attendre l'âge d'un an pour avoir accès à quelques options de systèmes de transport. Les solutions ci-dessous sont évaluées sur les cinq aspects suivants :</p>
            <ol>
                <li>Est-ce trippant pour l'enfant?</li>
                <li>Fera-t-il un bon dodo durant sa sieste?</li>
                <li>Pourrez-vous amener beaucoup de matériel?</li>
                <li>Voyagerez-vous (relativement) léger?</li>
                <li>À quel point pourrez-vous prendre d'autres moyens de transport (train, autocar, REM, métro, etc)?</li>
            </ol>
            <ul>
                <li>
                    <h4>Siège avant + chariot</h4>
                    <p>Cette configuration permet à l'enfant de voir le monde devant lui, tout en ayant un nid douillet pour sa sieste, ou en cas d'intempéries majeures. Le chariot permet de transporter du matériel supplémentaire, moyennant une augmentation du poids tiré par le cycliste adulte.</p>
                    <p>Note globale : 80 %</p>
                </li>
                <li>
                    <h4>Chariot seulement</h4>
                    <p>Laisser de côté le siège avant ajoute un petit gain en poids, mais rend le périple moins intéressant, sauf si l'enfant préfère ses jouets et ses livres plutôt que le paysage qui défile.</p>
                    <p>Note globale : 75 %</p>
                </li>
                <li>
                    <h4>Siège avant + arrière</h4>
                    <p>Avoir les deux sièges permet à l'enfant de profiter des joies du cyclotourisme à l'avant et de se reposer à l'arrière, tant que ce dernier siège soit inclinable. Par contre, il ne sera pas à l'abri de la pluie. Alors qu'on trainera moins de poids, facilitant les transports publics, l'espace de rangement derrière sera sacrifié. Résultat : il faudra mettre des sacoches à l'avant et voyager léger. Un sac à dos pourrait néanmoins être transporté dans le siège qui n'est pas utilisé au moment. Autre enjeu : lorsque l'enfant est assis à l'avant, la quasi-totalité du poids sera à l'avant du vélo.</p>
                    <p>Note globale : 65 %</p>
                </li>
                <li>
                    <h4>Siège arrière seulement</h4>
                    <p>Voilà l'option simple et légère pour le parent : un siège, c'est tout. Par contre, l'enfant ne profite pas de la vue, et ne dormira pas très bien. Encore une fois, on ne peut pas transporter beaucoup de matériel si l'on utilise un siège arrière.</p>
                    <p>Note globale : 60 %</p>
                </li>
                <li>
                    <h4>Siège arrière + chariot</h4>
                    <p>Cette configuration permet l'installation d'un siège non-inclinable, car l'enfant prendrait ses siestes dans le chariot, plus comfortable que le siège. Le parent transport plus de poids et l'intermodalité devient difficile avec le siège encombrant et le chariot. Ce dernier permet d'amener plus de stock, mais offre un niveau de divertissement limité pour l'enfant.</p>
                    <p>Note globale : 60 %</p>
                </li>
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
    ul {
        padding: 0;
        list-style: none;
    }
`

export default Age1;