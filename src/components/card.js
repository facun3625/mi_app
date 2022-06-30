import React from "react";

function Card({ title, imagesource }) {
  return (
    <div className="card text-center bg-dark">
      <img src={imagesource} width="100%" alt=""></img>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor Lorem Ipsum.
        </p>
        <a href="#!" className="btn btn-outline-secondary rounded-0">
          Ir a mi sitio
        </a>
      </div>
    </div>
  );
}

export default Card;
