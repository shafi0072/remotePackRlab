import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar';
import DeveiceMeter from '../Locations/DeveiceMeter';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

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


const DeviceDashBoard = () => {
    let { id } = useParams()
    const [status,setStatus] = useState([])
    const [loading, setLoading] = useState(true)
    function arrayFunc(arr,key) {
        let resultArray = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i].DeviceID === key){
                resultArray = arr[i];
            }
        }
        return resultArray
    };
    useEffect(() => {
        
        const userDb =  db.collection("ENER000001").onSnapshot((querySnapshot) => {
            const getDataFirebase = [];
            querySnapshot.forEach((doc) => {
              getDataFirebase.push({...doc.data(), key:doc.id});
            });
            
            if(getDataFirebase.length > 0){
                const functionalArray = arrayFunc(getDataFirebase, id)
                setStatus(functionalArray)
                setLoading(false)
            }
        });
        
     
    }, [loading]);
  
    return (
        <div className='row'>
            <div className="col-md-3">
                <Navbar/>
            </div>
            <div className="col-md-3">
                <DeveiceMeter data={status}/>
            </div>
        </div>
    );
};

export default DeviceDashBoard;