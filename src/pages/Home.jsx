import React from 'react';
import Content from '../content'; // Importing the body componentq
import Header from '../header'; // ✅ Correct casing
import FeaturedSkins, {FeaturedWeapons} from '../featured'; // Importing the featured component
import Navigation from '../navigation'; // Importing the navigation component
import Footer from '../footer';
import './home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <Navigation />
      <main>
        <Content />
        <FeaturedWeapons/>
        <FeaturedSkins/>
      </main>
      <Footer />
    </div>
    
  );
}

export default Home;
