import React, { useEffect, useState } from "react";
import { PredictSQL } from "../DataBase/DataBaseSQL";

const PredResult = ({ deviceId }) => {
  // console.log("deviceId", deviceId);
  const [predictData, setPredictData] = useState([]);

  // const PredictAction = async () => {
  //   const DevPredict = await PredictSQL(deviceId);
  //   setPredictData(DevPredict);
  // };
  const PredictAction = async () => {
    try {
      console.log("Fetching data for deviceId:", deviceId);
      const DevPredict = await PredictSQL(deviceId);
      console.log("Received data:", DevPredict);
      setPredictData(DevPredict);
    } catch (error) {
      console.error("Error fetching predict data:", error);
    }
  };

  useEffect(() => {
    if (deviceId) {
      PredictAction();
    }
  }, [deviceId]);

  // predictData가 변경될 때마다 로그 출력
  useEffect(() => {
    console.log("predictData after setPredictData", predictData);
  }, [predictData]);

  const formatToTwoDecimalPlaces = (num) => {
    return Number(num).toFixed(2);
  };

  return (
    <div className="sensorContent">
      <div className="flex-column">
        <div>{predictData.device_id}</div>
        <div>{deviceId}</div>
      </div>
      <div>
        <div className="sensor" style={{ width: "42vw" }}>
          NH3
        </div>
        <div className="sensorVal" style={{ width: "42vw" }}>
          {predictData.yvar_name === "y_암모니아"
            ? formatToTwoDecimalPlaces(predictData.pred_val)
            : "0.00"}
        </div>
      </div>
      <div>
        <div className="sensor" style={{ width: "42vw" }}>
          H2S
        </div>
        <div className="sensorVal" style={{ width: "42vw" }}>
          {predictData.yvar_name === "y_황화수소"
            ? formatToTwoDecimalPlaces(predictData.pred_val)
            : "0.00"}
        </div>
      </div>
    </div>
  );
};

export default PredResult;
