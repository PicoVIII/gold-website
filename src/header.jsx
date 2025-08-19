import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import gold from './assets/gold.png';
import portrait from './assets/portrait.svg';
import cart from './assets/cart.svg';
import search from './assets/search.svg';
import './header.css';

function Header() {
  const isLoggedIn = false;

  // Inner component for the profile button
  const ProfileButton = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    //close dropdown when click outside
    useEffect(() =>{
      const handleClickOutside = (event) => {
        if(
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ){
          setOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return() => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    return (
      <div ref={dropdownRef} style={{ position: 'relative' }}>
        <button className='profile-button' onClick={() => setOpen(!open)}>
          <img src={portrait} alt='profile' />
        </button>

        {open && (
          <ul className='dropdown'>
            {isLoggedIn ? (
              <>
                <Link to="/profile"><li>Profile</li></Link>
                <li>Logout</li>
              </>
            ) : (
              <>
                <Link to="/login"><li>Login</li></Link>   
                <Link to="/register"><li>Register</li></Link>
              </>
            )}
          </ul>
        )}
      </div>
    );
  };

  return (
    <header className='App-header'>
      <div className='name-logo'>
        <img src={gold} alt="Gold Icon from Counter Strike" />
        <h1>Gold</h1>
      </div>

      <div className='search-div'>
        <form action=''>
          <input className='search-bar' type='text' placeholder='Search for Products.' />
          <button className='search-button' type='submit'>
            <img src={search} alt='Search Button' />
          </button>
        </form>
      </div>

      <div className='profile-container'>
        <button className='cart-button'>
          <img src={cart} alt='Cart Placeholder' />
        </button>

        {/* Call the inner ProfileButton component */}
        <ProfileButton />
      </div>
    </header>
  );
}

export default Header;
