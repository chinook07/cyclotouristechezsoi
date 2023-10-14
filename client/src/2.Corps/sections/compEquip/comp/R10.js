import styled from "styled-components";

const R10 = ({ images }) => {
    
    return (
        <Rubrique>
            <h2>Le voltage et le câblage</h2>
            <div>
                <p>Malgré le fait qu'on veut passer moins de temps à l'écran, il n'est pas souhaitable de toujours être à la recherche d'une prise de courant au camping ou au restaurant. C'est là où un chargeur externe et/ou une pile supplémentaire deviennent essentiels pour pouvoir continuer à utiliser ses appareils électroniques.</p>
                <img src={images[27]} alt="lampe de poche, batterie supplémentaire, bloc d'alimentation, lecteur MP3 portatif, écouteurs, chargeur, câbles USB" />
                <ul>
                    <li>Chargeur pour appareils USB</li>
                    <li>Téléphone et câble USB</li>
                    <li>Pile supplémentaire</li>
                    <li>Lecteur MP3 portatif avec hautparleur et câble USB</li>
                    <li>Chargeur externe et son câble USB</li>
                    <li>Lampe de poche</li>
                    <li>Écouteurs : si ce n'est que pour le trajet en train / autocar.</li>
                </ul>
                <p>Évitez les doublons non nécessaires des câbles, à moins de pouvoir brancher deux appareils en même temps.</p>
                <p>Si vous partez longtemps, vous allez peut-être penser à amener une tablette (+ câble USB) si l'on souhaite mettre à jour son journal, ou écouter un film de temps à autre.</p>
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

export default R10;