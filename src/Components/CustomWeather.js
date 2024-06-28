import "../styles/deviceList.css";
import { PiThermometerSimpleFill } from "react-icons/pi";
import { MdWaterDrop } from "react-icons/md";
import { RiWindyFill } from "react-icons/ri";
import { TbWindmill } from "react-icons/tb";
import { HiArrowNarrowUp } from "react-icons/hi";

function degreeToDirection(degree) {
  if ((0 <= degree && degree < 45) || degree >= 360) {
    return "0deg";
  } else if (45 <= degree && degree < 90) {
    return "45deg";
  } else if (90 <= degree && degree < 135) {
    return "90deg";
  } else if (135 <= degree && degree < 180) {
    return "135deg";
  } else if (180 <= degree && degree < 225) {
    return "180deg";
  } else if (225 <= degree && degree < 270) {
    return "225deg";
  } else if (270 <= degree && degree < 315) {
    return "270deg";
  } else {
    return "315deg";
  }
}

export default function CustomWeather({
  temperature,
  humidity,
  windSpeed,
  windDegree,
}) {
  // console.log("온도", temperature);
  // console.log("습도", humidity);
  // console.log("풍속", windSpeed);
  // console.log("풍향", windDegree);
  return (
    <>
      <div className="weatherContainer">
        <div className="weatherBox">
          <PiThermometerSimpleFill size={16} color="#2f3b55" />
          <div className="weatherText">{temperature}℃</div>
        </div>
        <div className="weatherBox">
          <MdWaterDrop size={16} color="#2f3b55" />
          <div className="weatherText">{humidity}%</div>
        </div>
        <div className="weatherBox">
          <RiWindyFill size={16} color="#2f3b55" />
          <div className="weatherText">{windSpeed}㎧</div>
        </div>
        <div className="weatherBox">
          <TbWindmill size={16} color="#2f3b55" />
          <WeatherIcon windDegree={windDegree} />
        </div>
        <div className="provide">제공 : 기상청</div>
      </div>
    </>
  );
}

function WeatherIcon({ windDegree }) {
  return (
    <div>
      {windDegree != null ? (
        <HiArrowNarrowUp
          size={13}
          color="#2f3b55"
          style={{ transform: `rotate(${degreeToDirection(windDegree)})` }}
        />
      ) : (
        ""
      )}
    </div>
  );
}
