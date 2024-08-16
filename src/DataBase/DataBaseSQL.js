//클라이언트에서 서버로 데이터 전송 후 서버에서 클라이언트로 데이터 받아오기

import Server from "../Server/Server";

//로그인 SQL
function LoginSQL(id, pw) {
  let Datas;

  //서버에 ID,PW 전송
  Server.emit("login", id, pw);

  //서버에서 응답
  Datas = new Promise((resolve, reject) => {
    Server.on("login_msg", (err, rows) => {
      if (err) return resolve(err);
      resolve(rows);
    });
  });

  return Datas;
}
//=================================================

//장비 리스트 SQL
function DeviceListSQL(id) {
  let Datas;

  //서버에 ID전송
  Server.emit("deviceList", id);

  //서버에서 응답
  Datas = new Promise((resolve, reject) => {
    Server.on("deviceList_msg", (err, rows) => {
      if (err) return resolve(err);
      resolve(rows);
    });
  });

  return Datas;
}
//=================================================

//장비 센서 데이터 SQL
async function DeviceDataSQL(deviceId) {
  let Datas = [];
  // 서버에 ID전송
  Server.emit("deviceData", deviceId);

  // 서버에서 응답을 받을 때까지 대기
  Datas = await new Promise((resolve, reject) => {
    Server.on("deviceData_msg", (rows, err) => {
      if (err) {
        reject(err);
      } else {
        // Datas 배열에 받은 데이터를 추가함
        resolve(rows);
      }
    });
  });

  return Datas;
}

//=================================================

//장비 센서 최신 정보 데이터 SQL
function RecentDataSQL(id) {
  let Datas;

  //서버에 ID전송
  Server.emit("recentData", id);

  //서버에서 응답
  Datas = new Promise((resolve, reject) => {
    Server.on("recentData_msg", (err, rows) => {
      if (err) return resolve(err);
      resolve(rows);
    });
  });

  return Datas;
}
//=================================================

//장비 정보 데이터 SQL
function DeviceInfoSQL(deviceId) {
  let Datas;

  //서버에 ID전송
  Server.emit("deviceInfo", deviceId);

  //서버에서 응답
  Datas = new Promise((resolve, reject) => {
    Server.on("deviceInfo_msg", (err, rows) => {
      if (err) return resolve(err);
      resolve(rows);
    });
  });
  return Datas;
}
//=================================================

//새로고침 SQL
function RefreshSQL(id) {
  let Datas;

  //서버에 ID 전송
  Server.emit("Refresh", id);

  //서버에서 응답
  Datas = new Promise((resolve, reject) => {
    Server.on("Refresh_msg", (err, rows) => {
      if (err) return resolve(err);
      resolve(rows);
    });
  });

  return Datas;
}
//=================================================

//알림List SQL
function AlertlistsSQL(id) {
  let Datas;

  //서버에 ID 전송
  Server.emit("Alertlists", id);

  //서버에서 응답
  Datas = new Promise((resolve, reject) => {
    Server.on("Alertlists_msg", (err, rows) => {
      if (err) return resolve(err);
      resolve(rows);
    });
  });

  return Datas;
}
//=================================================

//최신알림 SQL
function RecentAlertSQL(id) {
  let Datas;

  //서버에 ID 전송
  Server.emit("RecentAlert", id);

  //서버에서 응답
  Datas = new Promise((resolve, reject) => {
    Server.on("RecentAlert_msg", (err, rows) => {
      if (err) return resolve(err);
      resolve(rows);
    });
  });

  return Datas;
}
//=================================================

//날씨 SQL
function WeatherSQL(id) {
  let Datas;

  //서버에 ID 전송
  Server.emit("Weather", id);

  //서버에서 응답
  Datas = new Promise((resolve, reject) => {
    Server.on("Alertlists_msg", (err, rows) => {
      if (err) return resolve(err);
      resolve(rows);
    });
  });

  return Datas;
}
//=================================================

//예측데이터 SQL
// function PredictSQL(deviceId) {
//   let Datas;

//   //서버에 ID 전송
//   Server.emit("Predict", deviceId);

//   //서버에서 응답
//   Datas = new Promise((resolve, reject) => {
//     Server.on("Predict_msg", (err, rows) => {
//       // console.log("Received data:", deviceId);
//       if (err) return resolve(err);
//       resolve(rows);
//     });
//   });

//   return Datas;
// }
function PredictSQL(deviceId) {
  return new Promise((resolve, reject) => {
    // 서버에 ID 전송
    Server.emit("Predict", deviceId);

    // 서버에서 응답
    const handleResponse = (data) => {
      // 데이터를 받을 때 처리
      if (data === "err") {
        reject("Error occurred while fetching prediction data");
      } else {
        resolve(data);
      }
    };

    // 이벤트 리스너를 한 번만 실행
    Server.once("Predict_msg", handleResponse);

    // 타임아웃을 설정하여 응답이 오지 않는 경우를 처리할 수도 있습니다
    setTimeout(() => {
      Server.off("Predict_msg", handleResponse); // 타임아웃 시 리스너 제거
      reject("Request timed out");
    }, 5000); // 예를 들어 5초 타임아웃
  });
}

//=================================================

export {
  LoginSQL,
  DeviceListSQL,
  DeviceDataSQL,
  RecentDataSQL,
  DeviceInfoSQL,
  RefreshSQL,
  AlertlistsSQL,
  RecentAlertSQL,
  WeatherSQL,
  PredictSQL,
};
