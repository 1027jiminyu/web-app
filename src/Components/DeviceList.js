import { useEffect, useState } from "react";
import { RecentDataSQL } from "../DataBase/DataBaseSQL";
import _ from "lodash";
import AccountStore from "../Account/AccountStore";
import WsApi from "../Store/wsApi";
import "../styles/deviceList.css";
import DataShowBtn from "./DataShowBtn";
import Weather from "./Weather";

const DeviceList = ({ deviceList }) => {
  const id = AccountStore.userid;
  const [deviceRecentData, setDeviceRecentData] = useState([]);
  const sensorArr = ["NH3", "H2S", "ACID", "INDOLES"];
  const sensorColor = ["#FF3B65", "#f2c700", "#EA3BFF", "#53BC9B"];
  const [arry, setArry] = useState([]);

  const RecentDataAction = async () => {
    const DevRecentData = await RecentDataSQL(id);
    let chartData = {};
    let sensorData = [];
    for (let record of DevRecentData) {
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
    setDeviceRecentData(sensorData);
  };

  setTimeout(RecentDataAction, 10000);

  const devIdArr = deviceRecentData.slice(0, 1).map((data) => data.data);
  // console.log('devIdArrdevIdArr', devIdArr); //장비아이디 갯수

  const deviceOn = async () => {
    //현재 가동중인 장비 전체 리스트를 가져온다.
    let { arr } = await WsApi.getConnectList(AccountStore.userid);

    //현재 가동중인 장비 전체 리스트에서 중복제거
    setArry(arr && [...new Set(arr)]);
    console.log("2222222222", arry);
  };

  const recentData = deviceRecentData.slice(1, 5).map((data) => data.data);
  const latLongi = deviceRecentData.slice(12, 14).map((data) => data.data);
  // console.log('latLongi', latLongi);

  let latLongiResult = [];
  if (
    latLongi &&
    latLongi.length > 0 &&
    latLongi[0] &&
    latLongi[1] &&
    latLongi[0].length === latLongi[1].length
  ) {
    for (let i = 0; i < latLongi[0].length; i++) {
      const newItem = [latLongi[0][i], latLongi[1][i]];
      latLongiResult.push(newItem);
    }
    // console.log(latLongiResult);
  }
  //  else {
  //   console.error("latLongi 배열이 잘못되었습니다");
  // }

  let deviceNumArr = [];
  if (devIdArr && devIdArr[0]) {
    devIdArr[0].map((e, i) => {
      recentData.map((item, j) => {
        deviceNumArr.push(recentData[j][i]);
      });
    });
  } else {
    console.log("이중배열이 유효하지 않습니다.");
  }

  const chunkedArray = [];
  for (let i = 0; i < deviceNumArr.length; i += 4) {
    chunkedArray.push(deviceNumArr.slice(i, i + 4));
  }

  const renderedArray = chunkedArray.map((chunk, index) => (
    <div key={index} className="sensorContent">
      {chunk.map((item, i) => (
        <div key={i}>
          <div className={item >= 0 ? "sensor" : "inactiveSensor"}>
            {sensorArr[i]}
          </div>
          <div
            style={{
              color: item >= 0 ? `${sensorColor[i]}` : "#a3afc9",
            }}
            className={item >= 0 ? "sensorVal" : "inactiveSensorVal"}
          >
            {item >= 0 ? parseFloat(item).toFixed(3) : "--"}
          </div>
        </div>
      ))}
      <div>
        <div className="inactiveSensor">CO2</div>
        <div className="inactiveSensorVal">{"--"}</div>
      </div>
    </div>
  ));

  useEffect(() => {
    RecentDataAction();
    deviceOn();
  }, [deviceList.id]);

  return deviceList.map((e, i) => (
    <div className="deviceBox" key={i}>
      {devIdArr[0] ? (
        <Weather latLongiResult={latLongiResult[i]} />
      ) : (
        <div>날씨 불러오는 중...</div>
      )}
      <div className="title">
        <div className="nameText">
          <div
            className="rectBox"
            style={
              e.dev_position.includes("내부")
                ? { backgroundColor: "#2f3b55" }
                : e.dev_position.includes("외부")
                ? { backgroundColor: "#6688D5" }
                : { backgroundColor: "#B8C3DB" }
            }
          ></div>
          {e.dev_position
            ? e.dev_position.length <= 20
              ? e.dev_position
              : e.dev_position.substring(0, 20) + "..."
            : e.depart.length <= 20
            ? e.depart
            : e.depart.substring(0, 20) + "..."}
        </div>
      </div>

      <div className="deviceListContent">
        {arry?.includes(e.id) ? (
          <div>
            <div>{renderedArray[i]}</div>
            <DataShowBtn deviceid={e.id} id={id} />
          </div>
        ) : (
          <div
            style={{
              color: "#ff0000",
              textAlign: "center",
              marginBottom: "5px",
            }}
          >
            장비 연결이 끊어졌습니다
          </div>
        )}
      </div>
    </div>
  ));
};

export default DeviceList;
