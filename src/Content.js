import React from "react";
import Menu from "./Menu";
import AccountStore from "./Account/AccountStore";
import { RefreshSQL } from "./DataBase/DataBaseSQL";
export default function Content() {
  //새로고침 시 회원정보 다시 넣기
  if (AccountStore.userid) {
    const DataAction = async () => {
      const Refresh = await RefreshSQL(AccountStore.userid);
      AccountStore.Refresh(Refresh);
    };
    DataAction();
  }
  return <Menu />;
}
