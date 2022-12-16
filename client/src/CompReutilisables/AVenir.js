import styled from "styled-components";

const AVenir = ({texte}) => {
    return (
        <Wrapper>
            <p>À venir</p>
            <ul>
                {
                    texte.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default AVenir;