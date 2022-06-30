import React from "react";
import Card from "./card";

import image1 from "../assets/imagen.png";

const cards = [
  {
    id: 1,
    title: "facundo app",
    image: image1,
  },
  {
    id: 2,
    title: "facu 2",
    image: image1,
  },
  { id: 3, title: "facu3", image: image1 },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center h-100 align-items-center">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card title={card.title} imagesource={card.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
