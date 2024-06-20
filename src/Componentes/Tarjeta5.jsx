import React from "react";
import "./Tarjeta4.css";
import Imagen4 from "../assets/da00190bbe2430b25592dba9702b7bd1.png"
import Boton1 from "./boton";
function Tarjeta5() {

    return (
      <div className="Division3">
        <img src={Imagen4} className="Img3"/>
        <div className="mastertext5"><p>
      Puxada frontal
      <br />
      3 séries x 12 repetições
      </p></div>
      <Boton1/>
      </div>
    )
  }
  
  export default Tarjeta5;