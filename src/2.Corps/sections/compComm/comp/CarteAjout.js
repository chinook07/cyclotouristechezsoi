import styled from "styled-components";
import { useState, useContext } from "react";
import { MapContainer, TileLayer, Marker, ScaleControl, useMapEvents } from "react-leaflet";

import { CycloContext } from "../../../../CycloContext";

const EmplacementAChoisir = () => {

    const { setCoordAjout } = useContext(CycloContext);
    const [emplacement, setEmplacement] = useState({});

    const carte = useMapEvents({
        click(e) {
            setEmplacement(e.latlng);
            setCoordAjout(e.latlng);
        }
    });

    if (emplacement && emplacement.lat) {
        return <Marker position={emplacement} />
    }
}

const CarteAjout = () => {

    return (
        <Carte
            center={[46, -73]}
            zoom={8}
        >
            <TileLayer
                minZoom={5}
                url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
                attribution='<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Données: &copy; contributeurs <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <EmplacementAChoisir />
            <ScaleControl imperial={false} position="topright"></ScaleControl>
        </Carte>
    )
}

const Carte = styled(MapContainer)`
    height: 300px;
    width: 100%;
`

export default CarteAjout;