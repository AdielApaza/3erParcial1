import React from "react";
import "./Tarjeta1.css";
import Boton1 from "./boton.jsx";
import Imagen from "../assets/7959d0801b173c66ceb0647dc37baea6.jfif"
function Tarjeta1() {

    return (
      <div className="DivisionGral">
        <img src={Imagen} className="Img1"/>
      <div className="mastertext1"><p>
      Remada curvada
      <br />
      3 séries x 12 repetições
      </p>
      </div>
      <Boton1/>
      </div>
    )
  }
  
  export default Tarjeta1;