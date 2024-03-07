import { SpinnerInfinity } from "spinners-react"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Loading = () => {
    return(
    <Container>
        <SpinnerInfinity size={"9%"} secondaryColor={"skyblue"} color={"blue"} speed={150}/>
    </Container>)
}

//로딩창 설치
//npm i spinners-react