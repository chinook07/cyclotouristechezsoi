import styled from "styled-components";
import { ExternalLink } from "react-external-link";

const DeuxFigures = ({photo1, photo2}) => {
    return (
        <Wrapper>
            <figure>
                <img src={photo1.src} alt={photo1.alt} />
                {
                    photo1.lien
                        ? <figcaption>
                            {photo1.cap} Détails : <ExternalLink href={photo1.href}>{photo1.lien}</ExternalLink>
                        </figcaption>
                        : <figcaption>{photo1.cap}</figcaption>
                }
            </figure>
            <figure>
                <img src={photo2.src} alt={photo2.alt} />
                {
                    photo2.lien
                        ? <figcaption>
                            {photo2.cap} Détails : <ExternalLink href={photo2.href}>{photo2.lien}</ExternalLink>
                        </figcaption>
                        : <figcaption>{photo2.cap}</figcaption>
                }
            </figure>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    figure {
        width: 50%;
        img {
            border-radius: 5px;
            width: 100%;
        }
    }
    @media screen and (max-width: 600px) {
        flex-direction: column;
        figure {
            width: initial;
        }
    }
`

export default DeuxFigures;