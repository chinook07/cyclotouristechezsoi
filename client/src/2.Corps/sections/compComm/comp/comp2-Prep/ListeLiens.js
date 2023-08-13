import styled from "styled-components";
import { ExternalLink } from "react-external-link";

const ListeLiens = () => {
    return (
        <Wrapper>
            <li><ExternalLink href="https://fr.weatherspark.com/s/19894/1/M%C3%A9t%C3%A9o-moyenne-en-%C3%A9t%C3%A9-%C3%A0-Rouyn-Noranda-Canada#Figures-WindDirection">Rouyn-Noranda</ExternalLink></li>
            <li><ExternalLink href="https://fr.weatherspark.com/s/23207/1/M%C3%A9t%C3%A9o-moyenne-en-%C3%A9t%C3%A9-%C3%A0-Gatineau-Canada#Figures-WindDirection">Gatineau</ExternalLink></li>
            <li><ExternalLink href="https://fr.weatherspark.com/s/25077/1/M%C3%A9t%C3%A9o-moyenne-en-%C3%A9t%C3%A9-%C3%A0-Montr%C3%A9al-Canada#Figures-WindDirection">Montréal</ExternalLink></li>
            <li><ExternalLink href="https://fr.weatherspark.com/s/26459/1/M%C3%A9t%C3%A9o-moyenne-en-%C3%A9t%C3%A9-%C3%A0-Sherbrooke-Canada#Figures-WindDirection">Sherbrooke</ExternalLink></li>
            <li><ExternalLink href="https://fr.weatherspark.com/s/26469/1/M%C3%A9t%C3%A9o-moyenne-en-%C3%A9t%C3%A9-%C3%A0-Qu%C3%A9bec-Canada#Figures-WindDirection">Québec</ExternalLink></li>
            <li><ExternalLink href="https://fr.weatherspark.com/s/26489/1/M%C3%A9t%C3%A9o-moyenne-en-%C3%A9t%C3%A9-%C3%A0-Saguenay-Canada#Figures-WindDirection">Saguenay</ExternalLink></li>
            <li><ExternalLink href="https://fr.weatherspark.com/s/27467/1/M%C3%A9t%C3%A9o-moyenne-en-%C3%A9t%C3%A9-%C3%A0-Rimouski-Canada#Figures-WindDirection">Rimouski</ExternalLink></li>
            <li><ExternalLink href="https://fr.weatherspark.com/s/28259/1/M%C3%A9t%C3%A9o-moyenne-en-%C3%A9t%C3%A9-%C3%A0-Gasp%C3%A9-Canada#Figures-WindDirection">Gaspé</ExternalLink></li>
        </Wrapper>
    )
}

const Wrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 0;
    li {
        background-color: var(--c1);
        border: 1px solid var(--c10);
        border-radius: 15px;
        list-style: none;
        
        &:hover {
            background-color: var(--c4);
            a {
                color: var(--c1);
            }
        }
        a {
            color: var(--c4);
            display: block;
            padding: 3px 8px;
            text-decoration: none;
        }
    }
`

export default ListeLiens;