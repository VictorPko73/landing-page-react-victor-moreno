import React from "react";
import { cardData } from "../../data/data";
import Card from "./card";

const CardList = () => (
    <div className="container-fluid d-flex flex-wrap justify-content-center gap-4 ">
    
    {cardData.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        text={card.text}
        imageUrl={card.imageUrl}
        buttonText={card.buttonText}
        onButtonClick={() => alert(`Has hecho clic en ${card.title}`)}
      />
      
    ))}
  </div>
)

export default CardList;