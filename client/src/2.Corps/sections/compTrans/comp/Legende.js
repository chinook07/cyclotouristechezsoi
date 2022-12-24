import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Legende = ({toutesIcones}) => {

    const legendeTexte = [
        "train",
        "autocar",
        "train de banlieue",
        "autobus",
        "traversier",
        "vélos non-démontés acceptés",
        "boite requise",
        "sac requis",
        "vélos en tout temps",
        "vélos sur certains départs",
        "vélos durant la journée seulement"
    ]

    return (
        <Wrapper>
            {
                toutesIcones.map((item, index) => {
                    return (
                        <div key={index}>
                            <FontAwesomeIcon icon={toutesIcones[index]} />
                            <span>{legendeTexte[index]}</span>
                        </div>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c6);
    color: var(--c11);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > div {
        font-size: small;
        padding: 10px;
        > svg {
            margin-right: 5px;
        }
    }
`

export default Legende;