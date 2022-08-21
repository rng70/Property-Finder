import React from 'react';
import cls from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    
    return (
        <nav className={cls('bg-dark', styles.navbar)}>
            <h1>
                <Link to="/">Property Finder</Link>
            </h1>
            <ul>
                <li className='nav-item'>
                    <Link  to="#">Buy</Link>
                </li>
                <li className='nav-item'>
                    <Link  to="/add">Sell</Link>
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