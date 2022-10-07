import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import donnees from "./donnees/trajets.json";
import Hasard from "./comp/Hasard";

const Intro = () => {

    let [trajetsHasard, setTrajetsHasard] = useState([]);
    
    useEffect(() => {
        let hasard = [];
        while (hasard.length < 5) {
            let nombre = Math.floor(Math.random() * 26);
            if (hasard.includes(nombre) === false) hasard.push(nombre);
        }
        setTrajetsHasard(hasard)
    }, [])

    return (
        <Wrapper>
            <p>Le Québec est un vaste territoire avec une possibilité de parcours infininie.</p>
            <Schema>
                {
                    donnees.map((item, index) => {
                        return (
                            <Hexagon key={index}>
                                {item.id}
                            </Hexagon>
                        )
                    })
                }
            </Schema>
            <h2>Laissez le hasard vous guider</h2>
            {
                trajetsHasard.length === 5 &&
                <Hasard trajetsHasard={trajetsHasard} />
            }
            {/* <iframe
                frameBorder="0"
                allowFullScreen
                src="//umap.openstreetmap.fr/fr/map/carte-generale-cyclotouristechezsoi_584684?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false">
            </iframe>
            <p><a href="//umap.openstreetmap.fr/fr/map/carte-generale-cyclotouristechezsoi_584684">Voir en plein écran</a></p> */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    iframe {
        height: 450px;
        width: 100%;
    }
`

const Schema = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Hexagon = styled.div`
    border: 2px solid black;
    height: 100px;
    margin: 20px;
    /* transform: rotate(45deg); */
    width: 100px;
`

export default Intro;