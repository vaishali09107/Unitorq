import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="site-main-menu">
            <ul>
                <li >
                    <NavLink to={process.env.PUBLIC_URL + "/"}><span className="menu-text">Home</span></NavLink>
                    
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}><span className="menu-text">About</span></NavLink>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/work"}><span className="menu-text">Productus</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/work"}><span className="menu-text">Work</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/work-details/1`}><span className="menu-text">Work Details</span></NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/service"}><span className="menu-text">Application</span></NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/service"}><span className="menu-text">Certification</span></NavLink>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/work"}><span className="menu-text">Technical</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/work"}><span className="menu-text">Work</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/work-details/1`}><span className="menu-text">Work Details</span></NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/service"}><span className="menu-text">Enquiry</span></NavLink>
                </li>
               
               
            </ul>
        </nav>
    )
}

export default NavBar
