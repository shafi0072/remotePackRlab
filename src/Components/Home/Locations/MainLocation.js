import React from 'react';
import logo from '../../../Resorces/logo_RLAB.png';
import './LocationStyle.css';
import Navbar from '../../Shared/Navbar';
import Location from './Locations';
const MainLocation = () => {
    return (
        <div className='row'>
            <div className="col-md-3">
                <Navbar/>
            </div>
            <div className="col-md-9">
            <div className="logo-img">
                <img src={logo} alt="" style={{width:'20%'}} className='mt-5' />
            </div>
                <Location/>
            </div>
        </div>
    );
};

export default MainLocation;