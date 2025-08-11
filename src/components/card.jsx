import React from "react";
import "./card.css";
import akscar from "./skin_image/akscar.png";
import m4howl from "./skin_image/m4howl.png";
import deagleblaze from "./skin_image/deagleblaze.png";

function getWearLevel(float) {
    if (float <= 0.07) return "FN";
    if (float <= 0.15) return "MW";
    if (float <= 0.38) return "FT";
    if (float <= 0.45) return "WW";
    if (float <= 0.70) return "BS";
    return "Unknown";
}
function getSkinImage(gun) {
    switch (gun) {
        case "AK-47":
            case "Case Hardened":
                return akscar;
        case "M4A4":
            case "Howl":
                return m4howl;
        case "Desert Eagle":
            case "Blaze":
                return deagleblaze;
        default:
            return null; // or a default image
    }
}
function getStattrak(stattrak){
    return stattrak ? "ST" : " ";
}
function Card({ skin }) {
    return (
        <div className="skin-card">
            <img src={getSkinImage(skin.gun)} alt={skin.skin} />
            <div className="float-line">
                <p>{getWearLevel(skin.float)} / {typeof skin.float === "number" ? skin.float.toFixed(8) : "N/A"}</p>
                <p>{getStattrak(skin.stattrak)}</p>
            </div>
            <hr className={`rarity-line ${skin.rarity.toLowerCase()}`} />
            <h3>{skin.gun} - {skin.skin}</h3>
            <p>Pattern: {skin.pattern}</p>
            <p>Price: ${skin.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default Card;
    