import React, { useState } from 'react';
import firebase from 'firebase';
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
        console.log(devicesData);
    }
    const handleSubmit = (e) => {
        db.collection("Devices").add(devicesData)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

        e.preventDefault();
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <form action="" onSubmit={handleSubmit}>
                <div className="d-flex justiy-content-around mb-3">
                    <label className="text-light" htmlFor="modelOfDevice" style={{marginRight:'60px'}}>Device Model</label>
                    <input type="text" id='modeOfDevice' placeholder='Meter_ABC' name="model" onChange={handleChange}/>
                </div>
                <div className="d-flex justiy-content-around mb-3">
                    <label className="text-light" htmlFor="serialNumber" style={{marginRight:'56px'}}>Serial Number</label>
                    <input type="text" id='serialNumber' placeholder='ABC012319' name="SerialNumber" onChange={handleChange}/>
                </div>
                <div className="d-flex justiy-content-around mb-3">
                    <label className="text-light" htmlFor="commissioningDate" style={{marginRight:'10px'}}>Commissioning Date</label>
                    <input type="text" id='commissioningDate' placeholder='1699992929202' name="Commission" onChange={handleChange}/>
                </div>
                <div className="d-flex justiy-content-around mb-3">
                    <label className="text-light" htmlFor="Var01" style={{marginRight:'27px'}}>Level_Alarm_var01</label>
                    <input type="text" id='Var01' placeholder='30.5' name="alarm1" onChange={handleChange}/>
                </div>
                <div className="d-flex justiy-content-around mb-3">
                    <label className="text-light" htmlFor="Var02" style={{marginRight:'27px'}}>Level_Alarm_var02</label>
                    <input type="text" id='Var02' placeholder='30.5' name='alarm2' onChange={handleChange}/>
                </div>
                <button className="btn btn-primary" style={{marginLeft:'65%'}}>Create/Save</button>
            </form>
        </div>
    );
};

export default Devices;