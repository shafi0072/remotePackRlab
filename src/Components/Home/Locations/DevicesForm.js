import React, { useState } from 'react';
import './Location.css';

import DevicesData from './DevicesData';


const DevicesForm = () => {
    

    
   

  
    return (
            <div>
               <div className="container device-form-container">
                
                
                  {/* <DevicesData />  */}
                  
                </div>

                <div className="button d-flex justify-content-end deviceFrom-location-button">
                    <button className="btn btn-primary">Edit Location</button>
                </div>    
          
          
            </div>
        
    );
};

export default DevicesForm;