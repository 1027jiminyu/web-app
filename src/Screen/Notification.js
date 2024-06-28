import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import "../styles/notification.css";
import AccountStore from "../Account/AccountStore";
import { useNavigate } from "react-router-dom";
import { DeviceListSQL } from "../DataBase/DataBaseSQL";
import AlertBox from "../Components/AlertBox";

const Notification = () => {
  let navigate = useNavigate();
  const [deviceList, setDeviceList] = useState([]);

  const id = AccountStore.userid;

  useEffect(() => {
    const action = async () => {
      const Data = await DeviceListSQL(id);
      setDeviceList(Data);
    };
    id ? action() : navigate("/");
  }, [id]);

  return (
    <div>
      <Header />
      <div style={{ paddingTop: "80px" }}>
        {/* <div className="notiDeviceListText">알림</div> */}
        <div className="notiContainer">
          <AlertBox />
        </div>
      </div>
    </div>
  );
};

export default Notification;
