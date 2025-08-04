import React from "react";
import Card from "./card";


const cardData = [
    {
        imgUrl: "1",
        tittle: "1",
        text: "Text1",
        buttonText: "OK"
},   {
        imgUrl: "2",
        tittle: "2",
        text: "Text2",
        buttonText: "OKi"
},   {
        imgUrl: "3",
        tittle: "3",
        text: "Text3",
        buttonText: "Oki2"
},   {
        imgUrl: "4",
        tittle: "4",
        text: "Text4",
        buttonText: "oki3"
}

]

const CardList = () => (
    <div className="d-flex flex-wrap justify-content-center gap-3">
    
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