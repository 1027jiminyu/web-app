import { useEffect, useState } from "react";
import moment from "moment";
import CustomWeather from "./CustomWeather";
import axios from "axios";

// export default function Weather({ latLongiResult }) {
export default function Weather({ Result, num }) {
  // const [weather, setWeather] = useState(null);

  // useEffect(() => {
  //   getWeather(latLongiResult[0], latLongiResult[1]);
  // }, []);

  // const getWeather = async (lati, longi) => {
  //   const API_KEY =
  //     "cnoXmM%2B4Z6oOLHi%2FyJpwucOLMvxFPzRI9pu0xPBJ%2BE1lOvfd6N0CU8XXe4qZD%2FenQc%2BSfhCwb8gZUBih3tM8Dg%3D%3D";

  //   const RE = 6371.00877;
  //   const GRID = 5.0;
  //   const SLAT1 = 30.0;
  //   const SLAT2 = 60.0;
  //   const OLON = 126.0;
  //   const OLAT = 38.0;
  //   const XO = 43;
  //   const YO = 136;

  //   let DEGRAD = Math.PI / 180.0;
  //   let RADDEG = 180.0 / Math.PI;

  //   let re = RE / GRID;
  //   let slat1 = SLAT1 * DEGRAD;
  //   let slat2 = SLAT2 * DEGRAD;
  //   let olon = OLON * DEGRAD;
  //   let olat = OLAT * DEGRAD;

  //   let sn =
  //     Math.tan(Math.PI * 0.25 + slat2 * 0.5) /
  //     Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  //   sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);

  //   let sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  //   sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;

  //   let ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
  //   ro = (re * sf) / Math.pow(ro, sn);

  //   let ra = Math.tan(Math.PI * 0.25 + lati * DEGRAD * 0.5);
  //   ra = (re * sf) / Math.pow(ra, sn);

  //   let theta = longi * DEGRAD - olon;
  //   if (theta > Math.PI) {
  //     theta -= 2.0 * Math.PI;
  //   }
  //   if (theta > Math.PI) {
  //     theta += 2.0 * Math.PI;
  //   }
  //   theta *= sn;
  //   const x = Math.floor(ra * Math.sin(theta) + XO + 0.5);
  //   const y = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);

  //   //기상청 API는 40분 이후에 제공된다. ex) 00시 데이터는 00시 30분에 생성되고 00:40분에 제공
  //   //따라서 데이터 시간은 1시간 이전 데이터를 불러와야 오류가 안난다.
  //   const date = moment().subtract(1, "hour").format("YYYYMMDD");
  //   const time = moment().subtract(40, "minute").format("HHMM");

  //   try {
  //     let url =
  //       "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";
  //     let queryParams = "?serviceKey=" + API_KEY; //api Key
  //     queryParams += "&numOfRows=" + "1000"; //한 페이지 결과 수
  //     queryParams += "&pageNo=" + "1"; //페이지번호
  //     queryParams += "&dataType=" + "JSON"; //요청자료형식(XML/JSON) Default: XML
  //     queryParams += "&base_date=" + date; //발표일자
  //     queryParams += "&base_time=" + time; //발표시각
  //     queryParams += "&nx=" + x; //예보지점의 X 좌표값
  //     queryParams += "&ny=" + y; //예보지점의 Y 좌표값
  //     let response = await axios.get(url + queryParams);

  //     if (
  //       response.data &&
  //       response.data.response &&
  //       response.data.response.body &&
  //       response.data.response.body.items
  //     ) {
  //       setWeather(response.data["response"]["body"]["items"]["item"]);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    // <div>
    //   {weather ? (
    //     <CustomWeather
    //       temperature={Number(weather[3].obsrValue)}
    //       humidity={Number(weather[1].obsrValue)}
    //       windDegree={Number(weather[5].obsrValue)}
    //       windSpeed={Number(weather[7].obsrValue)}
    //     />
    //   ) : (
    //     <CustomWeather
    //       temperature={0}
    //       humidity={0}
    //       windDegree={0}
    //       windSpeed={0}
    //     />
    //   )}
    // </div>
    <div>
      <CustomWeather
        temperature={Number(Result[8].data[num])}
        humidity={Number(Result[9].data[num])}
        windDegree={Number(Result[11].data[num])}
        windSpeed={Number(Result[10].data[num])}
      />
    </div>
  );
}
