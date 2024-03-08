import styled from "styled-components";
import { Layout } from "./Layout";

const HeaderCon = styled.div`
    width: 20vw;
    height: 20vw;
    margin-top: 30px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
    border-radius: 20px;
    margin-top: 100px;
`;
const Temps = styled.div`
    display: flex;
    justify-content: center;
    font-size: 60px;
`;
const KrName = styled.div`
    display: flex;
    justify-content: center;
    font-size: 24px;
    `
const Section = styled.div`
width: 100%;
height: 300px;
display: flex;
justify-content: space-around;
align-items: center;

`;
const SecContainer = styled.div`
    width: 13vw;
    height: 13vw;
 
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    color: white;
`;
const SecCon = styled.div`


`;

export const Weather = ({weatherDate}) => {
    return <div>

            <Layout>
            <HeaderCon>

                <Temps>{Math.round(weatherDate?.main?.temp)}</Temps>
                {/* 수학객체 : round 반올림 */}
                <KrName>{weatherDate?.name}</KrName>

            </HeaderCon>

            <Section>

                <SecContainer>
                    <h4>최고온도</h4>
                    <SecCon>{Math.round(weatherDate?.main?.humidity)}</SecCon>
                </SecContainer>

                <SecContainer>
                    <h4>최저온도</h4>
                    <SecCon>{Math.round(weatherDate?.main?.temp_max)}</SecCon>
                </SecContainer>

                <SecContainer>
                    <h4>습도</h4>
                    <SecCon>{Math.round(weatherDate?.main?.temp_min)}</SecCon>
                </SecContainer>

            </Section>

            </Layout>
    </div>
}