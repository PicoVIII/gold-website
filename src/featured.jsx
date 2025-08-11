import React, { useEffect, useState } from "react";
import Card from "./components/card"; // Importing the card component
import Weapons from "./components/weapons";
import "./featured.css"; // Importing the CSS for the featured section

function FeaturedWeapons(){
    const [featuredweapons, setFeaturedweapons] =  useState([]);

    useEffect(() => {
        fetch('/weapons.json')
        .then((res) => res.json())
        .then((data) => {
            const featured = data.filter(weapon => weapon.featured);
            setFeaturedweapons(featured);
        })
        .catch((err) => console.error("Failed to fetch weapons:", err))
    }, []);

    return(
        <div className="featured-weapons">
            <h2>Featured Weapons</h2>
            <section className='skin-grid'>
                <div className='grid'>
                    {featuredweapons.map(weapons => (
                    <Weapons key={weapons.id} weapon={weapons} />
                    ))}
                </div>
            </section>
        </div>
    );
    
}

function FeaturedSkins() {
    const [featuredskins, setFeaturedskins] = useState([]);

    useEffect(() => {
        fetch('/skins.json')
        .then((res) => res.json())
        .then((data) => {
            const featured = data.filter(skin => skin.featured);
            setFeaturedskins(featured);
        })
        .catch((err) => console.error("Failed to fetch skins:", err));
    }, []);


    return (
        <div className="featured-skins">
            <h2>Featured skins</h2>
            <section className='skin-grid'>
                <div className='grid'>
                    {featuredskins.map(skins => (
                    <Card key={skins.id} skin={skins} />
                    ))}
                </div>
            </section>
        </div>
    );
}
export default FeaturedSkins;
export {FeaturedWeapons};