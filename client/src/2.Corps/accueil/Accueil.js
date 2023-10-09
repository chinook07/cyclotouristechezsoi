import styled from "styled-components";
import { ExternalLink } from "react-external-link";
import { format } from "date-fns";

import Carrousel from "./comp/Caroussel";
import NavAccueil from "./comp/NavAccueil";
import NavBlogue from "./comp/NavBlogue";

const Accueil = () => {

    const mois = parseInt(format(new Date(), "M"));
    let texteAcc;
    switch (mois) {
        case 1:
            texteAcc = "Alors que l'hiver nous montre de quoi il est capable, commencez à rêver de votre prochain voyage à vélo."
            break;
        case 2:
            texteAcc = "Si vous prévoyez un long séjour à vélo pour le printemps, c'est peut-être le moment de commencer à concevoir les plans."
            break;
        case 3:
            texteAcc = "La neige fond et on commence à prévoir les vacances d'été."
            break;
        case 4:
            texteAcc = "Le printemps s'installe, ce qui nous fait penser que c'est l'heure de penser sérieusement à notre prochaine aventure cyclotouristique."
            break;
        case 5:
            texteAcc = "Ça y est! Le mois du vélo! Peut-être que vous attenderez l'été, ou bien vous partirez dès que les températures sont assez belles."
            break;
        case 6:
            texteAcc = "La belle saison est enfin parmi nous. Où allez-vous rouler cet été? En Gaspésie? En Outaouais? Au Saguenay? En Montérégie?"
            break;
        case 7:
            texteAcc = "L'été nous montre ses plus beaux jours. Où allez-vous rouler dans les prochaines semaines? Dans l'est? Dans l'ouest? Au nord? Au sud?"
            break;
        case 8:
            texteAcc = "L'été tire à sa fin, mais ce n'est pas trop tard d'aller rouler. C'est le temps de choisir une destination, et de partir!"
            break;
        case 9:
            texteAcc = "Septembre est un mois qui amène l'automne mais aussi plusieurs belles journées pour rouler."
            break;
        case 10:
            texteAcc = "La saison cyclotouristique tire à sa fin, mais ce n'est jamais trop tôt pour rêver à ses prochaines vacances."
            break;
        case 11:
            texteAcc = "L'hiver commence à descendre sur le Québec, mais ce n'est jamais trop tôt pour rêver à ses prochaines vacances."
            break;
        case 12:
            texteAcc = "En ces moments festifs, l'été est bien loin des yeux mais jamais loin du cœur. Par contre, les vacances estivales arriveront plus vite que vous le prévoyez!"
            break;
        default:
            break;
    }

    return (
        <>
            <Carrousel />
            <Intro>
                <h1>Explorez le Québec à vélo</h1>
                
                <p>
                    <span>{texteAcc}</span>
                    <span>Pour vous aider dans la planification, découvrez les renseignements pertinents colligés sur ce site web. Que vous soyez débutant, chevronné, ou simplement curieux, vous trouverez des conseils de matériel, de trajets et bien davantage.</span></p>
                <p>Bonne visite!</p>
            </Intro>
            <NavAccueil />
            <Billets>Récents billets de blogue sur <ExternalLink href="https://touristechezsoi.ca/">Touriste chez soi</ExternalLink></Billets>
            <NavBlogue />
        </>
    )
}

const Intro = styled.div`
    text-align: center;
`

// const Temp = styled.div`
//     background-color: orange;
//     padding: 15px;
//     p:first-child {
//         font-size: large;
//     }
// `

const Billets = styled.h2`
    color: var(--c4);
    a {
        color: var(--c4);
    }
`

export default Accueil;