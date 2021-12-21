function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5pLVCe9lqRseC9xEhUQVUAI0Sc_gBZMI",
    authDomain: "classtest-8f0b2.firebaseapp.com",
    databaseURL: "https://classtest-8f0b2-default-rtdb.firebaseio.com",
    projectId: "classtest-8f0b2",
    storageBucket: "classtest-8f0b2.appspot.com",
    messagingSenderId: "100632510448",
    appId: "1:100632510448:web:7860d102c39c845f0da735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);