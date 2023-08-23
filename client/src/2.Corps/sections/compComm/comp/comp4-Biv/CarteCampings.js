import styled from "styled-components";
import { useState, useEffect } from "react";

import { Icon } from "leaflet";
import { MapContainer, TileLayer, ScaleControl, GeoJSON, LayersControl, useMapEvents, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Logo from "../../../../../images/icones/logo.png"

const CarteCampings = () => {

    const icone1 = process.env.PUBLIC_URL + '/carteCampings/marqueur-vert.png';
    const icone2 = process.env.PUBLIC_URL + '/carteCampings/tente-jaune.png';
    const icone3 = process.env.PUBLIC_URL + '/carteCampings/marqueur-rouge.png';
    const icone4 = process.env.PUBLIC_URL + '/carteCampings/marqueur-bleu.png';
    
    const [lesSitesA, setLesSitesA] = useState({});
    const [lesSitesB, setLesSitesB] = useState({});
    const [lesSitesC, setLesSitesC] = useState({});
    const [lesSitesZ, setLesSitesZ] = useState({});
    const [cartePrete, setCartePrete] = useState(false);
    const [position, setPosition] = useState(null);

    const iconeVelo = new Icon({
        iconUrl: "https://cdn2.iconfinder.com/data/icons/leisure-entertainment-minimalist-icon-set/100/bike-01-256.png",
        iconSize: [30, 30]
    })

    const iconeVerte = new L.Icon({
        iconUrl: icone1,
        iconSize: [25, 25],
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
        iconSize: [25, 25],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const iconeBleue = new L.Icon({
        iconUrl: icone4,
        iconSize: [25, 25],
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
        setLesSitesA(sitesA);
        setLesSitesB(sitesB);
        setLesSitesC(sitesC);
        setLesSitesZ(sitesZ);
    }

    const surChaque = (feature, layer) => {
        if (feature.properties.type === "Site non-officiel") layer.setIcon(iconeVerte);
        if (feature.properties.type === "Site officiel pour cyclistes seulement OU à faible cout / gratuit") layer.setIcon(iconeJaune);
        if (feature.properties.type === "Site offert par un propriétaire") layer.setIcon(iconeRouge);
        if (feature.properties.type === "autre") layer.setIcon(iconeBleue);
        let contenu = `<h3>${feature.properties.name}</h3><br/>${feature.properties.description}<br/>Type : <span style="font-style: italic;">${feature.properties.type}</span>`;
        layer.bindPopup(contenu);
    }

    useEffect(() => {
        fetch("/api/tous-sites")
            .then(res => res.json())
            .then(donnees => {
                rendreCompatible(donnees.collections);
            })
            .then(() => setCartePrete(true))
    }, [])

    const LocationControl = () => {
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setPosition(e.latlng);
                map.flyTo(e.latlng, map.getZoom())
            }
        })
        return position === null ? null : (
            <Marker icon={iconeVelo} position={position}>
                <Popup>Vous êtes ici!</Popup>
            </Marker>
        )
    }

    return (
        <Carte
            center={[46, -73]}
            zoom={8}
        >
            <LayersControl position="topright">
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
                {
                    cartePrete &&
                    <>
                        <LayersControl.Overlay name="Sites non-officiels" checked>
                            {
                                lesSitesA.features.length &&
                                <Sites data={lesSitesA} onEachFeature={surChaque} className="here!" />
                            }
                        </LayersControl.Overlay>
                        <LayersControl.Overlay name="Sites pour cyclistes seulement OU à faible cout / gratuits" checked>
                            {
                                lesSitesB.features.length &&
                                <Sites data={lesSitesB} onEachFeature={surChaque} />
                            }
                        </LayersControl.Overlay>
                        <LayersControl.Overlay name="Sites offerts par un propriétaire" checked>
                            {
                                lesSitesC.features.length &&
                                <Sites data={lesSitesC} onEachFeature={surChaque} />
                            }
                        </LayersControl.Overlay>
                        <LayersControl.Overlay name="autres" checked>
                            {
                                lesSitesZ.features.length &&
                                <Sites data={lesSitesZ} onEachFeature={surChaque} />
                            }
                        </LayersControl.Overlay>
                    </>
                }
                
            </LayersControl>
            <ScaleControl imperial={false} position="topright" />
            <LocationControl />
        </Carte>
    )
}

const Carte = styled(MapContainer)`
    height: 500px;
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

export default CarteCampings;