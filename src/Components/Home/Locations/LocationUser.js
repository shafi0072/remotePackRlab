import React, { useEffect, useState } from 'react';
import DevicesForm from './DevicesForm';
import logo1 from '../../../Resorces/logo1.png';
import logo2 from '../../../Resorces/logo2.png';
import logo3 from '../../../Resorces/logo3.png';
import './LocationStyle.css';
import '../../../responsive.css';
import {Link} from 'react-router-dom'

const LocationUser = (props) => {
    
    const {LocationID, addDevices, key} = props.data
    return (
        <div className="card-main-container mb-5">
           <div className='row'>
           <Link to={`/locations/${key}`}><div className="col-md-4 mb-3">
            <div class="card card-container" >
                
                <div class="card-body">
                   <h6 className="card-text-h6">{addDevices}</h6>
                   <p className="card-text-p">{LocationID}</p>
                </div>
            </div>
            </div>
            </Link>
            
           </div>
            
        </div>
    );
};

export default LocationUser;