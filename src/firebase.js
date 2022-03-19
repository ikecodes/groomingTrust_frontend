import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCErQF3fw_tG-QGBJztNa50CqdBRGZd-FA',
  authDomain: 'grooming-endowment-trust.firebaseapp.com',
  projectId: 'grooming-endowment-trust',
  storageBucket: 'grooming-endowment-trust.appspot.com',
  messagingSenderId: '29710503166',
  appId: '1:29710503166:web:0d7f0c3f355cf8708329af',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
