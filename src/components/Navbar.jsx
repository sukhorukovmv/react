import React from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return <nav className='navigation-menu'>
        <div>
            <NavLink to="/profile">Profile</NavLink>
        </div>
        <div>
            <NavLink to="/dialogs">Dialogs</NavLink>
        </div>
        <div>
            <a>News</a>
        </div>
        <div>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;