import React from "react";
import '../css/navbar.css'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll';
import "bootstrap-icons/font/bootstrap-icons.css"
function Navbar(){
    return(
            <nav className="navbar">
                <img alt="Logo" src={logo} className="logo"/>
                <div className="navbar-menu">
                    <Link className="menu-item">Home</Link>
                    <Link className="menu-item">About</Link>
                    <Link className="menu-item">Skills</Link>
                    <Link className="menu-item">Experience</Link>
                </div>
                <button className="contact-button">
                    <i className="bi bi-chat-left-quote"> Contact Me</i>
                </button>
            </nav>
    )
}
export default Navbar