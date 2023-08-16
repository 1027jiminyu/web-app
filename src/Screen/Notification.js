import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import "../styles/notification.css";
import AccountStore from "../Account/AccountStore";
import { useNavigate } from "react-router-dom";
import { DeviceListSQL } from "../DataBase/DataBaseSQL";
import { MdNavigateNext } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";

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
        <div className="notiDeviceListText">알림</div>
        <div className="notiContainer">
          <div className="notiContent" style={{ backgroundColor: "#ffe8e8" }}>
            <div style={{ width: "100%" }}>
              <div style={{ color: "#595959" }}>2023.04.19</div>
              <div className="separator" />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <FaExclamationCircle
                    size={20}
                    color="#d60000"
                    style={{ marginTop: "3px" }}
                  />
                  <div style={{ color: "#000", marginLeft: "6px" }}>
                    장비 연결이 끊어졌습니다.
                  </div>
                </div>
                <div style={{ color: "#595959" }}>11:02</div>
              </div>
            </div>
            <button className="notiBtn">
              <MdNavigateNext size={30} color="#595959" />
            </button>
          </div>

          <div className="notiContent">
            <div style={{ width: "100%" }}>
              <div style={{ color: "#595959" }}>2023.04.18</div>
              <div className="separator" />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <FaExclamationCircle
                    size={20}
                    color="#d7d7d7"
                    style={{ marginTop: "3px" }}
                  />
                  <div style={{ color: "#000", marginLeft: "6px" }}>
                    장비 연결이 끊어졌습니다.
                  </div>
                </div>
                <div style={{ color: "#595959" }}>23:18</div>
              </div>
            </div>
            <button className="notiBtn">
              <MdNavigateNext size={30} color="#595959" />
            </button>
          </div>

          <div className="notiContent">
            <div style={{ width: "100%" }}>
              <div style={{ color: "#595959" }}>2023.04.16</div>
              <div className="separator" />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <FaExclamationCircle
                    size={20}
                    color="#d7d7d7"
                    style={{ marginTop: "3px" }}
                  />
                  <div style={{ color: "#000", marginLeft: "6px" }}>
                    장비 연결이 끊어졌습니다.
                  </div>
                </div>
                <div style={{ color: "#595959" }}>10:18</div>
              </div>
            </div>
            <button className="notiBtn">
              <MdNavigateNext size={30} color="#595959" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
