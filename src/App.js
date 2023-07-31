import React, { useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./Screen/Main";
import Login from "./Screen/Login";
import Notification from "./Screen/Notification";
import SocketIOClient from "socket.io-client";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/messaging";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// Firebase 구성
const firebaseConfig = {
  // Firebase 프로젝트 설정 정보
  apiKey: "AIzaSyBLHzNV64rq3XRYloarRgvFas_Xpa0QIFI",
  authDomain: "inent-650b3.firebaseapp.com",
  projectId: "inent-650b3",
  storageBucket: "inent-650b3.appspot.com",
  messagingSenderId: "796730025932",
  appId: "1:796730025932:android:21a7f739cbe76b35095f69",
  databaseURL: "https://inent-650b3.firebaseio.com",
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);
const messaging = getMessaging(firebase.initializeApp(firebaseConfig));

const App = () => {
  useEffect(() => {
    const socket = SocketIOClient("ws://192.168.0.4:3000");

    // 서버로 토큰 전송
    function sendTokenToServer(token) {
      socket.emit("token", token);
    }

    // 서버로부터 알림 수신
    socket.on("notification", (notification) => {
      // 알림 수신 처리
      console.log("알림을 수신했습니다:", notification);
    });

    // Firebase Messaging 초기화
    const initializeFirebaseMessaging = async () => {};

    initializeFirebaseMessaging();

    return () => {
      socket.disconnect(); // 컴포넌트 언마운트 시 소켓 연결 종료
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/main" element={<Main />} />
        <Route
          path="/login"
          element={<Login firebaseConfig={firebaseConfig} />}
        />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
