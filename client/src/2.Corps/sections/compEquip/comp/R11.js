import styled from "styled-components";

const R11 = ({ images }) => {
    
    return (
        <Rubrique>
            <h2>Le hors-catégorie</h2>
            <div>
                <p>Même à l'époque de la Grèce antique, les gens qui partaient en voyage oubliaient souvent quelque chose d'essentiel à la maison. Cette liste d'articles qui ne rentrent pas dans les autres catégories est tout aussi primordiale que les autres.</p>
                <img src={images[28]} alt="cartes vélo, guide de la Route verte, masque pour les yeux, bouchons" />
                <ul>
                    <li>Cartes ou guides-vélo en format papier</li>
                    <li>Masque pour les yeux : le Soleil se lève tôt en juin!</li>
                    <li>Bouchons : pour les campings turbulents</li>
                </ul>
                <img src={images[29]} alt="sac à dos pliable, sacs de poubelle, sacs en filet, sac réutilisable" />
                <ul>
                    <li>Sac réutilisable : pour les ravitaillements à l'épicerie</li>
                    <li>Sac (filet) réutilisable pour vrac : lire fruits juteux</li>
                    <li>Sac de poubelle (2)</li>
                    <li>Sac à dos pliable : pour les randonnées et les découvertes en ville à pied</li>
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

export default R11;