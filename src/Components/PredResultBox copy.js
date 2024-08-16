// import React, { useState, useEffect } from "react";
// import PredResult from "./PredResult";

// const PredResultBox = (props) => {
//   // console.log("props.deviceid in PredResultBox:", props.deviceid);

//   const [deviceId, setDeviceId] = useState(null);

//   // useEffect(() => {
//   //   setDeviceId(props.deviceId);
//   // }, [deviceId]);
//   useEffect(() => {
//     // props.deviceid가 존재할 때만 deviceId를 설정
//     if (props.deviceid) {
//       setDeviceId(props.deviceid);
//     }
//   }, [props.deviceid]);

//   return (
//     <div style={{ marginBottom: "1vw" }}>
//       {/* <div>예측 데이터</div> */}
//       <PredResult deviceId={deviceId} />
//     </div>
//   );
// };

// export default PredResultBox;
