import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection as c,
  addDoc as aD,
  query as q,
  onSnapshot as oS,
  orderBy as oB,
  doc as d,
  deleteDoc as dD,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const collection = c;

export const addDoc = aD;

export const query = q;

export const onSnapshot = oS;

export const orderBy = oB;

export const doc = d;

export const deleteDoc = dD;
