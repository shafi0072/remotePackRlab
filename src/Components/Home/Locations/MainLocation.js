import React from 'react';
import logo from '../../../Resorces/logo_RLAB.png';
import './LocationStyle.css';
import Navbar from '../../Shared/Navbar';
import Location from './Locations';
import Navbar2 from '../../Shared/Navbar/Navbar'
const MainLocation = () => {
    return (
        <div className='row'>
        <Navbar2/>
            <div className="col-md-3 location-navbar">
                <Navbar/>
            </div>
            <div className="col-md-9 location-background">
            <div className="logo-img">
                <img src={logo} alt="" style={{width:'20%'}} className='mt-5' />
            </div>
                <Location/>
            </div>
        </div>
    );
};

export default MainLocation;