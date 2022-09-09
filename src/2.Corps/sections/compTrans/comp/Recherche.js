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
            <input onChange={(e) => mettreRechercheAJour(e.target.value)} type="text"></input>
        </Wrapper>
    )
}

const Wrapper = styled.form`
`

export default Recherche;