import React, { useEffect, useState } from "react";
import WsApi from "../Store/wsApi";

const Alert = () => {
  const [arry, setArry] = useState([]);
  const [prevData, setPrevData] = useState([]);

  const deviceOn = async () => {
    //현재 가동중인 장비 전체 리스트를 가져온다.
    let { arr } = await WsApi.getConnectList(AccountStore.userid);

    //현재 가동중인 장비 전체 리스트에서 중복제거
    setArry(arr && [...new Set(arr)]);
    // console.log("2222222222", arry);
    setPrevData([...arry]);
  };

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
  return <div>Alert</div>;
};

export default Alert;
