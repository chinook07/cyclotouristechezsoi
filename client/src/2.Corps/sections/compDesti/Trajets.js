import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import trajetsDB from "./donnees/trajets.json";
import DetailsDuTrajet from "./comp/DetailsDuTrajet";
import { CycloContext } from "../../../CycloContext";

const Trajets = ({ ancienLien }) => {

	const { trajetRedig, setTrajetRedig } = useContext(CycloContext);
    const [trajetChoisi, setTrajetChoisi] = useState();
    
    const naviguer = useNavigate();

    useEffect(() => {
        if (ancienLien) {
            setTrajetChoisi(
                trajetsDB.find((item) => item.id === ancienLien).trajet
            );
            naviguer("/destinations/trajets");
        } else if (trajetRedig.id) {
			setTrajetChoisi(
				trajetsDB.find((item) => item.id === trajetRedig.id).trajet
			);
            setTrajetRedig({});
            window.scrollTo(0, 0);
		} else {
			setTrajetChoisi(trajetsDB[0].trajet);
		}
	}, []);

	const choisirTrajet = (e) => setTrajetChoisi(e.target.value);

	const changerTrajet = (nouveau) => {
        setTrajetChoisi(trajetsDB.find((item) => item.id === nouveau).trajet);
        window.scrollTo(0, 400);
	};

	return (
		<Wrapper>
			<Selectionnez>
				<label htmlFor="selecteurDeTrajet">
					Sélectionnez un trajet :
				</label>
				<select
					id="selecteurDeTrajet"
					onChange={choisirTrajet}
					value={trajetChoisi}
				>
					{trajetsDB.map((item, index) => {
						return <option key={index}>{item.trajet}</option>;
					})}
				</select>
			</Selectionnez>
			{trajetChoisi !== undefined && (
				<DetailsDuTrajet
					itineraire={trajetChoisi}
					changerTrajet={changerTrajet}
				/>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div``;

const Selectionnez = styled.form`
	display: flex;
	flex-direction: column;
	margin: 15px auto;
	max-width: 250px;
	text-align: center;
	select {
		margin-top: 5px;
		padding: 5px;
	}
`;

export default Trajets;
