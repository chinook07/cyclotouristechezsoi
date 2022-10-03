import styled from "styled-components";

import config1 from "../images/config1.png";
import config2 from "../images/config2.png";
import config3 from "../images/config3.png";

const Sacoches = () => {
    return (
        <Wrapper>
            <figure>
                <div>A</div>
                <img src={config1} />
                <figcaption>La majorité du poids se situe à l'arrière. Ceci n'est pas idéal, mais permet de se passer d'un porte-bagages à l'avant.</figcaption>
            </figure>
            <figure>
                <div>B</div>
                <img src={config2} />
                <figcaption>Cette configuration permet un certain équilibre du poids tout en facilitant le transport d'une tente qui ne rentre pas dans une sacoche.</figcaption>
            </figure>
            <figure>
                <div>C</div>
                <img src={config3} />
                <figcaption>Cette configuration respecte le ratio 60/40 (av./arr.) adopté par de nombreux cyclotouristes. Toutes les sacoches sont facilement accessibles.</figcaption>
            </figure>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    figure {
        margin: 16px 5px;
        width: calc(100% / 3);
        div {
            font-size: 45px;
            text-align: center;
        }
        img {
            display: block;
            margin: 0 auto;
            max-width: 100px;
        }
        figcaption {
            margin: 5px 0;
        }
    }
    @media screen and (max-width: 375px) {
        flex-direction: column;
        figure {
            width: 100%;
        }
    }
`

export default Sacoches;