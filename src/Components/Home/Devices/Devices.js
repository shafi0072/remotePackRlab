import React from 'react';

const Devices = () => {
    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <form action="">
                <div className="d-flex justiy-content-around mb-3">
                    <label className="text-light" htmlFor="modelOfDevice" style={{marginRight:'60px'}}>Device Model</label>
                    <input type="text" id='modeOfDevice' placeholder='Meter_ABC'/>
                </div>
                <div className="d-flex justiy-content-around mb-3">
                    <label className="text-light" htmlFor="serialNumber" style={{marginRight:'56px'}}>Serial Number</label>
                    <input type="text" id='serialNumber' placeholder='ABC012319'/>
                </div>
                <div className="d-flex justiy-content-around mb-3">
                    <label className="text-light" htmlFor="commissioningDate" style={{marginRight:'10px'}}>Commissioning Date</label>
                    <input type="text" id='commissioningDate' placeholder='1699992929202'/>
                </div>
                <div className="d-flex justiy-content-around mb-3">
                    <label className="text-light" htmlFor="Var01" style={{marginRight:'27px'}}>Level_Alarm_var01</label>
                    <input type="text" id='Var01' placeholder='30.5'/>
                </div>
                <div className="d-flex justiy-content-around mb-3">
                    <label className="text-light" htmlFor="Var02" style={{marginRight:'27px'}}>Level_Alarm_var02</label>
                    <input type="text" id='Var02' placeholder='30.5'/>
                </div>
                <button className="btn btn-primary" style={{marginLeft:'65%'}}>Create/Save</button>
            </form>
        </div>
    );
};

export default Devices;