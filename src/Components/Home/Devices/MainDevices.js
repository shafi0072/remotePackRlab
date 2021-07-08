
import React from 'react';
import Navbar from '../../Shared/Navbar';
import Devices from './Devices'
const MainDevices = () => {
    return (
        <div className='row'>
            <div className="col-md-3">
                <Navbar/>
            </div>
            <div className="col-md-9">
                <Devices/>
            </div>
        </div>
    );
};

export default MainDevices;