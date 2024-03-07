import styled from "styled-components";

const Wrap = styled.div`
max-width: 460px;
width: 100%;
height: 100vh;
background: rgb(0,69,225);
background: linear-gradient(0deg, rgba(0,69,225,1) 0%, rgba(35,96,235,1) 32%, rgba(119,155,236,1) 100%);
display: flex;
/* justify-content: center; */
flex-direction: column;
align-items: center;
margin: 0 auto;
border-radius: 20px;
`;


export const Layout = ({children}) => {
    //children : 고용으로 사용하고 싶을때
    return (
    <Wrap>{children}</Wrap>)
}