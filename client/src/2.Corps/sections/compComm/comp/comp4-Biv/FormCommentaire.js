import styled from "styled-components";

const FormCommentaire = () => {
    return (
        <Wrapper>
            <p>Vous êtes passé par là et vous souhaitez ajouter un commentaire? Faites-le ici!</p>
            <fieldset>
                <label htmlFor="texteComm">Entrez l'information à jour pour l'afficher sur la carte.</label>
                <textarea
                    id="texteComm"
                    name="texteComm"
                    placeholder="Ex : J'ai dormi là en juin 2041 au doux son du ruisseau. Il y a maintenant une toilette sèche à 300 mètres au nord. Je recommande ce site."
                    required
                />
                <AjImage>
                    <p>Il est fortement suggéré d'ajouter des photos de l'emplacement, dans le but de bâtir un répertoire de qualité. Pour ce faire, les images doivent être stockées sur un site ou une page publique. Exemple :</p>
                    <ul>
                        <li>Une publication publique dans les réseaux sociaux</li>
                        <li>Un groupe public sur Facebook</li>
                        <li>Dans ce dossier nuagique partagé, tout en utilisant le mot de passe <span>cyclotouriste</span></li>
                        <li>Une page web personnel</li>
                    </ul>
                </AjImage>
                <label htmlFor="courrielComm">L'adresse courriel ne sera utilisé que pour vous permettre de modifier ultérieurement les informations que vous avez soumises.</label>
                <input
                    id="courrielComm"
                    name="courrielComm"
                    type="email"
                />
                <Validation>
                    <input
                        id="validComm"
                        name="validComm"
                        required
                        type="checkbox"
                    />
                    <label htmlFor="validComm">Je consens que ces informations sont exacts, dans la mesure du possible.</label>
                </Validation>
                <button type="submit">Envoyer</button>
            </fieldset>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    fieldset {
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        textarea {
            border-radius: 5px;
            height: 100px;
            padding: 10px;
        }
        input[type=email] {
            border: 2px solid var(--c10);
            border-radius: 10px;
            max-width: 300px;
            padding: 10px 15px;
        }
        button {
            background-color: var(--c1);
            border: 2px solid var(--c10);
            border-radius: 10px;
            cursor: pointer;
            max-width: 100px;
            padding: 10px 15px;
            width: fit-content;
        }
    }
`

const AjImage = styled.div``

const Validation = styled.div``

export default FormCommentaire;