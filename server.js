import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;
import { collection, addDoc, getDocs } from "firebase/firestore"; 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO2InYCKmLHPQXlKvHuGAfAM3HDXC_Y2M",
  authDomain: "api-moible.firebaseapp.com",
  projectId: "api-moible",
  storageBucket: "api-moible.appspot.com",
  messagingSenderId: "477542294014",
  appId: "1:477542294014:web:da16634bbe7a59418aa0af"
};

// Initialize Firebase
const fb_app = initializeApp(firebaseConfig);
const db = getFirestore(fb_app);

// Add a new document with a generated id.

app.get('/', async (req, res) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

  res.send('Hello World!')
})
app.get('/get', async (req, res) => {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().last}`);
            res.send(doc.data().last);

        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
})
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})