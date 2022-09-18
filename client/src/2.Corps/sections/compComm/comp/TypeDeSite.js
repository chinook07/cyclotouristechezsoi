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
                        value="Site non-officiel"
                    ></input>
                    <span>Site non-officiel</span>
                </label>
                <label>
                    <input
                        name="typeCamping"
                        onChange={mAJType}
                        required
                        type="radio"
                        value="Site officiel pour cyclistes seulement OU à faible cout / gratuit"
                    ></input>
                    <span>Site officiel pour cyclistes seulement OU à faible cout / gratuit</span>
                </label>
                <label>
                    <input
                        name="typeCamping"
                        onChange={mAJType}
                        required
                        type="radio"
                        value="Site offert par un propriétaire"
                    ></input>
                    <span>Site offert par un propriétaire</span>
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