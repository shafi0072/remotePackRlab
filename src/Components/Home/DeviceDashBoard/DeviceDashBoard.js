import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar';
import DeveiceMeter from '../Locations/DeveiceMeter';

import logo from '../../../Resorces/logo_RLAB.png';
import './DeviceDashBoard.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

import db from '../../FirebaseConfig/Firebase'



const DeviceDashBoard = () => {
    let { format, id } = useParams();


    const [status,setStatus] = useState([])
    const [loading, setLoading] = useState(true)
    function arrayFunc(arr,key) {
        let resultArray = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i]._id === key){
                resultArray = arr[i];
            }
        }
        return resultArray
    };
    
    useEffect(() => {
        if(format === "ENER01"){
            const userDb =  db.collection("SOLARPAN01").onSnapshot((querySnapshot) => {
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
            return userDb
        }
        else if(format === "RTD01"){
            const userDb =  db.collection("RTD0000002").onSnapshot((querySnapshot) => {
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
            return userDb
        }
        else if(format === "GTY01"){
            const userDb =  db.collection("GTY0000001").where().onSnapshot((querySnapshot) => {
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
            return userDb
        }
        
        
     
    }, [loading, format, id]);
  console.log({status});
    return (
        <div className='row'>
            <div className="col-md-3 dashboard-navbar">
                <Navbar/>
            </div>
            <div className="col-md-9 dashboard-background text-center">
            <img src={logo} alt="" style={{width:'20%'}} className='mt-5' />
                <h1 className='text-dark mt-2'>Format: {format}</h1>
                <DeveiceMeter data={status}/>
            </div>
        </div>
    );
};

export default DeviceDashBoard;