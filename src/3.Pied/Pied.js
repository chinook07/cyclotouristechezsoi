import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Pied = () => {

    const Annee = new Date().getFullYear();

    return (
        <Wrapper>
            <Auteur>
                <span>Cyclotouristechezsoi.ca 2020–{Annee}</span>
                <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    <img
                        alt="Licence Creative Commons"
                        src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
                    />
                </a>
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
    padding: 15px;
`

const Auteur = styled.div`
    a {
        line-height: 1.6;
        margin: 0 10px;
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
    > * {
        padding-left: 10px;
    }
`

export default Pied;