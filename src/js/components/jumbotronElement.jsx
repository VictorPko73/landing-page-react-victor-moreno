import React from "react"
import Jumbotron from "./jumbotron"
import { JumbotronData } from "../../data/data"

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
