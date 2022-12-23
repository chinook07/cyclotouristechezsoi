import styled from "styled-components";
import { ExternalLink } from "react-external-link";

import fichierPdf from "./donnees/liste-materiel.pdf";
import fichierXlsx from "./donnees/liste-materiel.xlsx";

const AutresListes = () => {
    return (
        <div>
            <p>Vous n'êtes pas trop du genre « interactif » ou vous souhaitez simplement adapter la liste à vos besoins? Pas de soucis! Vous pouvez consulter la liste dans de formats différents, la modifier et l'imprimer comme bon vous le semble.</p>
            <Vignettes>
                <ExternalLink href={fichierPdf} title="ouvrir format pdf"><span>PDF</span></ExternalLink>
                <ExternalLink href={fichierXlsx} title="ouvir format Excel"><span>XLSX</span></ExternalLink>
            </Vignettes>
        </div>
    )
}

const Vignettes = styled.div`
    display: flex;
    justify-content: space-around;
    > a {
        align-items: center;
        border: 5px solid var(--c6);
        border-radius: 10px;
        color: var(--c11);
        display: flex;
        height: 80px;
        justify-content: center;
        text-decoration: none;
        width: 110px;
        &:hover {
            border-color: var(--c1);
        }
        &:first-child {
            background-color: red;
        }
        &:last-child {
            background-color: green;
        }
    }
`

export default AutresListes;