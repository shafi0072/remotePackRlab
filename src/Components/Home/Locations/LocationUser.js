import React, { useEffect, useState } from 'react';
import DevicesForm from './DevicesForm';
import logo1 from '../../../Resorces/logo1.png';
import logo2 from '../../../Resorces/logo2.png';
import logo3 from '../../../Resorces/logo3.png';
import './LocationStyle.css';
import '../../../responsive.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

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

const LocationUser = () => {
    const [click, setClick] = useState({
        locationCLick:true,
        terminal: false
    })
    const handleTerminal = () => {
        const newClick = {...click};
        newClick.locationCLick = false;
        newClick.terminal = true;
        setClick(newClick)
    }
    const [dbUserData, setDbUserData] = useState();
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const getDataFirebase = [];
        const userDb = db.collection("Devices").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              getDataFirebase.push({...doc.data(), key:doc.id});
            });
            setDbUserData(getDataFirebase);
            setLoading(false)
        });
        
       return userDb;
    }, [dbUserData]);
    
    return (
        <div className="card-main-container mb-5">
           {click.locationCLick && <div className='row'>
           <div className="col-md-4 mb-3">
            <div class="card card-container" onClick={handleTerminal}>
                <img src={logo1} class="card-img-top" alt="..."/>
                <div class="card-body">
                   <h6 className="card-text-h6">Location 1</h6>
                   <p className="card-text-p">Motor Pump 5kV</p>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div class="card card-container" onClick={handleTerminal}>
                <img src={logo3} class="card-img-top" alt="..."/>
                <div class="card-body">
                   <h6 className="card-text-h6">Location 2</h6>
                   <p className="card-text-p">Truck FLVC01</p>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div class="card card-container" onClick={handleTerminal}>
                <img src={logo2} class="card-img-top" alt="..."/>
                <div class="card-body">
                   <h6 className="card-text-h6">Location 3</h6>
                   <p className="card-text-p">Dust Fun 4HP</p>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div class="card card-container" onClick={handleTerminal}>
                <img src={logo3} class="card-img-top" alt="..."/>
                <div class="card-body">
                   <h6 className="card-text-h6">Location 4</h6>
                   <p className="card-text-p">Truck FLHR09</p>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div class="card card-container" onClick={handleTerminal}>
                <img src={logo1} class="card-img-top" alt="..."/>
                <div class="card-body">
                   <h6 className="card-text-h6">Location 6</h6>
                   <p className="card-text-p">Motor Pump 2kV</p>
                </div>
            </div>
            </div>
            {/* <div className="col-md-4 mb-3">
            <div class="card" style={{width: '10rem'}} onClick={handleTerminal}>
                <img src="https://www.clipartmax.com/png/middle/301-3017435_icon-delivery-vector-image-delivery-truck-vector-png.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                   <h6>Location 6</h6>
                </div>
            </div>
            </div> */}
           </div>}
            {click.terminal && <DevicesForm data={dbUserData}/>}
        </div>
    );
};

export default LocationUser;