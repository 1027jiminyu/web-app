import React from "react";
import ReactApexChart from "react-apexcharts";
import "../styles/charts.css";

const Chart = ({ getDevData }) => {
  const nh3Data = () => {
    const options = {
      chart: {
        id: "nh3Data",
      },
      yaxis: {
        show: false, // 왼쪽 값 숨김
      },
      xaxis: {
        labels: {
          show: false, // 아래 값 숨김
        },
      },
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 4,
      },
    };

    const series = [
      {
        name: "NH3",
        data: getDevData()[0].reverse(),
        color: "#FF3B65",
      },
    ];
    console.log(series[0].data);

    return (
      <div>
        {series[0].data.every((item) => item != 0) &&
        series[0].data.some((item) => item > 0) ? (
          <div className="sensorBox">
            <div style={{ display: "flex" }}>
              <div className="chartsSensor">
                <div
                  className="circle"
                  style={{ backgroundColor: "#ff3b65" }}
                ></div>
                <div className="sensorText">NH3</div>
              </div>
              <div className="minMaxBox">
                <div className="center">
                  <div className="maxMinFontSize">최대&nbsp;&nbsp;</div>
                  <div className="maxMinFontSize" style={{ color: "#ff3b65" }}>
                    {parseFloat(Math.max(...series[0].data)).toFixed(2)}
                  </div>
                </div>
                <div className="center">
                  <div className="maxMinFontSize">최소&nbsp;&nbsp;</div>
                  <div className="maxMinFontSize" style={{ color: "#ff3b65" }}>
                    {parseFloat(Math.min(...series[0].data)).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <ReactApexChart
                className="graph"
                options={options}
                series={series}
                type="line"
                height={100}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  };

  const h2sData = () => {
    const options = {
      chart: {
        id: "h2sData",
      },
      yaxis: {
        show: false, // 왼쪽 값 숨김
      },
      xaxis: {
        labels: {
          show: false, // 아래 값 숨김
        },
      },
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 4,
      },
    };

    const series = [
      {
        name: "H2S",
        data: getDevData()[1].reverse(),
        color: "#f2c700",
      },
    ];

    return (
      <div>
        {series[0].data.every((item) => item != 0) &&
        series[0].data.some((item) => item > 0) ? (
          <div className="sensorBox">
            <div style={{ display: "flex" }}>
              <div className="chartsSensor">
                <div
                  className="circle"
                  style={{ backgroundColor: "#f2c700" }}
                ></div>
                <div className="sensorText">H2S</div>
              </div>
              <div className="minMaxBox">
                <div className="center">
                  <div className="maxMinFontSize">최대&nbsp;&nbsp;</div>
                  <div className="maxMinFontSize" style={{ color: "#f2c700" }}>
                    {parseFloat(Math.max(...series[0].data)).toFixed(2)}
                  </div>
                </div>
                <div className="center">
                  <div className="maxMinFontSize">최소&nbsp;&nbsp;</div>
                  <div className="maxMinFontSize" style={{ color: "#f2c700" }}>
                    {parseFloat(Math.min(...series[0].data)).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <ReactApexChart
                className="graph"
                options={options}
                series={series}
                type="line"
                height={100}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  };
  const acidData = () => {
    const options = {
      chart: {
        id: "acidData",
      },
      yaxis: {
        show: false, // 왼쪽 값 숨김
      },
      xaxis: {
        labels: {
          show: false, // 아래 값 숨김
        },
      },
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 4,
      },
    };

    const series = [
      {
        name: "ACID",
        data: getDevData()[2].reverse(),
        color: "#EA3BFF",
      },
    ];

    return (
      <div>
        {series[0].data.every((item) => item != 0) &&
        series[0].data.some((item) => item > 0) ? (
          <div className="sensorBox">
            <div style={{ display: "flex" }}>
              <div className="chartsSensor">
                <div
                  className="circle"
                  style={{ backgroundColor: "#EA3BFF" }}
                ></div>
                <div className="sensorText">ACID</div>
              </div>
              <div className="minMaxBox">
                <div className="center">
                  <div className="maxMinFontSize">최대&nbsp;&nbsp;</div>
                  <div className="maxMinFontSize" style={{ color: "#EA3BFF" }}>
                    {parseFloat(Math.max(...series[0].data)).toFixed(2)}
                  </div>
                </div>
                <div className="center">
                  <div className="maxMinFontSize">최소&nbsp;&nbsp;</div>
                  <div className="maxMinFontSize" style={{ color: "#EA3BFF" }}>
                    {parseFloat(Math.min(...series[0].data)).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <ReactApexChart
                className="graph"
                options={options}
                series={series}
                type="line"
                height={100}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  };
  const indolesData = () => {
    const options = {
      chart: {
        id: "indolesData",
      },
      yaxis: {
        show: false, // 왼쪽 값 숨김
      },
      xaxis: {
        labels: {
          show: false, // 아래 값 숨김
        },
      },
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 4,
      },
    };

    const series = [
      {
        name: "INDOLES",
        data: getDevData()[3].reverse(),
        color: "#53BC9B",
      },
    ];

    return (
      <div>
        {series[0].data.every((item) => item != 0) &&
        series[0].data.some((item) => item > 0) ? (
          <div className="sensorBox">
            <div style={{ display: "flex" }}>
              <div className="chartsSensor">
                <div
                  className="circle"
                  style={{ backgroundColor: "#53BC9B" }}
                ></div>
                <div className="sensorText">INDOLES</div>
              </div>
              <div className="minMaxBox">
                <div className="center">
                  <div className="maxMinFontSize">최대&nbsp;&nbsp;</div>
                  <div className="maxMinFontSize" style={{ color: "#53BC9B" }}>
                    {parseFloat(Math.max(...series[0].data)).toFixed(2)}
                  </div>
                </div>
                <div className="center">
                  <div className="maxMinFontSize">최소&nbsp;&nbsp;</div>
                  <div className="maxMinFontSize" style={{ color: "#53BC9B" }}>
                    {parseFloat(Math.min(...series[0].data)).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <ReactApexChart
                className="graph"
                options={options}
                series={series}
                type="line"
                height={100}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  };
  const co2Data = () => {
    const options = {
      chart: {
        id: "co2Data",
      },
      yaxis: {
        show: false, // 왼쪽 값 숨김
      },
      xaxis: {
        labels: {
          show: false, // 아래 값 숨김
        },
      },
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 4,
      },
    };

    const series = [
      {
        name: "CO2",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        color: "#f19c50",
      },
    ];

    return (
      <div>
        {series[0].data.every((item) => item != 0) &&
        series[0].data.some((item) => item > 0) ? (
          <div className="sensorBox">
            <div style={{ display: "flex" }}>
              <div className="chartsSensor">
                <div
                  className="circle"
                  style={{ backgroundColor: "#f19c50" }}
                ></div>
                <div className="sensorText">CO2</div>
              </div>
              <div className="minMaxBox">
                <div className="center">
                  <div className="maxMinFontSize">최대&nbsp;&nbsp;</div>
                  <div className="maxMinFontSize" style={{ color: "#f19c50" }}>
                    {parseFloat(Math.max(...series[0].data)).toFixed(2)}
                  </div>
                </div>
                <div className="center">
                  <div className="maxMinFontSize">최소&nbsp;&nbsp;</div>
                  <div className="maxMinFontSize" style={{ color: "#f19c50" }}>
                    {parseFloat(Math.min(...series[0].data)).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <ReactApexChart
                className="graph"
                options={options}
                series={series}
                type="line"
                height={100}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  };

  return (
    <div className="chartsContainer">
      {nh3Data()}
      {h2sData()}
      {acidData()}
      {indolesData()}
      {co2Data()}
    </div>
  );
};

export default Chart;
