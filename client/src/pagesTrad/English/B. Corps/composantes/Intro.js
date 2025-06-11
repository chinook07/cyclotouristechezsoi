import styled from "styled-components";
import { useState, useContext } from "react";

import Traduc from "./sousComposantes/Traduc";
import Metrique from "./sousComposantes/Metrique";

import { CycloContext } from "../../../../CycloContext";

const Intro = () => {

    const { mesuresMetriques } = useContext(CycloContext)
    const [montrerTraduc, setMontrerTraduc] = useState(false);

    const traduc = (effet) => {
        effet === true ? setMontrerTraduc(true) : setMontrerTraduc(false)
    }
    
    return (
        <section>
            <p>
                <span>Welcome to the English page on </span>
                <TitreSite onMouseEnter={() => traduc(true)} onMouseLeave={() => traduc(false)}>Cyclotouristechezsoi</TitreSite>
                <span>.ca, meant as an informational page for bicycle touring in Quebec. Home to many beautiful cities, breathtaking sceneries, and its charming French-speaking people, this province of 8.5 million inhabitants provides for excellent cycling opportunities throughout various landscapes.</span>
            </p>
            {
                montrerTraduc &&
                <Traduc />
            }
            <Metrique />
            {
                !mesuresMetriques && <p>In these times of political unrest, non-MAGA Americans are welcome to enjoy their vacations in Quebec.</p>
            }
        </section>
    )
}

const TitreSite = styled.span`
    cursor: help;
    text-decoration: underline dotted;
`

export default Intro;