import styled from "styled-components";

const TelevPhotos = ({ mAJFichiers }) => {
    
    return (
        <Wrapper>
            <label htmlFor="fichiersPhotos">Choisissez une ou plusieurs photos.</label>
            <input
                id="fichiersPhotos"
                multiple
                name="fichiers"
                onChange={mAJFichiers}
                type="file"
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`

export default TelevPhotos;