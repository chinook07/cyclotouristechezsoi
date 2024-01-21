import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleDown, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import Boite10 from "./reponses/Boite10";
import Boite11 from "./reponses/Boite11";
import Boite12 from "./reponses/Boite12";
import Boite14 from "./reponses/Boite14";
import Boite15 from "./reponses/Boite15";
import Boite16 from "./reponses/Boite16";

const FAQ2 = ({ boiteOuverte, setBoiteOuverte }) => {

	const ouvrirFermer = (index) => {
        if (boiteOuverte === index) {
            const fermer = document.getElementById(`acc-tete-${boiteOuverte}`);
            fermer.ariaExpanded = false;
            setBoiteOuverte();
        } else {
            let fermerTous = Array.from(document.getElementsByClassName("acc-tetes-A"));
            fermerTous.forEach(item => item.ariaExpanded = false);
            const ouvrir = document.getElementById(`acc-tete-${index}`);
            ouvrir.ariaExpanded = true;
            setBoiteOuverte(index);
        }
    }

	return (
		<Wrapper>
            <h2>FAQ sur la route</h2>
            <ul>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(10)} >
                        <button
                            aria-controls="acc-corps-10"
                            aria-expanded="false"
                            className="acc-tetes-B"
                            id="acc-tete-10"
                            type="button"
                        >Que faire s'il pleut?</button>
                        {boiteOuverte === 10 ? <FontAwesomeIcon icon={faAngleDoubleUp} /> : <FontAwesomeIcon icon={faAngleDoubleDown} />}
                    </h3>
                    {
                        boiteOuverte === 10 &&
                        <Boite10
                            id="acc-corps-10"
                            aria-labelledby="acc-tete-10"
                            role="panel"
                        />
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(11)} >
                        <button
                            aria-controls="acc-corps-11"
                            aria-expanded="false"
                            className="acc-tetes-B"
                            id="acc-tete-11"
                            type="button"
                        >Où puis-je monter ma tente?</button>
                        {boiteOuverte === 11 ? <FontAwesomeIcon icon={faAngleDoubleUp} /> : <FontAwesomeIcon icon={faAngleDoubleDown} />}
                    </h3>
                    {
                        boiteOuverte === 11 &&
                        <Boite11
                            id="acc-corps-11"
                            aria-labelledby="acc-tete-11"
                            role="panel"
                        />
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(12)} >
                        <button
                            aria-controls="acc-corps-12"
                            aria-expanded="false"
                            className="acc-tetes-B"
                            id="acc-tete-12"
                            type="button"
                        >Où est-ce que je peux rouler, légalement?</button>
                        {boiteOuverte === 12 ? <FontAwesomeIcon icon={faAngleDoubleUp} /> : <FontAwesomeIcon icon={faAngleDoubleDown} />}
                    </h3>
                    {
                        boiteOuverte === 12 &&
                        <Boite12
                            id="acc-corps-12"
                            aria-labelledby="acc-tete-12"
                            role="panel"
                        />
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(14)} >
                        <button
                            aria-controls="acc-corps-14"
                            aria-expanded="false"
                            className="acc-tetes-B"
                            id="acc-tete-14"
                            type="button"
                        >Est-ce que je risque de manquer de nourriture?</button>
                        {boiteOuverte === 14 ? <FontAwesomeIcon icon={faAngleDoubleUp} /> : <FontAwesomeIcon icon={faAngleDoubleDown} />}
                    </h3>
                    {
                        boiteOuverte === 14 &&
                        <Boite14
                            id="acc-corps-14"
                            aria-labelledby="acc-tete-14"
                            role="panel"
                        />
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(15)} >
                        <button
                            aria-controls="acc-corps-15"
                            aria-expanded="false"
                            className="acc-tetes-B"
                            id="acc-tete-15"
                            type="button"
                        >Où pourrais-je remplir mes bouteilles d'eau?</button>
                        {boiteOuverte === 15 ? <FontAwesomeIcon icon={faAngleDoubleUp} /> : <FontAwesomeIcon icon={faAngleDoubleDown} />}
                    </h3>
                    {
                        boiteOuverte === 15 &&
                        <Boite15
                            id="acc-corps-15"
                            aria-labelledby="acc-tete-15"
                            role="panel"
                        />
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(16)} >
                        <button
                            aria-controls="acc-corps-16"
                            aria-expanded="false"
                            className="acc-tetes-B"
                            id="acc-tete-16"
                            type="button"
                        >Et les lions?</button>
                        {boiteOuverte === 16 ? <FontAwesomeIcon icon={faAngleDoubleUp} /> : <FontAwesomeIcon icon={faAngleDoubleDown} />}
                    </h3>
                    {
                        boiteOuverte === 16 &&
                        <Boite16
                            id="acc-corps-16"
                            aria-labelledby="acc-tete-16"
                            role="panel"
                        />
                    }
                </Boite>
            </ul>
		</Wrapper>
	);
};

const Wrapper = styled.section`
    > ul {
        list-style-type: none;
        padding: 0;
    }
`

const Boite = styled.li`
	background-color: var(--c2);
	border-radius: 10px;
	h3 {
		align-items: center;
		background-color: var(--c3);
		border-radius: 10px;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		padding: 10px 20px;
		transition: all 0.2s;
        button {
            background-color: unset;
            border: none;
            cursor: pointer;
            font: unset;
            text-align: left;
        }
		&:hover {
			background-color: var(--c1);
			transition: all 0.2s;
		}
	}
`;

export default FAQ2;
