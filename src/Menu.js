import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./Screen/Main";
import Login from "./Screen/Login";
import Notification from "./Screen/Notification";
import SocketIOClient from "socket.io-client";
import NotFound from "./Screen/NotFound";

export default function Menu() {
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
