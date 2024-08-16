import React, { useState, useEffect } from "react";
import PredResult from "./PredResult";

const PredResultBox = (props) => {
  // console.log("Received deviceId:", props.deviceId);
  const [showChart, setShowChart] = useState(false);

  return (
    // <div style={{ display: "flex", justifyContent: "flex-end" }}>
    <div style={{ display: "flex" }}>
      <button
        onClick={() => {
          setShowChart(!showChart);
        }}
        className="predictBtn"
      >
        예측데이터 {showChart ? "보기" : "보기"}
      </button>
      {showChart ? (
        <div className="d-flex flex-column">
          <PredResult deviceId={props.deviceId} />
        </div>
      ) : null}
    </div>
  );
};

export default PredResultBox;
