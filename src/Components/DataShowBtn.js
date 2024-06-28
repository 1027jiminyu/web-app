import { useState } from "react";
import DataInfo from "./DataInfo";
import SetDeviceModal from "./SetDeviceModal";

export default function DataShowBtn(props) {
  const [showChart, setShowChart] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  function ModalBackdrop({ onClose }) {
    return <div className="modal__background" onClick={onClose} />;
  }

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

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
      {showChart ? (
        <>
          <DataInfo id={props.deviceid} />
          {/* <div className="setDeviceBox">
            <button className="setDeviceBtn" onClick={toggleModal}>
              장비 설정
            </button>
            {isModalOpen && (
              <>
                <ModalBackdrop onClose={toggleModal} />
                <SetDeviceModal
                  onClose={toggleModal}
                  deviceid={props.deviceid}
                />
              </>
            )}
          </div> */}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
