import styled from "styled-components";

const R3 = ({ images }) => {
    
    return (
        <Rubrique>
            <h2>Le garde-robe</h2>
            <div>
                <p>Voilà une excellente question : que dois-je porter en cyclotourisme? Si vous roulez en vélo hybride à une vitesse de croisière modérée, il n'est pas nécessaire d'acheter des vêtements de vélo inabordables. Ceci étant dit, les vêtements en coton sont à proscrire. Avec les produits synthétiques tels que le polyester, on respire mieux et notre linge sèche plus rapidement.</p>
                <img src={images[17]} alt="chapeau soleil et lunettes de soleil" />
                <p>Un chapeau cloche ou une casquette, ainsi que des lunettes de soleil seront vos alliés précieux.</p>
                <img src={images[18]} alt="couvre-chaussures, imperméable" />
                <p>Pour la pluie, prévoyez un manteau et pantalons imperméables, de plus que des couvre-chaussures.</p>
                <img src={images[19]} alt="sac pour linge sale, serviette" />
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