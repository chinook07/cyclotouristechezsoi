import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlay, faMapSigns, faSuitcase, faTrain } from "@fortawesome/free-solid-svg-icons";
import liens from "../donnees/liens.json"
import img01 from "../../../images/navAccueil/pont-cambellton.jpg";
import img02 from "../../../images/navAccueil/temiscouata.png";
import img03 from "../../../images/navAccueil/outils.jpg";
import img04 from "../../../images/navAccueil/velo-dans-train.jpg";


const NavAccueil = () => {

    const icones = [faPlay, faMapSigns, faSuitcase, faTrain]
    const images = [img01, img02, img03, img04]

    return (
        <Wrapper>
            {
                liens.map((item, index) => {
                    return (
                        <Link key={index} to={item.url}>
                            <img src={images[index]} alt={item.alt} />
                            <h2>
                                <FontAwesomeIcon icon={icones[index]} />
                                <span>{item.nom}</span>
                            </h2>
                            <p>{item.description}</p>
                        </Link>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    a {
        color: black;
        padding: 15px;
        text-decoration: none;
        width: 25%;
        img {
            height: 150px;
            object-fit: cover;
            width: 100%;
        }
        h2 {
            svg {
                margin-right: 10px;
            }
        }
    }
    @media screen and (min-width: 505px) and (max-width: 950px) {
        a {
            width: 50%;
        }
    }
    @media screen and (max-width: 505px) {
        a {
            width: 100%;
        }
    }
`

export default NavAccueil;