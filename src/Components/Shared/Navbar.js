import React, { useContext } from 'react';
import { userContext } from '../../App';
import './Navbar.css'
const Navbar = (props) => {
    const [user, setUser] = useContext(userContext);
    const handleHomeClick = () => {
        const newClick = {...user}
        newClick.userHome = true;
        newClick.user = false;
        newClick.devices = false;
        newClick.locations = false;
        setUser(newClick);
    }
    const handleUserClick = () => {
        const newClick = {...user}
        newClick.userHome = false;
        newClick.user = true;
        newClick.devices = false;
        newClick.locations = false;
        setUser(newClick);
    };
    const handleDeviceClick = () => {
        const newClick = {...user}
        newClick.userHome = false;
        newClick.user = false;
        newClick.devices = true;
        newClick.locations = false;
        setUser(newClick);
    }
    const handleLocationClick = () => {
        const newClick = {...user}
        newClick.userHome = false;
        newClick.user = false;
        newClick.devices = false;
        newClick.locations = true;
        setUser(newClick);
    }
    const handleCommandChanger = () => {
        const newClick = {...user}
        newClick.userHome = false;
        newClick.user = false;
        newClick.devices = false;
        newClick.locations = false;
        newClick.command = true;
        setUser(newClick);
    }

    return (
        <div className='navBackground pt-5'>
            <ul style={{listStyle:'none', margin:'0', padding:'0'}}>
                <li className='mb-3 navbar-item' onClick={handleHomeClick} style={{cursor:'pointer'}}><h5 className="navbar-text">User Home</h5></li>
                {user.admin && <li className='mb-3 navbar-item' onClick={handleUserClick} style={{cursor:'pointer'}}><h5 className="navbar-text">User</h5></li>}
                <li className='mb-3 navbar-item' onClick={handleDeviceClick} style={{cursor:'pointer'}}><h5 className="navbar-text">Devices</h5></li>
                <li className='mb-3 navbar-item' onClick={handleLocationClick} style={{cursor:'pointer'}}><h5 className="navbar-text">Locations</h5></li>
                <li className='mb-3 navbar-item' onClick={handleCommandChanger} style={{cursor:'pointer'}}><h5 className="navbar-text">Commands</h5></li>
            </ul>
        </div>
    );
};

export default Navbar;