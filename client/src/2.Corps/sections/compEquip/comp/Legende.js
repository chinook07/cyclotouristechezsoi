import styled from "styled-components";

const Legende = () => {
    return (
        <Wrapper>
            <p>Légende</p>
            <div>
                <div>Sacoche latérale (avant ou arrière)</div>
                <div>Sac de guidon</div>
                <div>Tente bien attaché au porte-bagages</div>
                <div>Sac de porte-bagages</div>
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