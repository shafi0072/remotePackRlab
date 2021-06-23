import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar';
import './UserHome.css'
import User from '../User/User'
import logo from '../../../Resorces/logo_RLAB.png'
import { userContext } from '../../../App';
import Rechart from './Rechart';
import Devices from '../Devices/Devices';
import Location from '../Locations/Locations';
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

const UserHome = () => {
   
    const [user, setUser] = useContext(userContext);
    
    const [dbUserData, setDbUserData] = useState();
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const getDataFirebase = [];
        const userDb = db.collection("user").onSnapshot((querySnapshot) => {
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
        <div className='row'>
            
            <div className="col-md-3" style={{margin:'0', padding:'0'}}>
                <Navbar/>
            </div>
            <div className="col-md-9 backgroundSIDE text-center">
            <img src={logo} alt="" style={{width:'20%'}} className='mt-5' />
            
                {user.userHome && <Rechart/>}
                {user.user&& user.admin && <User data={dbUserData}/> }
                
                {user.devices && <Devices/>}
                {user.locations && <Location/>}
            </div>
        </div>
    );
};

export default UserHome;