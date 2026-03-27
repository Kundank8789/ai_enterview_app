import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-825ad.firebaseapp.com",
  projectId: "ai-interview-825ad",
  storageBucket: "ai-interview-825ad.firebasestorage.app",
  messagingSenderId: "44196814939",
  appId: "1:44196814939:web:5151bfb9e8a666ffc15f7e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export { auth, provider }