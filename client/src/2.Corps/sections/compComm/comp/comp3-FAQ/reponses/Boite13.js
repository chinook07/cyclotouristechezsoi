import styled from "styled-components";

const Boite13 = () => {
    return (
        <Wrapper>
            <p>Cette étape est nécessaire, seulement lorsque vous devez prendre l'avion, et que l'emballage n'est pas fourni à l'aéroport. Dans ce cas, il faut aussi prévoir son transport. Autrement, s'il faudra démonter le vélo pour prendre l'autocar vers le point de départ, ou à la fin de son voyage, vaut mieux avoir vérifié que les pédales s'enlèvent, que le guidon puisse se tourner (si l'on a des garde-boues), et que l'on sait comment démonter et remonter la roue avant. Une simple précaution!</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
    svg:not(:last-child) {
        margin-right: 5px;
    }
`

export default Boite13;