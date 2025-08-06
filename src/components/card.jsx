import React from "react";
import "./card.css";

function Card({ product }) {
    return (
        <div className="products-card">
            <img src={require(`./product_image/${product.image}`)} alt={product.skin} />
            <hr className={`rarity-line ${product.rarity.toLowerCase()}`} />
            <h3>{product.gun} - {product.skin}</h3>
            <p>Float: {product.float}</p>
            <p>Wear Level: {product.wearLevel}</p>
            <p>Pattern: {product.pattern}</p>
            <p>Price: {product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default Card;
    