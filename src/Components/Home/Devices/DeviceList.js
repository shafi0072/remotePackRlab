import React from 'react';

const DeviceList = (props) => {
    const {model, SerialNumber, alarm1} = props.data
    return (
        <div>
           <h1>{model}</h1> 
        </div>
    );
};

export default DeviceList;