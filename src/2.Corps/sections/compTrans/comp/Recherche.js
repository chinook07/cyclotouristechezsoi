import styled from "styled-components";

const Recherche = ({setRecherchee}) => {

    const mettreRechercheAJour = (terme) => {
        console.log(terme);
        setRecherchee(terme);
    }

    return (
        <Wrapper>
            <label>Label</label>
            <input onChange={(e) => mettreRechercheAJour(e.target.value)} type="text"></input>
        </Wrapper>
    )
}

const Wrapper = styled.form``

export default Recherche;