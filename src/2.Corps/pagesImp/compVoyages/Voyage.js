import styled from "styled-components";

const Voyage = ({ index, item }) => {
    console.log(index, item);
    return (
        <Wrapper>Voyage</Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c3);
    border-radius: 5px;
    padding: 10px;
`

export default Voyage;