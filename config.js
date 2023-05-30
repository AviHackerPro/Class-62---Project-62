import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCMZXlSnP7gjIhI8jclQG0w76ib_iBAlAY",
  authDomain: "school-attendence-app-659a9.firebaseapp.com",
  databaseURL: "https://school-attendence-app-659a9-default-rtdb.firebaseio.com",
  projectId: "school-attendence-app-659a9",
  storageBucket: "school-attendence-app-659a9.appspot.com",
  messagingSenderId: "420407740977",
  appId: "1:420407740977:web:a1f614ad1a90a74bc16310"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase.database()