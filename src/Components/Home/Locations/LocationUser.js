import React, { useEffect, useState } from 'react';
import DevicesForm from './DevicesForm';
import logo1 from '../../../Resorces/logo1.png';
import logo2 from '../../../Resorces/logo2.png';
import logo3 from '../../../Resorces/logo3.png';
import './LocationStyle.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyD_H-N97ETri2j8yI5c-X1YtguoBCWtWAU",
        authDomain: "rlab-1f739.firebaseapp.com",
        projectId: "rlab-1f739",
        storageBucket: "rlab-1f739.appspot.com",
        messagingSenderId: "663446234969",
        appId: "1:663446234969:web:0cf0efc959e952732c8e48",
        measurementId: "G-2EFCRDJGTP"
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
    }, []);
    console.log(dbUserData);

    return (
        <div >
           {click.locationCLick && <div className='row'>
           <div className="col-md-4 mb-3">
            <div class="card card-container" style={{width: '10rem'}} onClick={handleTerminal}>
                <img src={logo1} class="card-img-top" alt="..."/>
                <div class="card-body">
                   <h6 className="card-text-h6">Location 1</h6>
                   <p className="card-text-p">Motor Pump 5kV</p>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div class="card card-container" style={{width: '10rem'}} onClick={handleTerminal}>
                <img src={logo3} class="card-img-top" alt="..."/>
                <div class="card-body">
                   <h6 className="card-text-h6">Location 2</h6>
                   <p className="card-text-p">Truck FLVC01</p>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div class="card card-container" style={{width: '10rem'}} onClick={handleTerminal}>
                <img src={logo2} class="card-img-top" alt="..."/>
                <div class="card-body">
                   <h6 className="card-text-h6">Location 3</h6>
                   <p className="card-text-p">Dust Fun 4HP</p>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div class="card card-container" style={{width: '10rem'}} onClick={handleTerminal}>
                <img src={logo3} class="card-img-top" alt="..."/>
                <div class="card-body">
                   <h6 className="card-text-h6">Location 4</h6>
                   <p className="card-text-p">Truck FLHR09</p>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div class="card card-container" style={{width: '10rem'}} onClick={handleTerminal}>
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