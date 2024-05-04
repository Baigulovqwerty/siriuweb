import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyA7O1oX_iH9QIZXFU9IRn9iO57g-f_n0uM",
    authDomain: "sirius-6b2b4.firebaseapp.com",
    databaseURL: "https://sirius-6b2b4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sirius-6b2b4",
    storageBucket: "sirius-6b2b4.appspot.com",
    messagingSenderId: "376848856283",
    appId: "1:376848856283:web:6f68500f23727b3ac2c8fe",
    measurementId: "G-FRYKTTYWRC"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();


// const actionCodeSettings = {
//     // URL you want to redirect back to. The domain (www.example.com) for this
//     // URL must be in the authorized domains list in the Firebase Console.
//     url: 'https://www.example.com/finishSignUp?cartId=1234',
//     // This must be true.
//     handleCodeInApp: true,
//     iOS: {
//       bundleId: 'com.example.ios'
//     },
//     android: {
//       packageName: 'com.example.android',
//       installApp: true,
//       minimumVersion: '12'
//     },
//     dynamicLinkDomain: 'example.page.link'
//   };





  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('signed up');
      localStorage.setItem("isauth", "true");
      localStorage.setItem("uid", user.uid);
    } else {
    
    console.log('not signed up');

    localStorage.setItem("isauth", false);
    localStorage.setItem("basket", JSON.stringify({}));
		localStorage.setItem("bscost", 0);
    
    }
  });