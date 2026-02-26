import styled from "styled-components";
import { ExternalLink } from "react-external-link";

const LiensImgManuel = ({ mAJLiens }) => {
    
    return (
        <Wrapper>
            <p>Il est fortement suggéré d'ajouter des photos de l'emplacement, dans le but de bâtir un répertoire de qualité. Pour ce faire, les images doivent être stockées, le temps de les ajouter manuellement à la carte, sur un site ou une page publique, ou dont l'auteur de ce site y a accès. Exemple :</p>
            <ul>
                <li>Une publication publique dans les réseaux sociaux</li>
                <li>Un groupe public sur Facebook</li>
                <li>Le <ExternalLink href="https://www.facebook.com/groups/539103319550016">groupe Cyclotourisme Québec</ExternalLink> sur Facebook</li>
                <li>Dans <ExternalLink href="https://c.gmx.fr/@942516742939220237/Qfd4yoXUR4mKUmxUGFJqeg">ce dossier nuagique partagé</ExternalLink>, tout en utilisant le mot de passe <em>cyclotouriste</em></li>
                <li>Une page web personnel</li>
            </ul>
            <LiensImg>
                <label
                    htmlFor="lienimg"
                    name="liens"
                >Veuillez lister les liens url vers vos images ci-dessous. Si vous avez ajouté des photos à <ExternalLink href="https://c.gmx.fr/@942516742939220237/Qfd4yoXUR4mKUmxUGFJqeg">ce dossier nuagique partagé</ExternalLink>, merci de le mentionner ici.</label>
                <textarea name="lienimg" onChange={mAJLiens} />
            </LiensImg>
        </Wrapper>
    )
}

const Wrapper = styled.div``

const LiensImg = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    textarea {
        border-radius: 5px;
        height: 80px;
        margin: 0 auto;
        max-width: 500px;
        padding: 10px;
        width: 100%;
    }
    button {
        cursor: pointer;
        display: block;
        border-radius: 5px;
        margin: 0 auto 15px;
        padding: 10px;
        width: 150px;
    }
`

export default LiensImgManuel;