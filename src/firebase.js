// Import the functions you need from the SDKs you need

import { initializeApp} from 'firebase/app';
import { getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyMMBT6bDjSBuUAPH--gLvaJT8yGHtE34",
  authDomain: "todo-firebase-a1a7a.firebaseapp.com",
  projectId: "todo-firebase-a1a7a",
  storageBucket: "todo-firebase-a1a7a.appspot.com",
  messagingSenderId: "56175329578",
  appId: "1:56175329578:web:78d8b65cac0344d1605e53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore

const db = getFirestore(app);

export {db};
