import styled from "styled-components";

import { MapContainer, TileLayer, ScaleControl, Polyline, LayersControl } from "react-leaflet";

const CarteDuTrajet = ({ details }) => {

    return (
        <Carte
            center={[48, -75]}
            zoom={6}
        >
            <LayersControl position="topright">
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
            </LayersControl>
            {/* <Polyline
                positions={atest}
            /> */}
            <ScaleControl imperial={false} position="topright"></ScaleControl>
        </Carte>
    )
}

const Carte = styled(MapContainer)`
    height: 500px;
    width: 100%;
`

export default CarteDuTrajet;