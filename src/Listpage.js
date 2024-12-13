import React from "react";
import { Link } from "react-router-dom";
import './Style.css'; // Import CSS

const destinations = [
  { id: 1, name: "Pantai Indah", description: "Pantai dengan pasir putih yang memukau." },
  { id: 2, name: "Gunung Sejuk", description: "Tempat yang cocok untuk pendakian." },
  { id: 3, name: "Danau Biru", description: "Danau dengan air biru yang jernih." },
];

function List() {
  return (
    <div className="container">
      <h1>Explore Destinations</h1>
      {destinations.map((dest) => (
        <div key={dest.id} className="card">
          <h2>{dest.name}</h2>
          <p>{dest.description}</p>
          <Link to={`/detail/${dest.id}`} className="link">View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default List;
