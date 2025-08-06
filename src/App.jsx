import React from 'react';
import Content from './content'; // Importing the body componentq
import Header from './header'; // ✅ Correct casing
import Featured from './featured'; // Importing the featured component
import Navigation from './navigation'; // Importing the navigation component
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />  {/* ✅ Using the component */}
      <Navigation />{ /* ✅ Using the navigation component */}
      <main>
        <Content /> {/* ✅ Using the component with correct casing */}
        < Featured/>
      </main>
    </div>
    
  );
}

export default App;
