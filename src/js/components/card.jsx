import React from "react";


const Card = ({ title, text, imageUrl, buttonText, onButtonClick }) => (
  <div className="card" style={{ width: "18rem" }}>
    <img src={imageUrl} className="card-img-top" alt={title} />
    <div className="card-body">
      <div className="d-flex justify-content-center">
      <h5 className="card-title">{title}</h5>
      </div>
      <p className="card-text">{text}</p>
      {buttonText && (
        <button className="btn btn-primary" onClick={onButtonClick}>
          {buttonText}
        </button>
      )}  
    </div>
  </div>
);





export default Card;

