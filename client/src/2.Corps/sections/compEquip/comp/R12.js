import styled from "styled-components";

const R12 = ({ images }) => {
    
    return (
        <Rubrique>
            <h2>Le passeport pour l'étranger</h2>
            <div>
                <p>Vous partez à l'international? N'oubliez pas ces trucs essentiels.</p>
                <img src={images[30]} alt="passeport, devises étrangères, adaptateur électrique" />
                <ul>
                    <li>Un passeport... valide!</li>
                    <li>Adaptateur électrique : on peut toujours acheter un chargeur USB à l'arrivée.</li>
                    <li>Devises étrangères</li>
                    <li>Guide de conversation dans la langue, en papier ou sur téléphone</li>
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

export default R12;