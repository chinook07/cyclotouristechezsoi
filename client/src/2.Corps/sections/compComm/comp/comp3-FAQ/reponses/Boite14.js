import styled from "styled-components";

import DeuxFiguresPetit from "../../../../../../CompReutilisables/DeuxFiguresPetit";
import repas1 from "../../../images/repas-poulet.webp";
import repas2 from "../../../images/fruits.webp";

const Boite14 = () => {

    const photo7 = {
		src: repas1,
		alt: "repas avec poulet frit, frites, salade et sauce, fleuve au loin",
		cap: "Un « resto du village » avec vue sur fleuve",
	};

	const photo8 = {
		src: repas2,
		alt: "bleuets et tomates cerise dans une sacoche de guidon",
		cap: "La vraie utilité d'une sacoche de guidon",
    };

    return (
        <Wrapper>
            <p>Non. En principe, il y a des épiceries dans toutes les petites villes, et des dépanneurs dans la plupart des villages. La réalité est que l'offre alimentaire est limitée dans les petites surfaces, et que les fruits peuvent se faire rares. Par contre, il est facile de retrouver des sandwichs dans la section prêt-à-manger.</p>
            <p>Le casse-croute québécois est l'endroit idéal pour déguster une poutine, un hamburger, ou la malbouffe en général. De temps à autre, c'est ce qui suffit pour regagner un peu d'énergie, par contre sur le long terme, ça peut devenir lassant. Le restaurant familial qui se trouve dans les petites villes permet de briser la routine, et il y a bien sûr les cafés et les boulangeries que certains adorent.</p>
            <DeuxFiguresPetit photo1={photo7} photo2={photo8} />
            <p>Il ne faut pas passer sous silence les nombreux kiosques de fruits et légumes qui abondent le long des routes. C'est l'occasion rêvé pour faire le plein de fraises ou de concombres, tout en jasant avec les fermiers du coin!</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

export default Boite14;