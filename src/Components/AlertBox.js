import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountStore from "../Account/AccountStore";
import { AlertlistsSQL } from "../DataBase/DataBaseSQL";
import { MdNavigateNext } from "react-icons/md";
import { BsExclamationTriangleFill } from "react-icons/bs";

const AlertBox = () => {
  let navigate = useNavigate();
  const id = AccountStore.userid;
  const [alertListData, setAlertListData] = useState([]);

  const alertListAction = async () => {
    const alertListData = await AlertlistsSQL(id);
    console.log("alertListData[0]", alertListData[0]);
    setAlertListData(alertListData);
  };

  useEffect(() => {
    alertListAction();
  }, []);

  return alertListData.length > 0 ? (
    alertListData.map((item, i) => (
      <div className="notiContent" key={i}>
        <div style={{ width: "100%" }}>
          <div style={{ color: "#595959" }}>{item.name}</div>
          <div className="separator" />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <BsExclamationTriangleFill
                size={20}
                color="#ED1C24"
                style={{ marginTop: "3px" }}
              />
              <div style={{ color: "#000", marginLeft: "6px" }}>
                {item.value}
              </div>
            </div>
          </div>
          <div style={{ color: "#595959", textAlign: "end" }}>
            {/* {item.times
              ? `${item.times.split("T")[0]} ${
                  item.times.split("T")[1].split(".")[0]
                }`
              : ""} */}
            {item.times
              ? (() => {
                  const date = new Date(item.times);
                  date.setHours(date.getHours() + 9);
                  const formattedDate = date.toISOString().split("T")[0];
                  const formattedTime = date
                    .toISOString()
                    .split("T")[1]
                    .split(".")[0];
                  return `${formattedDate} ${formattedTime}`;
                })()
              : ""}
          </div>
        </div>
        <button
          className="notiBtn"
          onClick={() => {
            navigate("/main", { state: `${alertListData[i].name}` });
          }}
        >
          <MdNavigateNext size={30} color="#595959" />
        </button>
      </div>
    ))
  ) : (
    <div className="notiContentNull">알림 내역이 없습니다</div>
  );
};

export default AlertBox;
