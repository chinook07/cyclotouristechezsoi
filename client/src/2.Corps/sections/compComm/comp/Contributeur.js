import styled from "styled-components";

const Contributeur = ({mAJNom, mAJCourriel, champs}) => {
    return (
        <Wrapper>
            <input
                onChange={mAJNom}
                placeholder="Nom (facultatif)"
                type="text"
                value={champs.nom}
            />
            <input
                onChange={mAJCourriel}
                placeholder="Courriel"
                required
                type="email"
                value={champs.courriel}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px 0;
    > input {
        border-radius: 5px;
        margin: 0 5px;
        padding: 5px;
    }
`

export default Contributeur;