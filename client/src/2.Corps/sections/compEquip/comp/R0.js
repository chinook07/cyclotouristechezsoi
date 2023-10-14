import styled from "styled-components";

const R0 = ({ images }) => {
    
    return (
        <Rubrique>
            <h2>Le matériel roulant</h2>
            <div>
                <p>Impossible de partir en cyclotourisme sans vélo! Par contre, ce n'est pas qu'une bicyclette à deux roues qu'il faudra avoir. Les pièces de base incluent un ou deux porte-bagages, des garde-boues, un porte-bidon, une béquille, et idéalement deux bons pneus anticrevaison, histoire de rouler avec un minimum d'assurance.</p>
                <img src={images[0]} alt="cadenas en câble, lumières de vélo" />
                <p>Cadenas : un cadenas U est le meilleur choix si l'on désire une protection maximale, mais un câble suffit pour les régions à faible risque.</p>
                <p>Il est recommandé de rouler avec un rétroviseur, et les lumières peuvent servir si jamais on est pris à rouler au crépuscule.</p>
                <img src={images[1]} alt="sangles et système d'attaches pour porte-bagage" />
                <p>Système d'attaches en filet et/ou sangles pour porte-bagage et/ou des sangles d'un ancien sac de couchage : pour transporter la tente sur le porte-bagage.</p>
                <img src={images[2]} alt="sac en plastique géant" />
                <p>Protection pour vélo (bulles d'air, styromousse, etc.) : si l'on commence son voyage avec un trajet en avion</p>
                <img src={images[3]} alt="étuis imperméables pour sacoches" />
                <p>Étuis imperméables (2) pour les sacoches non imperméables</p>
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

export default R0;