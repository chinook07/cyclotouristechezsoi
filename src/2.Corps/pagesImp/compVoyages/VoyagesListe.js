import styled from "styled-components";
import voyagesListeDonnees from "./VoyagesListe.json";
import Voyage from "./Voyage";

const VoyagesListe = () => {
    return (
        <Wrapper>
            <Panneau>
                <div>Filtrer par :</div>
                <div>
                    <button>Tout</button>
                    <button>Boucles<span>ou presque</span></button>
                    <button>Trajets linéaires</button>
                    <button>Longs périples</button>
                    <button>Bord de l'eau</button>
                    <button>Inverser l'ordre</button>
                </div>
                
            </Panneau>
            <Voyages>
                {
                    voyagesListeDonnees.map((item, index) => {
                        return (
                            <Voyage key={index} index={index} item={item} />
                        ) 
                    })
                }
            </Voyages>
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
    
    
    
`

const Panneau = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const Voyages = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default VoyagesListe;