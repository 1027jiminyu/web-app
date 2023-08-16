//로그인 페이지
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountStore from "../Account/AccountStore";
import { LoginSQL } from "../DataBase/DataBaseSQL";
import "../styles/login.css";
import Switch from "react-switch";

export default function Login() {
  let navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 상태 가져오기
    const storedStatus = localStorage.getItem("toggleStatus");
    if (storedStatus !== null) {
      setIsEnabled(JSON.parse(storedStatus));
    }
    //토글버튼이 true일때
    if (JSON.parse(storedStatus)) {
      //저장되어 있는 정보 가져오기
      const savedLoginInfo = localStorage.getItem("savedLoginInfo");
      if (savedLoginInfo) {
        //자동 로그인 함수
        const autoLogin = async () => {
          const { id, password } = JSON.parse(savedLoginInfo);
          if (AccountStore.userid && id !== "" && password !== "") {
            const Data = await LoginSQL(id, password);
            AccountStore.Login(Data);
            navigate("/main");
          }
        };
        autoLogin();
      }
    }
  }, []);

  useEffect(() => {
    //isEnabled 토글버튼 상태가 업뎃 될 때마다 버튼상태 저장하기
    localStorage.setItem("toggleStatus", JSON.stringify(isEnabled));
  }, [isEnabled]);

  //토글버튼 함수
  const toggleSwitch = () => {
    setIsEnabled((prevState) => !prevState);
  };

  //정보 저장 함수
  const saveLoginInfo = () => {
    try {
      localStorage.setItem("savedLoginInfo", JSON.stringify({ id, password }));
      console.log("로그인 정보 저장 성공");
    } catch (error) {
      console.log("로그인 정보 저장 실패:", error);
    }
  };

  //로그인 함수
  const LoginClick = async () => {
    const Data = await LoginSQL(id, password);
    AccountStore.Login(Data);
    AccountStore.userid && navigate("/main");

    //로그인 버튼을 눌렀을경우에만 아이디랑 비밀번호 저장
    saveLoginInfo();
  };

  return (
    <div className="loginContainer">
      <div className="main">
        <div className="logoContainer">
          <img
            className="logoImg"
            src={require("../assets/logo/logo.png")}
            alt="이엔티로고 이미지"
          />
          <div className="description">로그인하시거나 새 계정을 만드세요.</div>
        </div>
        <div className="inputContainer">
          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            name="id"
            placeholder="아이디"
            value={id}
            className="loginInput"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="pw"
            placeholder="비밀번호"
            value={password}
            className="loginInput"
          />
        </div>
        <div className="switchContainer">
          <Switch
            className="checkSwitch"
            onChange={toggleSwitch}
            checked={isEnabled}
            onColor="#fff"
            offColor="#fff"
            onHandleColor="#55679B"
            offHandleColor="#a5afc7"
            handleDiameter={16}
            height={22}
            width={38}
          />
          <div className="autoLoginText">자동 로그인 </div>
        </div>
        <div className="buttonContainer">
          <button onClick={LoginClick} className="loginBtn">
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}
