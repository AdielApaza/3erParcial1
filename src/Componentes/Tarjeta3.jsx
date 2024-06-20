import React from "react";
import "./Tarjeta3.css";
import Imagen3 from "../assets/d327514dacbe35cea3e74a3a3443b167.png"
import Boton1 from "./boton";
function Tarjeta3() {

    return (
      <div className="Division2">
<img src={Imagen3} className="Img3"/>
<div className="mastertext2"><p>
Remada unilateral
      <br />
      3 séries x 12 repetições
      </p>
      </div>
      <Boton1/>
      </div>
    )
  }
  
  export default Tarjeta3;