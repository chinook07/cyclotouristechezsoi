import styled from "styled-components";

const Contact = () => {

    const regions = ["Québec", "Canada (hors-Québec)", "France", "États-Unis (USA)", "Allemagne (Deutschland)", "Ailleurs"]

    return (
        <Wrapper
            action="https://formspree.io/mgenpdqw"
            method="POST"
            target="blank"
        >
            <Coordonnees>
                <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    placeholder="Prénom"
                />
                <input
                    type="text"
                    id="nomf"
                    name="nomf"
                    placeholder="Nom de famille"
                />
                <input
                    type="email"
                    id="courriel"
                    name="courriel"
                    placeholder="Courriel (requis)"
                    required
                />
            </Coordonnees>
            
            <textarea
                name="message"
                placeholder="Message"
                rows="10"
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

const Wrapper = styled.form`
    background-color: var(--c2);
    padding: 50px 0;
    textarea {
        border-radius: 10px;
        display: block;
        margin: 10px auto;
        max-width: 90%;
        padding: 10px;
        width: 300px;
    }
    button {
        background-color: var(--c1);
        border-radius: 10px;
        display: block;
        margin: 10px auto;
        padding: 10px;
    }
`

const Coordonnees = styled.div`
    display: flex;
    flex-direction: column;
    input {
        border-radius: 10px;
        margin: 10px auto;
        max-width: 90%;
        padding: 10px;
        width: 300px;
    }
`

const Emplacement = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    text-align: center;
    select {
        border-radius: 10px;
        margin: 10px auto;
        max-width: 90%;
        padding: 10px;
        width: 300px;
    }
`

export default Contact;