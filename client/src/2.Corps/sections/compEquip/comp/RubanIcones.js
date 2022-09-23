import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBicycle, faTools, faWineGlassAlt, faPizzaSlice, faFlag, faSurprise, faHatCowboy, faHeadSideMask, faBath, faPuzzlePiece, faPlug, faPlus, faGlobe } from "@fortawesome/free-solid-svg-icons";

const RubanIcones = () => {

    const icones = [faBicycle, faTools, faWineGlassAlt, faPizzaSlice, faFlag, faSurprise, faHatCowboy, faHeadSideMask, faBath, faPuzzlePiece, faPlug, faPlus, faGlobe];

    return (
        <Wrapper>
            {
                icones.map((item, index) => {
                    return (
                        <button key={index}>
                            <FontAwesomeIcon icon={item} size="2x" />
                        </button>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    display: flex;
    button {
        background-color: var(--c3);
        border: 1px solid var(--c0);
        cursor: pointer;
        display: flex;
        justify-content: center;
        padding: 15px;
        width: calc(100% / 13);
        &:hover {
            background-color: var(--c2);
        }
        &.actif {
            background-color: var(--c1);
        }
        @media screen and (min-width: 400px) and (max-width: 850px) {
            padding: 12px 8px;
        }
        @media screen and (max-width: 400px) {
            padding: 10px 6px;
        }
    }
    @media screen and (max-width: 650px) {
        flex-wrap: wrap;
        button:not(:first-child) {
            width: calc(100% / 7);
        }
        button:first-child {
            width: calc(100% / 3.5);
        }
    }
`

export default RubanIcones;