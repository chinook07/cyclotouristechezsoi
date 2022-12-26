import styled from "styled-components";

const Legende = () => {
    return (
        <Wrapper aria-hidden>
            <p>Légende</p>
            <div>
                <div aria-label="vert">Sacoche latérale (avant ou arrière)</div>
                <div aria-label="rose">Sac de guidon</div>
                <div aria-label="jaune">Tente bien attaché au porte-bagages</div>
                <div aria-label="orange">Sac de porte-bagage</div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    p {
        text-align: center;
    }
    > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 0 auto;
        max-width: 800px;
        div {
            font-size: small;
            line-height: 150%;
            padding: 5px;
            text-align: center;
            width: 25%;
            &:first-child {
                background-color: #006500;
                color: var(--c11);
            }
            &:nth-child(2) {
                background-color: #ff00ff;
            }
            &:nth-child(3) {
                background-color: #ffff00;
            }
            &:last-child {
                background-color: #ff6600;
            }
            @media screen and (max-width: 450px) {
                width: 50%;
            }
        }
    }
`

export default Legende;