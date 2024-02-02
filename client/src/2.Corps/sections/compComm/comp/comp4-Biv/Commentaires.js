import styled from "styled-components";
import ReactHtmlParser from 'react-html-parser';

const Commentaires = ({ site }) => {

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
                                item.fichiers &&
                                <Album>
                                        {
                                            item.fichiers.map((img, imgInd) => {
                                                return (
                                                    // <img key={imgInd} alt="" src={`http://ccs-serveur.onrender.com/uploads/` + img} />
                                                    <p key={imgInd}>Oups! La photo {img} devrait apparaitre ici!</p>
                                                )
                                            })
                                        }
                                </Album>
                            }
                            {
                                item.annee &&
                                <Ital>Visité en {item.annee}</Ital>
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
    img {
        display: block;
        margin: 0 auto;
        max-width: 400px;
        object-fit: contain;
        width: 100%;
    }
`

const Album = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const Ital = styled.p`
    font-style: italic;
`

export default Commentaires;