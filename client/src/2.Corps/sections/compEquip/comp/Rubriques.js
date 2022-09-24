import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSkullCrossbones, faCheck } from "@fortawesome/free-solid-svg-icons";

const Rubriques = ({montrerRubrique}) => {
    return (
        <Wrapper>
            {
                montrerRubrique === 0 &&
                <Rubrique>
                        <h2>Le matériel roulant</h2>
                        <div>
                            <p>Impossible de partir en cyclotourisme sans vélo! Par contre, ce n'est pas qu'une bicyclette à deux roues qu'il faudra avoir. Les pièces de base incluent un ou deux porte-bagages, des garde-boues, un porte-bidon, une béquille, et idéalement deux bons pneus anticrevaison, histoire de rouler avec un minimum d'assurance.</p>
                            <img src="" alt="aVenir" />
                            <p>Cadenas : un cadenas U est le meilleur choix si l'on désire une protection maximale, mais un câble suffit pour les régions à faible risque.</p>
                            <p>Il est recommandé de rouler avec un rétroviseur, et les lumières peuvent servir si jamais on est pris à rouler au crépuscule.</p>
                            <img src="" alt="aVenir" />
                            <p>Système d'attaches en filet et/ou sangles pour porte-bagages et/ou des sangles d'un ancien sac de couchage : pour transporter la tente sur le porte-bagage.</p>
                            <img src="" alt="aVenir" />
                            <p>Protection pour vélo (bulles d'air, styromousse, etc.) : si l'on commence son voyage avec un trajet en avion</p>
                            <img src="" alt="aVenir" />
                            <p>Étuis imperméables (2) pour le sac de guidon et la sacoche de porte-bagages</p>
                        </div>
                </Rubrique>
            }
            {
                montrerRubrique === 1 &&
                <Rubrique>
                        <h2>La trousse de réparation</h2>
                        <div>
                            <p>Sur la route, il faudra être préparé face à l'éventuel pépin mécanique. Sans être équipé d'un éventail complet de tournevis et de clés, il est essentiel d'avoir les outils de base pour pouvoir réparer une crevaison, par exemple.</p>
                            <img src="" alt="aVenir" />
                            <p>Pour les petits ajustements, il est bon de s'équiper de ces outils :</p>
                            <ul>
                                <li>Multioutil avec clés hexagonales 4, 5 et 6 mm, tournevis plat et croix</li>
                                <li>Clé 8 / 10 mm</li>
                                <li>Clé à pédales 5/8"</li>
                            </ul>
                            <img src="" alt="aVenir" />
                            <p>Un bon démonte-pneu peut remplacer un trio de ces outils en plastique pour enlever un pneu. Toujours avoir une ou deux chambres à air supplémentaires correspondant à la bonne largeur des pneus, ainsi que des rustines.</p>
                        </div>
                </Rubrique>
            }
            {
                montrerRubrique === 2 &&
                <Rubrique>
                        <h2>La source d'hydratation</h2>
                        <div>
                            <p>Un de vos plus grands besoins en cyclotourisme sera de bien s'hydrater. La distance entre les municipalités au Québec varie normalement entre 10 et 25 km, et vous ne trouverez que rarement de l'eau potable entre les noyaux villageois. Ceci étant dit, contrairement à certains pays européens, une fois dans un endroit habité, on a rarement à chercher longtemps avant de pouvoir remplir ses gourdes.</p>
                            <img src="" alt="aVenir" />
                            <p>En plus de la gourde d'eau, une bouteille pliable se range facilement si vous avez une courte distance avant le prochain village et que vous êtes certain à 100 % qu'une simple bouteille sera suffisante avant d'y arriver.</p>
                            <img src="" alt="aVenir" />
                            <p>Si vous traversez de grands espaces sauvages, il vous faudra rendre potable l'eau que vous trouverez. Il existe plusieurs façons de faire cela.</p>
                            <div>
                                <details>
                                    <summary>Scénario A : l'eau provient d'une source propre mais non sécuritaire à la consommation. C'est parfois le cas en région rurale <Gras>aux haltes routières</Gras>.</summary>
                                    <p>
                                        <span>Danger potentiel </span>
                                        <FontAwesomeIcon icon={faSkullCrossbones} />
                                        <span>: bactéries et protozoaires.</span>
                                    </p>
                                    <ul>
                                        <li>
                                            <span>Filtre</span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </li>
                                        <li>
                                            <span>Ébullition de l'eau</span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </li>
                                        <li>
                                            <span>Comprimés de purification</span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </li>
                                        <li>
                                            <span>Filtre-purificateur</span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </li> 
                                    </ul>
                                </details>
                                <details>
                                    <summary>Scénario B : l'eau provient <Gras>d'une rivière ou d'un lac</Gras> et contient des particules.</summary>
                                    <p>
                                        <span>Danger potentiel </span>
                                        <FontAwesomeIcon icon={faSkullCrossbones} />
                                        <span>: particules, bactéries et protozoaires.</span>
                                    </p>
                                    <ul>
                                        <li>
                                            <span>Filtre</span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </li>
                                        <li>
                                            <span>Filtre-purificateur</span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </li> 
                                    </ul>
                                </details>
                                <details>
                                    <summary>Scénario C : l'eau est limpide, mais provient d'une source non sure <Gras>dans un pays où la sanitation n'est pas aux normes</Gras> de l'Occident.</summary>
                                    <p>
                                        <span>Danger potentiel </span>
                                        <FontAwesomeIcon icon={faSkullCrossbones} />
                                        <span>: bactéries, protozoaires et virus.</span>
                                    </p>
                                    <ul>
                                        <li>
                                            <span>Ébullition de l'eau</span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </li>
                                        <li>
                                            <span>Comprimés de purification</span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </li>
                                        <li>
                                            <span>Filtre-purificateur</span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </li> 
                                    </ul>
                                </details>
                                <details>
                                    <summary>Scénario D : l'eau provient d'une source non fiable dans un pays en dehors de l'Occident, ou <Gras>dans une région fortement polluée</Gras>.</summary>
                                    <p>
                                        <span>Danger potentiel </span>
                                        <FontAwesomeIcon icon={faSkullCrossbones} />
                                        <span>: la totale (particules, bactéries, protozoaires et virus)!</span>
                                    </p>
                                    <ul>
                                        <li>
                                            <span>Filtre-purificateur</span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </li> 
                                        <li>
                                            <span>Filtre + ébullion de l'eau</span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </li> 
                                        <li>
                                            <span>Filtre + comprimés de purification</span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </li> 
                                    </ul>
                                </details>
                            </div>
                        </div>
                </Rubrique>
            }
            {
                montrerRubrique === 3 &&
                <Rubrique>
                        <h2>Le buffet à volonté</h2>
                        <div>
                            <p>Quoiqu'il soit possible de toujours manger au restaurant, est-ce que c'est souhaitable pour son portefeuille ou son estomac? Probablement pas! C'est pour cela qu'il est mieux d'être équipé avec sa cuisine portable. De plus, selon l'isolement du circuit choisi, j'essaie d'avoir une réserve de deux à trois jours de nourriture fraiche, et je n'hésite pas à aller au restaurant une fois par journée, normalement pour diner.</p>
                            <img src="" alt="aVenir" />
                            <ul>
                                <li>Carburant : TOUJOURS partir avec une cartouche pleine ou presque pleine! Vous pouvez aussi peser une cartouche déjà utilisée à l'aide <Link to="/commencement/faq">d'un simple calculateur</Link>.</li>
                                <li>Réchaud : TOUJOURS tester avant de partir, même s'il fonctionnait bien la semaine passée!</li>
                                <li>Un briquet. L'autre se trouve avec la gamelle.</li>
                                <li>Trépied de réchaud : pour utiliser le réchaud en l'absence d'une surface plane.</li>
                            </ul>
                            <img src="" alt="aVenir" />
                            <p>Un kit gamelle, avec :</p>
                            <ul>
                                <li>Casserole</li>
                                <li>Poêlon à frire</li>
                                <li>Couteau</li>
                                <li>Spourchette</li>
                                <li>Tasse à mesurer</li>
                                <li>Assiette</li>
                                <li>Planche à découper</li>
                                <li>Briquet supplémentaire</li>
                            </ul>
                            <img src="" alt="aVenir" />
                            <ul>
                                <li>Contenant alimentaire en plastique ("Tupperware") pliable : pour les restants de la poutine trop délicieuse ou les bleuets cueillis sur le bord de la route.</li>
                                <li>Sacs à collation / sandwich réutilisables</li>
                            </ul>
                            <img src="" alt="aVenir" />
                            <ul>
                                <li>Une éponge et deux guenilles</li>
                                <li>Savon biodégradable</li>
                                <li>Débarbouillettes humides : le genre qu'on trouve dans les restaurants, pour ceux qui aiment le luxe!</li>
                            </ul>
                            <img src="" alt="aVenir" />
                            <ul>
                                <li>Repas lyophilisés</li>
                                <li>Barres tendres et autres collations</li>
                                <li>Épices</li>
                            </ul>
                        </div>
                </Rubrique>
            }
            {
                montrerRubrique === 4 &&
                <Rubrique>
                        <h2>La maison très mobile</h2>
                        <div>
                            <p>C'est simple, il faut un toit! En solo, une tente pour deux personnes permet d'avoir un peu d'espace pour respirer. À deux, on aurait tendance à choisir une tente pour trois.</p>
                            <img src="" alt="aVenir" />
                            <p>Tente et double toit, dans un étui imperméable, avec une toile de sol.</p>
                            <img src="" alt="aVenir" />
                            <ul>
                                <li>Matelas autogonflable</li>
                                <li>Sac de couchage avec doublure</li>
                                <li>Oreiller gonflable</li>
                            </ul>
                            <p>Les items précédents sont parmi les plus grands que l'on doit trainer avec nous. Si la tente rentre facilement entre le porte-bagage et la petite sacoche par-dessus (voir photo en haut de page), le matelas, le sac de couchage, ainsi que l'oreiller, remplissent normalement une sacoche latérale à eux seuls.</p>
                        </div>
                </Rubrique>
            }
            {
                montrerRubrique === 5 &&
                <Rubrique>
                        <h2>La gestion de l'imprévu</h2>
                        <div>
                            <p>Ici, il s'agit d'avoir une panoplie d'outils pour pouvoir dépanner, effectuer la réparation d'un objet, attacher deux trucs ensemble, etc.</p>
                            <img src="" alt="aVenir" />
                            <ul>
                                <li>Sac de petits sacs en plastique et des élastiques</li>
                                <li>Ruban adhésif</li>
                                <li>Démarre-feu et allumettes</li>
                                <li>Pièces de réparation pour le matelas</li>
                            </ul>
                            <img src="" alt="aVenir" />
                            <ul>
                                <li>Attaches rapides ("tie-wraps")</li>
                                <li>Pièces de réparation pour tente</li>
                                <li>Mousquetons</li>
                                <li>Clochette à ours : pour les contrées lointaines</li>
                            </ul>
                            <p>Peut-être que vous amènerez de la corde, du gaz poivré (ours grizzli dans l'Ouest canadien), ou une couverture d'urgence.</p>
                        </div>
                </Rubrique>
            }
            {
                montrerRubrique === 6 &&
                <Rubrique>
                        <h2>Le garde-robe</h2>
                        <div>
                            <p>Voilà une excellente question : que dois-je porter en cyclotourisme? Si vous roulez en vélo hybride à une vitesse de croisière modérée, il n'est pas nécessaire d'acheter des vêtements de vélo inabordables. Ceci étant dit, les vêtements en coton sont à proscrire. Avec les produits synthétiques tels que le polyester, on respire mieux et notre linge sèche plus rapidement.</p>
                            <img src="" alt="aVenir" />
                            <p>Un chapeau cloche ou une casquette, ainsi que des lunettes de soleil seront vos alliés précieux.</p>
                            <img src="" alt="aVenir" />
                            <p>Pour la pluie, prévoyez un manteau et pantalons imperméables, de plus que des couvre-chaussures.</p>
                            <img src="" alt="aVenir" />
                            <ul>
                                <li>Filet ou sac respirable pour le linge sale</li>
                                <li>Serviette</li>
                            </ul>
                            <p>Puisqu'il y a des préférences personnelles qui entrent en jeu, je laisse une partie de la section à l'imagination et aux besoins du voyageur. Ma liste de vêtements à moi pour un voyage de SEPT jours, où je ferai la lessive une fois, consiste des articles suivants :</p>
                            <ul>
                                <li>Chandails courts (4)</li>
                                <li>Chandail long</li>
                                <li>Bras d'appoint</li>
                                <li>Sous-vêtements (4)</li>
                                <li>Pantalons courts</li>
                                <li>Pantalons détachables ou une 2e paire de pantalons courts</li>
                                <li>Pantalons courts pyjama/confortables : pour les nuits tièdes au camping.</li>
                                <li>Pantalons longs pyjama/confortables : pour les nuits fraiches au camping.</li>
                                <li>Maillot de bain</li>
                                <li>Bas (4 ou 5)</li>
                                <li>Sandales fermées</li>
                            </ul>
                        </div>
                </Rubrique>
            }
            {
                montrerRubrique === 7 &&
                <Rubrique>
                        <h2>L'hôpital pour emporter</h2>
                        <div>
                            <p>Il n'y a jamais d'urgence, jusqu'au moment qu'il y en a une. Une petite trousse de premiers soins s'attache au sac de porte-bagages, donnant facilement à l'usager accès à une minipharmacie.</p>
                            <img src="" alt="aVenir" />
                            <ul>
                                <li>Médicaments sur ordonnance</li>
                                <li>Ibuprofène pour la tête</li>
                                <li>Quelque chose pour les brulures d'estomac</li>
                                <li>Losanges pour la gorge</li>
                                <li>Bracelet et/ou médicaments / gingembre pour la nausée : pour les longs trajets en autocar et les traversiers.</li>
                            </ul>
                            <img src="" alt="aVenir" />
                            <p>Enfin, ajoutez tout article nécessaire pour votre état de santé (auto-injecteur EpiPen, pompe d'asthme, etc.), quelques masques ou couvre-visages au besoin, et prenez quelques minutes pour vous familiariser avec le contenu de votre trousse de premiers soins.</p>
                        </div>
                </Rubrique>
            }
            {
                montrerRubrique === 8 &&
                <Rubrique>
                        <h2>Le maintien de l'hygiène</h2>
                        <div>
                            <p>Paragraphe</p>
                            <img src="" alt="aVenir" />
                            <p>Paragraphe</p>
                            <img src="" alt="aVenir" />
                            <p>Paragraphe</p>
                            <img src="" alt="aVenir" />
                            <p>Paragraphe</p>
                        </div>
                </Rubrique>
            }
            {
                montrerRubrique === 9 &&
                <Rubrique>
                        <h2>Le jeu sur la route</h2>
                        <div>
                            <p>Paragraphe</p>
                            <img src="" alt="aVenir" />
                            <p>Paragraphe</p>
                            <img src="" alt="aVenir" />
                            <p>Paragraphe</p>
                            <img src="" alt="aVenir" />
                            <p>Paragraphe</p>
                        </div>
                </Rubrique>
            }
            {
                montrerRubrique === 10 &&
                <Rubrique>
                        <h2>Le voltage et le câblage</h2>
                        <div>
                            <p>Paragraphe</p>
                            <img src="" alt="aVenir" />
                            <p>Paragraphe</p>
                            <img src="" alt="aVenir" />
                            <p>Paragraphe</p>
                            <img src="" alt="aVenir" />
                            <p>Paragraphe</p>
                        </div>
                </Rubrique>
            }
            {
                montrerRubrique === 11 &&
                <Rubrique>
                        <h2>Le hors-catégorie</h2>
                        <div>
                            <p>Paragraphe</p>
                            <img src="" alt="aVenir" />
                            <p>Paragraphe</p>
                            <img src="" alt="aVenir" />
                            <p>Paragraphe</p>
                            <img src="" alt="aVenir" />
                            <p>Paragraphe</p>
                        </div>
                </Rubrique>
            }
            {
                montrerRubrique === 12 &&
                <Rubrique>
                        <h2>Le passeport pour l'étranger</h2>
                        <div>
                            <p>Paragraphe</p>
                            <img src="" alt="aVenir" />
                            <p>Paragraphe</p>
                            <img src="" alt="aVenir" />
                            <p>Paragraphe</p>
                            <img src="" alt="aVenir" />
                            <p>Paragraphe</p>
                        </div>
                </Rubrique>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Rubrique = styled.div`
    details {
        background-color: var(--c1);
        border-left: 4px solid var(--c5);
        margin: 5px 0;
        padding: 10px;
    }
`

const Gras = styled.span`
    font-weight: bold;
`

export default Rubriques;