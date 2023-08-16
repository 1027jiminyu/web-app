import { useState } from "react";
import DataInfo from "./DataInfo";

export default function DataShowBtn(props) {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShowChart(!showChart);
        }}
        className="contentbtn"
      >
        상세 {showChart ? "닫기" : "보기"}
      </button>
      {showChart ? <DataInfo id={props.deviceid} /> : <></>}
    </div>
  );
}
