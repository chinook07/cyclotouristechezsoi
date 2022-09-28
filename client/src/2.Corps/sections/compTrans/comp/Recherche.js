import styled from "styled-components";

const Recherche = ({setRecherchee, setVilleSouhaitee}) => {

    const mettreRechercheAJour = (terme) => {
        setRecherchee(terme)
        setVilleSouhaitee()
    };

    const rienFaire = (e) => e.preventDefault()

    return (
        <Wrapper onSubmit={rienFaire}>
            <label>Entrez votre ville de départ :</label>
            <input
                onChange={(e) => mettreRechercheAJour(e.target.value)}
                placeholder="Entrez min. 3 lettres."
                type="text"
            />
        </Wrapper>
    )
}

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    margin: 15px auto;
    max-width: 250px;
    text-align: center;
    input {
        margin-top: 5px;
        padding: 5px;
    }
`

export default Recherche;