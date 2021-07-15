
import React from 'react';
import Navbar from '../../Shared/Navbar';
import Devices from './Devices';
import './Devices.css';
import logo from '../../../Resorces/logo_RLAB.png';
import Navbar2 from '../../Shared/Navbar/Navbar'
const MainDevices = () => {
    return (
        <div className='row'>
        <Navbar2/>
            <div className="col-md-3 device-navbar">
                <Navbar/>
            </div>
            <div className="col-md-9 device-background">
            <div className="logo-img">
                <img src={logo} alt="" style={{width:'20%'}} className='mt-5' />
            </div>
                <Devices/>
            </div>
        </div>
    );
};

export default MainDevices;