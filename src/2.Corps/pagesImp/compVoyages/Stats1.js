import styled from "styled-components";
import statsDonnees from "./statsDonnes.json";

const Stats1 = () => {

    console.log(statsDonnees);

    return (
        <Wrapper>
            {
                Object.keys(statsDonnees).map((item, index) => {
                    return <div key={index}>
                        {item} :
                        {statsDonnees[item]}
                    </div>
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
`

export default Stats1;