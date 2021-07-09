import React, { useState } from 'react';
import './Location.css';
import firebase from 'firebase';
import 'firebase/firestore';
import logo from '../../../Resorces/logo_RLAB.png';
import DevicesData from './DevicesData';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    
const {Device_id_1, Device_id_2, Device_id_3, key} = props.data;

 const [device1, setDevice1] = useState({});
 const [device2, setDevice2] = useState({});
 const [device3, setDevice3] = useState({});
   
console.log({Device_id_1});
console.log({Device_id_2});
console.log({Device_id_3});
useEffect(() => {
    db.collection("Devices").doc(Device_id_1).get().then((doc) => {
    if (doc.exists) {
        setDevice1({...doc.data(), key:doc.id});
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
db.collection("Devices").doc(Device_id_2).get().then((doc) => {
    if (doc.exists) {
        setDevice2({...doc.data(), key:doc.id});
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
db.collection("Devices").doc(Device_id_3).get().then((doc) => {
    if (doc.exists) {
        setDevice3({...doc.data(), key:doc.id});
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
},[Device_id_1, Device_id_2, Device_id_3])
console.log({device1});
console.log({device2});
console.log({device3});

    return (
            
            <div>
                <div className="logo-img">
                    <img src={logo} alt="" style={{width:'20%'}} className='mt-5' />
                </div>
               <div className="container device-form-container mt-5">
                
               <div className="clients d-flex justify-content-evenly mb-5">
                    <div className="form-name"><p className="form-name-p">{device1.model}</p></div>
                     {/* <input type="text" placeholder='edit your Meter' name='one'/> */}
                    <button className="btn btn-dark btnEdit" >Edit</button>
                    <Link to={`/locationsDevice/${key}/device/${device1.format}/${device1.key}`}  className="btn btn-primary btnArea">Select</Link>
                </div>
                <div className="clients d-flex justify-content-evenly mb-5">
                    <div className="form-name"><p className="form-name-p">{device2.model}</p></div>
                     {/* <input type="text" placeholder='edit your Meter' name='one'/> */}
                    <button className="btn btn-dark btnEdit" >Edit</button>
                    <Link to={`/locationsDevice/${key}/device/${device2.format}/${device2.key}`}  className="btn btn-primary btnArea">Select</Link>
                </div>
                <div className="clients d-flex justify-content-evenly mb-5">
                    <div className="form-name"><p className="form-name-p">{device3.model}</p></div>
                     {/* <input type="text" placeholder='edit your Meter' name='one'/> */}
                    <button className="btn btn-dark btnEdit" >Edit</button>
                    <Link to={`/locationsDevice/${key}/device/${device3.format}/${device3.key}`}  className="btn btn-primary btnArea">Select</Link>
                </div>
                </div>

                <div className="button d-flex justify-content-end deviceFrom-location-button">
                    <button className="btn btn-primary">Edit Location</button>
                </div>    
          
          
            </div>
        
    );
};

export default DevicesForm;