import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import LocationUser from './LocationUser';

import './Location.css';
import '../../../responsive.css'

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
    console.log(locationData);
    return (
        <div className="container">
           {user.admin && <div className="row d-flex justify-content-center align-items-center mt-5">
           <form action="" onSubmit={handleSubmit}>
                <div className="title-name mb-3" style={{marginLeft:'2.4%'}}>
                    <label className="text-light" htmlFor="locationId" style={{marginRight:'60px'}} >Location ID</label>
                    <input type="text" id='locationId' placeholder='PlantaLiners' name="LocationID" onChange={handleChange}/>
                </div>
                <div className="title-name mb-3" style={{marginLeft:'2.4%'}}>
                    <label className="text-light" htmlFor="DeviceName" style={{marginRight:'56px'}}>Add Device</label>
                    <input type="text" id='DeviceName' placeholder='Device Name' name="addDevices" onChange={handleChange}/>
                </div>
                
                <button className="btn btn-primary mb-3" style={{marginLeft:'61.6%'}} onClick={handleClick}>Add New Device</button>
                 
                {addDevices.click && <div>
                <div className="d-flex justiy-content-around mb-3">
                    <label className="text-light" htmlFor="modelOfDevice" style={{marginRight:'60px'}}>Device_id_1</label>
                    <input type="text" id='modeOfDevice' placeholder='Meter_ABC' name="Device_id_1" onChange={handleChange}/>
                </div>
                <div className="d-flex justiy-content-around mb-3">
                    <label className="text-light" htmlFor="modelOfDevice" style={{marginRight:'60px'}}>Device_id_2</label>
                    <input type="text" id='modeOfDevice' placeholder='Meter_ABC' name="Device_id_2" onChange={handleChange}/>
                </div>
                <div className="d-flex justiy-content-around mb-3">
                    <label className="text-light" htmlFor="modelOfDevice" style={{marginRight:'60px'}}>Device_id_3</label>
                    <input type="text" id='modeOfDevice' placeholder='Meter_ABC' name="Device_id_3" onChange={handleChange}/>
                </div>
                </div>}
            
                <div className="title-name mb-3">
                    <label className="text-light file-text" htmlFor="image">Image</label>
                    <input type="file" id='image' className="input-file" placeholder='30.5'/>
                </div>
                <button className="btn btn-primary" style={{marginLeft:'65%'}} type="submit">Create/Save</button>
            </form>
           </div>}
            <div className="row mt-5 ms-5">
            {user.viewer &&<LocationUser/>}
            </div>
        </div>
    );
};

export default Locations;