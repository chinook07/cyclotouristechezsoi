import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

const Confidentialite = () => {

    const [pubsBloques, setPubsBloques] = useState(false);

    const pubBloque = (callback) => {
        let testeURL = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        let myInit = {
            method: "HEAD",
            mode: "no-cors"
        };
        let maRequete = new Request(testeURL, myInit);

        fetch(maRequete)
            .then((reponse) => reponse)
            .then(() => callback(false))
            .catch(() => callback(true))
    }
    
    const init = () => {
        pubBloque((bloque) => {
            if (bloque) setPubsBloques(true)
        })
    }

    init()

    return (
        <>
            <p>Peu de données sont recueillies par ce site web. Quelques exceptions :</p>
            <ul>
                <li>En <Link to="/contact">écrivant un message à l'auteur</Link>, il recevra les informations entrées par l'utilisateur. Les messages sont envoyés par l'entremise de Formspree <ExternalLink href="https://formspree.io/legal/privacy-policy/" hrefLang="en">(politique de vie privée – en anglais)</ExternalLink>.</li>
                <li>Quelques renseignements de base sont prélevés par <ExternalLink href="https://www.goatcounter.com/" hrefLang="en">GoatCounter</ExternalLink>, alternative davantage respectueuse de la vie privée à Google Analytics.</li>
                <li>Lorsque vous utilisez la <Link to="/equipement/listeinteractive">liste interactive</Link>, des données sont stockées dans le <code><ExternalLink href="https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage">localStorage</ExternalLink></code> pour ne pas perdre le progrès de votre liste. Rien ne permet à quiquonque d'identifier l'utilisateur.</li>
            </ul>
            <div>
                {
                    pubsBloques
                        ? <p>Merci d'avoir choisi d'utiliser un bloqueur de publicités, aidant à réduire la surconsommation dans ce monde en pleine urgence climatique.</p>
                        : <p>Attention! Vous n'utilisez pas de bloqueur de publicités. En installer un vous permettrait de naviguer plus rapidement sur le web, sans encombrement, tout en réduisant la surconsommation dans ce monde en pleine urgence climatique. À noter qu'il n'y a aucune publicité sur ce site web.</p>
                }
            </div>
        </>
    )
}

export default Confidentialite;