import styled from "styled-components";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleDown, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

const FAQ2 = ({ boiteOuverte, setBoiteOuverte }) => {
    
    const ouvrirFermer = (index) => {
        boiteOuverte === index ? setBoiteOuverte() : setBoiteOuverte(index)
    }

    return (
        <Wrapper>
            <h2>FAQ sur la route</h2>
            <Boite>
                <h3 onClick={() => ouvrirFermer(0)}>
                    <span>Titre</span>
                    {
                        boiteOuverte === 0
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 0 &&
                    <Infos>
                            <p>Paragraphe</p>
                    </Infos>
                }
            </Boite>
            <Boite>
                <h3 onClick={() => ouvrirFermer(0)}>
                    <span>Titre</span>
                    {
                        boiteOuverte === 0
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 0 &&
                    <Infos>
                            <p>Paragraphe</p>
                    </Infos>
                }
            </Boite>
            <Boite>
                <h3 onClick={() => ouvrirFermer(0)}>
                    <span>Titre</span>
                    {
                        boiteOuverte === 0
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 0 &&
                    <Infos>
                            <p>Paragraphe</p>
                    </Infos>
                }
            </Boite>
            <Boite>
                <h3 onClick={() => ouvrirFermer(0)}>
                    <span>Titre</span>
                    {
                        boiteOuverte === 0
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 0 &&
                    <Infos>
                            <p>Paragraphe</p>
                    </Infos>
                }
            </Boite>
            <Boite>
                <h3 onClick={() => ouvrirFermer(0)}>
                    <span>Titre</span>
                    {
                        boiteOuverte === 0
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 0 &&
                    <Infos>
                            <p>Paragraphe</p>
                    </Infos>
                }
            </Boite>
            <Boite>
                <h3 onClick={() => ouvrirFermer(0)}>
                    <span>Titre</span>
                    {
                        boiteOuverte === 0
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 0 &&
                    <Infos>
                            <p>Paragraphe</p>
                    </Infos>
                }
            </Boite>
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Boite = styled.div`
    background-color: var(--c2);
    border-radius: 10px;
    h3 {
        background-color: var(--c3);
        border-radius: 10px;
        cursor: pointer;
        padding: 10px 20px;
        transition: all 0.2s;
        &:hover {
            background-color: var(--c1);
            transition: all 0.2s;
        }
    }
`

const Infos = styled.div`
    padding: 0 20px 20px;
`

export default FAQ2;