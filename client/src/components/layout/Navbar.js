import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/">Property Finder</Link>
            </h1>
            <ul>
                <li className='nav-item'>
                    <Link  to="#">Buy</Link>
                </li>
                <li className='nav-item'>
                    <Link  to="/posts">Sell</Link>
                </li>
                <li className='nav-item'>
                    <Link  to="/register">Register </Link>
                </li>
                <li >
                    <Link  to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;