import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB5u1_3En194Si167-zIXcXHKBt3CamNkY',
  authDomain: 'ecomm-portfolio-db.firebaseapp.com',
  projectId: 'ecomm-portfolio-db',
  storageBucket: 'ecomm-portfolio-db.appspot.com',
  messagingSenderId: '272205116400',
  appId: '1:272205116400:web:0c28077bb214b518a12335',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt: new Date(),
      });
    } catch (err) {
      console.log('error creating the user', err.mesage);
    }
  }

  return userDocRef;
};
