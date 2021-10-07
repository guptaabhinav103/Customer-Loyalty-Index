import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAa4X87WpYGZj5XfGG_V4veNX6yJcGmiJ0",
  authDomain: "feedback-bfcf5.firebaseapp.com",
  projectId: "feedback-bfcf5",
  storageBucket: "feedback-bfcf5.appspot.com",
  messagingSenderId: "962150925643",
  appId: "1:962150925643:web:94c329702624ddc179d4ce",
  measurementId: "G-2C00CBNB96"
});
// const firebaseConfig = { apiKey: "AIzaSyAa4X87WpYGZj5XfGG_V4veNX6yJcGmiJ0",
// authDomain: "feedback-bfcf5.firebaseapp.com",
// projectId: "feedback-bfcf5",
// storageBucket: "feedback-bfcf5.appspot.com",
// messagingSenderId: "962150925643",
// appId: "1:962150925643:web:94c329702624ddc179d4ce",
// measurementId: "G-2C00CBNB96"
// };
var db = firebaseApp.firestore();
// const app = initializeApp(firebaseConfig);
export { db };
