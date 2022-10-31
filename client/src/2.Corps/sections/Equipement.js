import { Routes, Route } from "react-router-dom";

import FilDArianne from "./comp/FilDArianne";
import Intro from "./compEquip/Intro";
import Materiel from "./compEquip/Materiel";
import ListeInteractive from "./compEquip/ListeInteractive";
import Erreur from "../pagesAutres/Erreur";

const Equipement = () => {

    const choix = [
        { "titre": "Matériel", "lien": "materiel" },
        { "titre": "Liste interactive", "lien": "listeinteractive" }
    ]

    return (
        <>
            <FilDArianne racine={"equipement"} choix={choix} />
            <Routes>
                <Route exact path="/" element={<Intro />} />
                <Route path="/materiel" element={<Materiel />} />
                <Route path="/listeinteractive" element={<ListeInteractive />} />
                <Route path="/*" element={<Erreur />} />
            </Routes>
            <FilDArianne racine={"equipement"} choix={choix} />
        </>
    )
}

export default Equipement;