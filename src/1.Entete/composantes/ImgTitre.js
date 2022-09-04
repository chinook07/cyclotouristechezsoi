import styled from "styled-components";
import { useLocation } from "react-router-dom"

import imgAvecLien from "./ImgAvecLien.json";
import ent1 from "../../images/entetes/canot-ukelele.JPG";
import ent2 from "../../images/entetes/pont-nouvelle.jpg";
import ent3 from "../../images/entetes/pont-cambellton.jpg";
import ent4 from "../../images/entetes/indications.jpg";
import ent5 from "../../images/entetes/sacoches-velo.jpg";
import ent6 from "../../images/entetes/velo-dans-train.jpg";

const ImgTitre = () => {

    const urlPage = useLocation().pathname;
    const infosPage = imgAvecLien.filter(item => urlPage.includes(item.lien))[0]

    if (infosPage) {
        return (
            <Wrapper>
                <img src={infosPage.photo} alt={infosPage.alt} />
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
`

export default ImgTitre;