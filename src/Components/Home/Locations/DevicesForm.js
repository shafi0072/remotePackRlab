import React, { useState } from 'react';
import './Location.css';

import DevicesData from './DevicesData';


const DevicesForm = (props) => {
    const data = props.data;

    
   

  
    return (
            <div>
               <div className="container">
                
                {
                    data.map(item =>  { return <DevicesData data={item}/> })
                  }
                </div>

                <div className="button d-flex justify-content-end deviceFrom-location-button">
                    <button className="btn btn-primary">Edit Location</button>
                </div>    
          
          
            </div>
        
    );
};

export default DevicesForm;