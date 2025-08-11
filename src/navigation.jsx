import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css"; // Importing the CSS for the navigation

function Navigation() {
    return (
        <div className='nav-container'>
            <nav>
                <ul className='nav-links'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/skins">All Skins</Link></li>
                    <li><Link to="/categories">Categories</Link></li>
                    <li><Link to="/sell">Sell</Link></li>
                </ul>
            </nav>
        </div>
    );
}
export default Navigation;