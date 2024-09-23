import { ExternalLink } from "react-external-link";

import DeuxFigures from "../../../CompReutilisables/DeuxFigures";
import trainCharlevoix1 from "./images/train-charlevoix-1.webp"
import trainCharlevoix2 from "./images/train-charlevoix-2.webp"

import TableauRegions from "./comp/TableauRegions";
import navettes from "./donnees/navettes.json";

const TrRegional = () => {

    const photo1 = {
        "src": trainCharlevoix1,
        "alt": "Un petit train devant une énorme basilique",
        "cap": "Le train de Québec vers la région de Charlevoix"
    }

    const photo2 = {
        "src": trainCharlevoix2,
        "alt": "Fenêtre d'un train, fleuve, plage et montagne à l'extérieur",
        "cap": "Une vue splendide tout le long du chemin"
    }

    return (
        <div>
            <section>
                <h2>Sortir de la région métropolitaine</h2>
                <p>Pour sortir de la région métropolitaine, la situation s'est grandement améliorée au fil des années. Parmi les onze secteurs d'exo, le transporteur qui opère les trains et les autobus dans la banlieue de Montréal, <ExternalLink href="https://exo.quebec/fr/planifier-trajet/velo/velo-a-bord">sept en offrent la possibilité</ExternalLink> de transporter son vélo à bord des bus, avec des heures et des dates d'utilisation harmonisées depuis quelques années. Jusqu'à deux vélos peuvent être placés <ExternalLink href="https://exo.quebec/Media/Default/pdf/section4/velo-bus/Instructions_velobus.pdf">sur le support situé à l'avant (PDF)</ExternalLink>. Il faut s'assurer de bien placer le bras d'appui le plus près de la fourche possible.</p>
                <p>Pour ce qui est du train de banlieue, il n'y a plus de restrictions à l'heure de pointe, ni de limites sur le nombre de vélos acceptés par train. Notez par contre que l'accès aux voitures de train est ardu en raison des marches à pic et de l'étroitesse des portes.</p>
                <p><ExternalLink href="https://www.stm.info/fr/velo/bienvenue-aux-velos">Le métro de Montréal</ExternalLink>, ainsi que <ExternalLink href="https://rem.info/fr/se-deplacer/faq-sur-les-deplacements/est-ce-que-je-peux-transporter-mon-velo-dans-le-rem">le REM</ExternalLink>, avec un service bien plus fréquent que le train, offrent la possibilité de transporter son vélo en semaine avant 7 h, entre 9 h 30 et 15 h 30, ainsi qu'en soirée après 18 h. Les vélos sont permis en tout temps le samedi et le dimanche. Certaines exceptions peuvent s'appliquer <ExternalLink href="https://www.stm.info/fr/velo/calendrier-des-restrictions-lors-devenements">lors d'évènements générant de l'achalandage</ExternalLink>. En 2023 ainsi qu'en 2024, un projet-pilote était en cours pour autoriser les vélos en tout temps entre la fin mai et la fin aout. Dossier à suivre pour 2025!</p>
            </section>
            <section>
                <h2>Se déplacer dans les régions du Québec</h2>
                <p>Quelques transporteurs en dehors de Montréal offrent la combinaison vélo-bus ou vélo-train sur une échelle régionale, c'est-à-dire pour des distances de quelques dizaines de kilomètres. Cette catégorie s'avère utile en voyage pour sauter par-dessus une étape particulièrement difficile, par exemple entre Ste-Anne-de-Beaupré et Baie-St-Paul (Charlevoix), ou dans le nord-est de la Gaspésie.</p>
                <DeuxFigures photo1={photo1} photo2={photo2} />
                <TableauRegions />
            </section>
            <section>
                <h2>Les navettes pour cyclistes</h2>
                <p>Il existe dans certaines régions des navettes exprès pour cyclistes. C'est une excellente façon de sauter d'un bout à l'autre avant ou après avoir roulé sur la véloroute du début à la fin. Le transport à bord de celles-ci doit normalement être réservé, peut couter plus cher qu'un billet d'autocar, mais le service vient avec une certitude que le vélo peut accompagner le voyageur. Dans d'autres cas, un transfert de bagages ou de déplacement de véhicule y est offert. L'un ou l'autre de ces services existent aux endroits suivants :</p>
                <ul>
                    {
                        navettes.map((item, index) => {
                            return (
                                <li key={index}><ExternalLink href={item.lien}>{item.regions}</ExternalLink></li>
                            )
                        })
                    }
                </ul>
            </section>
            <section>
                <h2>Se déplacer à l'intérieur des villes</h2>
                <p>À noter que certaines sociétés de transport offrent des supports à vélo sur les autobus urbains, tel qu'à <ExternalLink href="https://www.stl.laval.qc.ca/fr/autobus/cyclobus/">Laval</ExternalLink>, <ExternalLink href="https://sttr.qc.ca/sttr/cyclobus/">Trois-Rivières</ExternalLink>, <ExternalLink href="https://sts.saguenay.ca/infos-pratiques/velobus">Saguenay</ExternalLink>, <ExternalLink href="http://sto.ca/index.php?id=vlo-bus&L=fr%2Fbrochure_p12_f.pdf">Gatineau</ExternalLink> et <ExternalLink href="https://www.sts.qc.ca/77-Informations-importantes.html">Sherbrooke</ExternalLink>. Par contre, puisque le vélo est souvent plus rapide que l'autobus pour les déplacements en ville, ce service n'est utile que dans certaines situations particulières.</p>
            </section>
        </div>
    )
}

export default TrRegional;