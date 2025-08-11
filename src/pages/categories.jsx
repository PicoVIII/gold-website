import React, { useEffect, useState } from 'react';
import Header from '../header';
import Navigation from '../navigation';
import Footer from '../footer';
import Weapons from '../components/weapons';
import './categories.css'

function Categories() {
  return (
    <div className='Categories'>
      <div className='Heading'>
        <Header />
        <Navigation />
      </div>
      <WeaponsList />
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

function WeaponsList() {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
      fetch('/weapons.json')
          .then((res) => res.json())
          .then((data) => {
              setWeapons(data);
          })
          .catch((err) => console.error("Failed to fetch weapons:", err));
  }, []);

  // Group weapons by type
  const groupedWeapons = weapons.reduce((groups, weapon) => {
      const type = weapon.weaponType;
      if (!groups[type]) {
          groups[type] = [];
      }
      groups[type].push(weapon);
      return groups;
  }, {});

  return (
      <div className="weapons-list">
          {Object.entries(groupedWeapons).map(([type, weaponsOfType]) => (
              <div key={type}>
                  <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
                  <section className='skin-grid'>
                      <div className='grid'>
                          {weaponsOfType.map(weapon => (
                              <Weapons key={weapon.id} weapon={weapon} />
                          ))}
                      </div>
                  </section>
              </div>
          ))}
      </div>
  );
}


export default Categories;
