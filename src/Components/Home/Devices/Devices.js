import React, { useState } from 'react';

import './Devices.css';
import '../../../responsive.css';
import { useEffect } from 'react';
import db from '../../FirebaseConfig/Firebase'



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
        db.collection(devicesData.model).add(devicesData)
        .then((docRef) => {
           
        })
        .catch((error) => {
            
        });
        e.preventDefault()
        
    }
    
    
    return (
        <div className="d-flex justify-content-center align-items-center mt-5 mb-5 device-main-container">
            <form action="" onSubmit={handleSubmit} className="device-container">
            
                <div className="d-flex mb-3 device-div-container">
                    <label className="text-dark device-title" htmlFor="modelOfDevice" style={{marginRight:'64px'}}>Device Model</label>
                    <input className="device-input" type="text" id='modeOfDevice' placeholder='Meter_ABC' name="model" onChange={handleChange}/>
                </div>
                <div className="d-flex mb-3 device-div-container">
                    <label className="text-dark device-title" htmlFor="serialNumber" style={{marginRight:'58px'}}>Serial Number</label>
                    <input className="device-input" type="text" id='serialNumber' placeholder='ABC012319' name="SerialNumber" onChange={handleChange}/>
                </div>
                <div className="d-flex mb-3 device-div-container">
                    <label className="text-dark device-title" htmlFor="commissioningDate" style={{marginRight:'11px'}}>Commissioning Date</label>
                    <input className="device-input" type="text" id='commissioningDate' placeholder='1699992929202' name="Commission" onChange={handleChange}/>
                </div>
                <div className="d-flex mb-3 device-div-container">
                    <label className="text-dark device-title" htmlFor="Var01" style={{marginRight:'27px'}}>Level_Alarm_var01</label>
                    <input className="device-input" type="text" id='Var01' placeholder='30.5' name="alarm1" onChange={handleChange}/>
                </div>
                <div className="d-flex mb-3 device-div-container">
                    <label className="text-dark device-title" htmlFor="Var02" style={{marginRight:'27px'}}>Level_Alarm_var02</label>
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