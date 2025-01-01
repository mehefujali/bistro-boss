import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.vite.apiKey ,
  authDomain: import.meta.vite.authDomain,
  projectId: import.meta.vite.projectId ,
  storageBucket: import.meta.vite.storageBucket,
  messagingSenderId: import.meta.vite.messagingSenderId,
  appId: import.meta.vite.appId 
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)