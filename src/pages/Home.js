import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import styled from "styled-components";
import { Loading } from "../components/Loading";
import { Layout } from "../components/Layout";


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

export const Home = () => {
    const {data, isLoading} = useQuery({
        queryKey : ['weather'],
        queryFn : getWeather,
    });
    // =>api에 요청시 사용하는 hook
    // =>useQuery를 사용할땐 반드시 QueryClientProvider를 설정해줘야 됨
    // => useQuery ({
    //     queryKey : ["요청값"],
    //     queryFn : 요청할 함수
    // })



    console.log("로딩중인지",isLoading);
    console.log(data);
    return (
        <div>
            {isLoading ? (
            <Layout>
                <Loading />
            </Layout>
            ) : (<Layout>
            <HeaderCon>

                <Temps>{Math.round(data?.main?.temp)}</Temps>
                {/* 수학객체 : round 반올림 */}
                <KrName>{data?.name}</KrName>

            </HeaderCon>

            <Section>

                <SecContainer>
                    <h4>최고온도</h4>
                    <SecCon>{Math.round(data?.main?.humidity)}</SecCon>
                </SecContainer>

                <SecContainer>
                    <h4>최저온도</h4>
                    <SecCon>{Math.round(data?.main?.temp_max)}</SecCon>
                </SecContainer>

                <SecContainer>
                    <h4>습도</h4>
                    <SecCon>{Math.round(data?.main?.temp_min)}</SecCon>
                </SecContainer>

            </Section>

            </Layout>)}
        </div>
    );
};
//https://tanstack.com/query/v4/docs/framework/react/reference/useQuery(서버 상태 관리) : 사이트 접속 
// npm i @tanstack/react-query

