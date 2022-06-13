import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD0VxmaPVvcZ0-pb5VVVLtwTFChpyKrBzs',
  authDomain: 'food-order-app-c0ecc.firebaseapp.com',
  projectId: 'food-order-app-c0ecc',
  storageBucket: 'food-order-app-c0ecc.appspot.com',
  messagingSenderId: '1012768345129',
  appId: '1:1012768345129:web:817d30f484695fdc22e038',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
