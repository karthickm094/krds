import React from 'react'
import './Card.css';
const Card = ({ card, backgroundColor  }) => {
  const { desc, image, logo, title } = card;
  return (
    <div className="col-12 col-lg-4 card" style={{ backgroundColor: backgroundColor }}>
      <div className='d-md-flex gap-5'>
        <div className='card-content'>
          <img className="card-img-logo" src={logo} alt="Card image cap"></img>
          <h5 className="card-title text-left font-sm">{title}</h5>
          <hr />
          <p className="card-text">{desc}</p>
        </div>
        <img className="card-img-top w-50 " src={image} alt="Card image cap" />
      </div>
    </div>
  );
};

export default Card;