import styled from "styled-components";
import { useState, useEffect } from "react";
import { Icon } from "leaflet";
import { MapContainer, TileLayer, ScaleControl, GeoJSON, LayersControl, useMapEvents, useMap, Marker, Popup, LayerGroup } from "react-leaflet";

const CarteCampings = () => {

    const [lesSites, setLesSites] = useState({});
    const [cartePrete, setCartePrete] = useState(false);
    const [position, setPosition] = useState(null);

    const iconeVelo = new Icon({
        iconUrl: "https://cdn2.iconfinder.com/data/icons/leisure-entertainment-minimalist-icon-set/100/bike-01-256.png",
        iconSize: [30, 30]
    })

    const rendreCompatible = (donnees) => {
        donnees.features.forEach(item => item.type = "Feature");
        setLesSites(donnees)
        setCartePrete(true);
    }

    const surChaque = (feature, layer) => {
        let contenu = `Description : ${feature.properties.description}<br/>Type : ${feature.properties.type}`;
        let couleur;
        if (feature.properties.type === "Site non-officiel") couleur = "green";
        if (feature.properties.type === "Site officiel pour cyclistes seulement OU à faible cout / gratuit") couleur = "blue";
        if (feature.properties.type === "Site offert par un propriétaire") couleur = "red";
        layer.bindPopup(contenu)
    }

    useEffect(() => {
        fetch("/api/tous-sites")
            .then(res => res.json())
            .then(data => {
                setLesSites(data.collection)
                rendreCompatible(data.collection)
            })
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
                <LayersControl.Overlay name="CyclOSM" checked>
                    <TileLayer
                        minZoom={5}
                        url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
                        attribution='<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Données: &copy; contributeurs <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    />
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Esri">
                    <TileLayer
                        minZoom={5}
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        attribution='Tuiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, et la communauté des utilisateurs des SIG'
                    />
                </LayersControl.Overlay>
            </LayersControl>
            <LayerGroup></LayerGroup>
            <ScaleControl imperial={false} position="topright"></ScaleControl>
            <LocationControl />
            {
                cartePrete &&
                <Sites data={lesSites} onEachFeature={surChaque} />
            }
        </Carte>
    )
}

const Carte = styled(MapContainer)`
    height: 500px;
    width: 100%;
`

const Sites = styled(GeoJSON)`
`

export default CarteCampings;