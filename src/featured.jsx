import React, { useEffect, useState } from "react";
import Card from "./components/card"; // Importing the card component
import "./featured.css"; // Importing the CSS for the featured section

function Featured() {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        fetch('/products.json')
        .then((res) => res.json())
        .then((data) => {
            const featured = data.filter(product => product.featured);
            setFeaturedProducts(featured);
        })
        .catch((err) => console.error("Failed to fetch products:", err));
    }, []);


    return (
        <div className="featured-products">
            <h2>Featured Products</h2>
            <section className='product-grid'>
                <div className='grid'>
                    {featuredProducts.map(products => (
                    <Card key={products.id} product={products} />
                    ))}
                </div>
            </section>
        </div>
    );
}
export default Featured;