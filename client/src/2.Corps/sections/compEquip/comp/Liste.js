import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import listeEquipement from "../donnees/listeEquipment.json";
import { faPlus, faCheck, faBicycle, faTools, faWineGlassAlt, faPizzaSlice, faFlag, faSurprise, faHatCowboy, faHeadSideMask, faBath, faPuzzlePiece, faPlug, faGlobe, faList } from "@fortawesome/free-solid-svg-icons";

const Liste = ({ bagages, camping, packThis }) => {

    const icones = [faBicycle, faTools, faWineGlassAlt, faPizzaSlice, faFlag, faSurprise, faHatCowboy, faHeadSideMask, faBath, faPuzzlePiece, faPlug, faPlus, faGlobe];

    return (
        <Wrapper>
            {
                listeEquipement.map((itemCat, indexCat) => {
                    return (
                        <Categorie key={indexCat}>
                            <h3><FontAwesomeIcon icon={icones[indexCat]} /> {itemCat.categorie}</h3>
                            <div>
                                {
                                    itemCat.articles.map((itemObj, indexObj) => {
                                        if (camping || itemObj.toit) {
                                            return (
                                                <Chose
                                                    onClick={() => packThis(itemObj)}
                                                    key={indexObj}
                                                    styleDiff={
                                                        bagages.includes(itemObj.id)
                                                            ? { fond: "--c6", front: "--c1", coul: "--c1" }
                                                            : { fond: "--c1", front: "--c5", coul: "--c6" }
                                                    }
                                                >
                                                    {
                                                        bagages.includes(itemObj.id)
                                                            ? <FontAwesomeIcon icon={faCheck} />
                                                            : <FontAwesomeIcon icon={faPlus} />
                                                    }
                                                    {itemObj.objet}
                                                </Chose>
                                            )
                                        }
                                    })
                                }
                                
                            </div>
                        </Categorie>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Categorie = styled.div`
    margin: 15px 0;
    > div {
        display: flex;
        flex-wrap: wrap;
    }
`

const Chose = styled.button`
    border: 2px solid var(${props => props.styleDiff.front});
    border-radius: 15px;
    background-color: var(${props => props.styleDiff.fond});
    color: var(${props => props.styleDiff.coul});
    cursor: pointer;
    margin: 5px;
    padding: 8px 12px;
`

const ChosePlus = styled.form`
    input {
        border-radius: 15px;
        margin: 5px;
        padding: 8px 12px;
    }
`

export default Liste;