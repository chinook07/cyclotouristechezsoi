import styled from "styled-components";

const Contact = () => {

    const regions = ["Québec", "Canada (hors-Québec)", "France", "États-Unis (USA)", "Allemagne (Deutschland)", "Ailleurs"]

    return (
        <Wrapper
            action="https://formspree.io/mgenpdqw"
            method="POST"
            target="blank"
        >
            <p>Vous avez une suggestion à faire? Vous souhaitez signaler une erreur sur le site? Vous aimeriez collaborer avec l'auteur? Besoin de contacter Cyclotouristechezsoi pour n'importe quelle autre raison? Remplissez le formulaire ci-dessous, et vous serez rejoint dans les plus brefs délais.</p>
            <p>Pour les demandes d'information en lien avec le cyclotourisme, il me fera plaisir de vous répondre, mais je vous recommande de consulter les pages sur ce site car votre réponse s'y trouve probablement!</p>
            <Lang><span lang="EN">Feel free to write in English.</span> <span lang="DE">Sie können gerne auf Deutsch schreiben.</span></Lang>
            <Coordonnees>
                <label htmlFor="prenom">Prénom</label>
                <input
                    id="prenom"
                    name="prenom"
                    placeholder="Prénom"
                    type="text"
                />
                <label htmlFor="nomf">Nom de famille</label>
                <input
                    id="nomf"
                    name="nomf"
                    placeholder="Nom de famille"
                    type="text"
                />
                <label htmlFor="courriel">Courriel</label>
                <input
                    id="courriel"
                    name="courriel"
                    placeholder="Courriel (requis)"
                    required
                    type="email"
                />
            </Coordonnees>
            <label htmlFor="message">Écrivez votre message</label>
            <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="10"
                required
            />
            <Emplacement>
                <label htmlFor="locale">Emplacement</label>
                <select
                    id="locale"
                    name="locale"
                    aria-label="Pays ou région d'origine">
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
    p {
        padding: 0 10px;
    }
    background-color: var(--c2);
    padding: 50px 0;
    text-align: center;
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

const Lang = styled.p`
    font-style: italic;
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
    select {
        border-radius: 10px;
        margin: 10px auto;
        max-width: 90%;
        padding: 10px;
        width: 300px;
    }
`

export default Contact;