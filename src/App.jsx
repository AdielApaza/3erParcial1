import { useState } from 'react'
import './App.css'
import Tarjeta1 from './Componentes/Tarjeta1';
import Tarjeta2 from './Componentes/Tarjeta2';
import Tarjeta3 from './Componentes/Tarjeta3';
import Tarjeta4 from './Componentes/Tarjeta4';
import Titulo from './Componentes/Titulo';
function App() {

  return (
    <>
    <Titulo/>
      <Tarjeta1/>
      <Tarjeta2/>
      <Tarjeta3/>
      <Tarjeta4/>

    </>
  )
}

export default App;
