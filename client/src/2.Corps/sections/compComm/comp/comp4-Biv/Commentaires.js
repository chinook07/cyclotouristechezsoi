import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactHtmlParser from 'react-html-parser';

const Commentaires = ({ site }) => {
    
    console.log(site.properties.commentaires.length > 0);

    return (
        <Wrapper>
            {
                site.properties.commentaires.length > 0 &&
                site.properties.commentaires.map((item, index) => {
                    return (
                        <Comment key={index}>
                            <p>{ReactHtmlParser(item)}</p>
                        </Comment>
                    )
                })
            }
        </Wrapper>
    )

}

const Wrapper = styled.div``

const Comment = styled.div``

export default Commentaires;