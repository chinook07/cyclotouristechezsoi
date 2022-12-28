import { Routes, Route } from "react-router-dom";

import FilDArianne from "./comp/FilDArianne";
import Intro from "./compDesti/Intro";
import Trajets from "./compDesti/Trajets";
import Nouveautes from "./compDesti/Nouveautes";
import Synthese from "./compDesti/Synthese";
import Erreur from "../pagesAutres/Erreur";

const Destinations = () => {

    const choix = [
        { "titre": "Trajets", "lien": "trajets" },
        { "titre": "Nouveautés", "lien": "nouveautes" },
        { "titre": "Synthèse", "lien": "synthese" }
    ]

    return (
        <>
            <FilDArianne racine={"destinations"} choix={choix} />
            <Routes>
                <Route exact path="/" element={<Intro />} />
                <Route path="/trajets" element={<Trajets />} />
                <Route path="/abitibi-temiscamingue/" element={<Trajets ancienLien={0} />} />
                <Route path="/bas-saint-laurent/" element={<Trajets ancienLien={1} />} />
                <Route path="/beauce/" element={<Trajets ancienLien={2} />} />
                <Route path="/becancour-sutton/" element={<Trajets ancienLien={3} />} />
                <Route path="/bellechasse/" element={<Trajets ancienLien={4} />} />
                <Route path="/charlevoix/" element={<Trajets ancienLien={5} />} />
                <Route path="/cote-acadienne/" element={<Trajets ancienLien={6} />} />
                <Route path="/cote-nord/" element={<Trajets ancienLien={7} />} />
                <Route path="/fjord-du-saguenay-nord/" element={<Trajets ancienLien={8} />} />
                <Route path="/fjord-du-saguenay-sud/" element={<Trajets ancienLien={9} />} />
                <Route path="/gaspesie/" element={<Trajets ancienLien={10} />} />
                <Route path="/ile-du-prince-edouard/" element={<Trajets ancienLien={11} />} />
                <Route path="/iles-de-la-madeleine/" element={<Trajets ancienLien={12} />} />
                <Route path="/la-verendrye/" element={<Trajets ancienLien={13} />} />
                <Route path="/lac-champlain/" element={<Trajets ancienLien={14} />} />
                <Route path="/lac-st-jean/" element={<Trajets ancienLien={15} />} />
                <Route path="/laurentides/" element={<Trajets ancienLien={16} />} />
                <Route path="/mauricie/" element={<Trajets ancienLien={17} />} />
                <Route path="/montreal-quebec-nord/" element={<Trajets ancienLien={18} />} />
                <Route path="/montreal-quebec-sud/" element={<Trajets ancienLien={19} />} />
                <Route path="/montreal-sherbrooke/" element={<Trajets ancienLien={20} />} />
                <Route path="/outaouais-nord/" element={<Trajets ancienLien={21} />} />
                <Route path="/outaouais-sud/" element={<Trajets ancienLien={22} />} />
                <Route path="/pontiac/" element={<Trajets ancienLien={23} />} />
                <Route path="/portneuf/" element={<Trajets ancienLien={24} />} />
                <Route path="/sentier-waterfront/" element={<Trajets ancienLien={25} />} />
                <Route path="/sherbrooke-quebec/" element={<Trajets ancienLien={26} />} />
                <Route path="/temiscouata/" element={<Trajets ancienLien={27} />} />
                <Route path="/trois-rivieres-shawinigan/" element={<Trajets ancienLien={28} />} />
                <Route path="/vallee-gatineau/" element={<Trajets ancienLien={29} />} />
                <Route path="/nouveautes" element={<Nouveautes />} />
                <Route path="/synthese" element={<Synthese />} />
                <Route path="/*" element={<Erreur />} />
            </Routes>
            <FilDArianne racine={"destinations"} choix={choix} />
        </>
    )
}

export default Destinations;