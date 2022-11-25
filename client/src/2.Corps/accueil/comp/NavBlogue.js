import styled from "styled-components";
import { ExternalLink } from "react-external-link";

import blogue from "../donnees/blogue.json"

const NavBlogue = () => {

    return (
        <Wrapper>
            {
                blogue.map((item, index) => {
                    return (
                        <ExternalLink key={index} href={item.url}>
                            <img src={item.image} alt={item.alt} />
                            <h3>{item.nom}</h3>
                            <p>{item.description}</p>
                        </ExternalLink>
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
        color: var(--c10);
        padding: 15px;
        text-decoration: none;
        width: 25%;
        img {
            height: 150px;
            object-fit: cover;
            width: 100%;
        }
    }
    @media screen and (min-width: 650px) and (max-width: 1100px) {
        a {
            width: 50%;
        }
    }
    @media screen and (max-width: 650px) {
        a {
            width: 100%;
        }
    }
`

export default NavBlogue;