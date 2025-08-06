import React from 'react';
/*import wallpaper from './assets/cswallpaper.svg'; */
import './content.css'; // Importing the CSS for the content
const promo = {
    title: "Opening Sale",
    description: "Up to 40% off on your first purchase!",
}
function Content() {
    return (
        <section className='hero-section'>
            <div className='hero-content'>
                <div className='hero-text'>
                    <h1>{promo.title}</h1>
                    <p>{promo.description}</p>
                </div>
                <a  href='/products'>
                    <button className='shop-button' href='/products'>Shop Now</button>
                </a>
            </div>
        </section>
    );
}
export default Content;