import React from "react";
import { Link } from "react-router-dom";

const CountryCard = () => {
  return (
    <div>
      <h3>Ethiopia</h3>
      <p>My home land to make.</p>
      <div>East Africa.</div>
      <Link to={`/countriesList/:id`}>See More</Link>
    </div>
  );
};

export default CountryCard;
