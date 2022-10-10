import styled from "styled-components";
import { ExternalLink } from "react-external-link";

const DeuxFiguresPetit = ({photo1, photo2}) => {
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
    justify-content: center;
    figure {
        max-width: 400px;
        width: 50%;
        img {
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

export default DeuxFiguresPetit;