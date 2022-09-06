import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ExternalLink } from "react-external-link";

const Pied = () => {

    const Annee = new Date().getFullYear();

    return (
        <Wrapper>
            <Auteur>
                <span>Cyclotouristechezsoi.ca 2020–{Annee}</span>
                <ExternalLink
                    rel="license"
                    href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                >
                    <img
                        alt="Licence Creative Commons"
                        src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
                    />
                </ExternalLink>
            </Auteur>
            <Menu>
                <NavLink to="/limitations">Limitations</NavLink>
                <NavLink to="/confidentialite">Confidentialité</NavLink>
                <span>Faire un don</span>
            </Menu>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    background-color: var(--c1);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 15px;
`

const Auteur = styled.div`
    span {
        margin-right: 10px;
    }
    a {
        line-height: 1.6;
        margin-right: 10px;
    }
`

const Menu = styled.nav`
    a {
        color: black;
        text-decoration: none;
        &::after {
            content: "|";
            margin-left: 10px;
        }
        
    }
    @media screen and (min-width : 760px) {
        > * {
            padding-left: 10px;
        } 
    }
`

export default Pied;