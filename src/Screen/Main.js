import AccountStore from "../Account/AccountStore";
import React, { useState, useEffect } from "react";
import { DeviceListSQL } from "../DataBase/DataBaseSQL";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import DeviceList from "../Components/DeviceList";
import "../styles/main.css";
import { ThreeDots } from "react-loader-spinner";

const Main = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const alertFarmName = location.state;

  const [deviceList, setDeviceList] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = AccountStore.userid;

  useEffect(() => {
    const action = async () => {
      const Data = await DeviceListSQL(id);
      setDeviceList(Data);
      setLoading(true);
      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(id);
      } else {
        console.log("ReactNativeWebView is not defined.");
      }
    };
    id ? action() : navigate("/");
  }, []);

  return (
    <div className="mainContainer">
      <Header />
      <div className="deviceListBox">
        {loading ? (
          <DeviceList
            deviceList={deviceList}
            alertFarmName={alertFarmName}
            style={{ height: "85vh", padding: "8px 10px" }}
          />
        ) : (
          <div className="loadingBox">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#fff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
