import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactHtmlParser from 'react-html-parser';

import { faClose } from "@fortawesome/free-solid-svg-icons";
import Actions from "./Actions";
import Commentaires from "./Commentaires";

const DetailsSite = ({ site, fermerSite }) => {
        return (
            <Wrapper>
                <Banniere>
                    {
                        site.properties.name
                            ? <h3>{site.properties.name}</h3>
                            : <h3>Lieu {site._id}</h3>
                    }
                    <button onClick={fermerSite} title="fermer">
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </Banniere>
                <Categorie>Catégorie : {site.properties.type}</Categorie>
                <Description>
                    <h4>Description</h4>
                    <p>{ReactHtmlParser(site.properties.description)}</p>
                    {
                        site.properties.annee &&
                        <p>Visité en {site.properties.annee}</p>
                    }
                </Description>
                {
                    site.properties.commentaires &&
                    <Commentaires site={site} />
                }
                <Actions site={site} />
            </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c6);
    border-radius: 5px;
    color: var(--c11);
    max-height: 92%;
    left: 8%;
    padding: 10px;
    overflow-y: auto;
    position: absolute;
    top: 8%;
    transform: translate(-4%, -4%);
    width: 92%;
    z-index: 5000;
    img {
        display: block;
        margin: 0 auto;
        max-width: 400px;
        object-fit: contain;
        width: 100%;
    }
`

const Banniere = styled.div`
    align-items: center;
    background-color: var(--c6);
    display: flex;
    justify-content: space-evenly;
    padding: 10px 0;
    position: sticky;
    top: -10px;
    h3 {
        margin: 0;
        text-align: center;
    }
    button {
        border-radius: 50%;
        cursor: pointer;
        height: 40px;
        width: 40px;
        &:hover {
            background-color: var(--c1);
        }
    }
`

const Categorie = styled.p`
    margin: 10px;
    padding: 10px;
`

const Description = styled.div`
    background-color: var(--c4);
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    word-wrap: break-word;
    p:last-child {
        font-style: italic;
    }
`

export default DetailsSite;