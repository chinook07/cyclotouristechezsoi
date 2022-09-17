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
        "vélos acceptés en tout temps",
        "vélos acceptés sur certains départs",
        "vélos acceptés durant la journée seulement"
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
    color: white;
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