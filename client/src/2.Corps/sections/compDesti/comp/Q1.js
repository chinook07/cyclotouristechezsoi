import styled from "styled-components";
import * as TypesImg from "../images/1-profil/index";

const Q1 = ({ selecteurType }) => {
    return (
        <Wrapper>
            <legend>Question 1</legend>
            <div>
                <label>
                    Je recherche un parcours
                </label>
                <div>
                    <button
                        has="Type0"
                        onClick={selecteurType}
                        value="champêtre"
                    >champêtre</button>
                    <button
                        has="Type1"
                        onClick={selecteurType}
                        value="maritime"
                    >maritime ou fluvial</button>
                    <button
                        has="Type2"
                        onClick={selecteurType}
                        value="forestier"
                    >forestier</button>
                    <button
                        has="Type3"
                        onClick={selecteurType}
                        value="montagnard"
                    >montagnard</button>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.fieldset`
    border: none;
    margin: 0;
    padding: 0;
    > div {
        display: flex;
        flex-wrap: wrap;
        gap: 25px;
        margin-top: 10px;
        div {
            display: grid;
            gap: 10px;
            grid-template: 100px 100px / 150px 150px;
            button {
                background-size: cover;
                border-radius: 10px;
                font-size: large;
                font-weight: bold;
                text-shadow: 2px 2px 4px var(--c11);
                cursor: pointer;
                &:hover {
                    border-width: 3px;
                }
                &:first-child {
                    background-image: url(${props => TypesImg.Type0});
                }
                &:nth-child(2) {
                    background-image: url(${props => TypesImg.Type1});
                }
                &:nth-child(3) {
                    background-image: url(${props => TypesImg.Type2});
                }
                &:last-child {
                    background-image: url(${props => TypesImg.Type3});
                }
            }
            @media screen and (max-width: 380px) {
                grid-template: repeat(4, 100px) / 150px;
            }
        }
    }
`

export default Q1;