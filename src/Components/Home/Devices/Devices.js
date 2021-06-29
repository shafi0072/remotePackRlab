import React, { useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import './Devices.css';
import '../../../responsive.css';


if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyA47b6Rx0RioZApSMcyDooUmOpQFFs9WLE",
  authDomain: "test1-68872.firebaseapp.com",
  projectId: "test1-68872",
  storageBucket: "test1-68872.appspot.com",
  messagingSenderId: "504703093399",
  appId: "1:504703093399:web:50a89636d428ac8bd2f7d2"
    });
 }else {
    firebase.app(); // if already initialized, use that one
 }

const db = firebase.firestore();

const Devices = () => {
    const [devicesData, setDevicesData] = useState({
        model:'',
        SerialNumber:'',
        Commission:'',
        alarm1:'',
        alarm2:'',
        format:'ENER01'
    });
    const handleChange = (event) => {
        const newDevices = {...devicesData};
        newDevices[event.target.name] = event.target.value;
        setDevicesData(newDevices);
        
    }
    const handleSubmit = (e) => {
        db.collection("Devices").add(devicesData)
        .then((docRef) => {
           
        })
        .catch((error) => {
            
        });

        e.preventDefault();
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center mt-5 device-main-container">
            <form action="" onSubmit={handleSubmit} className="device-container">
                <div className="d-flex justiy-content-around mb-3 device-div-container">
                    <label className="text-light device-title" htmlFor="modelOfDevice" style={{marginRight:'60px'}}>Device Model</label>
                    <input className="device-input" type="text" id='modeOfDevice' placeholder='Meter_ABC' name="model" onChange={handleChange}/>
                </div>
                <div className="d-flex justiy-content-around mb-3 device-div-container">
                    <label className="text-light device-title" htmlFor="serialNumber" style={{marginRight:'56px'}}>Serial Number</label>
                    <input className="device-input" type="text" id='serialNumber' placeholder='ABC012319' name="SerialNumber" onChange={handleChange}/>
                </div>
                <div className="d-flex justiy-content-around mb-3 device-div-container">
                    <label className="text-light device-title" htmlFor="commissioningDate" style={{marginRight:'10px'}}>Commissioning Date</label>
                    <input className="device-input" type="text" id='commissioningDate' placeholder='1699992929202' name="Commission" onChange={handleChange}/>
                </div>
                <div className="d-flex justiy-content-around mb-3 device-div-container">
                    <label className="text-light device-title" htmlFor="Var01" style={{marginRight:'27px'}}>Level_Alarm_var01</label>
                    <input className="device-input" type="text" id='Var01' placeholder='30.5' name="alarm1" onChange={handleChange}/>
                </div>
                <div className="d-flex justiy-content-around mb-3 device-div-container">
                    <label className="text-light device-title" htmlFor="Var02" style={{marginRight:'27px'}}>Level_Alarm_var02</label>
                    <input className="device-input" type="text" id='Var02' placeholder='30.5' name='alarm2' onChange={handleChange}/>
                </div>
                <div className="device-button-container">
                    <button className="btn btn-primary device-button" style={{marginLeft:'65%'}}>Create/Save</button>
                </div>
                
            </form>
        </div>
    );
};

export default Devices;