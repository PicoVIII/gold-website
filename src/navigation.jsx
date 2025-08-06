import React from "react";
import "./navigation.css"; // Importing the CSS for the navigation

function Navigation() {
    return (
        <div className='nav-container'>
            <nav>
                <ul className='nav-links'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/categories">Categories</a></li>
                    <li><a href="/discounts">Discounts</a></li>
                    <li><a href="/sell">Sell</a></li>
                </ul>
            </nav>
        </div>
    );
}
export default Navigation;