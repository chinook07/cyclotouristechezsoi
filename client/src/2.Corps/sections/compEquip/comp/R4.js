import styled from "styled-components";

const R4 = ({ images }) => {
    
    return (
        <Rubrique>
            <h2>La maison très mobile</h2>
            <div>
                <p>C'est simple, il faut un toit! En solo, une tente pour deux personnes permet d'avoir un peu d'espace pour respirer. À deux, on aurait tendance à choisir une tente pour trois.</p>
                <img src={images[13]} alt="tente, toile de sol, étui imperméable" />
                <p>Tente et double toit, dans un étui imperméable, avec une toile de sol.</p>
                <img src={images[14]} alt="sac de couchage, matelas gonflable, oreiller gonflable, doublure pour sac de couchage" />
                <ul>
                    <li>Matelas autogonflable</li>
                    <li>Sac de couchage avec doublure</li>
                    <li>Oreiller gonflable</li>
                </ul>
                <p>Les items précédents sont parmi les plus grands que l'on doit trainer avec nous. Si la tente rentre facilement entre le porte-bagage et la petite sacoche par-dessus (voir photo en haut de page), le matelas, le sac de couchage, ainsi que l'oreiller, remplissent normalement une sacoche latérale à eux seuls.</p>
            </div>
        </Rubrique>
    )
}

const Rubrique = styled.div`
    h2 {
        text-align: center;
    }
    > div {
        columns: 300px 3;
        margin-bottom: 15px;
        img {
            width: 100%;
        }
    }
`

export default R4;