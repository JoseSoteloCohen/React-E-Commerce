import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBEhT4dfrW_aoJQaUC_NqEPsi9j4sCBShQ",
    authDomain: "react-ecomm-63aa6.firebaseapp.com",
    databaseURL: "https://react-ecomm-63aa6.firebaseio.com",
    projectId: "react-ecomm-63aa6",
    storageBucket: "react-ecomm-63aa6.appspot.com",
    messagingSenderId: "955128727990",
    appId: "1:955128727990:web:48d21dec0171afd48f5917"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
          })
      }catch (e) {
          console.log('error creating user', e.message);
      }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

