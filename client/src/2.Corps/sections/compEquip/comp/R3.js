import styled from "styled-components";
import { Link } from "react-router-dom";

const R3 = ({ images }) => {
    
    return (
        <Rubrique>
            <h2>Le buffet à volonté</h2>
            <div>
                <p>Quoiqu'il soit possible de toujours manger au restaurant, est-ce que c'est souhaitable pour son portefeuille ou son estomac? Probablement pas! C'est pour cela qu'il est mieux d'être équipé avec sa cuisine portable. De plus, selon l'isolement du circuit choisi, j'essaie d'avoir une réserve de deux à trois jours de nourriture fraiche, et je n'hésite pas à aller au restaurant une fois par journée, normalement pour diner.</p>
                <img src={images[8]} alt="réchaud de camping, carburant, trépied de réchaud et briquet électrique" />
                <ul>
                    <li>Carburant : TOUJOURS partir avec une cartouche pleine ou presque pleine! Vous pouvez aussi peser une cartouche déjà utilisée à l'aide <Link to="/commencement/faq">d'un simple calculateur</Link>.</li>
                    <li>Réchaud : TOUJOURS tester avant de partir, même s'il fonctionnait bien la semaine passée!</li>
                    <li>Un briquet. L'autre se trouve avec la gamelle.</li>
                    <li>Trépied de réchaud : pour utiliser le réchaud en l'absence d'une surface plane.</li>
                </ul>
                <img src={images[9]} alt="poêlon à frire, casserole, couteau, spourchette, planche à découper, briquet, tasse à mesurer" />
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
                <img src={images[10]} alt="contenant alimentaire pliable en plastique, sacs à collation réutilisables" />
                <ul>
                    <li>Contenant alimentaire en plastique ("Tupperware") pliable : pour les restants de la poutine trop délicieuse ou les bleuets cueillis sur le bord de la route.</li>
                    <li>Sacs à collation / sandwich réutilisables</li>
                </ul>
                <img src={images[11]} alt="éponge, guenilles, savon" />
                <ul>
                    <li>Une éponge et deux guenilles</li>
                    <li>Savon biodégradable</li>
                    <li>Débarbouillettes humides : le genre qu'on trouve dans les restaurants, pour ceux qui aiment le luxe!</li>
                </ul>
                <img src={images[12]} alt="repas lyophilisés, barres tendres, multi-épices" />
                <ul>
                    <li>Repas lyophilisés</li>
                    <li>Barres tendres et autres collations</li>
                    <li>Épices</li>
                </ul>
            </div>
        </Rubrique>
    )
}

const Rubrique = styled.div`
    h2 {
        text-align: center;
    }
    > div {
        columns: 300px 3;
        margin-bottom: 15px;
        img {
            width: 100%;
        }
    }
`

export default R3;