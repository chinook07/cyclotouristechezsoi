import styled from "styled-components";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, ScaleControl, LayersControl } from "react-leaflet";
import { LatLng } from "leaflet";

const CarteCampings = () => {

    return (
        <Carte
            center={[46, -73]}
            zoom={8}
        >
            
            
            {/* <LayersControl position="topright">
                <LayersControl.Overlay name="CyclOSM"> */}
                    <TileLayer
                        minZoom={5}
                        url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
                        attribution='<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Données: &copy; contributeurs <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    />
                {/* </LayersControl.Overlay>
                <LayersControl.Overlay name="Esri">
                    <TileLayer
                        minZoom={5}
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        attribution='Tuiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, et la communauté des utilisateurs des SIG'
                    />
                </LayersControl.Overlay>
            </LayersControl> */}
            <ScaleControl imperial={false} position="topright"></ScaleControl>
            {/* <Marker position={[45.2, -73.3]}>
            </Marker> */}
        </Carte>
    )
}

const Carte = styled(MapContainer)`
    height: 500px;
    width: 100%;
`

export default CarteCampings;