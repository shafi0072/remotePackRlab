import React, { useState } from 'react';
import './Location.css';
import DeveiceMeter from './DeveiceMeter';
import DevicesData from './DevicesData'
const DevicesForm = (props) => {
    
   
    const [sl, setSl] = useState({
       notClick: true,
       click: false 
    });
    const handleSelect = () => {
        const newSl = {...sl};
        newSl.notClick = false;
        newSl.click = true;
        setSl(newSl);
    }
    const data = props.data
    return (
            <div>
                {sl.notClick && <div className="container">
                {
                    data.map(data => <DevicesData data={data} handleSelect={handleSelect}/>)
                }
                <div className="button d-flex justify-content-end">
                    <button className="btn btn-primary">Edit Location</button>
                </div>    
           </div>}
           {
               sl.click && <DeveiceMeter/>
           }
            </div>
        
    );
};

export default DevicesForm;