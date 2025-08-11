import React from 'react';
import openingsale from './assets/openingsale.png'; // Importing the promotional image
import './content.css'; // Importing the CSS for the content
import { Link } from 'react-router-dom';
const promo = {
    title: "Opening Sale",
    description: "Up to 40% off on your first purchase!",
    image: openingsale
};
function Content() {
    return (
        <section className='hero-section' style={{ backgroundImage: `url(${promo.image})` }}>
            <div className='hero-content'>
                <div className='hero-text'>
                    <h1>{promo.title}</h1>
                    <p>{promo.description}</p>
                </div>
                <Link to='/products'>
                    <button className='shop-button'>Shop Now</button>
                </Link>
            </div>
        </section>
    );
}
export default Content;