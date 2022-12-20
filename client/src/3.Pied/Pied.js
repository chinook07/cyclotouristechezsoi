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
                <span>|</span>
                <NavLink to="/confidentialite">Confidentialité</NavLink>
                <span>|</span>
                <ExternalLink href="https://secure.causevox.com/pay?url=cyclotouristechezsoi.causevox.com">Faire un don</ExternalLink>
            </Menu>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    background-color: var(--c1);
    display: flex;
    height: 130px;
    justify-content: space-between;
    padding: 15px;
    @media screen and (max-width: 750px) {
        flex-direction: column;
        gap: 5px;
        justify-content: space-evenly;
    }
    @media print {
        display: none;
    }
`

const Auteur = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    span {
        margin-right: 10px;
    }
    a {
        /* line-height: 1.6; */
    }
`

const Menu = styled.nav`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    a {
        color: var(--c10);
        text-decoration: none;
    }
    span {
        margin: 0 5px;
    }
    @media screen and (min-width : 800px) {
        > * {
            padding-left: 10px;
        } 
    }
`

export default Pied;