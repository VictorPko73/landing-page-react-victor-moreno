import React from "react";

const Jumbotron = ({ title, text, buttonText, onButtonClick }) => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{title}</h1>
        <p className="col-md-8 fs-4">{text}</p>
        {buttonText && (
          <button className="btn btn-primary btn-lg" type="button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

const JumbotronData = [{
  title: "Este es el título de mi JumboTrom",
  text: "Aqui se insertaria la descripción de mi jumbotron creado como un componente de react y totalmente reutilizable",
  buttonText: "Haz Click Aquí!!"
}]

const JumbotronElement = () => (
  <div>
    {JumbotronData.map((jumbotron, index) => (
      <Jumbotron
        key = {index}
        title={jumbotron.title}
        text={jumbotron.text}
        buttonText={jumbotron.buttonText}
      />
    ))

    }
  </div>
)

export default JumbotronElement;
