import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AccountStore from "../Account/AccountStore";
import "../styles/header.css";
import { MdLogout, MdOutlineNotificationsNone } from "react-icons/md";

const Header = () => {
  let navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 렌더링된 후에 호출되므로 상태 업데이트 문제를 피할 수 있습니다.
    if (!AccountStore.depart) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    try {
      AccountStore.Logout();
      //저장된 아이디 비밀번호 초기화
      localStorage.removeItem("savedLoginInfo");
      //저장된 토글버튼 상태 초기화
      localStorage.removeItem("toggleStatus");
      navigate("/");
      // 추가적인 로그아웃 처리 로직을 여기에 작성할 수 있습니다.
    } catch (error) {
      console.log("로그인 정보 삭제 실패:", error);
    }
  };

  return (
    <div className="header">
      <div
        onClick={() => {
          navigate("/main");
        }}
        className="headerText"
      >
        {AccountStore.depart ? AccountStore.depart : navigate("/login")}
      </div>
      <div className="headerBtnBox">
        <button
          onClick={() => {
            navigate("/notification");
          }}
          className="headerBtn"
        >
          {/* <div className="notiBox">
                        <div className="notiBoxTxt">10</div>
                    </div> */}
          <MdOutlineNotificationsNone size={23} color="#2f3b55" />
          <div>알림</div>
        </button>
        <button
          onClick={() => {
            handleLogout();
          }}
          className="headerBtn"
        >
          <MdLogout size={20} color="#2f3b55" />
          <div>로그아웃</div>
        </button>
      </div>
    </div>
  );
};

export default Header;
