import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import routes from "../donnees/routes.json";
import * as imgVeloroutes from "../../../../images/index";
import * as cartesVeloroutes from "../../../../images/maps/index";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Veloroutes = () => {

    const [routeChoisie, setRouteChoisie] = useState(false);
    
    const tableauImg = Object.values(imgVeloroutes);
    const tableauCartes = Object.values(cartesVeloroutes);

    const choisirRoute = (route) => {
        if (routeChoisie === route) {
            setRouteChoisie(false)
        } else {
            setRouteChoisie(route)
        }
    }

    return (
        <div>
            <Selecteur>
                <div>Route</div>
                <Options>
                    {
                        routes.map((item, index) => {
                            return (
                                <Veloroute
                                    key={index}
                                    onClick={() => choisirRoute(item)}
                                    routeChoisie={routeChoisie.route}
                                    routePresente={item.route}
                                >{item.route}</Veloroute>
                            )
                        })
                    }
                </Options>
            </Selecteur>
            {
                routeChoisie !== false &&
                <div>
                        <h3>Route {routeChoisie.route}</h3>
                        <p>{routeChoisie.intro}</p>
                        <h4>Wichtigste Städte</h4>
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
                        <h4>Wegbeschreibung</h4>
                        <ImgItineraire src={tableauCartes[routeChoisie.imgSrc]} alt="" />
                        <RouteOptions>
                            {
                                routeChoisie.sections.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <h5>{item.titre}</h5>
                                            <p>{item.descriptif}</p>
                                            <figure>
                                                <img src={tableauImg[item.imgSrc]} alt="" />
                                                <figcaption>{item.imgCap}</figcaption>
                                            </figure>
                                        </div>
                                    )
                                })
                            }
                        </RouteOptions>
                        {
                            routeChoisie.route === "Across QC" &&
                            <p>{routeChoisie.total}</p>
                        }
                </div>
            }
        </div>
    )
}

const Selecteur = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`

const Options = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Veloroute = styled.button`
    background-color: ${props => props.routeChoisie === props.routePresente ? "var(--c5)" : "var(--c11)"};
    color: ${props => props.routeChoisie === props.routePresente ? "var(--c11)" : "var(--c10)"};
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    &:hover {
        background-color: var(--c6);
        color: var(--c11);
    }
`

const ImgItineraire = styled.img`
    display: block;
    margin: 0 auto;
    max-width: 100%;
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
    column-gap: 25px;
    display: grid;
    grid-template-columns: auto auto auto;
    margin-bottom: 15px;
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h5 {
            text-align: center;
        }
        p {
            text-align: justify;
        }
        figure {
            display: flex;
            flex-direction: column;
            margin: 0;
            width: 100%;
            img {
                width: 100%;
            }
            figcaption {
                background-color: var(--c10);
                color: var(--c11);
                margin: 0;
                padding: 10px 0;
                text-align: center;
            }
        }
    }
    @media screen and (max-width: 850px) {
        grid-template-columns: auto;
        row-gap: 15px;
    }
`

export default Veloroutes;