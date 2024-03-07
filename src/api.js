// axios 
// npm install axios
// openweather 사이트 접속 > api >Current Weather Data >
//api키는 내정보에 key 가져오기
import axios from "axios";

const instance  = axios.create({
    // 인스턴트 변수,비동기
    baseURL : "https://api.openweathermap.org/data/2.5/",
    params : {
        appid : "01a81f319c330f35724d4f154e543d67",
        //키값
        units : "metric",
        //units : 외국 단위르 한국 단위로
        lang : "kr",
        // 언어 한국어로 변경
    },
    //여러가지 필요한 온도 습도 등등 (본인이 필요한거 추가 또는 삭제)
});




export const getWeather = () => {
    const lat = 37.571211385077554;
    //구글에 위도 경도 검색 : https://www.findlatlng.org/
    const lon = 126.98111787255725;

    return instance.get(`weather?lat=${lat}&lon=${lon}`).then(res => res.data)
    // ? : 요청하다
    //.then() : 그리고 난 다음에
};

