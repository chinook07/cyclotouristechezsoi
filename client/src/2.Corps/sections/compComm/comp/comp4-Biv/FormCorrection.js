import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormCorrection = () => {
    return (
        <Wrapper>
            <p>Le terrain n'est plus accessible ou appartient à vous? Il y a une erreur dans les informations de ce site? Rapportez-le ici!</p>
            <fieldset>
                <label htmlFor="texteCorr">Entrez l'information à jour.</label>
                <textarea
                    id="texteCorr"
                    name="texteCorr"
                    placeholder="Ex : Je suis passé par là en juillet 2046, il n'y avait plus d'eau potable."
                    required
                />
                <label htmlFor="courrielCorr">L'adresse courriel ne sera utilisé que pour vous contacter si jamais des précisions sont demandées.</label>
                <input
                    id="courrielCorr"
                    name="courrielCorr"
                    type="email"
                />
                <Validation>
                    <input
                        id="validCorr"
                        name="validCorr"
                        required
                        type="checkbox"
                    />
                    <label htmlFor="validCorr">Je consens que ces informations sont exacts, dans la mesure du possible.</label>
                </Validation>
                <button type="submit">Envoyer</button>
            </fieldset>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    fieldset {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`

const Validation = styled.div``

export default FormCorrection;