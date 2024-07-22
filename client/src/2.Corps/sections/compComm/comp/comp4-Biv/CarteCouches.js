import { TileLayer, LayersControl, GeoJSON } from "react-leaflet";

const CarteCouches = ({ cyclOSMFonctionne, cartePrete, choisirSite, surChaque, ajoutsFaits, lesSitesA, lesSitesB, lesSitesC, lesSitesZ, lesSitesT }) => {
    
    return (
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
                            <GeoJSON
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
                            <GeoJSON
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
                            <GeoJSON
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
                            <GeoJSON
                                data={lesSitesZ}
                                key={`sitesZ-${ajoutsFaits}`}
                                onEachFeature={(feature, layer) => {
                                    surChaque(feature, layer)
                                    layer.on('click', () => choisirSite(feature));
                                }
                            } />
                        }
                        </LayersControl.Overlay>
                        <LayersControl.Overlay name="test">
                        {
                            lesSitesT.features.length &&
                            <GeoJSON
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
    )
}

export default CarteCouches;