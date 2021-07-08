import React, { useState } from 'react';
import './Location.css';
import firebase from 'firebase';
import 'firebase/firestore';
import DevicesData from './DevicesData';
import { useEffect } from 'react';
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyBXXL_2svIOIRYEArzq7Ai8G8xLQTTTqrU",
  authDomain: "iot-comm.firebaseapp.com",
  projectId: "iot-comm",
  storageBucket: "iot-comm.appspot.com",
  messagingSenderId: "707981957974",
  appId: "1:707981957974:web:5e3ecb242770f42e7b14f7",
  measurementId: "G-VFR4XEJGHK"
    });
 }else {
    firebase.app(); // if already initialized, use that one
 }

const db = firebase.firestore();

const DevicesForm = (props) => {
    
const {Device_id_1, Device_id_2, Device_id_3} = props.data
    
   
console.log({Device_id_1});
console.log({Device_id_2});
console.log({Device_id_3});
useEffect(() => {
    db.collection("Devices").doc(Device_id_1).get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
db.collection("Devices").doc(Device_id_2).get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
db.collection("Devices").doc(Device_id_3).get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
},[Device_id_1, Device_id_2, Device_id_3])
    return (
            <div>
               <div className="container device-form-container">
                
                
                  {/* <DevicesData />  */}
                  
                </div>

                <div className="button d-flex justify-content-end deviceFrom-location-button">
                    <button className="btn btn-primary">Edit Location</button>
                </div>    
          
          
            </div>
        
    );
};

export default DevicesForm;