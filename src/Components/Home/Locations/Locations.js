import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import LocationUser from './LocationUser';

import './Location.css';
import '../../../responsive.css'

import firebase from 'firebase';
import 'firebase/firestore';


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



const Locations = () => {
    const [user, setUser] = useContext(userContext);

    const [locationData, setLocationData] = useState({
        LocationID:'',
        addDevices:'',
        Device_id_1:'',
        Device_id_2:'',
        Device_id_3:'',
    });
    const [addDevices, setAddDevices] = useState({
        click: false,
    });

    const handleClick = (e) => {
        const newClick = {...addDevices};
        newClick.click = true;
        setAddDevices(newClick);
        e.preventDefault()
    }
    const handleSubmit = (e) => {
        db.collection("location").add(locationData)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        e.preventDefault();
    };
    const handleChange =(e) => {
        const newLocationData = {...locationData};
        newLocationData[e.target.name] = e.target.value;
        setLocationData(newLocationData)
    }; 
    
    return (
        <div className="container">
           {user.admin && <div className="row d-flex justify-content-end align-items-center mt-5">
           <form action="" onSubmit={handleSubmit}>
                <div className="title-name mb-3 d-flex justify-content-end">
                    <label className="text-light location-title-text" htmlFor="locationId" style={{marginRight:'60px'}} >Location ID</label>
                    <input className="location-title-input" type="text" id='locationId' placeholder='PlantaLiners' name="LocationID" onChange={handleChange}/>
                </div>
                <div className="title-name mb-3 d-flex justify-content-end">
                    <label className="text-light location-title-text" htmlFor="DeviceName" style={{marginRight:'56px'}}>Add Device</label>
                    <input className="location-title-input" type="text" id='DeviceName' placeholder='Device Name' name="addDevices" onChange={handleChange}/>
                </div>
                <div className="d-flex justify-content-end location-button-div">
                    <button className="btn btn-primary mb-3 location-button" style={{marginLeft:'61.6%'}} onClick={handleClick}>Add New Device</button>
                </div>
                
                 
                {addDevices.click && <div>
                <div className="d-flex justify-content-end mb-3">
                    <label className="text-light" htmlFor="modelOfDevice" style={{marginRight:'60px'}}>Device_id_1</label>
                    <input type="text" id='modeOfDevice' placeholder='Meter_ABC' name="Device_id_1" onChange={handleChange}/>
                </div>
                <div className="d-flex justify-content-around mb-3">
                    <label className="text-light" htmlFor="modelOfDevice" style={{marginRight:'60px'}}>Device_id_2</label>
                    <input type="text" id='modeOfDevice' placeholder='Meter_ABC' name="Device_id_2" onChange={handleChange}/>
                </div>
                <div className="d-flex justify-content-around mb-3">
                    <label className="text-light" htmlFor="modelOfDevice" style={{marginRight:'60px'}}>Device_id_3</label>
                    <input type="text" id='modeOfDevice' placeholder='Meter_ABC' name="Device_id_3" onChange={handleChange}/>
                </div>
                </div>}
            
                <div className="title-name mb-3 d-flex justify-content-end">
                    <label className="text-light file-text location-title-text" htmlFor="image">Image</label>
                    <input className="location-title-input" type="file" id='image' placeholder='30.5'/>
                </div>
                <div className="d-flex justify-content-end location-button-div">
                    <button className="btn btn-primary location-button" style={{marginLeft:'65%'}} type="submit">Create/Save</button>
                </div>
                
            </form>
           </div>}
            <div className="row mt-5 ms-5">
            {user.viewer &&<LocationUser/>}
            </div>
        </div>
    );
};

export default Locations;