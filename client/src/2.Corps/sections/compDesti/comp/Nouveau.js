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
		<Wrapper>
            <h3
                couleur={item.couleur}
                coulinv={item.coulInv}
            >
                <Link
                    onClick={() => redig(item.region)}
                    to="../trajets"
                >
					{item.region}
				</Link>
			</h3>
			<p>{item.texte}</p>
			<p>
				Source :{" "}
				<ExternalLink href={item.url}>{item.lien}</ExternalLink>
			</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	h3 {
		background-color: ${(props) => props.couleur};
		border: 1px solid var(--c10);
		border-radius: 20px;
		display: inline-block;
		font-size: medium;
		padding: 5px 10px;
        a {
            color: ${props => props.coulInv === "true" ? "red" : "green"};
            text-decoration: none;
        }
	}
`;

export default Nouveau;
