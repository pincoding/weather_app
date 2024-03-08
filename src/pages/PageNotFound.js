import { Helmets } from "../components/Helmets";
import { Layout } from "../components/Layout";
import styled from "styled-components";

const Con = styled.button`
    width: 100%;
    /* height: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const PageNotFound = () => {
    return (
  
        <div>
            <Helmets text= {"Error페이지"} />
            <Layout>
                <Con>
                    <h1>Error : 404</h1>
                    <Button>돌아가기</Button>
                </Con>
            </Layout>
        </div>
    );
};