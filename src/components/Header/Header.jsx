import React from 'react';
import './Header.css'
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="menubar">
                        <ul>
                            <li><a href="">Order</a></li>
                            <li><a href="">Order Review</a></li>
                            <li><a href="">Manage Inventory</a></li>
                            <li><a href="">Login</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;