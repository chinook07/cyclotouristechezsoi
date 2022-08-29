import styled from "styled-components";

const Contact = () => {

    const regions = ["Québec", "Canada (hors-Québec)", "France", "États-Unis (USA)", "Allemagne (Deutschland)", "Ailleurs"]

    return (
        <Wrapper
            action="https://formspree.io/mgenpdqw"
            method="POST"
            target="blank"
        >
            <Prenom
                type="text"
                id="prenom"
                name="prenom"
                placeholder="Prénom"
            />
            <Nom
                type="text"
                id="nomf"
                name="nomf"
                placeholder="Nom de famille"
            />
            <Courriel
                type="email"
                id="courriel"
                name="courriel"
                placeholder="Courriel (requis)"
                required
            />
            <Message
                name="message"
                placeholder="Message"
                rows="10"
                cols="30"
                required
            />
            <Emplacement
                id="locale"
                name="locale"
                aria-label="Pays ou région d'origine"
            >
                <label>Emplacement</label>
                <select>
                    {
                        regions.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })
                    }
                </select>
            </Emplacement>
            <button type="submit" value="Envoyer">Envoyer</button>
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