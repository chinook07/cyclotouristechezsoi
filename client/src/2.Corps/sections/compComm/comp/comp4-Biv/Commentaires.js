import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactHtmlParser from 'react-html-parser';

const Commentaires = ({ site }) => {
    
    console.log(site.properties.commentaires.length > 0);
    console.log(site.properties.commentaires);

    return (
        <>
            {
                site.properties.commentaires.length > 0 &&
                site.properties.commentaires.map((item, index) => {
                    return (
                        <Comment key={index}>
                            <h4>Commentaire {index + 1}</h4>
                            <p>{ReactHtmlParser(item.description)}</p>
                            {
                                item.annee &&
                                <p>Visité en {item.annee}</p>
                            }
                        </Comment>
                    )
                })
            }
        </>
    )

}

const Comment = styled.div`
    background-color: var(--c4);
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    p:last-child {
        font-style: italic;
    }
`

export default Commentaires;