import styled from "styled-components";
import { Link } from "react-router-dom";

import img1 from "../../images/404/boite-velo-brise.jpg";
import img2 from "../../images/404/piste-fermee.jpg";
import img3 from "../../images/404/pont-barrieres.jpg";
import img4 from "../../images/404/Varennes-inonde.jpg";

const Erreur = () => {

    const images404 = [img1, img2, img3, img4];

    const retour = () => window.history.back();

    return (
        <Wrapper>
            <Photos>
                {
                    images404.map((item, index) => {
                        return (
                            <img key={index} src={item} />
                        )
                    })
                }
            </Photos>
            <h1>Erreur 404</h1>
            <p>Désolé. Cette page n'existe plus. <span onClick={retour}>Faites demi-tour</span> ou <Link to="/">retournez à l'accueil</Link>!</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    h1 {
        text-align: center;
    }
    span, a {
        color: var(--c4);
        cursor: pointer;
        text-decoration: underline double;
        &:hover {
            text-decoration: underline;
        }
    }
`

const Photos = styled.div`
    display: flex;
    img {
        object-fit: cover;
        width: 25%;
    }
`

export default Erreur;