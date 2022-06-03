import React from 'react';
import './navbar.css';
import Logo from './eldaas_logo.png'

const Navbar = () => {
    return(<>
    <div className='navbar-container'>
        <img className='navbar-logo' src={Logo} alt="eldaas_logo"/>
        <ul>
            {/* <li>Home</li>
            <li>Our Offerings</li>
            <li>About Us</li>
            <li>Join Us</li>
            <li>Support</li>
            <li>Events and News</li>
            <li>Blogs and Articles</li>
            <li>Contact Us</li> */}

            <li className='search' >&#x1F50E;&#xFE0E;</li>
            <li>Contact Us</li>
            <li>Blogs and Articles</li>
            <li>Events and News</li>
            <li>Support</li>
            <li>Join Us</li>
            <li>About Us</li>
            <li>Our Offerings</li>
            <li className='orange'>Home</li>
            
        </ul>
    </div>
    </>)
} 
export default Navbar;