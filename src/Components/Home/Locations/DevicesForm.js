import React, { useContext, useEffect, useState } from 'react';
import './Location.css';
import DeveiceMeter from './DeveiceMeter';
import DevicesData from './DevicesData';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { userContext } from '../../../App';

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

const DevicesForm = (props) => {
    const data = props.data;

    const [user, setUser] = useContext(userContext)
   
    const [sl, setSl] = useState({
       
    });
    const handleSelect = () => {
        const newSl = {...sl};
        newSl.notClick = false;
        newSl.click = true;
        setSl(newSl);
    }
    

  
    return (
            <div>
                {user.notClick && <div className="container">
                {
                    data.map(data => <DevicesData data={data} handleSelect={handleSelect}/>)
                }
                <div className="button d-flex justify-content-end deviceFrom-location-button">
                    <button className="btn btn-primary">Edit Location</button>
                </div>    
           </div>}
           
            </div>
        
    );
};

export default DevicesForm;