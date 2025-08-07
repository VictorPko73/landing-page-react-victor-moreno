import React from "react";
import Footer from "./footer";
import { FooterData } from "../../data/data";

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