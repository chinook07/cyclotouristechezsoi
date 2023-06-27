import styled from "styled-components";

const Metrique = () => {
    return (
        <Wrapper>
            <button>
                <i></i>
                <p>US units</p>
            </button>
            <div></div>
            <button>
                <i></i>
                <p>Int'l units</p>
            </button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c5);
    border-radius: 15px;
    color: var(--c11);
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
`

export default Metrique;