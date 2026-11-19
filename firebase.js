import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoB9ol7JFlol1L7D3_iSToOL7SNiLetgw",
  authDomain: "vortex-ai-3ee9a.firebaseapp.com",
  projectId: "vortex-ai-3ee9a",
  storageBucket: "vortex-ai-3ee9a.firebasestorage.app",
  messagingSenderId: "309755894107",
  appId: "1:309755894107:web:dd5b4c6f0d4ee066a9a27e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
