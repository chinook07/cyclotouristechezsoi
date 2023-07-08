import styled from "styled-components";
import { useState } from "react";

import Traduc from "./sousComposantes/Traduc";

const Intro = () => {

    const [montrerTraduc, setMontrerTraduc] = useState(false);

    const traduc = (effet) => {
        effet === true ? setMontrerTraduc(true) : setMontrerTraduc(false)
    }
    
    return (
        <section>
            <p>
                <span>Willkommen auf der deutschen Seite auf </span>
                <TitreSite onMouseEnter={() => traduc(true)} onMouseLeave={() => traduc(false)}>Cyclotouristechezsoi</TitreSite>
                <span>.ca, Dies ist als Informationsseite für Radtouren in Quebec gedacht. Mit 8.5 Millionen Einwohnern beherbergt diese Provinz viele schöne Städte, atemberaubende Landschaften und charmante französischsprachige Menschen, und bietet hervorragende Möglichkeiten zum Radfahren in verschiedenen Landschaften.</span>
            </p>
            {
                montrerTraduc &&
                <Traduc />
            }
        </section>
    )
}

const TitreSite = styled.span`
    cursor: help;
    text-decoration: underline dotted;
`

export default Intro;