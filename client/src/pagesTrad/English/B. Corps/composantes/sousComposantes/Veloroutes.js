import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import routes from "../donnees/routes.json";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Veloroutes = () => {

    const [routeChoisie, setRouteChoisie] = useState(false);

    const choisirRoute = (route) => {
        if (routeChoisie === route) {
            setRouteChoisie(false)
        } else {
            setRouteChoisie(route)
        }
    }

    return (
        <Wrapper>
            <Selecteur>
                <div>Route</div>
                <Options>
                    {
                        routes.map((item, index) => {
                            return (
                                <button key={index} onClick={() => choisirRoute(item)}>{item.route}</button>
                            )
                        })
                    }
                </Options>
            </Selecteur>
            {
                routeChoisie !== false &&
                <RouteInfo>
                        <h3>Route {routeChoisie.route}</h3>
                        <p>{routeChoisie.intro}</p>
                        <h4>Main cities</h4>
                        <Villes>
                            {
                                routeChoisie.villes.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <span>{item}</span>
                                            {
                                                index !== routeChoisie.villes.length -1 &&
                                                <FontAwesomeIcon icon={faArrowRight} />
                                            }
                                        </li>
                                    )
                                })
                            }
                        </Villes>
                        <h4>Itineraries</h4>
                        <img src="" alt="" />
                        <RouteOptions>
                            {
                                routeChoisie.sections.map((item, index) => {
                                    return (
                                        <RouteSection key={index}>
                                            <h5>{item.titre}</h5>
                                            <p>{item.descriptif}</p>
                                            <figure>
                                                <img src={item.imgSrc} alt="" />
                                                <figcaption>{item.imgCap}</figcaption>
                                            </figure>
                                        </RouteSection>
                                    )
                                })
                            }
                        </RouteOptions>
                        
                </RouteInfo>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Selecteur = styled.div`
    align-items: center;
    display: flex;
`

const Options = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    button {
        background-color: var(--c11);
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
        &:hover {
            background-color: var(--c6);
            color: var(--c11);
        }
    }
`

const RouteInfo = styled.div`

`

const Villes = styled.ol`
    list-style: none;
    padding: 0;
    li {
        display: inline;
        svg {
            margin: 0 7px;
        }
    }
`

const RouteOptions = styled.div`
    display: flex;
    gap: 25px;
`

const RouteSection = styled.div`
    h5 {
        text-align: center;
    }
    p {
        text-align: justify;
    }
    figure {
        margin: 0;
        width: 100%;
        img {
            width: 100%;
        }
        figcaption {
            background-color: var(--c10);
            color: var(--c11);
            padding: 10px 0;
            text-align: center;
        }
    }
`

export default Veloroutes;