import React, { useEffect, useState } from "react";
import { PredictSQL } from "../DataBase/DataBaseSQL";
import PredData from "./PredData";

const PredResult = (props) => {
  console.log("장비아이디", props.deviceId);
  console.log("장비아이디", props.id);

  // const [devicePredict, setDevicePredict] = useState(null);
  const [predictData, setPredictData] = useState([]);

  // const PredictAction = async () => {
  //   const DevPredict = await PredictSQL(props.deviceId);
  //   setDevicePredict(DevPredict);
  // };

  // const DataPredictAction = async () => {
  //   const DevPredictData = await PredictSQL(props.deviceId);
  //   // console.log("props.deviceId", props.deviceId);
  //   console.log("DevPredictData", DevPredictData);

  //   // let chartData = {};
  //   // let predData = [];

  //   // for (let record of DevPredictData) {
  //   //   for (let attrKey in record) {
  //   //     chartData[attrKey] = [..._.values(chartData[attrKey]), record[attrKey]];
  //   //   }
  //   // }

  //   // for (let pred in chartData) {
  //   //   predData.push({
  //   //     name: pred,
  //   //     data: chartData[pred],
  //   //   });
  //   // }
  //   // setPredictData(predData);
  // };
  const DataPredictAction = async () => {
    try {
      console.log("Current deviceId in PredResult:", props.deviceId); // deviceId 확인
      const DevPredictData = await PredictSQL(props.deviceId);
      console.log("Data received from PredictSQL:", DevPredictData); // 데이터 확인

      if (DevPredictData && DevPredictData.length > 0) {
        setPredictData(DevPredictData);
      } else {
        console.warn("No data received or data is empty");
      }
    } catch (error) {
      console.error("Error fetching prediction data:", error);
    }
  };

  useEffect(() => {
    if (props.deviceId) {
      DataPredictAction();
    }
  }, [props.deviceId]);

  // const getPredictData = () => {
  //   const devPredictData = predictData.slice(0, 2).map((data) => data.data); //문자열
  //   console.log(devPredictData);

  //   const dataArr = devPredictData.map((innerArr) =>
  //     innerArr.map((str) => Number(str))
  //   ); //숫자로 변환
  //   // console.log('aaaaaaaaaaaaaaaaaaaaaaa', devPredictData);
  //   // console.log('-=-=--=-==-====-=-=-=-=-', dataArr);
  //   return dataArr;
  // };

  useEffect(() => {
    // PredictAction();
    DataPredictAction();
  }, [props.deviceId]);

  return (
    <div className="predDataBox">
      {/* PredictData를 화면에 표시 */}
      {predictData.length > 0 ? (
        <div>
          {predictData.map((item, index) => {
            // yvar_name을 변환하기 위한 매핑 객체
            const nameMapping = {
              y_암모니아: "NH3",
              y_황화수소: "H2S",
              // 추가적인 매핑이 필요하다면 여기에 추가
            };

            // 변환된 이름 가져오기
            const displayName = nameMapping[item.yvar_name] || item.yvar_name;

            // pred_val을 소수점 2째자리까지만 포맷
            const formattedValue = parseFloat(item.pred_val).toFixed(2);

            return (
              <div
                key={index}
                style={{
                  display: "inline-block",
                  marginRight: "10px", // 항목 사이의 간격을 조정할 수 있습니다.
                }}
                className="predictValue"
              >
                {displayName}: {formattedValue}
              </div>
            );
          })}
        </div>
      ) : (
        <div>예측된 데이터가 없습니다.</div>
      )}
    </div>
  );
};

export default PredResult;
