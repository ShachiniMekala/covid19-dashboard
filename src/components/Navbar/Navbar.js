import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import corona from './Coronavirus_Covid-19.png';

const Navbar=()=>{
    const [click,setClick]=useState(false);

    const handleClick =()=> setClick(!click);

    return(
        <nav className="navbar">
        <div className="nav-container">
        <h2 className="nav-logo">
        <img src={corona} className="image" alt=""/>
        COVID 19 Updates
        </h2>

        <ul className={ click? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                <NavLink exact to="/" activeClassName="active" className ="nav-links" onClick={handleClick}>
                Local
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink exact to="/global" activeClassName="active" className ="nav-links"  onClick={handleClick}>
                Global
                </NavLink>
            </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
            <i className={ click ? "fas fa-times" : "fas fa-bars"} >

            </i>
        </div>
        </div>
            
        </nav>
    );

}

export default Navbar;