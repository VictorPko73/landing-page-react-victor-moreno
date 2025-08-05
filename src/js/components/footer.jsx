import React from "react";


const Footer = ({text}) => {
    return (
    <footer className="navbar bg-dark mt-5">
    <div className="container-fluid justify-content-center">
        <p className="navbar-brand mb-0 text-white">{text || "Text"}</p>
    </div>
    </footer>
)};


const FooterData = [{
    text: "Copiriht © Your Website 2025",
}]


const FooterElement = () => (
    <div>
    
    {FooterData.map((footer, index) => (
      <Footer
        key={index}
        text={footer.text}
        
      />
      
    ))}
  </div>
)

export default FooterElement;