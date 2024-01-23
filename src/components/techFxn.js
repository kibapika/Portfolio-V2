import React from "react";

export default function TechFxn({ png, title }) {
  return (
    <div className="carousel-card">
      <img src={png} alt={title} key={title}></img>
    </div>
  );
};