import styled from "styled-components";

import * as ImagesTout from "../images/voyagesEff/index"

const Recto = ({ item, index, changerCarte }) => {

    return (
        <Wrapper>
            <Intro>
                <span>{index + 1}</span>
                <Renverser onClick={changerCarte}>Montrer verso</Renverser>
                <span>Jrs : {item.jours}</span>
            </Intro>
            <Titre>{item.titre}</Titre>
            <Desc>
                <p>{item.date}</p>
                <p>{item.anecdote}</p>
            </Desc>
            {
                item.note &&
                <Details>{item.note}</Details>
            }
            <img alt={item.imgAlt} src={ImagesTout[`PhotoTitre${index + 1}`]} />
            <Cachee onClick={changerCarte}>Montrer verso</Cachee>
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

const Intro = styled.p`
    display: flex;
    justify-content: space-between;
    margin: 0;
`

const Renverser = styled.button`
    background: none;
    border: none;
    color: var(--c11);
    cursor: pointer;
    font-family: "Trebuchet MS",Helvetica,sans-serif;
    font-size: medium;
    padding: 0;
    text-decoration: underline;
    &:hover {
        color: var(--c1);
    }
`

const Titre = styled.h3`
    font-size: larger;
    font-weight: normal;
    margin: 25px 20px 0;
`

const Desc = styled.div`
    margin: 20px 20px 0;
    p {
        margin: 0;
    }
`

const Details = styled.p`
    font-size: small;
    margin: 15px 20px;
`

const Cachee = styled.p`
    left: -99999px;
    position: absolute;
`

export default Recto;