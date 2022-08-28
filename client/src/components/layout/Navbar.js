import React from 'react';
import cls from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    
    return (
        <nav className={cls('bg-dark', styles.navbar)}>
            <h1>
                <Link
                    to="/"
                    style={{ textDecoration: 'none' }}
                >
                    Property Finder
                </Link>
            </h1>
            <ul>
                <li className='nav-item'>
                    <Link
                        to="#"
                        style={{ textDecoration: 'none' }}
                    >
                        Buy
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to="/add"
                        style={{ textDecoration: 'none' }}
                    >
                        Sell
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to="/feed"
                        style={{ textDecoration: 'none' }}
                    >
                        Newsfeed
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;