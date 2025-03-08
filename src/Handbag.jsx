import React from 'react';
import './Handbag.css'; // We'll create this CSS file next

function Handbag(props) {
  const { name, designer, year, material, price, description } = props.handbag;
  
  // Determine if this is a luxury-tier handbag (price over 10000)
  const isLuxuryTier = price > 10000;
  
  // Determine if this is from a heritage brand (before 1990)
  const isHeritage = year < 1990;
  
  return (
    <tr className={`handbag-row ${isLuxuryTier ? 'luxury-tier' : ''} ${isHeritage ? 'heritage-brand' : ''}`}>
      <td>{name}</td>
      <td>{designer}</td>
      <td>{year}</td>
      <td>{material}</td>
      <td className="price-cell">${price.toLocaleString()}</td>
      <td className="description-cell">{description}</td>
    </tr>
  );
}

export default Handbag;