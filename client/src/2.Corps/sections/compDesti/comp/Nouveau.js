import styled from "styled-components";
import { useContext } from "react";
import { ExternalLink } from "react-external-link";
import { Link } from "react-router-dom";

import { CycloContext } from "../../../../CycloContext";
import trajetsDB from "../donnees/trajets.json";

const Nouveau = ({ item }) => {
	const { setTrajetRedig } = useContext(CycloContext);

	const redig = (region) => {
		const trouve = trajetsDB.find((item) => item.trajet === region);
		setTrajetRedig(trouve);
    };

	return (
        <div>
            <Region couleur={item.couleur} >
                <Lien
                    onClick={() => redig(item.region)}
                    to="../trajets"
                    police={item.police}
                >
					{item.region}
				</Lien>
			</Region>
			<p>{item.texte}</p>
			<p>
				Source :{" "}
				<ExternalLink href={item.url}>{item.lien}</ExternalLink>
			</p>
		</div>
	);
};

const Region = styled.h3`
    background-color: ${props => props.couleur };
    border: 1px solid var(--c10);
    border-radius: 20px;
    display: inline-block;
    font-size: medium;
    &:hover {
        border-width: 2px;
    }
`

const Lien = styled(Link)`
    color: ${props => props.police};
    display: block;
    padding: 5px 10px;
    text-decoration: none;
    
`

export default Nouveau;
