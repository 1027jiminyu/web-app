// 로그인 시 회원정보를 저장 및 로그아웃 시 회원정보를 삭제 

import { Component } from "react";

class AccountStore extends Component{
 
    userid = window.localStorage.getItem("userid") || null;
	username = "";
	geocode = "";
	depart = "";
	position = "";
	email = "";
	phone = "";
	role = window.localStorage.getItem("role") || null;
	onweb = true;
	onmail = true;
	onsms = true;
	onpush = true;
    
    Login(datas){

        if(datas === "No id")
        {
            return alert("아이디를 입력해주세요");
        }
        if(datas === "No pw")
        {
            return alert("비민번호를 입력해주세요");
        }
        if(datas === "No DB")
        {
            return alert("DB ERR");
        }
        if(datas === null)
        {
            return alert("아이디 또는 비밀번호가 틀렸습니다.");
        }
        if(datas === undefined)
        {
            return alert("아이디 또는 비밀번호가 틀렸습니다.");
        }
        this.userid   = datas.userid;
        this.username = datas.username;
        this.geocode  = datas.geocode;
        this.depart   = datas.depart;
        this.position = datas.position;
        this.email    = datas.email;
        this.phone    = datas.phone;
        this.role     = datas.role;
        this.onweb    = datas.onweb;
        this.onmail   = datas.onmail;
        this.onsms    = datas.onsms;
        this.onpush   = datas.onpush;

        window.localStorage.setItem("userid", String(this.userid));
        window.localStorage.setItem("role", String(this.role));
    }

    Logout(){
        this.id = 0;
		this.userid = "";
		this.username = "";
		this.geocode = "";
		this.depart = "";
		this.position = "";
		this.email = "";
		this.phone = "";
		this.role = "";
		this.token = "";
		this.authTime = 0;
        window.localStorage.removeItem("userid");
        window.localStorage.removeItem("role");
    }


    Refresh(datas){

        this.username = datas.username;
        this.geocode  = datas.geocode;
        this.depart   = datas.depart;
        this.position = datas.position;
        this.email    = datas.email;
        this.phone    = datas.phone;
        this.onweb    = datas.onweb;
        this.onmail   = datas.onmail;
        this.onsms    = datas.onsms;
        this.onpush   = datas.onpush;

    }
}
// eslint-disable-next-line
export default new AccountStore();