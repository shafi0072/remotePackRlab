import React from 'react';
import Navbar from '../../Shared/Navbar';
import DeviceForm from './DevicesForm';
const LocationDevice = () => {
    return (
        <div className='row'>
            <div className="col-md-3">
                <Navbar/>
            </div>
            <div className="col-md-9">
                <DeviceForm/>
            </div>
        </div>
    );
};

export default LocationDevice;