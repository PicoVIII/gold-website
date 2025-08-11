import React, { useEffect, useState } from "react";
import Header from '../header';
import Navigation from '../navigation';
import Card from '../components/card';
import Footer from "../footer";
import './skins_page.css';
   
function Skins() {

    const [allSkins, setAllSkins] = useState([]);

  useEffect(() => {
    fetch('/skins.json')
      .then((res) => res.json())
      .then((data) => {
        setAllSkins(data); // no filter — show everything
      })
      .catch((err) => console.error("Failed to fetch skins:", err));
  }, []);

  return (
    <div className="skins-page">
      <div className='heading'>
        <Header />
        <Navigation />
      </div>

      <div className="all-skins">
        <h2>All Skins</h2>
        <section className="skin-grid">
          <div className="grid">
            {allSkins.map((skin) => (
              <Card key={skin.id} skin={skin} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Skins;