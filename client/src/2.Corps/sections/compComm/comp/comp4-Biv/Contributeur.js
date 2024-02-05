import styled from "styled-components";

const Contributeur = ({mAJNom, mAJCourriel, champs}) => {
    return (
        <Wrapper>
            <div>
                <label htmlFor="">Nom</label>
                <input
                    name="nom"
                    onChange={mAJNom}
                    placeholder="Nom (facultatif)"
                    type="text"
                    value={champs.nom}
                />
            </div>
            <div>
                <label htmlFor="">Courriel</label>
                <input
                    name="courriel"
                    onChange={mAJCourriel}
                    placeholder="Courriel"
                    required
                    type="email"
                    value={champs.courriel}
                />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin: 10px 0;
    > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
        label {
            text-align: center;
        }
        > input {
            border-radius: 5px;
            margin: 0 5px;
            padding: 5px;
        }
    }
    
`

export default Contributeur;