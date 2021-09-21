function logout(){
    window.location="index.html";
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
}
const firebaseConfig = {
    apiKey: "AIzaSyB6DHgJFLZzkDqUrY3Q50b0Tsu_scUrfLI",
    authDomain: "project93-13eb7.firebaseapp.com",
    projectId: "project93-13eb7",
    storageBucket: "project93-13eb7.appspot.com",
    messagingSenderId: "147552299778",
    appId: "1:147552299778:web:327e42aedb5b036153f01b",
    measurementId: "G-RGXDN98L1Y"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);