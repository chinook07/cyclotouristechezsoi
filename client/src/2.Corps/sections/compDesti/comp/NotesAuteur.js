import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBicycle, faCheck, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const NotesAuteur = ({ details }) => {
    
    return (
        <div>
            <p>
                <span>Déjà pédalé : </span>
                {
                    details.deja.length &&
                    details.deja.map((item, index) => {
                        return (
                            <span key={index}>{item} <FontAwesomeIcon icon={faCheck} /> </span>
                        )
                    })
                }
                {
                    details.deja === true &&
                    <span>tout le parcours <FontAwesomeIcon icon={faCheck} /></span>
                }
                {
                    details.deja === false &&
                    <span>aucun tronçon <FontAwesomeIcon icon={faTimesCircle} /></span>
                }
            </p>
            {
                details.appreciation &&
                <p>
                    <span>Appréciation personnelle de 1 à 5 : </span>
                    <span>
                        {
                            [...Array(details.appreciation)].map((e, i) => <FontAwesomeIcon key={i} icon={faBicycle} />)
                        }
                    </span>
                </p>
            }
            {
                details.coups &&
                <p>Coups de cœur : {details.coups}</p>
            }
            {
                details.defis &&
                <p>Défis rencontrés : {details.defis}</p>
            }
            {
                details.notes &&
                <p>Autres notes : {details.notes}</p>
            }
            {
                details.varietes &&
                <p>Variétés au parcours : {details.varietes}</p>
            }
        </div>
    )
}

export default NotesAuteur;