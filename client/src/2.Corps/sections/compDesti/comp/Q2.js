import styled from "styled-components";

const Q2 = ({ typeDeTrajet, choisirPistes, recommencer }) => {
    return (
        <Wrapper>
            <legend>Question 2</legend>
            <p>Je préfère rouler sur les pistes cyclables.</p>
            <div>
                {
                    (typeDeTrajet !== "maritime") &&
                    <label>
                            <input name="pistes" onChange={choisirPistes} type="radio" value="le plus possible"></input>
                            <span>Oui, si possible.</span>
                    </label>
                }
                <label>
                    <input name="pistes" onChange={choisirPistes} type="radio" value="le moins possible"></input>
                    <span>Non, je souhaite les éviter.</span>
                </label>
                <label>
                    <input name="pistes" onChange={choisirPistes} type="radio" value="... ou pas"></input>
                    <span>Je suis indifférent.</span>
                    </label>
                    {
                        (typeDeTrajet === "maritime") &&
                        <p>Vous voulez surtout rouler sur des pistes cyclables? Vous devez <CommeUnLien onClick={recommencer}>choisir une autre catégorie</CommeUnLien>!</p>
                    }
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
        flex-direction: column;
        gap: 10px;
    }
`

const CommeUnLien = styled.span`
    color: #0000cc;
    cursor: pointer;
    text-decoration: underline;
`

export default Q2;