import styled from "styled-components";

const R7 = ({ images }) => {
    
    return (
        <Rubrique>
            <h2>L'hôpital pour emporter</h2>
            <div>
                <p>Il n'y a jamais d'urgence, jusqu'au moment qu'il y en a une. Une petite trousse de premiers soins s'attache au sac de porte-bagages, donnant facilement à l'usager accès à une minipharmacie.</p>
                <img src={images[20]} alt="trousse de premiers soins, médicaments, bracelet anti-nausée" />
                <ul>
                    <li>Médicaments sur ordonnance</li>
                    <li>Ibuprofène pour la tête</li>
                    <li>Quelque chose pour les brulures d'estomac</li>
                    <li>Losanges pour la gorge</li>
                    <li>Bracelet et/ou médicaments / gingembre pour la nausée : pour les longs trajets en autocar et les traversiers en mer profonde.</li>
                </ul>
                <p>Enfin, ajoutez tout article nécessaire pour votre état de santé (auto-injecteur EpiPen, pompe d'asthme, etc.) et prenez quelques minutes pour vous familiariser avec le contenu de votre trousse de premiers soins.</p>
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

export default R7;