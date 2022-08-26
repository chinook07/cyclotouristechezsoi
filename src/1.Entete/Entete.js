import styled from "styled-components";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

import imgLogo from "../images/icones/logo.png"

const Entete = () => {
    return (
        <Wrapper>
            <Nav1>
                <Logo src={imgLogo} alt="icône"></Logo>
                <nav>
                    <button>
                        
                    </button>
                    <button></button>
                    <button></button>
                    <button>
                        <ExternalLink>Blogue</ExternalLink>
                    </button>
                </nav>
                <Langue></Langue>
            </Nav1>
            <Nav2></Nav2>
        </Wrapper>
    )
}

const Wrapper = styled.header``

const Nav1 = styled.div`
    display: flex;
`

const Logo = styled.img``

const Langue = styled.div``

const Nav2 = styled.nav``

export default Entete;