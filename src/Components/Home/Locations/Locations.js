import React, { useContext } from 'react';
import { userContext } from '../../../App';
import LocationUser from './LocationUser';

import './Location.css';


import './Location.css';




const Locations = () => {
    const [user, setUser] = useContext(userContext)
    return (
        <div className="container">
           {user.admin && <div className="row d-flex justify-content-center align-items-center mt-5">
           <form action="">
                <div className="title-name mb-3" style={{marginLeft:'2.4%'}}>
                    <label className="text-light" htmlFor="locationId" style={{marginRight:'60px'}}>Location ID</label>
                    <input type="text" id='locationId' placeholder='PlantaLiners'/>
                </div>
                <div className="title-name mb-3" style={{marginLeft:'2.4%'}}>
                    <label className="text-light" htmlFor="DeviceName" style={{marginRight:'56px'}}>Add Device</label>
                    <input type="text" id='DeviceName' placeholder='ABC012319'/>
                </div>
                
                <button className="btn btn-primary mb-3" style={{marginLeft:'61.6%'}}>Add New Device</button>
                <div className="title-name mb-3">
                    <label className="text-light file-text" htmlFor="image">Image</label>
                    <label className="upload" htmlFor="">UPLOAD</label>
                    <input type="file" id='image' className="input-file" placeholder='30.5'/>
                </div>
                <button className="btn btn-primary" style={{marginLeft:'65%'}}>Create/Save</button>
            </form>
           </div>}
            <div className="row mt-5 ms-5">
            {user.viewer &&<LocationUser/>}
            </div>
        </div>
    );
};

export default Locations;