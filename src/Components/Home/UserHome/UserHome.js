import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar';
import './UserHome.css'
import User from '../User/User'
import logo from '../../../Resorces/logo_RLAB.png';
import { userContext } from '../../../App';
import Rechart from './Rechart';
import Devices from '../Devices/Devices';
import Location from '../Locations/Locations';

import Command from '../Command/Command';
import MenuIcon from '@material-ui/icons/Menu';

import db from '../../FirebaseConfig/Firebase'

const UserHome = () => {
   
    const [user, setUser] = useContext(userContext);
    
    const [dbUserData, setDbUserData] = useState();
    const [loading, setLoading] = useState(true)
    const [menu, setMenu] = useState({
        showMenu:true,
        hideMenu:false,
        suspendMenu: false,
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
    }, []);
    const handleMenuClick = (e) => {
        const newMenu = {...menu};
            newMenu.showMenu = true;
            newMenu.hideMenu = false;
            newMenu.suspendMenu = true;
            setMenu(newMenu);
    }
    const handleSubMenuClose = () => {
        const newMenu = {...menu};
            newMenu.showMenu = false;
            newMenu.hideMenu = true;
            newMenu.suspendMenu = false;
            setMenu(newMenu);
    }
    return (
        <div className='row'>
            
            <div className="col-md-3" style={{padding:0}}>
            {menu.suspendMenu && <MenuIcon onClick = {handleSubMenuClose} className="" style={{}}/>}
                {menu.showMenu && <Navbar/>}
                {menu.hideMenu && <MenuIcon onClick = {handleMenuClick} className="" style={{}}/>}
                
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