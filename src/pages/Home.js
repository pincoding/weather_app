import { useQuery } from "@tanstack/react-query";
import { Weather } from "../components/Weather";
import { useCurrentPos } from "../lib/useCurrentPos";
import { getWeather } from "../api";
import { Layout } from "../components/Layout";
import { Loading } from "../components/Loading";
import { Helmets } from "../components/Helmets";

export const Home = () => {
    const {lat, lon} = useCurrentPos();
    // console.log(lat, lon);

    const {data, isLoading} = useQuery({
        queryKey : ['weather', lat, lon],
        queryFn : getWeather,
    });
    // =>api에 요청시 사용하는 hook
    // =>useQuery를 사용할땐 반드시 QueryClientProvider를 설정해줘야 됨
    // => useQuery ({
    //     queryKey : ["요청값"],
    //     queryFn : 요청할 함수
    // })



    // console.log("로딩중인지",isLoading);
    // console.log(data);
    return (
        <div>
            <Helmets text ={"홈"}/>
            {isLoading ? (
            <Layout>
                <Loading />
            </Layout>
            ) : (<Weather weatherDate = {data} />)} 
        </div>
    );
};
//https://tanstack.com/query/v4/docs/framework/react/reference/useQuery(서버 상태 관리) : 사이트 접속 
// npm i @tanstack/react-query

