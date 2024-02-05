import styled from "styled-components";
import { useState, useEffect } from "react";

import DetailsSite from "./DetailsSite";
import { MapContainer, TileLayer, ScaleControl, GeoJSON, LayersControl } from "react-leaflet";

import L from "leaflet";
import Chargement from "../../../../../CompReutilisables/Chargement";

const CarteCampings = ({ ajoutsFaits }) => {
    
    const icone1 = process.env.PUBLIC_URL + '/carteCampings/marqueur-vert.png';
    const icone2 = process.env.PUBLIC_URL + '/carteCampings/marqueur-orange.png';
    const icone3 = process.env.PUBLIC_URL + '/carteCampings/marqueur-rouge.png';
    const icone4 = process.env.PUBLIC_URL + '/carteCampings/marqueur-bleu.png';
    const icone5 = process.env.PUBLIC_URL + '/carteCampings/marqueur-gris.png';
    
    const [lesSitesA, setLesSitesA] = useState({});
    const [lesSitesB, setLesSitesB] = useState({});
    const [lesSitesC, setLesSitesC] = useState({});
    const [lesSitesZ, setLesSitesZ] = useState({});
    const [lesSitesT, setLesSitesT] = useState({});
    const [cartePrete, setCartePrete] = useState(false);
    const [site, setSite] = useState();
    const [cyclOSMFonctionne, setCyclOSMFonctionne] = useState();

    const iconeVerte = new L.Icon({
        iconUrl: icone1,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const iconeJaune = new L.Icon({
        iconUrl: icone2,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const iconeRouge = new L.Icon({
        iconUrl: icone3,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const iconeBleue = new L.Icon({
        iconUrl: icone4,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const iconeGrise = new L.Icon({
        iconUrl: icone5,
        iconSize: [12, 20],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const rendreCompatible = (donnees) => {
        let sitesA = {
            type: "FeatureCollection",
            features: []
        };
        let sitesB = {
            type: "FeatureCollection",
            features: []
        };
        let sitesC = {
            type: "FeatureCollection",
            features: []
        };
        let sitesZ = {
            type: "FeatureCollection",
            features: []
        };
        let sitesT = {
            type: "FeatureCollection",
            features: []
        };
        donnees.sites_non_officiels.forEach(item => {
            item.properties.type = "Site non-officiel"
            sitesA.features.push(item)
        })
        donnees.sites_officiels.forEach(item => {
            item.properties.type = "Site officiel pour cyclistes seulement OU à faible cout / gratuit"
            sitesB.features.push(item)
        })
        donnees.sites_proprios.forEach(item => {
            item.properties.type = "Site offert par un propriétaire"
            sitesC.features.push(item)
        })
        donnees.autres.forEach(item => {
            item.properties.type = "autre"
            sitesZ.features.push(item)
        })
        if (donnees.test !== undefined) {
            donnees.test.forEach(item => {
                item.properties.type = "test"
                sitesT.features.push(item)
            })
        }
        setLesSitesA(sitesA);
        setLesSitesB(sitesB);
        setLesSitesC(sitesC);
        setLesSitesZ(sitesZ);
        setLesSitesT(sitesT);
    }

    const choisirSite = (feature) => {
        setSite(feature);
    }

    const fermerSite = () => setSite(undefined);

    const surChaque = (feature, layer) => {
        switch (feature.properties.type) {
            case "Site non-officiel":
                layer.setIcon(iconeVerte);
                break;
            case "Site officiel pour cyclistes seulement OU à faible cout / gratuit":
                layer.setIcon(iconeJaune);
                break;
            case "Site offert par un propriétaire":
                layer.setIcon(iconeRouge);
                break;
            case "autre":
                layer.setIcon(iconeBleue);
                break;
            case "test":
                layer.setIcon(iconeGrise);
                break;
            default:
                console.log(false);
        }
    }

    const cyclOSMVerif = async () => {
        const serveurs = ["a", "b", "c"];
        let succes = false;
        for (const serv of serveurs) {
            const urlServ = `https://${serv}.tile-cyclosm.openstreetmap.fr/cyclosm/9/153/181.png`;
            try {
                const response = await fetch(urlServ); // essayer sans no-cors une fois en production
                console.log("serveur", serv, "=", response.ok);
                if (response.ok) {
                    succes = true;
                    break;
                }
            } catch (err) {
                console.log(err);
            }
        }
        setCyclOSMFonctionne(succes);
    }

    const baseURL = process.env.NODE_ENV === 'production' ? 'https://ccs-serveur.onrender.com/api' : 'http://localhost:8000/api';

    useEffect(() => {
        fetch(`${baseURL}/tous-sites`)
            .then(res => res.json())
            .then(donnees => {
                rendreCompatible(donnees.collections);
            })
            .then(() => {
                cyclOSMVerif()
                setCartePrete(true)
                console.log("carte prête");
            })
    }, [])

    if (cartePrete) {
        return (
            <CarteComplete>
                {
                    cartePrete &&
                        <Carte
                            center={[46, -73]}
                            zoom={8}
                        >
                            <LayersControl position="topright">
                                {
                                    cyclOSMFonctionne &&
                                    <>
                                        <LayersControl.BaseLayer name="CyclOSM" checked>
                                            <TileLayer
                                                minZoom={5}
                                                url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
                                                attribution='<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Données: &copy; contributeurs <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                            />
                                        </LayersControl.BaseLayer>
                                        <LayersControl.BaseLayer name="OpenStreetMap">
                                            <TileLayer
                                                minZoom={5}
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                attribution='<a href="https://openstreetmap.org/copyright" title="OpenStreetMap Copyright">OpenStreetMap</a> | Données: &copy; contributeurs <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                            />
                                        </LayersControl.BaseLayer>
                                        <LayersControl.BaseLayer name="Esri (satellite)">
                                            <TileLayer
                                                minZoom={5}
                                                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                                                attribution='Tuiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, et la communauté des utilisateurs des SIG'
                                            />
                                        </LayersControl.BaseLayer>
                                    </>
                                }
                                {
                                    cyclOSMFonctionne === false &&
                                    <>
                                        <LayersControl.BaseLayer name="OpenStreetMap" checked>
                                            <TileLayer
                                                minZoom={5}
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                attribution='<a href="https://openstreetmap.org/copyright" title="OpenStreetMap Copyright">OpenStreetMap</a> | Données: &copy; contributeurs <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                            />
                                        </LayersControl.BaseLayer>
                                        <LayersControl.BaseLayer name="CyclOSM (présentement hors-service)">
                                            <TileLayer
                                                minZoom={5}
                                                url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
                                                attribution='<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Données: &copy; contributeurs <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                            />
                                        </LayersControl.BaseLayer>
                                        <LayersControl.BaseLayer name="Esri (satellite)">
                                            <TileLayer
                                                minZoom={5}
                                                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                                                attribution='Tuiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, et la communauté des utilisateurs des SIG'
                                            />
                                        </LayersControl.BaseLayer>
                                    </>
                                }
                                
                                {
                                    cartePrete &&
                                    <>
                                        <LayersControl.Overlay name="Sites non-officiels" checked>
                                            {
                                                lesSitesA.features.length &&
                                                <Sites
                                                    data={lesSitesA}
                                                    key={`sitesA-${ajoutsFaits}`}
                                                    onEachFeature={(feature, layer) => {
                                                        surChaque(feature, layer)
                                                        layer.on('click', () => choisirSite(feature));
                                                    }
                                                } />
                                            }
                                        </LayersControl.Overlay>
                                        <LayersControl.Overlay name="Sites pour cyclistes seulement OU à faible cout / gratuits" checked>
                                            {
                                                lesSitesB.features.length &&
                                                <Sites
                                                    data={lesSitesB}
                                                    key={`sitesB-${ajoutsFaits}`}
                                                    onEachFeature={(feature, layer) => {
                                                        surChaque(feature, layer)
                                                        layer.on('click', () => choisirSite(feature));
                                                    }
                                                } />
                                            }
                                        </LayersControl.Overlay>
                                        <LayersControl.Overlay name="Sites offerts par un propriétaire" checked>
                                            {
                                                lesSitesC.features.length &&
                                                <Sites
                                                    data={lesSitesC}
                                                    key={`sitesC-${ajoutsFaits}`}
                                                    onEachFeature={(feature, layer) => {
                                                        surChaque(feature, layer)
                                                        layer.on('click', () => choisirSite(feature));
                                                    }
                                                } />
                                            }
                                        </LayersControl.Overlay>
                                        <LayersControl.Overlay name="autres" checked>
                                            {
                                                lesSitesZ.features.length &&
                                                <Sites
                                                    data={lesSitesZ}
                                                    key={`sitesZ-${ajoutsFaits}`}
                                                    onEachFeature={(feature, layer) => {
                                                        surChaque(feature, layer)
                                                        layer.on('click', () => choisirSite(feature));
                                                    }
                                                } />
                                            }
                                            </LayersControl.Overlay>
                                            <LayersControl.Overlay name="test" checked>
                                            {
                                                lesSitesT.features.length &&
                                                <Sites
                                                    data={lesSitesT}
                                                    key={`sitesT-${ajoutsFaits}`}
                                                    onEachFeature={(feature, layer) => {
                                                        surChaque(feature, layer)
                                                        layer.on('click', () => choisirSite(feature));
                                                    }
                                                } />
                                            }
                                        </LayersControl.Overlay>
                                    </>
                                }
                            </LayersControl>
                            <ScaleControl imperial={false} position="bottomleft" />
                    </Carte>
                }
                {
                    site !== undefined &&
                    <DetailsSite site={site} fermerSite={fermerSite} />
                }
            </CarteComplete>
        )
    } else {
        return (
            <ChargementBoite>
                <Chargement></Chargement>
                <p>Chargement en cours</p>
            </ChargementBoite>
        )
    }
}

const CarteComplete = styled.div`
    position: relative;
`

const Carte = styled(MapContainer)`
    height: 600px;
    max-height: 90vh;
    width: 100%;
    img {
        width: 100%;
    }
`

const Sites = styled(GeoJSON)`
    background-color: green;
    fill: red;
    stroke: purple;
    color: var(--c1);
`

const ChargementBoite = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 600px;
    max-height: 90vh;
`

export default CarteCampings;