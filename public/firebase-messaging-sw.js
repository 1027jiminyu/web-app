importScripts(
  "https://www.gstatic.com/firebasejs/9.6.8/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.6.8/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyD50UWhGky8CTW3nbp_TtjPxfLrEDcYC1c",
  authDomain: "inent-650b3.firebaseapp.com",
  projectId: "inent-650b3",
  storageBucket: "inent-650b3.appspot.com",
  messagingSenderId: "796730025932",
  appId: "1:796730025932:web:5dfe67250bbde3ef095f69",
  measurementId: "G-77WDX0HRGC",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message:", payload);
});
