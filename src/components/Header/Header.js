import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <img height='65' width='80' src="/images/logo.png" alt="" />
            </div>
            <div>
                <nav>
                    <ul className='items'>
                        <NavLink className='item' to='/home'>Home</NavLink>
                        <NavLink className='item' to='/services'>Services</NavLink>
                        <NavLink className='item' to='/about'>About us</NavLink>
                    </ul>
                </nav>
            </div>

            <div>
                <NavLink className='login-item' to='/login'>Login <i class="fas fa-sign-in-alt"></i></NavLink>
            </div>
        </div>
    );
};

export default Header;