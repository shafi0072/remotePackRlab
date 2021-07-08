import React, { useContext } from 'react';
import { userContext } from '../../App';
import './Navbar.css';
import {Link} from 'react-router-dom'
const Navbar = (props) => {
    const [user, setUser] = useContext(userContext);
    const handleHomeClick = () => {
        const newClick = {...user}
        newClick.userHome = true;
        newClick.user = false;
        newClick.devices = false;
        newClick.locations = false;
        newClick.command = false;
        setUser(newClick);
    }
    const handleUserClick = () => {
        const newClick = {...user}
        newClick.userHome = false;
        newClick.user = true;
        newClick.devices = false;
        newClick.locations = false;
        newClick.command = false;
        setUser(newClick);
    };
    const handleDeviceClick = () => {
        const newClick = {...user}
        newClick.userHome = false;
        newClick.user = false;
        newClick.devices = true;
        newClick.locations = false;
        newClick.command = false;
        setUser(newClick);
    }
    const handleLocationClick = () => {
        const newClick = {...user}
        newClick.userHome = false;
        newClick.user = false;
        newClick.devices = false;
        newClick.locations = true;
        newClick.command = false;
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
                <Link to='/userHome'><li className='mb-3 navbar-item' onClick={handleHomeClick} style={{cursor:'pointer'}}><h5 className="navbar-text">User Home</h5></li></Link>
                {user.admin && <li className='mb-3 navbar-item' onClick={handleUserClick} style={{cursor:'pointer'}}><h5 className="navbar-text">User</h5></li>}
                <Link to="/devices"><li className='mb-3 navbar-item' style={{cursor:'pointer'}}><h5 className="navbar-text">Devices</h5></li></Link>
                <Link to='/location'><li className='mb-3 navbar-item' style={{cursor:'pointer'}}><h5 className="navbar-text">Locations</h5></li></Link>
                <Link to="/command"><li className='mb-3 navbar-item' onClick={handleCommandChanger} style={{cursor:'pointer'}}><h5 className="navbar-text">Commands</h5></li></Link>
            </ul>
        </div>
    );
};

export default Navbar;