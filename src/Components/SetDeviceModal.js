import React, { useEffect, useState } from "react";
import Switch from "react-switch";

const SetDeviceModal = (props) => {
  console.log("모달props", props);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const setDeviceToggle1 = () => {
    setIsEnabled1((prevState) => !prevState);
  };
  const setDeviceToggle2 = () => {
    setIsEnabled2((prevState) => !prevState);
  };
  const setDeviceToggle3 = () => {
    setIsEnabled3((prevState) => !prevState);
  };
  const setDeviceToggle4 = () => {
    setIsEnabled4((prevState) => !prevState);
  };

  return (
    <div className="modal__box">
      <div className="modalContainer">
        <div className="modalTitle">장비 설정</div>
        <div className="modalContent">
          <table className="modalTable">
            <tbody>
              <tr>
                <td>장비1</td>
                <td>
                  <Switch
                    className="checkSwitch"
                    onChange={setDeviceToggle1}
                    checked={isEnabled1}
                    onColor="#fff"
                    offColor="#fff"
                    onHandleColor="#55679B"
                    offHandleColor="#a5afc7"
                    handleDiameter={16}
                    height={22}
                    width={38}
                  />
                </td>
              </tr>
              <tr>
                <td>장비2</td>
                <td>
                  <Switch
                    className="checkSwitch"
                    onChange={setDeviceToggle2}
                    checked={isEnabled2}
                    onColor="#fff"
                    offColor="#fff"
                    onHandleColor="#55679B"
                    offHandleColor="#a5afc7"
                    handleDiameter={16}
                    height={22}
                    width={38}
                  />
                </td>
              </tr>
              <tr>
                <td>장비3</td>
                <td>
                  <Switch
                    className="checkSwitch"
                    onChange={setDeviceToggle3}
                    checked={isEnabled3}
                    onColor="#fff"
                    offColor="#fff"
                    onHandleColor="#55679B"
                    offHandleColor="#a5afc7"
                    handleDiameter={16}
                    height={22}
                    width={38}
                  />
                </td>
              </tr>
              <tr>
                <td>장비4</td>
                <td>
                  <Switch
                    className="checkSwitch"
                    onChange={setDeviceToggle4}
                    checked={isEnabled4}
                    onColor="#fff"
                    offColor="#fff"
                    onHandleColor="#55679B"
                    offHandleColor="#a5afc7"
                    handleDiameter={16}
                    height={22}
                    width={38}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className="modalApplyBtn"
            onClick={() => {
              alert("수정되었습니다");
              props.onClose();
            }}
          >
            수정
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetDeviceModal;
