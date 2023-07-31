import * as React from "react";

export default function DeviceInfo({ deviceInfo }) {
    return (
        <div className="infoBox">
            <div className="info">
                <div className="infoTitle">장비명</div>
                <div className="infoContent">{deviceInfo.name}</div>
            </div>
            <div className="info">
                <div className="infoTitle">제품명</div>
                <div className="infoContent">{deviceInfo.productid}</div>
            </div>
            <div className="info">
                <div className="infoTitle">온/오프</div>
                <div className="infoContent">{deviceInfo.status}</div>
            </div>
            <div className="info">
                <div className="infoTitle">ID</div>
                <div className="infoContent">{deviceInfo.id}</div>
            </div>
            <div className="info">
                <div className="infoTitle">소속</div>
                <div className="infoContent">{deviceInfo.depart}</div>
            </div>
            <div className="info">
                <div className="infoTitle">설치장소</div>
                <div className="infoContent">{deviceInfo.addr}</div>
            </div>
            <div className="info">
                <div className="infoTitle">메모</div>
                <div className="infoContent">{deviceInfo.memo}</div>
            </div>
        </div>
    );
}
