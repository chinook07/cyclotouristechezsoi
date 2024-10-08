import styled from "styled-components";
import { useLocation } from "react-router-dom"

import imgAvecLien from "./ImgAvecLien.json";
import ent1 from "../../images/entetes/canot-ukelele.webp";
import ent2 from "../../images/entetes/pont-nouvelle.webp";
import ent3 from "../../images/entetes/pont-cambellton.webp";
import ent4 from "../../images/entetes/indications.webp";
import ent5 from "../../images/entetes/sacoches-velo.webp";
import ent6 from "../../images/entetes/velo-dans-train.webp";

const ImgTitre = () => {

    const toutesImage = [ent1, ent2, ent3, ent4, ent5, ent6]

    const urlPage = useLocation().pathname;
    const infosPage = imgAvecLien.filter(item => urlPage.includes(item.lien))[0]

    if (infosPage) {
        return (
            <Wrapper role="banner">
                <img src={toutesImage[infosPage.photo]} alt={infosPage.alt} />
                <div>Cyclotouristechezsoi</div>
                    <h1>{infosPage.nom}</h1>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    position: relative;
    img {
		display: block;
		height: 300px;
		object-fit: cover;
		opacity: 0.5;
		width: 100%;
	}
    div {
        color: var(--c5);
		font-size: 32px;
		left: 50%;
		letter-spacing: 0.15em;
		position: absolute;
		text-decoration: none;
		text-shadow: var(--c1) 0 0 5px;
		top: 50%;
		transform: translate(-50%, -50%);
		&:hover {
			color: var(--c6);
		}
    }
    h1 {
        color: var(--c6);
        font-size: 32px;
        font-weight: normal;
        left: 10%;
        margin: 0;
        position: absolute;
        top: 70%;
    }
    @media screen and (max-width: 600px) {
        div {
            letter-spacing: 0;
        }
        h1 {
            font-size: 26px;
            left: 5%;
        }
    }
    @media screen and (max-width: 400px) {
        div {
            font-size: 28px;
        }
        h1 {
            font-size: 24px;
        }
    }
`

export default ImgTitre;