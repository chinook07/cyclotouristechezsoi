import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Climat from "./sousComposantes/Climat";
import Animaux from "./sousComposantes/Animaux";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import imgDrapeau from "../../../images/quebec-flag.jpg"

const Visiting = () => {
    return (
        <section>
            <h2>
                <FontAwesomeIcon icon={faSuitcase} />
                <span>Einleitung zu Quebec</span>
            </h2>
            <h3>Sprache und Kultur</h3>
            <p>Unsere Lingua franca ist französisch, unterscheidet sich jedoch in ihrer gesprochenen Form stark von der in Europa gesprochenen Sorte. In der westlichen Hälfte von Montreal sowie in vielen Gebieten an der Grenze zu Ontario, New York und Vermont wird Englisch von einem erheblichen Teil der Bevölkerung als gemeinsame Sprache verwendet. Verkehrszeichen sind normalerweise nur auf Französisch, aber Einheimische in vielen Dörfer entlang wichtiger Radwege sind es gewohnt, verlorene Touristen auf ihren Fahrrädern zu sehen, und helfen ihnen oft gerne dabei, sich zurechtzufinden, ob sie fließend sind oder nur <Italique>Ja, Nein, Toaster</Italique> sagen können.</p>
            <ImgDrapeau src={imgDrapeau} alt="" />
            <p>TDie Menschen in Québec werden Québecer, oder Québécois, in ihrer Muttersprache genannt. Die Menschen identifizieren sich entweder als solche, als Französisch-Kanadier, als Kanadier oder als eine Kombination davon. Viele Montrealer sind unterschiedlicher Herkunft und sprechen daher drei oder mehr Sprachen. Wichtig ist, dass man aufgeschlossen und bereit ist, auch nur ein paar Wörter auf Französisch zu versuchen. Die Menschen werden es zu schätzen wissen, aber seien Sie nicht beleidigt, wenn sie ins Englische wechseln. Es liegt (wahrscheinlich) nicht daran, dass Ihr Französisch schrecklich ist! Sie versuchen einfach nur, hilfreich zu sein!</p>
            <h3>Klima</h3>
            <p>Das Sommerwetter im Süden Quebecs ist warm und feucht. Ende Juli ist die heißeste Zeit des Jahres, und Hitzewellen (über 30°C) werden immer häufiger. Gewitter sind am nachmittags häufig, erreichen aber in keiner Weise die Intensität, die in den USA so häufig beobachtet wird. Tornados sind daher äußerst selten, es treten etwa fünfmal im Jahr auf, in der Regel kleinere Tornados. Nördlich und östlich von Quebec City sind die Sommertage oft kühler, und die Meeresbrise verhindert in der Regel, dass es unangenehm heiß wird.</p>
            <Climat />
            <p>Die Sommerwinde in Quebec wehen in der Regel aus dem Westen oder Südwesten und begünstigen Reisen in diese Richtung. Wenn Sie eine Schleife fahren, denken Sie daran, dass der Wind in überdachten Gebieten, d.h. innerhalb von durch Bäume geschützten Radwegen, im Allgemeinen ruhiger ist.</p>
            <h3>Tiere</h3>
            <p>Quebec ist nicht Australien! Die Fauna ist viel harmloser als in vielen anderen Teilen der Welt, und das haben wir unseren kalten Wintern zu verdanken. Zunächst einmal sind giftige Schlangen und Spinnen äußerst selten. Es gibt jedoch gewisse Gefahren, vor denen man sich in Acht nehmen muss.</p>
            <Animaux />
            <p>Obwohl sie eher lästig als gefährlich sind, machen Moskitos, Bremsen und Gnitzen Ihre Reise miserabel, wenn Sie sich nicht mit Mückenspray bewaffnen, vor allem zu Beginn des Sommers. Ab Mitte August ist es im Allgemeinen angenehmer, sich im Wald aufzuhalten, selbst in der Dämmerung. Ende Mai und Juni findet die Hauptsaison für Moskitos statt, und sollte vermieden werden, wenn man viel Stealth-Camping in den Wäldern plant.</p>
        </section>
    )
}

const ImgDrapeau = styled.img`
    display: block;
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
`

const Italique = styled.span`
    font-style: italic;
`

export default Visiting;