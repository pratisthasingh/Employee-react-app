import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAcJKT_PW-lYollA62D2ie1t7VFtZbbMNE",
  authDomain: "employee-manager-13017.firebaseapp.com",
  databaseURL: "https://employee-manager-13017.firebaseio.com",
  projectId: "employee-manager-13017",
  storageBucket: "employee-manager-13017.appspot.com",
  messagingSenderId: "992212624897"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 