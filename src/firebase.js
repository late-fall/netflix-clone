import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAMLmI7ji8nnYerq0Dm3N-Lnz25el1m3AI",
  authDomain: "netflix-clone-d8f08.firebaseapp.com",
  projectId: "netflix-clone-d8f08",
  storageBucket: "netflix-clone-d8f08.appspot.com",
  messagingSenderId: "200076233908",
  appId: "1:200076233908:web:ca9678b5492873d5611be1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db