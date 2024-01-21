import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { faBusAlt, faTrain, faCar } from "@fortawesome/free-solid-svg-icons";

const Boite1 = () => {
    return (
        <Wrapper>
            <p>L'avantage du cyclotourisme est indéniable : on peut commencer ses vacances à partir de sa porte d'entrée. Par contre, pour explorer une région plus lointaine ou pour éviter de devoir pédaler vers le point de départ, on peut prendre un moyen de transport avec son vélo. Les options seront examinées dans <Link to="/transport">cette rubrique</Link>, mais en voici un résumé :</p>
            <p>
                <FontAwesomeIcon icon={faBusAlt} />
                <span>En autocar : besoin d'une boite ou d'un sac géant, et permet d'avoir accès à la plupart des villes du Québec.</span>
            </p>
            <p>
                <FontAwesomeIcon icon={faTrain} />
                <span>En train : pas toujours faisable, souvent possible sans démontage, autrement une boite y est requise.</span>
            </p>
            <p>
                <FontAwesomeIcon icon={faCar} />
                <span>En voiture : pas besoin de démonter le vélo, mais il faut revenir au point A!</span>
            </p>
            <p>Il existe des services de transport pour cyclotouristes dans certaines régions. Cela est normalement plus dispendieux, mais l'offre est davantage adaptée aux besoins des voyageurs à deux roues.</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

export default Boite1;