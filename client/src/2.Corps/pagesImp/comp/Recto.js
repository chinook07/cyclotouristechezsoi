import styled from "styled-components";

import * as ImagesTout from "../images/voyagesEff/index"

const Recto = ({ item, index }) => {

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
                item.note &&
                <Details>{item.note}</Details>
            }
            <img alt={item.imgAlt} src={ImagesTout[`PhotoTitre${index + 1}`]} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c5);
    border-radius: 5px;
    color: var(--c11);
    height: 100%;
    padding: 10px;
    position: relative;
    width: 100%;
    img {
        border-radius: 0 0 5px 5px;
        bottom: 0;
        display: block;
        height: 200px;
        left: 0;
        object-fit: cover;
        position: absolute;
        width: 100%;
    }
`

const Intro = styled.div`
    display: flex;
    justify-content: space-between;
`

const Titre = styled.h3`
    font-size: larger;
    font-weight: normal;
    margin: 25px 20px 0;
`

const Desc = styled.div`
    margin: 20px 20px 0;
`

const Details = styled.div`
    font-size: small;
    margin: 15px 20px;
`

export default Recto;