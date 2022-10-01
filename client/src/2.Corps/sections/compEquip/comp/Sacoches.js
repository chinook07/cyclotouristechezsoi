import styled from "styled-components";

import config1 from "../images/config1.png";
import config2 from "../images/config2.png";
import config3 from "../images/config3.png";

const Sacoches = () => {
    return (
        <Wrapper>
            <figure>
                <img src={config1} />
                <figcaption>La majorité du poids se situe à l'arrière. Le sac de guidon permet toutefois d'accéder aux articles fréquemment utilisés.</figcaption>
            </figure>
            <figure>
                <img src={config2} />
                <figcaption>Cette configuration permet un équilibre idéal.</figcaption>
            </figure>
            <figure>
                <img src={config3} />
                <figcaption>Il y a un peu plus de poids à l'avant, à moins de bien placer le matériel lourd à l'arrière.</figcaption>
            </figure>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    figure {
        width: calc(100% / 3);
        img {
            display: block;
            margin: 0 auto;
            max-width: 100px;
        }
    }
`

export default Sacoches;