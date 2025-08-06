import React from "react";
import "./card.css";

function getWearLevel(float) {
    if (float <= 0.07) return "FN";
    if (float <= 0.15) return "MW";
    if (float <= 0.38) return "FT";
    if (float <= 0.45) return "WW";
    if (float <= 0.70) return "BS";
    return "Unknown";
}
function getStattrak(stattrak){
    return stattrak ? "ST" : " ";
}
function Card({ product }) {
    return (
        <div className="products-card">
            <img src={require(`./product_image/${product.image}`)} alt={product.skin} />
            <div className="float-line">
                <p>{getWearLevel(product.float)} / {product.float.toFixed(8)}</p>
                <p>{getStattrak(product.stattrak)}</p>
            </div>
            <hr className={`rarity-line ${product.rarity.toLowerCase()}`} />
            <h3>{product.gun} - {product.skin}</h3>
            <p>Pattern: {product.pattern}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default Card;
    