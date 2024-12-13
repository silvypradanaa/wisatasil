import React from "react";
import { useParams, Link } from "react-router-dom";
import './Style.css'; // Import CSS

const destinationDetails = {
  1: { name: "Pantai Indah", description: "Pantai dengan pasir putih yang memukau dan ombak tenang." },
  2: { name: "Gunung Sejuk", description: "Gunung yang cocok untuk mendaki sambil menikmati udara segar." },
  3: { name: "Danau Biru", description: "Danau dengan air biru yang sangat jernih, cocok untuk berenang." },
};

function Detail() {
  const { id } = useParams();
  const destination = destinationDetails[id];

  return (
    <div className="container">
      <h1>{destination.name}</h1>
      <p>{destination.description}</p>
      <Link to="/list" className="link">Back to List</Link>
    </div>
  );
}

export default Detail;
