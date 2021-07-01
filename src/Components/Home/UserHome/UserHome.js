import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar';
import './UserHome.css'
import User from '../User/User'
import logo from '../../../Resorces/logo_RLAB.png';
import { userContext } from '../../../App';
import Rechart from './Rechart';
import Devices from '../Devices/Devices';
import Location from '../Locations/Locations';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Command from '../Command/Command';
import MenuIcon from '@material-ui/icons/Menu';
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

const UserHome = () => {
   
    const [user, setUser] = useContext(userContext);
    
    const [dbUserData, setDbUserData] = useState();
    const [loading, setLoading] = useState(true)
    const [menu, setMenu] = useState({
        showMenu:true,
        hideMenu:false
    })
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
   
    useEffect(() => {
        if(window.outerWidth <= 500){
            const newMenu = {...menu};
            newMenu.showMenu = false;
            newMenu.hideMenu = true;
            setMenu(newMenu);
        }
    }, [dbUserData]);
    const handleMenuClick = (e) => {
        const newMenu = {...menu};
            newMenu.showMenu = true;
            newMenu.hideMenu = false;
            setMenu(newMenu);
    }
    return (
        <div className='row'>
            
            <div className="col-md-3 bg-dark" style={{margin:'0', padding:'0'}}>
                {menu.showMenu && <Navbar/>}
                {menu.hideMenu && <MenuIcon onClick = {handleMenuClick} className="text-light"/>}
            </div>
            <div className="col-md-9 backgroundSIDE text-center">
            
            <img src={logo} alt="" style={{width:'20%'}} className='mt-5' />

                {user.userHome && <Rechart/>}
                {user.user&& user.admin && <User data={dbUserData}/> }
                
                {user.devices && <Devices/>}
                {user.locations && <Location/>}
                {user.command && <Command/>}
            </div>
        </div>
    );
};

export default UserHome;