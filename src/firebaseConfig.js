
import { initializeApp } from "firebase/app";
import { getFirestore }  from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAUQvS2j3wZPhBC2qU_pP7pwmaZSE-1OmI",
  authDomain: "ecommerce-5aedd.firebaseapp.com",
  projectId: "ecommerce-5aedd",
  storageBucket: "ecommerce-5aedd.appspot.com",
  messagingSenderId: "410699100702",
  appId: "1:410699100702:web:0c14fe911162b45f5c740f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);