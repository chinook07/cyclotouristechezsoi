import styled from "styled-components";

import questions from "../../donnees/questions.json";

const Choix = () => {
    return (
        <Wrapper>
            {
                questions.map((item, index) => {
                    return (
                        <div key={index}>
                            <Question>{item.question}</Question>
                            <Reponses>
                                {
                                    item.reponse.map((itemRep, indexRep) => {
                                        return (
                                            <div key={indexRep}>
                                                <img src="" alt="" />
                                                <div>{itemRep}</div>
                                            </div>
                                        )
                                    })
                                }
                            </Reponses>
                        </div>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
`

const Question = styled.div``

const Reponses = styled.div`
    display: flex;
    width: 50%;
`

export default Choix;