import styled from "styled-components";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DeuxFiguresPetit from "../../../../CompReutilisables/DeuxFiguresPetit";
import { faAngleDoubleDown, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import meteo1 from "../images/radar.jpg";
import meteo2 from "../images/cumulonimbus.jpg";
import meteo3 from "../images/poutine-ingredients.png";
import meteo4 from "../images/poutine.jpg";
import camping1 from "../images/camping-tomifobia.jpg";
import camping2 from "../images/camping-rouge.jpg";
import repas1 from "../images/repas-poulet.jpg";
import repas2 from "../images/fruits.jpg";

const FAQ2 = ({ boiteOuverte, setBoiteOuverte }) => {
	const ouvrirFermer = (index) => {
		boiteOuverte === index ? setBoiteOuverte() : setBoiteOuverte(index);
	};

	const photo1 = {
		src: meteo1,
		alt: "un radar météo indiquant des orages",
		cap: "Un radar annonçant le déluge.",
	};

	const photo2 = {
		src: meteo2,
		alt: "ciel très orageux",
		cap: "La pluie commence dans 3, 2, 1...",
	};

	const photo3 = {
		src: meteo3,
		alt: "des frites, de la sauce et du fromage",
		cap: "Veille de poutine en vigueur. On a tout ce qu'il faut pour un souper succulent.",
	};

	const photo4 = {
		src: meteo4,
		alt: "une poutine prête à manger",
		cap: "AVERTISSEMENT de poutine. Préparez-vous à manger!",
	};

	const photo5 = {
		src: camping1,
		alt: "tente sous des arbres en haut d'une rivière",
		cap: "Bivouac interdit mais tranquillité (quasi-) garantie!",
	};

	const photo6 = {
		src: camping2,
		alt: "tente montée sur une plage près d'une rivière",
		cap: "Bivouac autorisé et beau temps illimité!",
    };
    
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
			<h2>FAQ sur la route</h2>
			<Boite>
				<h3 onClick={() => ouvrirFermer(10)}>
					<span>Que faire s'il pleut?</span>
					{boiteOuverte === 10 ? <FontAwesomeIcon icon={faAngleDoubleUp} /> : <FontAwesomeIcon icon={faAngleDoubleDown} />}
				</h3>
				{boiteOuverte === 10 && (
					<Infos>
						<p>Il ne faut pas se laisser décourager! Lors d'une sortie de plusieurs journées, il est rare de ne jamais avoir la pluie. Il est alors primordial de bien s'équiper d'un manteau et de pantalons imperméables pour pouvoir rouler aisément sous la pluie. De plus, les garde-boues empêchent de salir ses vêtements.</p>
						<DeuxFiguresPetit photo1={photo1} photo2={photo2} />
						<p>L'été, lorsque le temps est chaud et instable, les conditions peuvent changer rapidement. Il est alors judicieux de jeter un coup d'œil <ExternalLink href="https://meteo.gc.ca/map_f.html?layers=radar&zoom=-1&center=45.52,-73.65">au radar météo</ExternalLink>, ainsi qu'à <ExternalLink href="https://meteo.gc.ca/lightning/index_f.html?id=QUE#mapTop">la carte du risque de foudre</ExternalLink>. Il devient possible de prédire avec
							quasi-certitude la venue d'averses et d'orages violents.</p>
						<p>Enfin, il est bon de connaitre la différence entre une veille d'orages violents (ou de tornade) et une alerte. La première indique que les ingrédients (chaleur, humidité, instabilité, etc.) sont présents, tandis que la deuxième nous informe que l'évènement est en formation ou en cours. Une analogie loufoque mais pertinente serait de comparer ce concept à notre mets national.</p>
						<DeuxFiguresPetit photo1={photo3} photo2={photo4} />
						<p>À noter que les tornades au Québec sont rares, mais puisqu'on en recense environ 5 par année, c'est une bonne idée de savoir <ExternalLink href="https://www.preparez-vous.gc.ca/cnt/hzd/trnds-drng-fr.aspx">quoi faire</ExternalLink> si ça arrive durant votre périple.</p>
					</Infos>
				)}
			</Boite>
			<Boite>
				<h3 onClick={() => ouvrirFermer(11)}>
					<span>Où puis-je monter ma tente?</span>
					{boiteOuverte === 11 ? <FontAwesomeIcon icon={faAngleDoubleUp} /> : <FontAwesomeIcon icon={faAngleDoubleDown} />}
				</h3>
				{boiteOuverte === 11 && (
					<Infos>
						<p>Le Québec est parsemé de <Gras>campings privés</Gras> où il est souvent possible de se pointer sans réservation, puisqu'une tente et un vélo ne prend pas autant de place qu'une roulotte et deux camionnettes. Une nuitée peut couter de 20 à 50 $, avec une moyenne qui tourne de plus en plus autour de 40 $. Certains font même partie du réseau <ExternalLink href="https://www.routeverte.com/se-loger/">Bienvenue cyclistes</ExternalLink> de Vélo Québec, ce qui garantie une place aux cyclocampeurs spontanés. La quasi-totalité des <Gras>parcs nationaux du Québec</Gras> en font partie et offrent même un tarif par personne, très bénéfique lorsqu'on voyage en solo.</p>
						<p>Pour éviter de payer ce prix et de devoir supporter les nuisances sonores d'un camping aménagé, il est possible de <ExternalLink href="https://educaloi.qc.ca/actualites-juridiques/camping-peut-on-installer-sa-tente-nimporte-ou/">s'installer sur les terres du domaine public</ExternalLink>. Il faut bien sûr respecter quelques règlements de civisme, et plusieurs exceptions s'appliquent, car certaines jurisdictions encadrent la pratique différemment. On
							utilise le terme <Gras>camping sauvage</Gras> ou bien le <Gras>bivouac</Gras>.</p>
						<DeuxFiguresPetit photo1={photo5} photo2={photo6} />
						<p>S'il y a un doute de la légalité de la chose, la bonne pratique consiste à monter son camrgr pement en soirée et de partir tôt le lendemain. On gagne aussi lorsqu'on s'assure de bivouaquer loin des regards.</p>
					</Infos>
				)}
			</Boite>
			<Boite>
				<h3 onClick={() => ouvrirFermer(12)}>
					<span>Où est-ce que je peux rouler, légalement?</span>
					{boiteOuverte === 12 ? <FontAwesomeIcon icon={faAngleDoubleUp} /> : <FontAwesomeIcon icon={faAngleDoubleDown} />}
				</h3>
				{boiteOuverte === 12 && (
					<Infos>
						<p>Le code de la sécurité routière permet aux gens de rouler à vélo sur presque toutes les routes qui ne sont pas à accès limité. Ceci veut dire que la circulation sur les autoroutes est interdite. Celles-ci sont généralement numérotées de 1 à 99, et de 401 à 999.</p>
						<p>Il y a bien sûr des exceptions à la règle. Certains tronçons d'autoroute ne sont pas à accès limité, par exemple l'autoroute 19 (av. Papineau) à Montréal ou la 955 près de Victoriaville. D'autres routes dites principales et secondaires, numérotées de 101 à 399, ont la physique d'une autoroute, et sont donc proscrites aux cyclistes. On peut penser à la route 134 (boul. Taschereau) à Longueuil, près du pont Jacques-Cartier, ou encore la 138 à Montréal, à la sortie du pont Mercier.</p>
						<p>D'autres exceptions incluent certains ponts et tunnels, ce qui vient compliquer la traversée de la voie maritime du St-Laurent à plusieurs endroits. La signalisation est normalement claire lorsqu'il y a une interdiction aux piétons et aux cyclistes d'emprunter une chaussée.</p>
						<p>Bien sûr, il y a une différence entre légal et convivial. À la rubrique <Link to="/commencement/preparation">Préparer son itinéraire</Link>, vous trouverez des renseignements pertinents par rapport au sujet.</p>
					</Infos>
				)}
			</Boite>
			<Boite>
				<h3 onClick={() => ouvrirFermer(14)}>
					<span>Est-ce que je risque de manquer de nourriture?</span>
					{boiteOuverte === 14 ? <FontAwesomeIcon icon={faAngleDoubleUp} /> : <FontAwesomeIcon icon={faAngleDoubleDown} />}
				</h3>
				{boiteOuverte === 14 && (
					<Infos>
						<p>Non. En principe, il y a des épiceries dans toutes les petites villes, et des dépanneurs dans la plupart des villages. La réalité est que l'offre alimentaire est limitée dans les petites surfaces, et que les fruits peuvent se faire rare. Par contre, il est facile de retrouver des sandwichs dans la section prêt-à-manger.</p>
                        <p>Le casse-croute québécois est l'endroit idéal pour déguster une poutine, un hamburger, ou la malbouffe en général. De temps à autre, c'est ce qui suffit pour regagner un peu d'énergie, par contre sur le long terme, ça peut devenir lassant. Le restaurant familial qui se trouve dans les petites villes permet de briser la routine, et il y a bien sûr les cafés et les boulangeries que certains adorent.</p>
                        <DeuxFiguresPetit photo1={photo7} photo2={photo8} />
                        <p>Il ne faut pas passer sous silence les nombreux kiosques de fruits et légumes qui abondent le long des routes. C'est l'occasion rêvé pour faire le plein de fraises ou de concombres, tout en jasant avec les fermiers du coin!</p>
					</Infos>
				)}
			</Boite>
			<Boite>
				<h3 onClick={() => ouvrirFermer(15)}>
					<span>Et les lions?</span>
					{boiteOuverte === 15 ? <FontAwesomeIcon icon={faAngleDoubleUp} /> : <FontAwesomeIcon icon={faAngleDoubleDown} />}
				</h3>
				{boiteOuverte === 15 && (
					<Infos>
						<p>Plus sérieusement, il y a certains animaux auxquels il faudra faire attention. En roulant en Montérégie et aux Cantons-de-l'Est, le cyclotouriste est mieux de se méfier des <ExternalLink href="https://www.inspq.qc.ca/zoonoses/maladie-de-lyme">tiques</ExternalLink>. Cet insecte peut transmettre la maladie du Lyme. Si traité rapidement, le danger est minimisé.
						</p>
						<p>Le Québec est surtout reconnu pour son <ExternalLink href="https://mffp.gouv.qc.ca/faune/securite/ours-responsabilite.jsp">ours noir</ExternalLink> qui peut s'avérer dangereux. Il faut se souvenir du fait que les attaques rapportées sont très rares, et les décès le sont encore moins. Évitez de les surprendre, et ne vous mettez jamais entre une mère et son ourson. De plus, ne laissez pas la nourriture trainer partout autour de votre site de camping.</p>
						<p>En ville comme en campagne, une morsure ou une griffure d'un animal infecté par <ExternalLink href="https://www.quebec.ca/sante/problemes-de-sante/a-z/rage-chez-humain/">la rage</ExternalLink> pourrait être fatale pour l'humain. Phénomène extrêmement rare, il faut quand même être alerte, puisqu'une fois les symptômes présents, il ne reste plus rien à faire.</p>
						<p>Malgré ces avertissements, la faune québécoise est extrêmement bénigne. Pas de lions, pas de serpents venimeux, pas de rhinocéros!</p>
					</Infos>
				)}
			</Boite>
		</Wrapper>
	);
};

const Wrapper = styled.section``;

const Boite = styled.div`
	background-color: var(--c2);
	border-radius: 10px;
	h3 {
		align-items: center;
		background-color: var(--c3);
		border-radius: 10px;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		padding: 10px 20px;
		transition: all 0.2s;
		&:hover {
			background-color: var(--c1);
			transition: all 0.2s;
		}
	}
`;

const Infos = styled.div`
	padding: 0 20px 20px;
`;

const Gras = styled.span`
	font-weight: bold;
`;

export default FAQ2;
