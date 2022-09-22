import styled from "styled-components";

const Recto = ({item, index}) => {
    return (
        <Wrapper>
            <Intro>
                <span>{index + 1}</span>
                <span>Jrs : {item.jours}</span>
            </Intro>
            <Titre>{item.titre}</Titre>
            <Desc>
                <div>{item.date}</div>
                <div>{item.anecdote}</div>
            </Desc>
            {
                item.details &&
                <Details>{item.note}</Details>
            }
            <img alt={item.imgAlt} src={item.imgSrc} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c3);
    border-radius: 5px;
    color: var(--c11);
    height: 100%;
    width: 100%;
`

const Intro = styled.div`
    display: flex;
    justify-content: space-between;
    /* margin: 10px; */
`

const Titre = styled.div`
    font-size: larger;
`

const Desc = styled.div``

const Details = styled.div``

export default Recto;