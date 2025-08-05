import React from "react";


const Card = ({ title, text, imageUrl, buttonText, onButtonClick }) => (
  <div className="card" style={{ width: "18rem" }}>
    <img src={imageUrl} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      {buttonText && (
        <button className="btn btn-primary" onClick={onButtonClick}>
          {buttonText}
        </button>
      )}  
    </div>
  </div>
);

const cardData = [
    {
        imageUrl: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
        title: "CARD 1",
        text: "Descripción de la card 1",
        buttonText: "Pulsa Aquí!"
},   {
        imageUrl: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
        title: "CARD 2",
        text: "Descripción de la card 2",
        buttonText: "Pulsa Aquí!"
},   {
        imageUrl: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
        title: "CARD 3",
        text: "Descripción de la card 3",
        buttonText: "Pulsa Aquí!"
},   {
        imageUrl: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
        title: "CARD 4",
        text: "Descripción de la card 4",
        buttonText: "Pulsa Aquí!"
}

]

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

