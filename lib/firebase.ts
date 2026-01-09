import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBn6YXLjYpy9Q9gPa8ABnO_xNTYp9pbfA0",
    authDomain: "deos-record.firebaseapp.com",
    projectId: "deos-record",
    storageBucket: "deos-record.firebasestorage.app",
    messagingSenderId: "311809217682",
    appId: "1:311809217682:web:ae1f8e29852eb75705c24b",
    measurementId: "G-42VX5W9HE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(app);
        }
    });
}

export { app, analytics };
