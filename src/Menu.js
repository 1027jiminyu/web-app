import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./Screen/Main";
import Login from "./Screen/Login";
import Notification from "./Screen/Notification";

export default function Menu() {
  // let newArr = [];
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     deviceList.forEach((item) => {
  //       if (item.productid.includes("KRIBB")) {
  //         let newData = [item]; // newData 배열을 만들고 현재 아이템을 추가
  //         newArr.push(item.id); // newArr에 현재 아이템의 id를 추가

  //         // 다시 newData 배열들을 순회하여 newArr에 id를 추가
  //         newData.forEach((newDataItem) => {
  //           newArr.push(newDataItem.id);
  //         });
  //       }
  //     });
  //     // console.log("newArr", newArr);

  //     // commonItems를 useState로 설정하거나 필요에 따라 다른 작업을 수행
  //     setCommonItems(onDev.filter((item) => newArr.includes(item)));
  //     // 이전에 저장된 commonItems 배열
  //     const prevCommonItems = commonItems;

  //     // 새로 들어온 commonItems 배열
  //     const newCommonItems = onDev.filter((item) => newArr.includes(item));

  //     // 삭제된 데이터 추출
  //     const deletedItems = prevCommonItems.filter(
  //       (item) => !newCommonItems.includes(item)
  //     );

  //     // 새로운 commonItems를 설정
  //     setCommonItems(newCommonItems);

  //     console.log("commonItems", commonItems);
  //     console.log("deletedItems", deletedItems);

  //     setResult(deletedItems); // 데이터 상태 업데이트
  //     // if (deletedItems.length == 0) {
  //     //   window.ReactNativeWebView.postMessage(
  //     //     JSON.stringify({ key: "알림ddddd" })
  //     //   );
  //     // }
  //   }, 10000); // 10초마다 데이터 업데이트 시뮬레이션

  //   return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 clearInterval
  // }, [result]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </BrowserRouter>
  );
}
