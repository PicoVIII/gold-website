import React from "react";
import "./weapons.css"
import ak47 from "./weapon_image/ak-47default.webp";
import m4a4 from "./weapon_image/m4a4Default.webp";
import deagle from "./weapon_image/deagle.webp";

function getWeaponImage(name){
    switch(name){
        case "AK-47":
            return ak47;
        case "M4A4":
            return m4a4;
        case "Desert Eagle":
            return deagle;
        case "Karambit":
            return deagle;
        default:
            return null;
    }
} 

function Weapons({weapon}) {
    return(
        <div className="weapon">
            <img src={getWeaponImage(weapon.name)} alt={weapon.name} />
            <h3>{weapon.name}</h3>
        </div>
            
    )
}
export default Weapons;