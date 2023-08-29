import styled from "styled-components";

const TypeDeSite = ({mAJType}) => {
    return (
        <Wrapper>
            <span>Type d'emplacement</span>
            <div>
                <label>
                    <input
                        name="typeCamping"
                        onChange={mAJType}
                        required
                        type="radio"
                        value="s_non_officiels"
                    ></input>
                    <span>Site non-officiel</span>
                </label>
                <label>
                    <input
                        name="typeCamping"
                        onChange={mAJType}
                        required
                        type="radio"
                        value="s_officiels"
                    ></input>
                    <span>Site officiel pour cyclistes seulement OU à faible cout / gratuit</span>
                </label>
                <label>
                    <input
                        name="typeCamping"
                        onChange={mAJType}
                        required
                        type="radio"
                        value="s_proprios"
                    ></input>
                    <span>Site offert par un propriétaire</span>
                </label>
                <label>
                    <input
                        name="typeCamping"
                        onChange={mAJType}
                        required
                        type="radio"
                        value="s_autres"
                    ></input>
                    <span>Autre</span>
                </label>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.label`
    display: block;
    margin: 10px auto;
    text-align: center;
    div {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }
`

export default TypeDeSite;