import styled from "styled-components";

const Traduc = () => {
    return (
        <Wrapper>Übersetzung: Radtourist*in in seiner oder ihrer einigen Region</Wrapper>
    )
}

const Wrapper = styled.p`
    background-color: var(--c1);
    border: 2px solid var(--c5);
    border-radius: 5px;
    left: 10%;
    margin-right: 10px;
    padding: 10px;
    position: absolute;
    transform: translateY(-150%);
`

export default Traduc;