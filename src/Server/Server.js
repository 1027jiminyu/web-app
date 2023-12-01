//서버 IP
import { io } from "socket.io-client";

// const Server = io.connect("http://inent2023.co.kr:3001", {
const Server = io.connect("http://192.168.0.4:3001", {
  transports: ["websocket"],
});

export default Server;
