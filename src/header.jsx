import React from 'react';
import gold from './assets/gold.png';
import portrait from './assets/portrait.svg';
import cart from './assets/cart.svg';
import search from './assets/search.svg';
import './header.css'; // Importing the CSS for the header
function Header() {
  return (
    <header className='App-header'>
        <div className='name-logo'>
        <img src={gold} alt="Gold Icon from Counter Strike" />
        <h1>Gold</h1>
        </div>
        <div className='search-div'>
          <form action=''>
            <input className='search-bar' type='text' placeholder='Search for Products.' />
            <button className='search-button' type='submit'><img src={search} alt='Search Button' /></button>
          </form>

        </div>
        <div className='profile-container'>
          <button className='cart-button'>
            <img src={cart} alt='Cart Placeholder'></img>
          </button>
          <button className='profile-button'>
            <img src={portrait} alt='Portrait Placeholder'></img>
          </button>
        </div>
    </header>
  );
}
export default Header;