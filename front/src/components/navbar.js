import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./NavbarStyles.css";
import {MenuItems} from "./MenuItems";
import { useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();
    const [iconClassName, setIconClassName] = useState('fas fa-bars');
    const [menuClassName, setMenuClassName] = useState('nav-menu');

    const handleIconClick = () => {
        setIconClassName((prevClassName) => prevClassName === 'fas fa-bars' ? 'fas fa-times' : 'fas fa-bars');
        setMenuClassName((prevClassName) => prevClassName === 'nav-menu' ? 'nav-menu-active' : 'nav-menu');
    };

    const onSignUpClick = () => {
        navigate('/signup');
    }


    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">RxRemind</h1>

            <div className="menu-icons">
            <i className={iconClassName} onClick={handleIconClick}></i>
             </div>
            <ul className={menuClassName}>
                {MenuItems.map((item, index) => {
                    return (
                        <Link className={item.cName} key={index} to={item.url}>
                        <i class={item.icon}></i> {item.title}
                    </Link>
                    );
                })}
                <li>
                </li>
                <button onClick={onSignUpClick}>Sign Up</button>
            </ul>
        </nav>
    );
}

export default Navbar;