import styled from "styled-components";

const R8 = ({ images }) => {
    
    return (
        <Rubrique>
            <h2>Le maintien de l'hygiène</h2>
            <div>
                <p>C'est certain qu'on va suer, mais un minimum d'hygiène personnelle est tout de même de mise. Pour éviter les déversements de produits chimiques, il faut prendre soin de bien renfermer certains articles dans des sacs ou d'autres contenants adaptés.</p>
                <img src={images[22]} alt="brosse à dents, pâte à dents, déodorant, mouchoirs, désinfectant" />
                <ul>
                    <li>Mouchoirs</li>
                    <li>Désinfectant</li>
                    <li>Déodorant</li>
                    <li>Brosse à dents</li>
                    <li>Dentifrice</li>
                </ul>
                <img src={images[23]} alt="crème solaire, chasse-moustique dans un sac, crème hydratante et baume à lèvres" />
                <ul>
                    <li>Crème solaire</li>
                    <li>Chasse-moustiques</li>
                    <li>Baume à lèvres : au besoin</li>
                    <li>Crème hydratante : au besoin</li>
                </ul>
                <img src={images[24]} alt="rasoir, coupe-ongles, savon lessive" />
                <ul>
                    <li>Rasoir non électrique et autres produits de rasage au besoin</li>
                    <li>Coupe-ongles : pour les longs séjours</li>
                    <li>Savon lessive : en format capsule, au besoin</li>
                </ul>
                <img src={images[25]} alt="gel de douche, papier toilette dans un sac, lingettes humides dans un sac" />
                <ul>
                    <li>Gel de douche (ou savon + shampoing)</li>
                    <li>Lingettes humides : pour les soirées sans accès à une douche</li>
                    <li>Papier toilette : pas besoin de 50 rouleaux!</li>
                </ul>
                <p>Mesdames, n'oubliez pas d'adapter cette liste et d'amener les produits féminins que vous nécessitez.</p>
                <p>Messieurs, vous n'avez pas besoin de vous raser chaque matin. ;) Peut-être une ou deux fois par semaine?</p>
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

export default R8;