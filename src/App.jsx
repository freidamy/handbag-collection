import React from 'react';
import './App.css';
import Handbag from './Handbag';

function App() {
  const handbags = [
    {
      name: "Chanel Classic Flap",
      designer: "Chanel",
      year: 1955,
      material: "Lambskin",
      price: 8800,
      description: "The Chanel Classic Flap bag is an iconic accessory that was redesigned by Karl Lagerfeld in the 1980s. It features the signature quilted design and interlocking CC logo."
    },
    {
      name: "Lady Dior",
      designer: "Dior",
      year: 1995,
      material: "Calfskin",
      price: 5900,
      description: "The Lady Dior bag was named after Princess Diana, who was frequently seen carrying it. It features the iconic Cannage stitching and DIOR charms."
    },
    {
      name: "Birkin",
      designer: "Hermès",
      year: 1984,
      material: "Togo Leather",
      price: 15000,
      description: "The Hermès Birkin bag is named after actress Jane Birkin. Each bag is handmade by a single artisan and takes approximately 18 to 24 hours to complete."
    },
    {
      name: "Neverfull",
      designer: "Louis Vuitton",
      year: 2007,
      material: "Canvas",
      price: 1850,
      description: "The Louis Vuitton Neverfull is a popular tote bag known for its versatility and spaciousness. It features the iconic LV monogram pattern."
    },
    {
      name: "Baguette",
      designer: "Fendi",
      year: 1997,
      material: "Leather",
      price: 3790,
      description: "The Fendi Baguette gained fame through the TV show 'Sex and the City' and is designed to be carried under the arm like a French baguette."
    },
    {
      name: "Dionysus",
      designer: "Gucci",
      year: 2015,
      material: "GG Supreme Canvas",
      price: 2650,
      description: "The Gucci Dionysus features a distinctive tiger head closure and combines vintage and contemporary elements in its design."
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Luxury Designer Handbag Collection</h1>
      </header>
      <main>
        <div className="collection-container">
          <div className="legend">
            <p><span className="luxury-indicator">💎</span> Luxury Tier (over $10,000)</p>
            <p><span className="heritage-indicator">|</span> Heritage Brand (before 1990)</p>
          </div>
          
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Designer</th>
                <th>Year</th>
                <th>Material</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {handbags.map((handbag, index) => (
                <Handbag key={index} handbag={handbag} />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;