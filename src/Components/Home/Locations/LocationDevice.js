import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Shared/Navbar';
import DeviceForm from './DevicesForm';
import firebase from 'firebase';
import 'firebase/firestore';
import './DeviceMeter.css'
import { useEffect } from 'react';
import { useState } from 'react';

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

const LocationDevice = () => {
    const {Lid} = useParams();
    console.log({Lid});
    const [DBLocationDV, setDBLocationDV] = useState({})
    useEffect(() => {
        var docRef = db.collection("location").doc(Lid);

        docRef.get().then((doc) => {
            if (doc.exists) {
                setDBLocationDV({...doc.data(), key:doc.id});
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [Lid])
    console.log({DBLocationDV});
    return (
        <div className='row'>
            <div className="col-md-3 location-device-navbar">
                <Navbar/>
            </div>
            <div className="col-md-9 location-device-background">
                <DeviceForm data={DBLocationDV}/>
            </div>
        </div>
    );
};

export default LocationDevice;