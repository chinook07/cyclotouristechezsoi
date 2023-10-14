import * as ImaEquip from "../images/index";
import R0 from "./R0";
import R1 from "./R1";
import R2 from "./R2";
import R3 from "./R3";
import R4 from "./R4";
import R5 from "./R5";
import R6 from "./R6";
import R7 from "./R7";
import R8 from "./R8";
import R9 from "./R9";
import R10 from "./R10";
import R11 from "./R11";
import R12 from "./R12";

const Rubriques = ({ montrerRubrique }) => {
    
    const images = Object.values(ImaEquip);

    return (
        <>
            {montrerRubrique === 0 && <R0 images={images} />}
            {montrerRubrique === 1 && <R1 images={images} />}
            {montrerRubrique === 2 && <R2 images={images} />}
            {montrerRubrique === 3 && <R3 images={images} />}
            {montrerRubrique === 4 && <R4 images={images} />}
            {montrerRubrique === 5 && <R5 images={images} />}
            {montrerRubrique === 6 && <R6 images={images} />}
            {montrerRubrique === 7 && <R7 images={images} />}
            {montrerRubrique === 8 && <R8 images={images} />}
            {montrerRubrique === 9 && <R9 images={images} />}
            {montrerRubrique === 10 && <R10 images={images} />}
            {montrerRubrique === 11 && <R11 images={images} />}
            {montrerRubrique === 12 && <R12 images={images} />}
        </>
    )
}

export default Rubriques;