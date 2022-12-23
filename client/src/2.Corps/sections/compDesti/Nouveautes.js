import styled from "styled-components";

import nouveautes from "./donnees/nouveautes.json";
import Nouveau from "./comp/Nouveau";

const Nouveautes = () => {
	return (
		<Wrapper>
			<p>
				Le réseau cyclable est en constante évolution. Voici quelques
				destinations à surveiller.
			</p>
			{nouveautes.map((item, index) => {
				return <Nouveau item={item} key={index} />;
			})}
		</Wrapper>
	);
};

const Wrapper = styled.div``;

export default Nouveautes;
