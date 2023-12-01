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
  const sensorBoxWidth = [
    { width: "86vw" },
    { width: "42vw" },
    { width: "27vw" },
    { width: "19vw" },
    { width: "15.8vw" },
  ];
  const [arry, setArry] = useState([]);
  const [prevData, setPrevData] = useState([]);

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

  // setTimeout(RecentDataAction, 60000);

  const devIdArr = deviceRecentData.slice(0, 1).map((data) => data.data);
  // console.log('devIdArrdevIdArr', devIdArr); //장비아이디 갯수

  const deviceOn = async () => {
    //현재 가동중인 장비 전체 리스트를 가져온다.
    let { arr } = await WsApi.getConnectList(AccountStore.userid);

    //현재 가동중인 장비 전체 리스트에서 중복제거
    setArry(arr && [...new Set(arr)]);
    // console.log("2222222222", arry);
    setPrevData([...arry]);
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
  }

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
  const sensorNum = chunkedArray.map(
    (chunk, index) => chunk.filter((item) => parseFloat(item) >= 0).length
  );

  const renderedArray = chunkedArray.map((chunk, index) => (
    <div key={index} className="sensorContent">
      {chunk.map((item, i) =>
        item >= 0 ? (
          <div key={i}>
            <div
              className={item >= 0 ? "sensor" : "inactiveSensor"}
              style={
                sensorNum[index] === 1
                  ? sensorBoxWidth[0]
                  : sensorNum[index] === 2
                  ? sensorBoxWidth[1]
                  : sensorNum[index] === 3
                  ? sensorBoxWidth[2]
                  : sensorNum[index] === 4
                  ? sensorBoxWidth[3]
                  : sensorBoxWidth[4]
              }
            >
              {sensorArr[i]}
            </div>
            <div
              style={{
                color: item >= 0 ? `${sensorColor[i]}` : "#a3afc9",
                ...(sensorNum[index] === 1
                  ? sensorBoxWidth[0]
                  : sensorNum[index] === 2
                  ? sensorBoxWidth[1]
                  : sensorNum[index] === 3
                  ? sensorBoxWidth[2]
                  : sensorNum[index] === 4
                  ? sensorBoxWidth[3]
                  : sensorBoxWidth[4]),
              }}
              className={item >= 0 ? "sensorVal" : "inactiveSensorVal"}
            >
              {item >= 0 ? parseFloat(item).toFixed(2) : "--"}
            </div>
          </div>
        ) : (
          <div key={i} />
        )
      )}
      {/* <div>
        <div className="inactiveSensor">CO2</div>
        <div className="inactiveSensorVal">{"--"}</div>
      </div> */}
    </div>
  ));

  // useEffect(() => {
  //   RecentDataAction();
  //   deviceOn();
  // }, [deviceList.id]);

  const runActions = () => {
    RecentDataAction();
    deviceOn();
    setTimeout(runActions, 60000);
  };

  useEffect(() => {
    runActions();
    // 컴포넌트가 언마운트될 때 타이머 해제
    return () => clearTimeout(runActions);
  }, [deviceList.id]);

  function postWebView() {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage("device off");
    }
  }

  useEffect(() => {
    if (prevData.length > 0) {
      if (!arraysAreEqual(prevData, arry)) {
        // 데이터가 변경되었을 때 메시지 전송
        postWebView();
        // 현재 데이터를 이전 데이터로 설정
        setPrevData([...arry]);
      }
    }
  }, [arry]);

  const arraysAreEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      console.log("길이가 다름");
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log("길이가 같은 경우, 각각의 요소를 비교해서 다른 경우");
        return false;
      }
    }
    console.log("두 배열이 동일함");
    return true;
  };

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
          {e.dev_position ? e.dev_position : e.depart}
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
