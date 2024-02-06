import styled from "styled-components";
import { useState, useEffect } from "react";

import DetailsSite from "./DetailsSite";
import CarteCouches from "./CarteCouches";
import { MapContainer, ScaleControl } from "react-leaflet";
import L from "leaflet";
import Chargement from "../../../../../CompReutilisables/Chargement";

const CarteCampings = ({ ajoutsFaits }) => {
    
    const [lesSitesA, setLesSitesA] = useState({});
    const [lesSitesB, setLesSitesB] = useState({});
    const [lesSitesC, setLesSitesC] = useState({});
    const [lesSitesZ, setLesSitesZ] = useState({});
    const [lesSitesT, setLesSitesT] = useState({});
    const [cartePrete, setCartePrete] = useState(false);
    const [site, setSite] = useState();
    const [cyclOSMFonctionne, setCyclOSMFonctionne] = useState();
    const [mongoFonctionne, setMongoFonctionne] = useState(true);

    const creerIcones = (iconeUrl) => {
        return new L.Icon({
            iconUrl: iconeUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
        })
    }

    const iconeVerte = creerIcones(process.env.PUBLIC_URL + '/carteCampings/marqueur-vert.png');
    const iconeJaune = creerIcones(process.env.PUBLIC_URL + '/carteCampings/marqueur-orange.png');
    const iconeRouge = creerIcones(process.env.PUBLIC_URL + '/carteCampings/marqueur-rouge.png');
    const iconeBleue = creerIcones(process.env.PUBLIC_URL + '/carteCampings/marqueur-bleu.png');

    const iconeGrise = new L.Icon({
        iconUrl: process.env.PUBLIC_URL + '/carteCampings/marqueur-gris.png',
        iconSize: [12, 20],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const rendreCompatible = (donnees) => {
        let lettresDesRepertoires = ["A", "B", "C", "Z", "T"];
        let sites = {};
        lettresDesRepertoires.forEach(lettre => {
            sites[`${lettre}`] = {
                type: "FeatureCollection",
                features: []
            }
        })
        let types = [
            "Site non-officiel",
            "Site officiel pour cyclistes seulement OU à faible cout / gratuit",
            "Site offert par un propriétaire",
            "autre",
            "test"
        ]
        Object.keys(donnees).forEach((categorie, index) => {
            if (donnees[categorie] !== undefined) {
                donnees[categorie].forEach(item => {
                    item.properties.type = types[index];
                    sites[lettresDesRepertoires[index]].features.push(item)
                })
            }
        });
        setLesSitesA(sites.A);
        setLesSitesB(sites.B);
        setLesSitesC(sites.C);
        setLesSitesZ(sites.Z);
        setLesSitesT(sites.T);
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
            .catch(() => setMongoFonctionne(false))
    }, [])

    if (cartePrete && mongoFonctionne) {
        return (
            <CarteComplete>
                {
                    cartePrete &&
                        <Carte
                            center={[46, -73]}
                            zoom={8}
                        >
                            <CarteCouches
                                cyclOSMFonctionne={cyclOSMFonctionne}
                                cartePrete={cartePrete}
                                choisirSite={choisirSite}
                                surChaque={surChaque}
                                ajoutsFaits={ajoutsFaits}
                                lesSitesA={lesSitesA}
                                lesSitesB={lesSitesB}
                                lesSitesC={lesSitesC}
                                lesSitesZ={lesSitesZ}
                                lesSitesT={lesSitesT}
                            />
                            <ScaleControl imperial={false} position="bottomleft" />
                    </Carte>
                }
                {
                    site !== undefined &&
                    <DetailsSite site={site} fermerSite={fermerSite} />
                }
            </CarteComplete>
        )
    } else if (!mongoFonctionne) {
        return (
            <ChargementBoite>
                <p>Désolé, la base de données ne répond pas. Veuillez réessayer plus tard.</p>
            </ChargementBoite>
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

const ChargementBoite = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 600px;
    max-height: 90vh;
`

export default CarteCampings;