import React from "react";
import "./Tarjeta2.css";
import Imagen2 from "../assets/3c39d123e3225f56f18849b34f0ab91d.png"
import Boton1 from "./boton";
function Tarjeta2() {

    return (
      <div className="Division1">
<img src={Imagen2} className="Img2"/>
<div className="mastertext"><p>
      Puxada frontal
      <br />
      3 séries x 12 repetições
      </p></div>
      <Boton1/>
      </div>
    )
  }
  
  export default Tarjeta2;