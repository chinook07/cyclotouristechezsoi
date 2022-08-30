import styled from "styled-components";
import statsNuitees from "./statsNuitees.json";

const Stats2 = () => {

    console.log(statsNuitees);
    let NuiteesTotal = 0;

    return (
        <Wrapper>
            {
                Object.keys(statsNuitees).map((item, index) => {
                    return <div key={index}>
                        {item} :
                        {statsNuitees[item]}
                    </div>
                })
            }
            <div>
                <span>TOTAL :</span>
                {
                    Object.values(statsNuitees).forEach((item) => {
                        NuiteesTotal += item
                    })
                }
                <span>{NuiteesTotal}</span>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
`

export default Stats2;