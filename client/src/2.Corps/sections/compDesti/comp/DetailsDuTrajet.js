import styled from "styled-components";
import { useContext } from "react";
import { ExternalLink } from "react-external-link";

import { CycloContext } from "../../../../CycloContext";
import NotesAuteur from "./NotesAuteur";
import GalerieDuTrajet from "./GalerieDuTrajet";
import trajetsDB from "../donnees/trajets.json";
import * as TousSchemas from "../schemas/index";

const DetailsDuTrajet = ({ itineraire, changerTrajet }) => {
	const { ecran } = useContext(CycloContext);

    const details = trajetsDB.find((item) => item.trajet === itineraire);

	return (
		<div>
			<h2>{details.trajet}</h2>
			<p>{details.intro}</p>
			<h3>Aperçu</h3>
			{ecran > 720 ? (
				<Schema
					src={TousSchemas[`Schema${details.id + 1}`]}
					alt={`graphique montrant les villes le long du trajet de ${details.deA[0]} à ${details.deA[1]}`}
				/>
			) : (
                    <Schema
                        src={TousSchemas[`SchemaM${details.id + 1}`]}
                        alt={`graphique montrant les villes le long du trajet de ${details.deA[0]} à ${details.deA[1]}`}
                    />
			)}
			<div>
				<p>Distance : {details.distance} km.</p>
				<p>Véloroutes : </p>
				<ul>
					{details.veloroutes.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>
				<p>Proportion sur piste cyclable : {details.proportion} %.</p>
				<p>Terrain : {details.terrain}</p>
			</div>
			<h3>Notes de l'auteur</h3>
			<NotesAuteur details={details} />
			<h3>Carte</h3>
			<CarteUMap>
				<iframe
					frameBorder="0"
					allowFullScreen
					title="Carte du Québec cyclable"
					src={`//umap.openstreetmap.fr/fr/map/carte-generale-cyclotouristechezsoi_584684?scaleControl=true&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false#${details.carteURL}`}
				/>
				<ExternalLink href="https://umap.openstreetmap.fr/fr/map/carte-generale-cyclotouristechezsoi_584684">
					Voir en plein écran
				</ExternalLink>
			</CarteUMap>
			<h3>Trajets associés</h3>
			<TrajetsAss>
				{details.ass.map((item, index) => {
					return (
						<button
							onClick={() => changerTrajet(item.nombre)}
							key={index}
						>
							{item.titre}
						</button>
					);
				})}
            </TrajetsAss>
            {
                details.deja !== false && details.id !== 14 && details.id !== 28 &&
                    <div>
                        <h3>Galerie des photos</h3>
                        <p>Cliquez sur les images ci-dessous pour rêver!</p>
                        <GalerieDuTrajet details={details} />
                </div>
            }
		</div>
	);
};

const CarteUMap = styled.div`
    height: 500px;
    margin: 10px 0 50px;
    max-height: 70vh;
    max-width: 860px;
    width: 100%;
    iframe {
        box-shadow: var(--c3) 5px 5px 5px 5px;
        display: block;
        height: 100%;
        width: 100%;
        &:hover {
            box-shadow: var(--c6) 5px 5px 5px 5px;
        }
    }
    > a {
        display: block;
        margin-top: 15px;
        text-align: center;
    }
`

const Schema = styled.img`
	max-width: 100%;
`;

const TrajetsAss = styled.div`
	display: flex;
	button {
		background-color: var(--c4);
		border: none;
		border-radius: 5px;
		color: var(--c11);
		cursor: pointer;
		padding: 10px 12px;
		&:not(:last-of-type) {
			margin-right: 10px;
		}
	}
`;

export default DetailsDuTrajet;
