import styled from "styled-components";

const Contact = () => {

    const regions = ["Québec", "Canada (hors-Québec)", "France", "États-Unis (USA)", "Allemagne (Deutschland)", "Ailleurs"]

    return (
        <Wrapper>
            <Prenom></Prenom>
            <Nom></Nom>
            <Courriel></Courriel>
            <Message></Message>
            <Emplacement>
                <label>Emplacement</label>
                <select>
                    {
                        regions.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })
                    }
                </select>
            </Emplacement>
            <button type="submit">Envoyer</button>
        </Wrapper>
    )
}

const Wrapper = styled.form``

const Prenom = styled.input``

const Nom = styled.input``

const Courriel = styled.input``

const Message = styled.textarea``

const Emplacement = styled.div``

export default Contact;