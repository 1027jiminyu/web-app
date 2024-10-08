import { useEffect, useState } from "react";
import { DeviceDataSQL, DeviceInfoSQL } from "../DataBase/DataBaseSQL";
import _ from "lodash";
import DeviceInfo from "./DeviceInfo";
import Charts from "./Charts";

export default function DataInfo(props) {
  const [deviceInfo, setDeviceInfo] = useState(null);
  const [deviceData, setDeviceData] = useState([]);

  const InfoAction = async () => {
    const DevInfo = await DeviceInfoSQL(props.id);
    setDeviceInfo(DevInfo);
  };

  const DataAction = async () => {
    const DevData = await DeviceDataSQL(props.id);
    let chartData = {};
    let sensorData = [];
    for (let record of DevData) {
      for (let attrKey in record) {
        chartData[attrKey] = [..._.values(chartData[attrKey]), record[attrKey]];
      }
    }

    for (let sensor in chartData) {
      sensorData.push({
        name: sensor,
        data: chartData[sensor],
      });
    }
    setDeviceData(sensorData);
  };

  useEffect(() => {
    DataAction();
    InfoAction();
  }, [props]);

  const getDevData = () => {
    const devData = deviceData.slice(0, 4).map((data) => data.data); //문자열
    const dataArr = devData.map((innerArr) =>
      innerArr.map((str) => Number(str))
    ); //숫자로 변환
    // console.log('aaaaaaaaaaaaaaaaaaaaaaa', devData);
    // console.log('-=-=--=-==-====-=-=-=-=-', dataArr);
    return dataArr;
  };

  // const DataAction = async () => {
  //   try {
  //     const DevData = await DeviceDataSQL(props.id);

  //     // DevRecentData가 undefined인 경우
  //     if (DevData === undefined) {
  //       console.warn("DevData is undefined.");
  //       return;
  //     }

  //     // DevRecentData가 배열이 아닌 경우
  //     if (!Array.isArray(DevData)) {
  //       console.warn("DevData is not an array.");
  //       return;
  //     }

  //     let chartData = {};
  //     let sensorData = [];

  //     for (let record of DevData) {
  //       for (let attrKey in record) {
  //         chartData[attrKey] = [
  //           ..._.values(chartData[attrKey]),
  //           record[attrKey],
  //         ];
  //       }
  //     }

  //     for (let sensor in chartData) {
  //       sensorData.push({
  //         name: sensor,
  //         data: chartData[sensor],
  //       });
  //     }

  //     setDeviceData(sensorData);
  //   } catch (error) {
  //     console.error("Error in DataAction:", error);
  //     // 에러 처리 로직 추가
  //   }
  // };

  if (!deviceInfo) {
    return <></>;
  }

  return (
    <div>
      {deviceData.length > 0 ? (
        <Charts getDevData={getDevData} />
      ) : (
        <div className="noData">데이터를 불러오는 중입니다</div>
      )}
      <DeviceInfo deviceInfo={deviceInfo} />
    </div>
  );
}
