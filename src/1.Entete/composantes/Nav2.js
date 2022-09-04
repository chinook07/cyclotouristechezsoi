import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav2 = () => {
    return (
        <Wrapper>
            <NavLink to="/commencement">Commencer</NavLink>
            <NavLink to="/destinations">Découvrir</NavLink>
            <NavLink to="/equipement">S'équiper</NavLink>
            <NavLink to="/transport">Se transporter</NavLink>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    background-color: var(--c4);
    display: flex;
    justify-content: center;
    a {
        color: white;
        padding: 15px 25px;
        text-decoration: none;
        &:hover {
            background-color: var(--c5);
        }
        &.active {
            background-color: var(--c6);
        }
    }
`

export default Nav2;